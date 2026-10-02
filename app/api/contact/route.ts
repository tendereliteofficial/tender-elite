import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const companyName = String(body.companyName || "").trim();
    const mobile = String(body.mobile || "").trim();
    const email = String(body.email || "").trim().toLowerCase();

    // Message optional (popup me message field nahi hai)
    const message =
      String(body.message || "").trim() || "Website popup enquiry";

    // Required fields
    if (!name || !mobile || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, mobile number and email are required.",
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("tenderlite");

    const enquiry = {
      name,
      companyName,
      mobile,
      email,
      message,
      createdAt: new Date(),
      status: "new",
    };

    const result = await db.collection("enquiries").insertOne(enquiry);

    // ===== Google Sheet me bhejo (fail ho to bhi form success rahe) =====
    try {
      const res = await fetch(process.env.GOOGLE_SCRIPT_URL!, {
        method: "POST",
        body: JSON.stringify({
          secret: process.env.GOOGLE_SCRIPT_SECRET,
          name,
          companyName,
          mobile,
          email,
          message,
        }),
      });
      console.log("Sheet response:", await res.text());
    } catch (sheetErr) {
      console.error("Sheet error:", sheetErr);
    }
    // ====================================================================

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been submitted successfully.",
        insertedId: result.insertedId.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}