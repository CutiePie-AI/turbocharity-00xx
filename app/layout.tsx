import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://turbocharity.com"),
  title: "TurboCharity — From Idea to 501(c)(3) in Days, Not Months",
  description:
    "AI-powered nonprofit creation platform that streamlines the entire 501(c)(3) formation process. From articles of incorporation to IRS filing, launch your charity in days instead of months.",
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
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
