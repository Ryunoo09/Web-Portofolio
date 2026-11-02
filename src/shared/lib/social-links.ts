import { siteConfig } from "@/shared/constants/siteConfig";
import { buildWhatsAppUrl } from "./whatsapp";

export type SocialLinkInput = { platform: string; url: string };

export type ResolvedSocialLink = {
  platform: string;
  label: string;
  href: string;
  external: boolean;
};

/** Bagian profil yang dibutuhkan footer dan halaman kontak. */
export type SocialProfile = {
  email?: string | null;
  location?: string | null;
  socialLinks?: SocialLinkInput[] | null;
  whatsappNumber?: string | null;
  whatsappMessage?: string | null;
};

const LABELS: Record<string, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  whatsapp: "WhatsApp",
  instagram: "Instagram",
  telegram: "Telegram",
  twitter: "Twitter",
  x: "X",
  youtube: "YouTube",
  facebook: "Facebook",
  tiktok: "TikTok",
  website: "Website",
};

const ORDER = ["github", "linkedin", "whatsapp"];

const FALLBACK_LINKS: SocialLinkInput[] = [
  { platform: "github", url: siteConfig.socials.github },
  { platform: "linkedin", url: siteConfig.socials.linkedin },
];

function normalizePlatform(platform: string): string {
  return platform.trim().toLowerCase();
}

function labelFor(platform: string): string {
  return LABELS[platform] ?? platform.charAt(0).toUpperCase() + platform.slice(1);
}

function toHref(url: string): string | null {
  const value = url.trim();
  if (!value) return null;

  try {
    const parsed = new URL(value);
    if (parsed.protocol === "mailto:" || parsed.protocol === "tel:") return value;
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

function addLink(
  links: Map<string, ResolvedSocialLink>,
  platform: string,
  url: string | null | undefined,
): void {
  const key = normalizePlatform(platform);
  if (!key || links.has(key)) return;

  const href = url ? toHref(url) : null;
  if (!href) return;

  links.set(key, {
    platform: key,
    label: labelFor(key),
    href,
    external: !href.startsWith("mailto:") && !href.startsWith("tel:"),
  });
}

/**
 * Gabungkan tautan dari dashboard dengan fallback statis. Tautan database
 * menang; WhatsApp dari kolom khusus menimpa entri `whatsapp` di JSON.
 */
export function resolveSocialLinks(profile?: SocialProfile | null): ResolvedSocialLink[] {
  const links = new Map<string, ResolvedSocialLink>();

  for (const link of profile?.socialLinks ?? []) {
    addLink(links, link.platform, link.url);
  }

  for (const fallback of FALLBACK_LINKS) {
    addLink(links, fallback.platform, fallback.url);
  }

  const whatsappHref = buildWhatsAppUrl(profile?.whatsappNumber, profile?.whatsappMessage);
  if (whatsappHref) {
    links.set("whatsapp", {
      platform: "whatsapp",
      label: labelFor("whatsapp"),
      href: whatsappHref,
      external: true,
    });
  }

  const rank = (platform: string) => {
    const index = ORDER.indexOf(platform);
    return index === -1 ? ORDER.length : index;
  };

  return [...links.values()].sort(
    (a, b) => rank(a.platform) - rank(b.platform) || a.label.localeCompare(b.label),
  );
}
