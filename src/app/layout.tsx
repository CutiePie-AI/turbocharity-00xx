import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "TurboCharity — Start a Nonprofit Fast",
  description:
    "TurboCharity uses AI to streamline every step of nonprofit creation — from filing paperwork to launching your mission. Go from idea to 501(c)(3) in days, not months.",
  openGraph: {
    title: "TurboCharity — Start a Nonprofit Fast",
    description:
      "AI-powered nonprofit formation. From idea to 501(c)(3) in days, not months.",
    siteName: "TurboCharity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TurboCharity — Start a Nonprofit Fast",
    description:
      "AI-powered nonprofit formation. From idea to 501(c)(3) in days, not months.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
