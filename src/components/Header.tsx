import Link from 'next/link';
import Container from './Container';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">TurboCharity</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/directory"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary"
            >
              State Guides
            </Link>
            <Link
              href="/directory"
              className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Get Started
            </Link>
          </nav>
          <Link
            href="/directory"
            className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 md:hidden"
          >
            Get Started
          </Link>
        </div>
      </Container>
    </header>
  );
}
