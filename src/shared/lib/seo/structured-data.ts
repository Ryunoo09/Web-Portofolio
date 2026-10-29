import { siteConfig } from "@/shared/constants/siteConfig";
import { PROJECT_DOMAIN_LABELS } from "@/shared/lib/taxonomy";

const SITE = siteConfig.url.replace(/\/$/, "");
const PERSON_ID = `${SITE}/#person`;

type PersonOptions = {
  alumniOf?: readonly string[];
  worksFor?: readonly string[];
  knowsLanguage?: readonly string[];
  knowsAbout?: readonly string[];
};

/**
 * Node `Person` dari data situs. Tidak ada rating/review/penawaran palsu —
 * hanya identitas, lokasi, tautan, dan bidang yang memang dibuktikan proyek.
 */
export function personNode(options: PersonOptions = {}): Record<string, unknown> {
  const [locality, region] = siteConfig.location.split(",").map((part) => part.trim());

  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: SITE,
    email: siteConfig.socials.email,
    sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: locality,
      addressRegion: region,
      addressCountry: "ID",
    },
    knowsAbout: options.knowsAbout ?? Object.values(PROJECT_DOMAIN_LABELS),
    ...(options.alumniOf?.length
      ? {
          alumniOf: options.alumniOf.map((name) => ({
            "@type": "CollegeOrUniversity",
            name,
          })),
        }
      : {}),
    ...(options.worksFor?.length
      ? {
          worksFor: options.worksFor.map((name) => ({ "@type": "Organization", name })),
        }
      : {}),
    ...(options.knowsLanguage?.length ? { knowsLanguage: options.knowsLanguage } : {}),
  };
}

export function webSiteNode(): Record<string, unknown> {
  return {
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    name: siteConfig.name,
    url: SITE,
    inLanguage: "id-ID",
    publisher: { "@id": PERSON_ID },
  };
}

export function profilePageNode(): Record<string, unknown> {
  return {
    "@type": "ProfilePage",
    "@id": `${SITE}/#profile`,
    name: siteConfig.title,
    url: SITE,
    inLanguage: "id-ID",
    mainEntity: { "@id": PERSON_ID },
  };
}

export function aboutPageNode(options: PersonOptions): Record<string, unknown> {
  return {
    "@type": "AboutPage",
    url: `${SITE}/about`,
    inLanguage: "id-ID",
    mainEntity: personNode(options),
  };
}

export function contactPageNode(): Record<string, unknown> {
  return {
    "@type": "ContactPage",
    url: `${SITE}/contact`,
    inLanguage: "id-ID",
    mainEntity: personNode(),
  };
}

type CollectionItem = {
  name: string;
  path: string;
};

/** `CollectionPage` + `ItemList` (posisi, nama, URL absolut). */
export function collectionPageNode({
  name,
  path,
  items,
}: {
  name: string;
  path: string;
  items: readonly CollectionItem[];
}): Record<string, unknown> {
  return {
    "@type": "CollectionPage",
    name,
    url: `${SITE}${path}`,
    inLanguage: "id-ID",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: `${SITE}${item.path}`,
      })),
    },
  };
}

/** Satu blok JSON-LD dengan `@graph` agar node bisa saling merujuk `@id`. */
export function jsonLdGraph(nodes: readonly Record<string, unknown>[]): Record<string, unknown> {
  return { "@context": "https://schema.org", "@graph": nodes };
}
