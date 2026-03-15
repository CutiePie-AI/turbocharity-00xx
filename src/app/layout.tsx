import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import StructuredData from '@/components/StructuredData';
import { getOrganizationSchema } from '@/lib/structured-data';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'TurboCharity - From Idea to 501(c)(3) in Days',
  description:
    'AI-powered nonprofit creation platform. TurboCharity helps you go from idea to 501(c)(3) in days, not months. Get guided assistance with formation documents, state registration, and IRS applications.',
  metadataBase: new URL('https://turbocharity.com'),
  openGraph: {
    title: 'TurboCharity - From Idea to 501(c)(3) in Days',
    description:
      'AI-powered nonprofit creation platform. Go from idea to 501(c)(3) in days, not months.',
    url: 'https://turbocharity.com',
    siteName: 'TurboCharity',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TurboCharity - From Idea to 501(c)(3) in Days',
    description:
      'AI-powered nonprofit creation platform. Go from idea to 501(c)(3) in days, not months.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </Providers>
        <StructuredData data={getOrganizationSchema()} />
      </body>
    </html>
  );
}
