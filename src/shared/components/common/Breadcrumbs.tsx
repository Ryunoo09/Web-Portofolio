import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { siteConfig } from "@/shared/constants/siteConfig";
import { JsonLd } from "./JsonLd";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

function toAbsoluteUrl(href?: string) {
  if (!href) return siteConfig.url;
  if (href.startsWith("http")) return href;
  return `${siteConfig.url.replace(/\/$/, "")}${href}`;
}

/**
 * Breadcrumb terlihat + `BreadcrumbList` JSON-LD.
 * Item terakhir memakai `aria-current="page"` dan tidak dirender sebagai link.
 */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: toAbsoluteUrl(item.href),
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className={cn("text-xs", className)}>
        <ol className="text-muted-foreground flex flex-wrap items-center gap-1.5">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
                {item.href && !isLast ? (
                  <Link href={item.href} className="hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
                )}
                {!isLast && <ChevronRight className="size-3 shrink-0" aria-hidden="true" />}
              </li>
            );
          })}
        </ol>
      </nav>
      {items.length > 0 && <JsonLd data={schema} />}
    </>
  );
}
