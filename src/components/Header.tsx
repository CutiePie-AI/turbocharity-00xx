"use client";

import { useState, useEffect, useCallback } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Container } from "./Container";
import { Button } from "./Button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Directory", href: "/directory" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <Container className="flex items-center justify-between h-16 sm:h-18">
        {/* ---------- Logo ---------- */}
        <a href="/" className="flex items-center gap-1.5 shrink-0">
          <span className="text-2xl" role="img" aria-label="lightning bolt">
            ⚡
          </span>
          <span className="text-xl font-extrabold tracking-tight text-dark">
            Turbo<span className="text-primary">Charity</span>
          </span>
        </a>

        {/* ---------- Desktop nav ---------- */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* ---------- Desktop CTA ---------- */}
        <div className="hidden lg:block">
          <Button href="/start" variant="primary" size="md">
            Start Your Nonprofit
          </Button>
        </div>

        {/* ---------- Mobile hamburger ---------- */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          {mobileOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </Container>

      {/* ---------- Mobile menu ---------- */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-gray-100 bg-white">
          <Container className="flex flex-col py-4 gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-gray-700 rounded-lg hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <Button
                href="/start"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Start Your Nonprofit
              </Button>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
