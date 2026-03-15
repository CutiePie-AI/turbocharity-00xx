import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TurboCharity',
    short_name: 'TurboCharity',
    description: 'From idea to 501(c)(3) in days, not months.',
    start_url: '/',
    display: 'standalone',
    theme_color: '#2563EB',
    background_color: '#ffffff',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
