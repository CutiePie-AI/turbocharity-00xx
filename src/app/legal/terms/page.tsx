import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { termsOfService } from "@/data/legal";
import { getOpenGraphMeta } from "@/data/seo-metadata";

export const metadata: Metadata = {
  title: "Terms of Service | TurboCharity",
  description:
    "Read TurboCharity's Terms of Service. Understand the terms governing your use of our AI-powered nonprofit creation platform and services.",
  ...getOpenGraphMeta("/"),
};

/**
 * Converts markdown-like legal text to simple HTML for rendering.
 */
function renderLegalContent(content: string): string {
  const lines = content.trim().split("\n");
  let html = "";
  let inList = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      continue;
    }

    if (trimmed === "---") {
      if (inList) { html += "</ul>"; inList = false; }
      html += '<hr class="my-8 border-gray-300 dark:border-gray-700" />';
      continue;
    }

    if (trimmed.startsWith("### ")) {
      if (inList) { html += "</ul>"; inList = false; }
      const text = trimmed.slice(4).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      html += `<h3 class="mt-8 mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">${text}</h3>`;
      continue;
    }
    if (trimmed.startsWith("## ")) {
      if (inList) { html += "</ul>"; inList = false; }
      const text = trimmed.slice(3).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      html += `<h2 class="mt-10 mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">${text}</h2>`;
      continue;
    }
    if (trimmed.startsWith("# ")) {
      if (inList) { html += "</ul>"; inList = false; }
      const text = trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      html += `<h1 class="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">${text}</h1>`;
      continue;
    }

    if (trimmed.startsWith("- ")) {
      if (!inList) {
        html += '<ul class="my-4 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">';
        inList = true;
      }
      const text = trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      html += `<li>${text}</li>`;
      continue;
    }

    if (inList) { html += "</ul>"; inList = false; }
    const text = trimmed.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    html += `<p class="my-4 leading-relaxed text-gray-700 dark:text-gray-300">${text}</p>`;
  }

  if (inList) html += "</ul>";
  return html;
}

export default function TermsOfServicePage() {
  const contentHtml = renderLegalContent(termsOfService);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service",
    description: "TurboCharity Terms of Service",
    url: "https://turbocharity.com/legal/terms",
    publisher: {
      "@type": "Organization",
      name: "TurboCharity",
      url: "https://turbocharity.com",
    },
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <article
          className="prose prose-gray max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </main>
      <Footer />
    </>
  );
}
