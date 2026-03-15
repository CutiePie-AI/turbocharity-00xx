import Providers from '@/components/Providers';
import Analytics from '@/components/Analytics';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
