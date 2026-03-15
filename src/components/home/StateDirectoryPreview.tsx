import Section from "@/components/ui/Section";
import StateCard from "@/components/StateCard";
import { STATES } from "@/data/states";

const POPULAR_SLUGS = [
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

const previewStates = POPULAR_SLUGS.map((slug) =>
  STATES.find((s) => s.slug === slug)
).filter(
  (s): s is (typeof STATES)[number] => s !== undefined
);

export default function StateDirectoryPreview() {
  return (
    <Section
      id="states"
      aria-label="State directory preview"
      className="bg-gray-50"
    >
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
          Supported in All 50 States + DC
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Our compliance engine adapts your documents to each state&rsquo;s
          exact filing requirements.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {previewStates.map((state) => (
          <StateCard key={state.slug} state={state} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="/states"
          className="inline-flex items-center gap-1 font-semibold text-[#2563EB] transition-colors hover:text-blue-700"
        >
          View All 50 States + DC &rarr;
        </a>
      </div>
    </Section>
  );
}
