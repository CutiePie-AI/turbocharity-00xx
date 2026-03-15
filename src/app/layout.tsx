import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { seoMetadata, getOpenGraphMeta } from "@/data/seo-metadata";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const rootSeo = seoMetadata["/"];
const ogMeta = getOpenGraphMeta("/");

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://turbocharity.com"
  ),
  title: {
    default: rootSeo.title,
    template: "%s | TurboCharity",
  },
  description: rootSeo.description,
  keywords: rootSeo.keywords,
  authors: [{ name: "TurboCharity, Inc." }],
  creator: "TurboCharity",
  publisher: "TurboCharity, Inc.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...ogMeta,
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://turbocharity.com",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TurboCharity",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://turbocharity.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://turbocharity.com"}/favicon.svg`,
    description: rootSeo.description,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "support@turbocharity.com",
    },
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
