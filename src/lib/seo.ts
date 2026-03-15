import type { Metadata } from "next";

const BASE_URL = "https://turbocharity.com";
const SITE_NAME = "TurboCharity";

export function generateMetadata(
  title: string,
  description: string,
  path: string,
  type: "website" | "article" = "website"
): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title: {
      absolute: `${title} | ${SITE_NAME}`,
    },
    description,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type,
      images: [
        {
          url: `${BASE_URL}/og?title=${encodeURIComponent(title)}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "TurboCharity - Start Your 501(c)(3) Nonprofit Fast",
    template: "%s | TurboCharity",
  },
  description:
    "Start your 501(c)(3) nonprofit quickly and affordably. TurboCharity provides step-by-step guidance, document filing, and compliance tools to launch your tax-exempt organization.",
  openGraph: {
    title: "TurboCharity - Start Your 501(c)(3) Nonprofit Fast",
    description:
      "Start your 501(c)(3) nonprofit quickly and affordably. TurboCharity provides step-by-step guidance, document filing, and compliance tools to launch your tax-exempt organization.",
    url: BASE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-default.png`,
        width: 1200,
        height: 630,
        alt: "TurboCharity - Start Your 501(c)(3) Nonprofit Fast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TurboCharity - Start Your 501(c)(3) Nonprofit Fast",
    description:
      "Start your 501(c)(3) nonprofit quickly and affordably. Step-by-step guidance to launch your tax-exempt organization.",
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default defaultMetadata;
