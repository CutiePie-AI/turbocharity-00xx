const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://turbocharity.com';

/**
 * Build a fully-qualified canonical URL for the given path.
 *
 * @example
 * getCanonicalUrl('/about')  // "https://turbocharity.com/about"
 */
export function getCanonicalUrl(path: string): string {
  // Strip trailing slash from base and ensure path starts with /
  const base = SITE_URL.replace(/\/+$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

/**
 * Format a page title with the site-wide suffix.
 *
 * @example
 * formatPageTitle('About')  // "About | TurboCharity"
 */
export function formatPageTitle(title: string): string {
  return `${title} | TurboCharity`;
}
