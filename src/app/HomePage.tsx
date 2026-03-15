"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import {
  FEATURES,
  TESTIMONIALS,
  FAQ_ITEMS,
  PRICING_TIERS,
  CTA_PRIMARY,
  CTA_SECONDARY,
  TAGLINE,
  DESCRIPTION,
} from "@/lib/content";
import { states } from "@/data/states";

/* ──────────────────────────── Icon helpers ──────────────────────────────── */

const FEATURE_ICONS: Record<string, JSX.Element> = {
  doc: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  ),
  form: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
    </svg>
  ),
  shield: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
  users: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  ),
  hash: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
    </svg>
  ),
  rocket: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </svg>
  ),
};

const STEP_ICONS: JSX.Element[] = [
  /* 1 – Chat / Mission */
  <svg key="s1" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
  </svg>,
  /* 2 – Document / Generate */
  <svg key="s2" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>,
  /* 3 – Rocket / Launch */
  <svg key="s3" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
  </svg>,
];

/* ──────────────────────────── Trust badges ──────────────────────────────── */

const TRUST_BADGES = [
  { label: "No lawyers needed", icon: "scale" },
  { label: "All 50 states", icon: "map" },
  { label: "IRS-compliant", icon: "check" },
  { label: "Free to start", icon: "gift" },
] as const;

function TrustBadgeIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "scale":
      return (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
        </svg>
      );
    case "map":
      return (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
        </svg>
      );
    case "check":
      return (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      );
    case "gift":
      return (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
      );
    default:
      return null;
  }
}

/* ──────────────────────────── How-it-works steps ────────────────────────── */

const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Tell Us About Your Mission",
    description:
      "Answer a few simple questions about your nonprofit's purpose, structure, and goals. It takes less than 30 minutes.",
  },
  {
    step: 2,
    title: "We Generate Your Documents",
    description:
      "Our AI creates your bylaws, articles of incorporation, conflict-of-interest policy, and IRS Form 1023-EZ — tailored to your state.",
  },
  {
    step: 3,
    title: "File & Launch",
    description:
      "Submit your documents to your state and the IRS. We guide you through every step until your 501(c)(3) is official.",
  },
];

/* ──────────────────────────── Checkmark SVG ─────────────────────────────── */

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  HOME PAGE COMPONENT                                                      */
/* ═══════════════════════════════════════════════════════════════════════════ */

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* Grab 12 popular states for the directory preview */
  const popularSlugs = [
    "california",
    "new-york",
    "texas",
    "florida",
    "illinois",
    "pennsylvania",
    "georgia",
    "colorado",
    "washington",
    "arizona",
    "alaska",
    "alabama",
  ];
  const previewStates = popularSlugs
    .map((slug) => states.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <main>
      {/* ────────────────────── 1. HERO ────────────────────── */}
      <section
        aria-label="Hero"
        className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 text-white"
      >
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-teal-300/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            AI-Powered Nonprofit Creation
          </span>

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {TAGLINE}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100 sm:text-xl">
            {DESCRIPTION}
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              href="/get-started"
              className="text-base font-bold shadow-xl shadow-emerald-600/30"
            >
              {CTA_PRIMARY}
            </Button>
            <Button
              size="lg"
              variant="outline"
              href="#how-it-works"
              className="border-white/60 text-white hover:bg-white/10 hover:text-white"
            >
              {CTA_SECONDARY}
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-8">
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-sm font-medium text-blue-100"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  <TrustBadgeIcon icon={badge.icon} />
                </span>
                {badge.label}
              </div>
            ))}
          </div>

          {/* Hero illustration placeholder */}
          <div
            aria-hidden="true"
            className="mt-16 hidden w-full max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-md lg:block"
          >
            <div className="flex h-64 items-center justify-center rounded-xl bg-gradient-to-br from-white/5 to-white/10 text-blue-200">
              <svg className="h-16 w-16 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" />
              </svg>
              <span className="ml-3 text-lg font-medium">Platform Preview</span>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── 2. HOW IT WORKS ────────────────── */}
      <Section id="how-it-works" aria-label="How it works" className="bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Three simple steps to create your legally compliant nonprofit.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {HOW_IT_WORKS.map((item, i) => (
            <Card key={item.step} hover className="relative text-center">
              {/* Connector line (visible on md+) */}
              {i < HOW_IT_WORKS.length - 1 && (
                <div className="pointer-events-none absolute right-0 top-1/2 hidden h-0.5 w-8 -translate-y-1/2 translate-x-full bg-gradient-to-r from-primary/40 to-transparent md:block" />
              )}

              {/* Step number badge */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-teal-400 text-white shadow-lg shadow-blue-500/25">
                {STEP_ICONS[i]}
              </div>

              <span className="mt-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                Step {item.step}
              </span>

              <h3 className="mt-3 text-xl font-bold text-dark">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─────────────────── 3. FEATURES GRID ──────────────── */}
      <Section id="features" aria-label="Features">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
            Everything You Need to Launch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Powerful tools that handle the complexity so you can focus on your mission.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <Card key={feature.title} hover>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-teal-50 text-primary">
                {FEATURE_ICONS[feature.icon] ?? (
                  <span className="text-xl font-bold">?</span>
                )}
              </div>
              <h3 className="mt-4 text-lg font-bold text-dark">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ────────────── 4. STATE DIRECTORY PREVIEW ─────────── */}
      <Section id="states" aria-label="State directory preview" className="bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
            Supported in All 50 States
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Our compliance engine adapts your documents to each state&rsquo;s exact filing requirements.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {previewStates.map((state) =>
            state ? (
              <a
                key={state.slug}
                href={`/states/${state.slug}`}
                className="group flex flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-2xl font-extrabold text-primary transition-colors group-hover:text-blue-700">
                  {state.abbreviation}
                </span>
                <span className="mt-1 font-semibold text-dark">{state.name}</span>
                <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                  <span>Filing fee: ${state.filingFee}</span>
                  <span>{state.processingTime}</span>
                </div>
              </a>
            ) : null,
          )}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/states"
            className="inline-flex items-center gap-1 font-semibold text-primary transition-colors hover:text-blue-700"
          >
            View All States
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </Section>

      {/* ──────────── 5. SOCIAL PROOF / TESTIMONIALS ──────── */}
      <Section aria-label="Testimonials" className="bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
            Trusted by Changemakers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Hear from nonprofit founders who launched with TurboCharity.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className="flex flex-col justify-between">
              {/* Quote icon */}
              <svg
                className="h-8 w-8 text-primary/20"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179Zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179Z" />
              </svg>

              <blockquote className="mt-4 text-lg leading-relaxed text-gray-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-teal-400 text-sm font-bold text-white">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-dark">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ──────────────── 6. PRICING PREVIEW ───────────────── */}
      <Section id="pricing" aria-label="Pricing" className="bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            No hidden fees. No subscriptions. Pay once, launch your nonprofit.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={[
                "relative flex flex-col rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300",
                tier.highlighted
                  ? "scale-[1.03] border-primary shadow-xl shadow-blue-500/15 ring-2 ring-primary lg:scale-105"
                  : "border-gray-100 hover:-translate-y-1 hover:shadow-md",
              ].join(" ")}
            >
              {tier.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold text-dark">{tier.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{tier.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-dark">{tier.price}</span>
                {tier.period && (
                  <span className="text-sm text-gray-400">/ {tier.period}</span>
                )}
              </div>

              <ul className="mt-8 flex-1 space-y-3" role="list">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckIcon />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  variant={tier.highlighted ? "primary" : "outline"}
                  size="lg"
                  href="/get-started"
                  className="w-full justify-center"
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ──────────────────── 7. FAQ SECTION ───────────────── */}
      <Section id="faq" aria-label="Frequently asked questions">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Everything you need to know about starting a nonprofit with TurboCharity.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-gray-200">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="text-lg font-semibold text-dark">
                    {item.question}
                  </span>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "mt-3 max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="leading-relaxed text-gray-600">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ─────────────────── 8. FINAL CTA ──────────────────── */}
      <section
        aria-label="Call to action"
        className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white sm:py-28"
      >
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Change the World?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-blue-200">
            Join thousands of founders who turned their vision into a legally recognized nonprofit — in days, not months.
          </p>

          <div className="mt-10">
            <Button
              size="lg"
              variant="secondary"
              href="/get-started"
              className="text-base font-bold shadow-xl shadow-emerald-600/30"
            >
              {CTA_PRIMARY}
            </Button>
          </div>

          <p className="mt-4 text-sm text-blue-300">
            No credit card required &middot; Free plan available &middot; Cancel anytime
          </p>
        </div>
      </section>
    </main>
  );
}
