import type { Metadata } from "next";

const BASE_URL = "https://turbocharity.com";
const SITE_NAME = "TurboCharity";
const OG_IMAGE = `${BASE_URL}/og-image.png`;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "TurboCharity - Start Your 501(c)(3) Nonprofit Fast",
    template: "%s | TurboCharity",
  },
  description:
    "Start your 501(c)(3) nonprofit quickly and affordably. TurboCharity guides you through formation, IRS filing, and state registration — no lawyer needed.",
  keywords: [
    "501c3",
    "nonprofit",
    "start a nonprofit",
    "tax exempt",
    "charity",
    "Form 1023-EZ",
    "nonprofit formation",
    "IRS tax exempt status",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: SITE_NAME,
    title: "TurboCharity - Start Your 501(c)(3) Nonprofit Fast",
    description:
      "Start your 501(c)(3) nonprofit quickly and affordably. TurboCharity guides you through formation, IRS filing, and state registration — no lawyer needed.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "TurboCharity - Start Your Nonprofit Fast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TurboCharity - Start Your 501(c)(3) Nonprofit Fast",
    description:
      "Start your 501(c)(3) nonprofit quickly and affordably. TurboCharity guides you through formation, IRS filing, and state registration — no lawyer needed.",
    images: [OG_IMAGE],
  },
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
};

export function generateMetadata(
  title: string,
  description: string,
  path: string,
  type: "website" | "article" = "website"
): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${title} | ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
