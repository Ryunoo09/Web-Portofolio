import type { V2CertificatesProps } from "../types";

export function V2Certificates({ certificates }: V2CertificatesProps) {
  return (
    <section id="skill" className="bg-[#FDFBF9] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="mb-12 flex items-center gap-3">
          <span className="rounded-full border border-[#C59B27]/30 bg-[#FEF3C7] px-4 py-1.5 text-xs font-bold tracking-wider text-[#8A6A1F]">
            SERTIFIKASI
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#C59B27]/40 to-transparent" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-2xl border-l-4 border-[#C59B27] bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="font-heading text-lg font-bold text-[#0F172A]">{cert.title}</h3>
              <p className="mt-1 text-sm font-medium text-[#475569]">{cert.issuer}</p>
              {cert.description && (
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">{cert.description}</p>
              )}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-semibold text-[#C59B27] transition hover:text-[#8A6A1F]"
                >
                  Lihat Sertifikat ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
