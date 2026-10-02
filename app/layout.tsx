import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
import AuthPopup from "@/components/AuthPopup";
import AIChatbot from "@/components/AIChatbot";
import CustomCursor from "@/components/CustomCursor";
import Protection from "@/components/Protection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tender Elite",
  description: "Your Trusted Tender Partner",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SplashScreen />
        <AuthPopup />
        <AIChatbot />
        <CustomCursor />
        <Protection />
        {children}
      </body>
    </html>
  );
}