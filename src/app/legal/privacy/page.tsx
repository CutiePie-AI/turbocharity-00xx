import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { privacyPolicy } from "@/data/legal";
import { seoMetadata, getOpenGraphMeta, getJsonLd } from "@/data/seo-metadata";

export const metadata: Metadata = {
  title: "Privacy Policy | TurboCharity",
  description:
    "Read TurboCharity's Privacy Policy. Learn how we collect, use, and protect your personal information when using our nonprofit formation platform.",
  ...getOpenGraphMeta("/"),
};

/**
 * Converts markdown-like legal text to simple HTML for rendering.
 * Handles headings (#, ##, ###), bold (**), horizontal rules (---),
 * unordered lists (- ), and paragraphs.
 */
function renderLegalContent(content: string): string {
  const lines = content.trim().split("\n");
  let html = "";
  let inList = false;

  for (const line of lines) {
    const trimmed = line.trim();

    // Skip empty lines — close list if open, add spacing
    if (!trimmed) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      continue;
    }

    // Horizontal rule
    if (trimmed === "---") {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += '<hr class="my-8 border-gray-300 dark:border-gray-700" />';
      continue;
    }

    // Headings
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

    // Unordered list items
    if (trimmed.startsWith("- ")) {
      if (!inList) {
        html += '<ul class="my-4 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">';
        inList = true;
      }
      const text = trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      html += `<li>${text}</li>`;
      continue;
    }

    // Paragraph
    if (inList) { html += "</ul>"; inList = false; }
    const text = trimmed.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    html += `<p class="my-4 leading-relaxed text-gray-700 dark:text-gray-300">${text}</p>`;
  }

  if (inList) html += "</ul>";
  return html;
}

export default function PrivacyPolicyPage() {
  const contentHtml = renderLegalContent(privacyPolicy);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    description: "TurboCharity Privacy Policy",
    url: "https://turbocharity.com/legal/privacy",
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
