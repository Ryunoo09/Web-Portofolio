import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/shared/constants/siteConfig";
import { ThemeProvider } from "@/shared/components/common/ThemeProvider";
import "./globals.css";

// `display: "optional"`: teks langsung tampil dengan fallback bila font belum siap,
// sehingga LCP tidak mundur karena font swap di koneksi lambat.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "optional",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "optional",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "optional",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Backend & Data Engineer",
    "Backend Engineer",
    "Data Engineer",
    "Python",
    "FastAPI",
    "Laravel",
    "PostgreSQL",
    "Portofolio Developer Indonesia",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@rakhadev",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // CSS memakai `scroll-behavior: smooth`; `data-scroll-behavior` memberi tahu
  // router agar transisi halaman tidak ikut dihaluskan (syarat Next.js 16).
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${jakarta.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground selection:bg-gold/30 selection:text-foreground flex min-h-full flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
