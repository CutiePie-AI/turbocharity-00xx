import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { termsOfService } from "@/data/legal";

export const metadata: Metadata = {
  title: "Terms of Service | TurboCharity",
  description:
    "Read the Terms of Service for TurboCharity, the AI-powered nonprofit creation platform. Covers usage terms, liability limitations, and service conditions.",
};

/**
 * Converts a subset of Markdown-like formatting to HTML.
 * Handles headings, bold, horizontal rules, links, and lists.
 */
function renderLegalContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let key = 0;

  function flushList() {
    if (listItems.length > 0) {
      elements.push(
        <ul key={key++} className="mb-4 list-disc space-y-1 pl-6 text-gray-700">
          {listItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          ))}
        </ul>
      );
      listItems = [];
    }
  }

  function inlineFormat(text: string): string {
    return text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary underline">$1</a>');
  }

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed === "") {
      flushList();
      continue;
    }

    if (trimmed === "---") {
      flushList();
      elements.push(<hr key={key++} className="my-8 border-gray-200" />);
      continue;
    }

    if (trimmed.startsWith("# ")) {
      flushList();
      elements.push(
        <h1 key={key++} className="mb-4 mt-8 text-3xl font-bold text-gray-900">
          {trimmed.slice(2)}
        </h1>
      );
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={key++} className="mb-3 mt-8 text-2xl font-semibold text-gray-900">
          {trimmed.slice(3)}
        </h2>
      );
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={key++} className="mb-2 mt-6 text-lg font-semibold text-gray-800">
          {trimmed.slice(4)}
        </h3>
      );
      continue;
    }

    if (trimmed.startsWith("- ")) {
      listItems.push(trimmed.slice(2));
      continue;
    }

    flushList();
    elements.push(
      <p
        key={key++}
        className="mb-4 leading-7 text-gray-700"
        dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed) }}
      />
    );
  }

  flushList();
  return elements;
}

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12 lg:px-8 lg:py-16">
        <article className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-primary prose-strong:text-gray-900">
          {renderLegalContent(termsOfService)}
        </article>
      </main>
      <Footer />
    </>
  );
}
