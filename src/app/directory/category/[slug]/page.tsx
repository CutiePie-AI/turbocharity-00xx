import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { categories, getCategoryBySlug } from '@/data/categories';
import { states } from '@/data/states';

interface CategoryPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = getCategoryBySlug(params.slug);
  if (!category) return { title: 'Category Not Found | TurboCharity' };

  return {
    title: `${category.name} Nonprofit Formation Guide | TurboCharity`,
    description: `Learn how to start a ${category.name.toLowerCase()} nonprofit. ${category.description} Find state-by-state filing requirements and get started today.`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  // Show the top 10 states as featured for this category
  const featuredStates = states.slice(0, 10);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="border-b border-gray-200 bg-white">
          <Container className="py-3">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/directory" className="transition-colors hover:text-primary">
                State Guides
              </Link>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="font-medium text-gray-900">{category.name}</span>
            </nav>
          </Container>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-blue-800 py-12 text-white">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-block text-5xl">{category.icon}</span>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Start a {category.name} Nonprofit
              </h1>
              <p className="mt-4 text-lg text-blue-100">{category.description}</p>
            </div>
          </Container>
        </section>

        <Container className="py-12">
          {/* Category Overview */}
          <section className="mb-12">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                  About {category.name} Nonprofits
                </h2>
                <p className="mb-4 text-gray-600">
                  {category.description} To start a {category.name.toLowerCase()} nonprofit, you
                  will need to incorporate in your state, apply for federal 501(c)(3) tax-exempt
                  status with the IRS, and comply with your state&apos;s specific requirements.
                </p>
                <p className="text-gray-600">
                  The process and costs vary by state. Below you can find guides for every US
                  state to help you navigate the formation process for your{' '}
                  {category.name.toLowerCase()} organization.
                </p>
              </div>
            </div>
          </section>

          {/* Featured States Grid */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Popular States for {category.name} Nonprofits
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {featuredStates.map((state) => (
                <Link
                  key={state.slug}
                  href={`/directory/${state.slug}`}
                  className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary">
                    {state.name}
                  </h3>
                  <div className="mt-2 space-y-1 text-xs text-gray-500">
                    <p>Filing Fee: ${state.filingFee}</p>
                    <p>{state.processingTime}</p>
                  </div>
                  <span className="mt-3 inline-flex items-center text-xs font-medium text-primary group-hover:underline">
                    View Guide
                    <svg
                      className="ml-1 h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* All States List */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              All State Guides for {category.name} Nonprofits
            </h2>
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="grid gap-px bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
                {states.map((state) => (
                  <Link
                    key={state.slug}
                    href={`/directory/${state.slug}`}
                    className="flex items-center justify-between bg-white px-5 py-4 transition-colors hover:bg-blue-50"
                  >
                    <div>
                      <span className="font-medium text-gray-900">{state.name}</span>
                      <span className="ml-2 text-xs text-gray-400">{state.abbreviation}</span>
                    </div>
                    <span className="text-sm font-semibold text-primary">${state.filingFee}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Other Categories */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Explore Other Nonprofit Categories
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories
                .filter((c) => c.slug !== category.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/directory/category/${c.slug}`}
                    className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <span className="text-3xl">{c.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary">
                        {c.name}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm text-gray-500">{c.description}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </section>

          {/* CTA */}
          <section className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-blue-800 p-8 text-center text-white sm:p-12">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Ready to Start Your {category.name} Nonprofit?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-blue-100">
              TurboCharity makes it easy. Our AI-powered platform handles the paperwork,
              generates your bylaws, and prepares your 501(c)(3) application.
            </p>
            <div className="mt-8">
              <Button href="/directory" variant="secondary" size="lg">
                Find Your State Guide
              </Button>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
