"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Button from "@/components/Button";

const SESSION_KEY = "tc_exit_banner_dismissed";
const MOBILE_DELAY_MS = 60_000;

export default function ExitIntentBanner() {
  const [visible, setVisible] = useState(false);
  const triggeredRef = useRef(false);

  const showBanner = useCallback(() => {
    if (triggeredRef.current) return;
    if (typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY)) return;
    triggeredRef.current = true;
    setVisible(true);
  }, []);

  const dismiss = useCallback(() => {
    setVisible(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(SESSION_KEY, "true");
    }
  }, []);

  // Desktop: mouse leaving viewport (mouseleave on document)
  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY)) return;

    function handleMouseLeave(e: MouseEvent) {
      // Only trigger when mouse leaves from the top of the viewport
      if (e.clientY <= 0) {
        showBanner();
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [showBanner]);

  // Mobile: after 60 seconds
  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY)) return;

    // Simple touch device check
    const isMobile =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    if (!isMobile) return;

    const timer = setTimeout(showBanner, MOBILE_DELAY_MS);
    return () => clearTimeout(timer);
  }, [showBanner]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-gradient-to-r from-primary to-blue-700 px-4 py-3 shadow-lg shadow-blue-900/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-center text-sm font-medium text-white sm:text-left">
            Starting a nonprofit? Get your free guide →
          </p>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              href="#newsletter"
              className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary"
            >
              Get Free Guide
            </Button>
            <button
              onClick={dismiss}
              className="flex h-7 w-7 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Dismiss banner"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
