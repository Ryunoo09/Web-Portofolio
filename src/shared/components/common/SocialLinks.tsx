import { Globe, Mail } from "lucide-react";
import type { ResolvedSocialLink } from "@/shared/lib/social-links";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./Icons";

const ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  whatsapp: WhatsappIcon,
  email: Mail,
};

interface SocialLinksProps {
  links: ResolvedSocialLink[];
  className?: string;
}

/** Daftar tautan sosial dari profil, dengan ikon per platform. */
export function SocialLinks({ links, className }: SocialLinksProps) {
  if (links.length === 0) return null;

  return (
    <ul className={className ?? "flex flex-wrap items-center gap-3"}>
      {links.map((link) => {
        const Icon = ICONS[link.platform as keyof typeof ICONS] ?? Globe;

        return (
          <li key={link.platform}>
            <a
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-gold-muted hover:text-foreground focus-visible:ring-ring inline-flex items-center gap-1 rounded-sm text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <Icon className="size-3.5 shrink-0" aria-hidden="true" />
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
