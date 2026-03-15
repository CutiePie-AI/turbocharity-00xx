'use client';

import Analytics from '@/components/Analytics';

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Client-side provider wrapper.
 * Includes analytics and any future context providers (theme, auth, etc.).
 */
export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
}
