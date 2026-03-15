import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TurboCharity",
    short_name: "TurboCharity",
    description:
      "Start your 501(c)(3) nonprofit quickly and affordably. TurboCharity guides you through every step of forming and registering your tax-exempt organization.",
    start_url: "/",
    display: "standalone",
    theme_color: "#2563EB",
    background_color: "#ffffff",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
