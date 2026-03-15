import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/Container';
import { RESOURCES } from '@/lib/resources';

/* ---------- Static Params ---------- */

export function generateStaticParams() {
  return RESOURCES.map((r) => ({ slug: r.slug }));
}

/* ---------- Dynamic Metadata ---------- */

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const resource = RESOURCES.find((r) => r.slug === params.slug);
  if (!resource) return { title: 'Resource Not Found | TurboCharity' };

  return {
    title: `${resource.title} | TurboCharity`,
    description: resource.excerpt,
    openGraph: {
      title: resource.title,
      description: resource.excerpt,
      type: 'article',
    },
  };
}

/* ---------- Helpers ---------- */

const categoryColors: Record<string, string> = {
  'Getting Started': 'bg-blue-100 text-blue-700',
  Legal: 'bg-purple-100 text-purple-700',
  Financial: 'bg-emerald-100 text-emerald-700',
  Growth: 'bg-amber-100 text-amber-700',
};

function getRelatedResources(currentSlug: string) {
  return RESOURCES.filter((r) => r.slug !== currentSlug).slice(0, 3);
}

/** Simple paragraph-based heading extraction for TOC. */
function extractHeadings(content: string): string[] {
  return content
    .split('\n\n')
    .filter((p) => p.length < 80 && !p.startsWith('Your') && !p.startsWith('A ') && !p.startsWith('The') && p === p.trimStart())
    .filter((p) => {
      const words = p.trim().split(/\s+/);
      return words.length >= 2 && words.length <= 10;
    })
    .slice(0, 6);
}

/* ---------- Page Component ---------- */

export default function ResourcePage({
  params,
}: {
  params: { slug: string };
}) {
  const resource = RESOURCES.find((r) => r.slug === params.slug);
  if (!resource) notFound();

  const paragraphs = resource.content.split('\n\n');
  const headings = extractHeadings(resource.content);
  const related = getRelatedResources(resource.slug);

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-gray-50/60">
        <Container className="py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <span aria-hidden="true">/</span>
            <a href="/resources" className="hover:text-primary transition-colors">
              Resources
            </a>
            <span aria-hidden="true">/</span>
            <span className="truncate font-medium text-gray-800">
              {resource.title}
            </span>
          </nav>
        </Container>
      </div>

      {/* Content + Sidebar */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
            {/* Main Content */}
            <article className="min-w-0">
              {/* Meta */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[resource.category] || 'bg-gray-100 text-gray-700'}`}
                >
                  {resource.category}
                </span>
                <span className="text-sm text-gray-400">{resource.readTime}</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
                {resource.title}
              </h1>

              {/* Rendered content */}
              <div className="mt-8 space-y-5">
                {paragraphs.map((para, idx) => {
                  const isHeading =
                    para.length < 80 &&
                    para.trim().split(/\s+/).length <= 10 &&
                    para.trim().split(/\s+/).length >= 2 &&
                    !para.startsWith('Your') &&
                    !para.startsWith('A ') &&
                    !para.startsWith('The') &&
                    para === para.trimStart();

                  if (isHeading) {
                    return (
                      <h2
                        key={idx}
                        id={para
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, '-')
                          .replace(/(^-|-$)/g, '')}
                        className="mt-8 text-xl font-bold text-dark"
                      >
                        {para}
                      </h2>
                    );
                  }

                  return (
                    <p key={idx} className="text-base leading-relaxed text-gray-700">
                      {para}
                    </p>
                  );
                })}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              {/* Table of Contents */}
              {headings.length > 0 && (
                <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-400">
                    In This Guide
                  </h3>
                  <ul className="space-y-2">
                    {headings.map((h, idx) => (
                      <li key={idx}>
                        <a
                          href={`#${h
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, '-')
                            .replace(/(^-|-$)/g, '')}`}
                          className="block text-sm text-gray-600 transition-colors hover:text-primary"
                        >
                          {h}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related Resources */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-400">
                  Related Resources
                </h3>
                <ul className="space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <a
                        href={`/resources/${r.slug}`}
                        className="group block"
                      >
                        <span className="text-sm font-semibold text-dark group-hover:text-primary transition-colors">
                          {r.title}
                        </span>
                        <span className="mt-0.5 block text-xs text-gray-400">
                          {r.readTime}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-gray-100 bg-gradient-to-b from-blue-50/60 to-white py-16">
        <Container>
          <div className="mx-auto max-w-2xl rounded-2xl bg-primary p-8 text-center text-white shadow-xl shadow-primary/20 sm:p-12">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Ready to start your nonprofit?
            </h2>
            <p className="mt-3 text-blue-100">
              Stop reading and start doing. TurboCharity handles the
              paperwork so you can focus on your mission.
            </p>
            <a
              href="/signup"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 font-semibold text-primary shadow-lg transition-all hover:bg-blue-50"
            >
              Get started free &rarr;
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
