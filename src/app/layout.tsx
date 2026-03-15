import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://turbocharity.com"),
  title: "TurboCharity - From Idea to 501(c)(3) in Days, Not Months",
  description:
    "AI-powered nonprofit creation platform that streamlines the entire 501(c)(3) formation process. From articles of incorporation to IRS filing, launch your charity in days instead of months.",
  keywords: [
    "nonprofit",
    "501c3",
    "charity",
    "AI",
    "formation",
    "incorporation",
    "TurboCharity",
  ],
  authors: [{ name: "TurboCharity" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://turbocharity.com",
    siteName: "TurboCharity",
    title: "TurboCharity - From Idea to 501(c)(3) in Days, Not Months",
    description:
      "AI-powered nonprofit creation platform that streamlines the entire 501(c)(3) formation process.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TurboCharity - From Idea to 501(c)(3) in Days, Not Months",
    description:
      "AI-powered nonprofit creation platform that streamlines the entire 501(c)(3) formation process.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563EB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen`}>{children}</body>
    </html>
  );
}
