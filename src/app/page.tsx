import type { Metadata } from 'next';
import HomePage from './HomePage';

export const metadata: Metadata = {
  title: 'TurboCharity - Start Your Nonprofit Fast | 501(c)(3) Formation Guide',
  description:
    'From idea to 501(c)(3) in days, not months. Free state-by-state guides, templates, and AI-powered tools to help you start a nonprofit without expensive lawyers.',
  keywords: [
    'nonprofit formation',
    '501c3',
    'start a nonprofit',
    'IRS Form 1023-EZ',
    'nonprofit incorporation',
    'bylaws generator',
    'nonprofit legal documents',
    'state-by-state guide',
  ],
  openGraph: {
    title: 'TurboCharity - Start Your Nonprofit Fast | 501(c)(3) Formation Guide',
    description:
      'From idea to 501(c)(3) in days, not months. Free state-by-state guides, templates, and AI-powered tools.',
    type: 'website',
    url: 'https://turbocharity.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TurboCharity - Start Your Nonprofit Fast | 501(c)(3) Formation Guide',
    description:
      'From idea to 501(c)(3) in days, not months. Free guides, templates, and AI-powered tools.',
  },
};

export default function Home() {
  return <HomePage />;
}
