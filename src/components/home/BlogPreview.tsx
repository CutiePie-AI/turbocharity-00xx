import Section from "@/components/ui/Section";
import { blogPosts } from "@/data/blog-posts";

const latestPosts = blogPosts.slice(0, 3);

/** Extract a short category from the first tag */
function categoryFromTags(tags: string[]): string {
  if (tags.length === 0) return "Guide";
  const tag = tags[0];
  // Capitalize first letter
  return tag.charAt(0).toUpperCase() + tag.slice(1);
}

export default function BlogPreview() {
  return (
    <Section aria-label="Blog" className="bg-white">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
          Nonprofit Formation Resources
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Expert guides, tips, and insights to help you launch and grow your
          nonprofit.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {latestPosts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Gradient placeholder image */}
            <div className="relative h-48 bg-gradient-to-br from-blue-50 to-[#10B981]/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="h-12 w-12 text-[#2563EB]/20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>

              {/* Category badge */}
              <span className="absolute left-4 top-4 rounded-full bg-[#2563EB] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                {categoryFromTags(post.tags)}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-bold leading-snug text-dark transition-colors group-hover:text-[#2563EB]">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                <span>{post.readingTime} min read</span>
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="/blog"
          className="inline-flex items-center gap-1 font-semibold text-[#2563EB] transition-colors hover:text-blue-700"
        >
          View All Posts &rarr;
        </a>
      </div>
    </Section>
  );
}
