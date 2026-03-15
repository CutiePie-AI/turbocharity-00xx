'use client';

import { useState } from 'react';
import Container from '@/components/Container';
import { RESOURCES, Resource } from '@/lib/resources';

const CATEGORIES = ['All', 'Getting Started', 'Legal', 'Financial', 'Growth'] as const;

type Category = (typeof CATEGORIES)[number];

const categoryColors: Record<string, string> = {
  'Getting Started': 'bg-blue-100 text-blue-700',
  Legal: 'bg-purple-100 text-purple-700',
  Financial: 'bg-emerald-100 text-emerald-700',
  Growth: 'bg-amber-100 text-amber-700',
};

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <a
      href={`/resources/${resource.slug}`}
      className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <span
        className={`mb-3 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[resource.category] || 'bg-gray-100 text-gray-700'}`}
      >
        {resource.category}
      </span>

      <h3 className="mb-2 text-lg font-bold text-dark group-hover:text-primary transition-colors">
        {resource.title}
      </h3>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
        {resource.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-gray-400">{resource.readTime}</span>
        <span className="text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
          Read More <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </a>
  );
}

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredResources =
    activeCategory === 'All'
      ? RESOURCES
      : RESOURCES.filter((r) => r.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-blue-50/60 to-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl lg:text-5xl">
              Nonprofit Startup Guides &amp; Resources
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Expert guides covering every step of starting and growing a
              nonprofit organization. From defining your mission to scaling
              nationally.
            </p>
          </div>
        </Container>
      </section>

      {/* Filters & Grid */}
      <section className="py-12 sm:py-16">
        <Container>
          {/* Category Tabs */}
          <div className="mb-10 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-md shadow-primary/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Resource Grid */}
          {filteredResources.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.slug} resource={resource} />
              ))}
            </div>
          ) : (
            <p className="py-12 text-center text-gray-500">
              No resources found in this category yet. Check back soon!
            </p>
          )}
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-gray-100 bg-gradient-to-b from-white to-blue-50/40 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-dark sm:text-3xl">
              Ready to start your nonprofit?
            </h2>
            <p className="mt-3 text-gray-600">
              Put these guides into action. TurboCharity walks you through
              every step with AI-powered document generation.
            </p>
            <a
              href="/signup"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40"
            >
              Get started free &rarr;
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
