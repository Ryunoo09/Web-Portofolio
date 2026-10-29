import * as React from "react";

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
  id?: string;
}

/**
 * Script JSON-LD aman: `</script>` di data di-escape agar tidak keluar dari tag.
 */
export function JsonLd({ data, id }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return <script id={id} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
