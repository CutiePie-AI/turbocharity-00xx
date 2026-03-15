/**
 * Renders a JSON-LD structured data script tag.
 *
 * Accepts any JSON-LD object and safely serialises it into a
 * `<script type="application/ld+json">` tag with proper escaping
 * to prevent XSS via embedded `</script>` strings.
 */
export default function StructuredData({ data }: { data: Record<string, unknown> }) {
  const jsonString = JSON.stringify(data).replace(
    /<\/script/gi,
    '<\\/script',
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}
