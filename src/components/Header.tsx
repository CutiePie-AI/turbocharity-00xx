'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Container from '@/components/Container';
import Button from '@/components/Button';

const navigation = [
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Features', href: '/features' },
  { name: 'Resources', href: '/resources' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <span aria-hidden="true" className="text-2xl">&#9889;</span>
            TurboCharity
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <Button href="/get-started" size="sm">
              Get Started Free
            </Button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="border-t border-gray-100 pb-4 pt-2 md:hidden">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-medium text-gray-700 transition-colors hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button href="/get-started" size="sm" className="mt-3 w-full">
              Get Started Free
            </Button>
          </nav>
        )}
      </Container>
    </header>
  );
}
