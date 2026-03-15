import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { TESTIMONIALS } from "@/lib/content";

export default function TestimonialsSection() {
  return (
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
              className="h-8 w-8 text-[#2563EB]/20"
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
              {/* Avatar with initials */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#10B981] text-sm font-bold text-white">
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
  );
}
