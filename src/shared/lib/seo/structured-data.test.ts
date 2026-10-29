import { describe, expect, it } from "vitest";
import { siteConfig } from "@/shared/constants/siteConfig";
import {
  aboutPageNode,
  collectionPageNode,
  contactPageNode,
  jsonLdGraph,
  personNode,
  profilePageNode,
  webSiteNode,
} from "./structured-data";

const site = siteConfig.url.replace(/\/$/, "");

describe("personNode", () => {
  it("memuat identitas, lokasi, tautan, dan knowsAbout tanpa rating", () => {
    const person = personNode();

    expect(person["@type"]).toBe("Person");
    expect(person.name).toBe(siteConfig.name);
    expect(person.jobTitle).toBe(siteConfig.role);
    expect(person.sameAs).toEqual([siteConfig.socials.github, siteConfig.socials.linkedin]);
    expect(person.address).toMatchObject({ addressLocality: "Brebes", addressCountry: "ID" });
    expect(Array.isArray(person.knowsAbout)).toBe(true);
    expect(person).not.toHaveProperty("aggregateRating");
  });

  it("menambahkan alumniOf/worksFor/knowsLanguage bila diberi", () => {
    const person = personNode({
      alumniOf: ["Politeknik Negeri Semarang"],
      worksFor: ["PT Indosat Ooredoo Hutchison (Circle Java)"],
      knowsLanguage: ["Indonesia", "Inggris"],
    });

    expect(person.alumniOf).toEqual([
      { "@type": "CollegeOrUniversity", name: "Politeknik Negeri Semarang" },
    ]);
    expect(person.worksFor).toEqual([
      { "@type": "Organization", name: "PT Indosat Ooredoo Hutchison (Circle Java)" },
    ]);
    expect(person.knowsLanguage).toEqual(["Indonesia", "Inggris"]);
  });
});

describe("collectionPageNode", () => {
  it("membuat ItemList dengan posisi dan URL absolut", () => {
    const page = collectionPageNode({
      name: "Proyek",
      path: "/projects",
      items: [
        { name: "SIRATA", path: "/projects/sirata" },
        { name: "DSE AI", path: "/projects/dse-ai" },
      ],
    });

    expect(page["@type"]).toBe("CollectionPage");
    expect(page.url).toBe(`${site}/projects`);
    expect(page.mainEntity).toMatchObject({
      "@type": "ItemList",
      numberOfItems: 2,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "SIRATA", url: `${site}/projects/sirata` },
        { "@type": "ListItem", position: 2, name: "DSE AI", url: `${site}/projects/dse-ai` },
      ],
    });
  });
});

describe("halaman lain", () => {
  it("about/contact/profile/website memakai tipe yang benar", () => {
    expect(aboutPageNode({})["@type"]).toBe("AboutPage");
    expect(contactPageNode()["@type"]).toBe("ContactPage");
    expect(profilePageNode()["@type"]).toBe("ProfilePage");
    expect(webSiteNode()["@type"]).toBe("WebSite");
  });

  it("menggabungkan node menjadi satu @graph berkonteks", () => {
    const graph = jsonLdGraph([webSiteNode(), personNode(), profilePageNode()]);

    expect(graph["@context"]).toBe("https://schema.org");
    expect(Array.isArray(graph["@graph"])).toBe(true);
    expect((graph["@graph"] as unknown[]).length).toBe(3);
  });
});
