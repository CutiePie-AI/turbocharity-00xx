import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import Analytics from '@/components/Analytics';
import CookieConsent from '@/components/CookieConsent';
import { organizationSchema } from '@/lib/structured-data';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'TurboCharity - Start Your Nonprofit Fast | 501(c)(3) Formation Guide',
  description:
    'From idea to 501(c)(3) in days, not months. Free state-by-state guides, templates, and AI-powered tools to help you start a nonprofit without expensive lawyers.',
  metadataBase: new URL('https://turbocharity.com'),
  openGraph: {
    title: 'TurboCharity - Start Your Nonprofit Fast | 501(c)(3) Formation Guide',
    description:
      'From idea to 501(c)(3) in days, not months. Free state-by-state guides, templates, and AI-powered tools to help you start a nonprofit without expensive lawyers.',
    type: 'website',
    url: 'https://turbocharity.com',
    siteName: 'TurboCharity',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TurboCharity - Start Your Nonprofit Fast | 501(c)(3) Formation Guide',
    description:
      'From idea to 501(c)(3) in days, not months. Free state-by-state guides, templates, and AI-powered tools.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <StructuredData data={organizationSchema()} />
      </head>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
