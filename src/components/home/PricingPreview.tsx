import Section from "@/components/ui/Section";
import Button from "@/components/Button";

/* ── Check icon for feature lists ───────────────────────────────────────── */

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#10B981]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

/* ── Pricing tier data ──────────────────────────────────────────────────── */

interface Tier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

const TIERS: Tier[] = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Get started with essential tools and resources.",
    features: [
      "State guide access",
      "Basic formation checklist",
      "Requirements overview",
      "Community resources",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "one-time",
    description: "Everything you need to incorporate your nonprofit.",
    features: [
      "Full document generation",
      "Bylaws & articles of incorporation",
      "State-specific filing guidance",
      "Email support",
      "Conflict-of-interest policy",
      "30-day money-back guarantee",
    ],
    cta: "Choose Pro",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$149",
    period: "one-time",
    description: "Launch with confidence — full support and review.",
    features: [
      "Everything in Pro",
      "IRS Form 1023-EZ preparation",
      "Priority email & chat support",
      "Attorney review of documents",
      "EIN application assistance",
      "Grant-readiness checklist",
      "Annual compliance reminders",
    ],
    cta: "Choose Premium",
    highlighted: false,
  },
];

/* ── Component ──────────────────────────────────────────────────────────── */

export default function PricingPreview() {
  return (
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
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={[
              "relative flex flex-col rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300",
              tier.highlighted
                ? "scale-[1.03] border-[#2563EB] shadow-xl shadow-blue-500/15 ring-2 ring-[#2563EB] lg:scale-105"
                : "border-gray-100 hover:-translate-y-1 hover:shadow-md",
            ].join(" ")}
          >
            {tier.highlighted && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#2563EB] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                Most Popular
              </span>
            )}

            <h3 className="text-xl font-bold text-dark">{tier.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{tier.description}</p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-dark">
                {tier.price}
              </span>
              {tier.period && (
                <span className="text-sm text-gray-400">/ {tier.period}</span>
              )}
            </div>

            <ul className="mt-8 flex-1 space-y-3" role="list">
              {tier.features.map((feat) => (
                <li
                  key={feat}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
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

      {/* Comparison note */}
      <p className="mt-10 text-center text-sm text-gray-500">
        Compare to{" "}
        <span className="font-semibold text-dark">$2,000–$5,000</span> for
        traditional legal services.
      </p>
    </Section>
  );
}
