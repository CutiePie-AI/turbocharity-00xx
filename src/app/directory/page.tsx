import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import DirectorySearch from '@/components/DirectorySearch';
import { states } from '@/data/states';
import { categories } from '@/data/categories';

export const metadata: Metadata = {
  title: 'Nonprofit Formation Guide by State | TurboCharity',
  description:
    'Complete state-by-state guide to forming a nonprofit organization. Compare filing fees, processing times, and requirements across all 50 US states.',
};

export default function DirectoryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-blue-800 py-16 text-white">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Nonprofit Formation Guide by State
              </h1>
              <p className="mt-4 text-lg text-blue-100">
                Everything you need to know about starting a 501(c)(3) in your state.
                Compare filing fees, processing times, and requirements across all 50 states.
              </p>
            </div>
          </Container>
        </section>

        <Container className="py-12">
          <div className="lg:flex lg:gap-12">
            {/* Main Content */}
            <div className="flex-1">
              <DirectorySearch states={states} />
            </div>

            {/* Sidebar - Categories */}
            <aside className="mt-12 lg:mt-0 lg:w-80 lg:shrink-0">
              <div className="sticky top-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold text-gray-900">
                  Browse by Category
                </h2>
                <p className="mb-6 text-sm text-gray-500">
                  Find formation guides tailored to your nonprofit type.
                </p>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.slug}>
                      <Link
                        href={`/directory/category/${category.slug}`}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-primary"
                      >
                        <span className="text-lg">{category.icon}</span>
                        <span>{category.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Stats */}
              <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold text-gray-900">
                  Quick Facts
                </h2>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-gray-500">
                      Lowest Filing Fee
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-gray-900">
                      Kentucky &mdash; $8
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-gray-500">
                      Fastest Processing
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-gray-900">
                      California &mdash; 2-5 business days
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-gray-500">
                      States Covered
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-gray-900">
                      All 50 States
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
