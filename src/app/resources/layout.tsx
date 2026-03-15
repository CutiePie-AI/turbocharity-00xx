import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nonprofit Startup Guides & Resources | TurboCharity',
  description:
    'Expert guides covering every step of starting and growing a nonprofit organization. Covering legal, financial, and growth topics.',
  openGraph: {
    title: 'Nonprofit Startup Guides & Resources | TurboCharity',
    description:
      'Expert guides covering every step of starting and growing a nonprofit.',
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
