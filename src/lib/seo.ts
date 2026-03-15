import type { Metadata } from "next";

const BASE_URL = "https://turbocharity.com";

export function generatePageMeta(
  title: string,
  description: string,
  path: string
): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title: `${title} | TurboCharity`,
    description,
    openGraph: {
      title: `${title} | TurboCharity`,
      description,
      url,
      siteName: "TurboCharity",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${title} — TurboCharity`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | TurboCharity`,
      description,
      images: [`${BASE_URL}/opengraph-image`],
    },
    alternates: {
      canonical: url,
    },
  };
}
