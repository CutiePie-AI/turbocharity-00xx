import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TurboCharity \u2014 From Idea to 501(c)(3) in Days, Not Months",
  description:
    "AI-powered nonprofit creation platform. Incorporate, generate bylaws, and auto-fill IRS Form 1023-EZ without expensive lawyers.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://turbocharity.com"
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
