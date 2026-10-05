/** Serialisasi JSON-LD yang aman dipasang di <script type="application/ld+json">. */
export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
