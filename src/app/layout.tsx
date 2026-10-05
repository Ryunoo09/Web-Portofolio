import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/shared/constants/siteConfig";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
};

// TODO (saat desain siap): pilih font dengan next/font dan pasang className-nya di <html>.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
