import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TurboCharity",
  description: "From idea to 501(c)(3) in days, not months.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
