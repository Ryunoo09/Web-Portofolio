import type { V2AboutProps } from "../types";

const CONTRIBUTIONS = [
  {
    title: "Sistem Operasional",
    description:
      "Membangun pipeline data real-time untuk FTTH YOLO26, DSE AI, dan SIRATA dengan akurasi prediksi 88,62%.",
    icon: "📊",
  },
  {
    title: "Automasi & Efisiensi",
    description:
      "Mengotomasi proses manual menjadi sistem terukur. Waktu proses turun dari 10 menit menjadi 2 menit.",
    icon: "⚡",
  },
  {
    title: "Computer Vision",
    description:
      "Implementasi model YOLO26 dan PaddleOCR untuk deteksi objek dan ekstraksi data dari dokumen FTTH.",
    icon: "👁️",
  },
  {
    title: "Kolaborasi Tim",
    description:
      "Bekerja lintas fungsi di Indosat, Polines TRK, dan tim internal untuk deliverables yang terukur.",
    icon: "🤝",
  },
];

export function V2About({ profile, skills }: V2AboutProps) {
  const skillsByName = (skills ?? []).slice(0, 12);

  return (
    <section id="tentang" className="bg-[#FDFBF9] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        {/* Section badge */}
        <div className="mb-12 flex items-center gap-3">
          <span className="rounded-full border border-[#C59B27]/30 bg-[#FEF3C7] px-4 py-1.5 text-xs font-bold tracking-wider text-[#8A6A1F]">
            TENTANG SAYA
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#C59B27]/40 to-transparent" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Profile summary card */}
          <div className="rounded-3xl border-l-4 border-[#C59B27] bg-white p-6 shadow-sm md:p-8">
            <h3 className="font-heading text-lg font-bold text-[#0F172A]">Ringkasan Profil</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#475569]">{profile?.headline}</p>
            {profile?.bio && (
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">{profile.bio}</p>
            )}
            <p className="mt-4 text-xs font-medium text-[#8A6A1F]">
              📍 {profile?.location ?? "Brebes, Jawa Tengah, Indonesia"}
            </p>
          </div>

          {/* Collaboration card */}
          <div className="rounded-3xl border-l-4 border-[#C59B27] bg-white p-6 shadow-sm md:p-8">
            <h3 className="font-heading text-lg font-bold text-[#0F172A]">
              Mari Terkoneksi &amp; Kolaborasi
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#475569]">
              Terbuka untuk peluang Software Engineer &amp; Backend Engineer. Fokus pada sistem data
              terintegrasi, computer vision, dan otomasi proses.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(profile?.socialLinks ?? []).map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#FDFBF9] px-3 py-1 text-xs font-medium text-[#475569] transition hover:bg-[#FEF3C7] hover:text-[#8A6A1F]"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contribution grid */}
        <div className="mt-10">
          <h3 className="font-heading mb-6 text-lg font-bold text-[#0F172A]">
            Kontribusi Profesional
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONTRIBUTIONS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border-l-4 border-[#C59B27] bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <span className="text-2xl">{item.icon}</span>
                <h4 className="mt-3 text-sm font-bold text-[#0F172A]">{item.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-[#475569]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack chips */}
        <div className="mt-10">
          <h3 className="font-heading mb-4 text-lg font-bold text-[#0F172A]">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {skillsByName.map((skill) => (
              <span
                key={skill.id}
                className="rounded-full border border-[#FEF3C7] bg-[#FDFBF9] px-4 py-2 text-xs font-semibold text-[#8A6A1F]"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
