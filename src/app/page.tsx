import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import StateDirectoryPreview from "@/components/home/StateDirectoryPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PricingPreview from "@/components/home/PricingPreview";
import BlogPreview from "@/components/home/BlogPreview";
import CTASection from "@/components/home/CTASection";
import FAQPreview from "@/components/home/FAQPreview";

export const metadata: Metadata = {
  title: "TurboCharity — From Idea to 501(c)(3) in Days, Not Months",
  description:
    "AI-powered nonprofit creation that walks you through state-specific incorporation, generates compliant bylaws, and auto-fills IRS Form 1023-EZ — saving you $2,000-$5,000 in legal fees.",
  keywords: [
    "nonprofit formation",
    "501c3",
    "start a nonprofit",
    "IRS Form 1023-EZ",
    "nonprofit incorporation",
    "bylaws generator",
    "nonprofit legal documents",
  ],
  openGraph: {
    title: "TurboCharity — From Idea to 501(c)(3) in Days, Not Months",
    description:
      "AI-powered nonprofit creation. State-specific incorporation, compliant bylaws, and auto-filled IRS Form 1023-EZ.",
    type: "website",
    url: "https://turbocharity.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "TurboCharity — From Idea to 501(c)(3) in Days, Not Months",
    description:
      "AI-powered nonprofit creation. Save $2,000-$5,000 in legal fees.",
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <StateDirectoryPreview />
      <TestimonialsSection />
      <PricingPreview />
      <BlogPreview />
      <FAQPreview />
      <CTASection />
    </main>
  );
}
