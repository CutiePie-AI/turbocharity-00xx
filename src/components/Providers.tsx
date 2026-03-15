'use client';

import Analytics from '@/components/Analytics';

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Global providers wrapper.
 * Includes analytics and any future context providers.
 */
export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <Analytics />
      {children}
    </>
  );
}
