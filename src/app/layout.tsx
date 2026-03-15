import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://turbocharity.com"),
  title: "TurboCharity — From Idea to 501(c)(3) in Days, Not Months",
  description:
    "AI-powered nonprofit creation platform. Incorporate, generate bylaws, and auto-fill IRS Form 1023-EZ without expensive lawyers.",
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
