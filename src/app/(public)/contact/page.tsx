import type { Metadata } from "next";
import { PageContainer, SectionHeading } from "@/shared/components";
import { buildMetadata } from "@/shared/lib/seo/buildMetadata";
import { ContactForm, ContactInfoCard } from "@/features/contact";

export const metadata: Metadata = buildMetadata({
  title: "Hubungi Saya & Konsultasi Proyek",
  description:
    "Mari terhubung untuk membahas proyek web baru, konsultasi arsitektur, atau peluang kerja sama rekayasa perangkat lunak.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageContainer className="space-y-10 py-12 md:py-16">
      <SectionHeading
        badge="Saluran Komunikasi"
        title="Hubungi"
        highlight="Saya"
        description="Punya pertanyaan atau ingin mendiskusikan rencana proyek? Kirimkan pesan melalui form di bawah atau hubungi saya langsung."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
        <div className="lg:col-span-5">
          <ContactInfoCard />
        </div>
      </div>
    </PageContainer>
  );
}
