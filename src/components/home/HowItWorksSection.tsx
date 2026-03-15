import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

/* ── Lucide-style SVG icons ─────────────────────────────────────────────── */

function MapPinIcon() {
  return (
    <svg
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}

function ClipboardListIcon() {
  return (
    <svg
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"
      />
    </svg>
  );
}

function FileCheckIcon() {
  return (
    <svg
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.125 2.25A9 9 0 0 1 19.5 11.25m-9.375-9V7.125c0 .621.504 1.125 1.125 1.125H15.75"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 15 2.25 2.25L15 12.75"
      />
    </svg>
  );
}

/* ── Step data ──────────────────────────────────────────────────────────── */

const STEPS = [
  {
    step: 1,
    title: "Choose Your State",
    description:
      "Select your state and we'll load the exact incorporation requirements, filing fees, and processing times specific to your location.",
    Icon: MapPinIcon,
  },
  {
    step: 2,
    title: "Answer Simple Questions",
    description:
      "Our guided questionnaire asks about your nonprofit's mission, board members, and structure — no legal jargon required.",
    Icon: ClipboardListIcon,
  },
  {
    step: 3,
    title: "Get Your Documents",
    description:
      "Instantly receive your bylaws, articles of incorporation, conflict-of-interest policy, and pre-filled IRS Form 1023-EZ.",
    Icon: FileCheckIcon,
  },
] as const;

/* ── Component ──────────────────────────────────────────────────────────── */

export default function HowItWorksSection() {
  return (
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
        {STEPS.map((item, i) => (
          <Card key={item.step} hover className="relative text-center">
            {/* Connector line (visible on md+) */}
            {i < STEPS.length - 1 && (
              <div className="pointer-events-none absolute right-0 top-1/2 hidden h-0.5 w-8 -translate-y-1/2 translate-x-full bg-gradient-to-r from-[#2563EB]/40 to-transparent md:block" />
            )}

            {/* Icon circle */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#10B981] text-white shadow-lg shadow-blue-500/25">
              <item.Icon />
            </div>

            {/* Step badge */}
            <span className="mt-4 inline-block rounded-full bg-[#2563EB]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Step {item.step}
            </span>

            <h3 className="mt-3 text-xl font-bold text-dark">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
