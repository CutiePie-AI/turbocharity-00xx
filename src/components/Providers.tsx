'use client';

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Global providers wrapper.
 *
 * Currently a passthrough that wraps children.
 * Ready for adding context providers (theme, auth, tracking, etc.)
 * as the application grows.
 */
export default function Providers({ children }: ProvidersProps) {
  return <>{children}</>;
}
