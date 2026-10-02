import { SignJWT, jwtVerify } from "jose";

const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error("Please add JWT_SECRET to .env.local");
}

const secretKey = new TextEncoder().encode(secret);

export async function createAuthToken(userId: string) {
  return await new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secretKey);
}

export async function verifyAuthToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secretKey);

    return {
      userId: payload.userId as string,
    };
  } catch {
    return null;
  }
}