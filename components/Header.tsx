'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Zap, Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
  { label: 'States', href: '/states' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Zap className="h-7 w-7 text-[#2563EB]" aria-hidden="true" />
          <span className="text-xl font-bold tracking-tight text-[#0F172A]">
            TurboCharity
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-[#2563EB]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/start"
            className="inline-flex items-center rounded-lg bg-[#2563EB] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1d4ed8] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
          >
            Start Free
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-[#2563EB] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Slide-out Nav */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity md:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-out Panel */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-72 transform bg-white shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setMobileOpen(false)}
          >
            <Zap className="h-6 w-6 text-[#2563EB]" aria-hidden="true" />
            <span className="text-lg font-bold text-[#0F172A]">TurboCharity</span>
          </Link>
          <button
            type="button"
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-[#2563EB]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 border-t border-gray-200 pt-4">
            <Link
              href="/start"
              className="block rounded-lg bg-[#2563EB] px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1d4ed8]"
              onClick={() => setMobileOpen(false)}
            >
              Start Free
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
