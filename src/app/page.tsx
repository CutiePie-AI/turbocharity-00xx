import type { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "TurboCharity — From Idea to 501(c)(3) in Days, Not Months",
  description:
    "TurboCharity uses AI to generate your bylaws, articles of incorporation, and IRS Form 1023-EZ so you can launch a legally compliant nonprofit without expensive lawyers or months of paperwork.",
  openGraph: {
    title: "TurboCharity — AI-Powered Nonprofit Creation",
    description:
      "From idea to 501(c)(3) in days, not months. Generate bylaws, articles of incorporation, and IRS forms with AI.",
    type: "website",
    url: "https://turbocharity.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "TurboCharity — AI-Powered Nonprofit Creation",
    description:
      "From idea to 501(c)(3) in days, not months. Generate bylaws, articles of incorporation, and IRS forms with AI.",
  },
};

export default function Page() {
  return <HomePage />;
}
