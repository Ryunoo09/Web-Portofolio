import Link from "next/link";
import {
  Award,
  Briefcase,
  Building2,
  FolderKanban,
  GraduationCap,
  Languages,
  Mail,
  Wrench,
} from "lucide-react";
import { ROUTES } from "@/shared/constants/routes";
import { AdminPageHeader } from "@/shared/components/admin";
import { Card } from "@/shared/components/ui/card";
import { countProjects } from "@/features/projects";
import { countSkills } from "@/features/skills";
import { countExperiences } from "@/features/experiences";
import { countEducation } from "@/features/education";
import { countOrganizations } from "@/features/organizations";
import { countLanguages } from "@/features/languages";
import { countCertificates } from "@/features/certificates";
import { getContactMessages } from "@/features/contact";

export default async function AdminDashboardPage() {
  const [
    projects,
    skills,
    experiences,
    education,
    organizations,
    languages,
    certificates,
    messages,
  ] = await Promise.all([
    countProjects(),
    countSkills(),
    countExperiences(),
    countEducation(),
    countOrganizations(),
    countLanguages(),
    countCertificates(),
    getContactMessages(),
  ]);

  const unread = messages.filter((message) => !message.isRead).length;

  const stats = [
    { label: "Total Proyek", value: projects, href: ROUTES.admin.projects, icon: FolderKanban },
    { label: "Total Keahlian", value: skills, href: ROUTES.admin.skills, icon: Wrench },
    {
      label: "Total Pengalaman",
      value: experiences,
      href: ROUTES.admin.experiences,
      icon: Briefcase,
    },
    {
      label: "Total Pendidikan",
      value: education,
      href: ROUTES.admin.education,
      icon: GraduationCap,
    },
    {
      label: "Total Organisasi",
      value: organizations,
      href: ROUTES.admin.organizations,
      icon: Building2,
    },
    {
      label: "Total Bahasa",
      value: languages,
      href: ROUTES.admin.languages,
      icon: Languages,
    },
    {
      label: "Total Sertifikat",
      value: certificates,
      href: ROUTES.admin.certificates,
      icon: Award,
    },
    { label: "Pesan Belum Dibaca", value: unread, href: ROUTES.admin.messages, icon: Mail },
  ];

  const latestMessages = messages.slice(0, 5);

  return (
    <main className="space-y-8">
      <AdminPageHeader title="Ringkasan" description="Kondisi konten portofolio Anda saat ini." />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map(({ label, value, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="focus-visible:ring-ring rounded-xl focus-visible:ring-2 focus-visible:outline-none"
          >
            <Card className="border-border/80 bg-card flex flex-row items-center gap-4 p-5">
              <div className="border-gold/30 bg-gold/10 text-gold flex size-11 shrink-0 items-center justify-center rounded-xl border">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-foreground font-heading text-2xl font-bold">{value}</p>
                <p className="text-muted-foreground text-xs">{label}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-foreground font-heading text-lg font-bold">5 Pesan Terbaru</h2>
          <Link
            href={ROUTES.admin.messages}
            className="text-gold focus-visible:ring-ring rounded-sm text-sm font-semibold focus-visible:ring-2 focus-visible:outline-none"
          >
            Lihat semua
          </Link>
        </div>

        {latestMessages.length === 0 ? (
          <p className="border-border/60 text-muted-foreground rounded-xl border border-dashed p-6 text-center text-sm">
            Belum ada pesan masuk.
          </p>
        ) : (
          <ul className="space-y-2">
            {latestMessages.map((message) => (
              <li key={message.id}>
                <Link
                  href={ROUTES.admin.messages}
                  className="border-border/70 hover:bg-secondary/50 focus-visible:ring-ring flex items-start justify-between gap-4 rounded-lg border p-3 transition-colors focus-visible:ring-2 focus-visible:outline-none"
                >
                  <span className="min-w-0">
                    <span className="text-foreground block truncate text-sm font-medium">
                      {message.name}
                      {!message.isRead && <span className="text-gold"> · baru</span>}
                    </span>
                    <span className="text-muted-foreground block truncate text-xs">
                      {message.subject || "Tanpa subjek"}
                    </span>
                  </span>
                  <span className="text-muted-foreground shrink-0 font-mono text-xs">
                    {new Intl.DateTimeFormat("id-ID", { dateStyle: "medium" }).format(
                      new Date(message.createdAt),
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
