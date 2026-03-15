import Link from 'next/link';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-dark text-gray-400">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-lg font-bold text-white">
              TurboCharity
            </Link>
            <p className="mt-2 text-sm">
              From idea to 501(c)(3) in days, not months. AI-powered nonprofit formation.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/directory" className="transition-colors hover:text-white">
                  State Guides
                </Link>
              </li>
              <li>
                <Link href="/directory/category/education" className="transition-colors hover:text-white">
                  Education Nonprofits
                </Link>
              </li>
              <li>
                <Link href="/directory/category/health" className="transition-colors hover:text-white">
                  Health Nonprofits
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Popular States
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/directory/california" className="transition-colors hover:text-white">
                  California
                </Link>
              </li>
              <li>
                <Link href="/directory/texas" className="transition-colors hover:text-white">
                  Texas
                </Link>
              </li>
              <li>
                <Link href="/directory/new-york" className="transition-colors hover:text-white">
                  New York
                </Link>
              </li>
              <li>
                <Link href="/directory/florida" className="transition-colors hover:text-white">
                  Florida
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} TurboCharity. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
