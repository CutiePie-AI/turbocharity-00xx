import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TurboCharity",
    short_name: "TurboCharity",
    description:
      "AI-powered nonprofit creation platform. From idea to 501(c)(3) in days, not months.",
    start_url: "/",
    display: "standalone",
    theme_color: "#2563EB",
    background_color: "#ffffff",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
