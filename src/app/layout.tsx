import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TurboCharity — From Idea to 501(c)(3) in Days, Not Months",
  description:
    "AI-powered nonprofit creation platform that streamlines the entire 501(c)(3) process. Generate bylaws, articles of incorporation, and IRS Form 1023 in days instead of months.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
