import { ContactForm } from "@/features/contact";
import { GithubIcon, LinkedinIcon } from "@/shared/components";
import { siteConfig } from "@/shared/constants/siteConfig";
import type { V2ContactProps } from "../types";

export function V2Contact({ profile }: V2ContactProps) {
  const email = profile?.email ?? siteConfig.socials?.email ?? "rakha@example.com";

  return (
    <section id="kontak" className="bg-[#FDFBF9] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="mb-12 flex items-center gap-3">
          <span className="rounded-full border border-[#C59B27]/30 bg-[#FEF3C7] px-4 py-1.5 text-xs font-bold tracking-wider text-[#8A6A1F]">
            KONTAK
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#C59B27]/40 to-transparent" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Left: contact form */}
          <div className="rounded-3xl border-l-4 border-[#C59B27] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-heading mb-4 text-lg font-bold text-[#0F172A]">Hubungi Saya</h2>
            <ContactForm />
          </div>

          {/* Right: direct contact info */}
          <div className="space-y-4">
            <div className="rounded-3xl border-l-4 border-[#C59B27] bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold text-[#0F172A]">Lokasi</h3>
              <p className="mt-2 text-sm text-[#475569]">
                {profile?.location ?? siteConfig.location}
              </p>
            </div>

            <div className="rounded-3xl border-l-4 border-[#C59B27] bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold text-[#0F172A]">Email</h3>
              <a
                href={`mailto:${email}`}
                className="mt-2 block text-sm text-[#C59B27] transition hover:text-[#8A6A1F]"
              >
                {email}
              </a>
            </div>

            <div className="rounded-3xl border-l-4 border-[#C59B27] bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold text-[#0F172A]">Jaringan</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {(profile?.socialLinks ?? []).map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-[#FEF3C7] bg-[#FDFBF9] px-4 py-2 text-xs font-semibold text-[#475569] transition hover:border-[#C59B27] hover:text-[#8A6A1F]"
                  >
                    {link.platform === "github" ? <GithubIcon size={14} /> : null}
                    {link.platform === "linkedin" ? <LinkedinIcon size={14} /> : null}
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
