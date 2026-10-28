import type { Metadata } from "next";
import { PageContainer, SectionIntro } from "@/shared/components";
import { buildMetadata } from "@/shared/lib/seo/buildMetadata";
import { ContactForm, ContactPanel, ContactPaths } from "@/features/contact";
import { getProfile } from "@/features/profile";

export const revalidate = 3600;

export const metadata: Metadata = buildMetadata({
  title: "Hubungi Rakha",
  description:
    "Untuk peluang kerja, kolaborasi, atau pertanyaan teknis. Saya membalas maksimal 1×24 jam kerja.",
  path: "/contact",
});

export default async function ContactPage() {
  const profile = await getProfile();
  const resumeUrl = profile?.resumeUrl ?? "/resume.pdf";

  return (
    <PageContainer className="space-y-12 py-8 md:py-12">
      <SectionIntro
        as="h1"
        title="Hubungi Rakha"
        description="Untuk peluang kerja, kolaborasi, atau pertanyaan teknis. Saya membalas maksimal 1×24 jam kerja."
      />

      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
        <div className="lg:col-span-5">
          <ContactPanel resumeUrl={resumeUrl} />
        </div>
      </div>

      <ContactPaths resumeUrl={resumeUrl} />
    </PageContainer>
  );
}
