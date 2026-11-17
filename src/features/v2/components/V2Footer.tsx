import { siteConfig } from "@/shared/constants/siteConfig";

export function V2Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E2E8F0] bg-white py-12">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 px-6 md:px-8">
        <p className="font-heading text-lg font-bold text-[#0F172A]">rakha.dev</p>
        <div className="flex items-center gap-2 text-sm text-[#475569]">
          <span>
            © {year} {siteConfig.shortName} · {siteConfig.role}
          </span>
          <span className="text-[#C59B27]">·</span>
          <span>{siteConfig.location}</span>
        </div>
        <div className="mt-4 h-px w-32 bg-gradient-to-r from-transparent via-[#C59B27]/50 to-transparent" />
      </div>
    </footer>
  );
}
