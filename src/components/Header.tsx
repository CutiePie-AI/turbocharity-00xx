'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'States', href: '/states' },
  { label: 'Resources', href: '/resources' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-extrabold tracking-tight">
            <span className="text-primary">Turbo</span>
            <span className="text-secondary">Charity</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" href="/login">
            Log In
          </Button>
          <Button size="sm" href="/get-started">
            Start Free
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile slide-out drawer overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-black/20 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile slide-out drawer */}
      <div
        className={`fixed right-0 top-16 z-50 h-[calc(100vh-4rem)] w-72 transform bg-white shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-1 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 border-t border-gray-100 pt-4">
            <Button size="sm" href="/get-started" className="w-full">
              Start Free
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
