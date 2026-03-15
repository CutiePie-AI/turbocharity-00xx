import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "TurboCharity — Start a Nonprofit Fast",
  description:
    "TurboCharity is an AI-powered platform that takes you from idea to 501(c)(3) in days, not months. Generate formation docs, file with the IRS, and launch your nonprofit — all in one place.",
  keywords: [
    "nonprofit",
    "501c3",
    "start a nonprofit",
    "charity",
    "AI",
    "nonprofit formation",
  ],
  openGraph: {
    title: "TurboCharity — Start a Nonprofit Fast",
    description:
      "From idea to 501(c)(3) in days, not months. AI-powered nonprofit creation.",
    type: "website",
    url: "https://turbocharity.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "TurboCharity — Start a Nonprofit Fast",
    description:
      "From idea to 501(c)(3) in days, not months. AI-powered nonprofit creation.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
