import Link from "next/link";
import { FolderKanban, Mail, Wrench } from "lucide-react";
import { ROUTES } from "@/shared/constants/routes";
import { Card } from "@/shared/components/ui/card";
import { countProjects } from "@/features/projects";
import { countSkills } from "@/features/skills";
import { countUnreadMessages } from "@/features/contact";

export default async function AdminDashboardPage() {
  const [projects, skills, unread] = await Promise.all([
    countProjects(),
    countSkills(),
    countUnreadMessages(),
  ]);

  const stats = [
    { label: "Total Proyek", value: projects, href: ROUTES.admin.projects, icon: FolderKanban },
    { label: "Total Keahlian", value: skills, href: ROUTES.admin.skills, icon: Wrench },
    { label: "Pesan Belum Dibaca", value: unread, href: ROUTES.admin.messages, icon: Mail },
  ];

  return (
    <main className="space-y-8">
      <div>
        <h1 className="text-foreground font-heading text-2xl font-bold">Ringkasan</h1>
        <p className="text-muted-foreground text-sm">Kondisi konten portofolio Anda saat ini.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map(({ label, value, href, icon: Icon }) => (
          <Link key={label} href={href}>
            <Card className="card-luxury border-border/80 bg-card flex items-center gap-4 p-5">
              <div className="border-gold/30 bg-gold/10 text-gold flex size-11 items-center justify-center rounded-xl border">
                <Icon className="size-5" />
              </div>
              <div>
                <p className="text-foreground font-heading text-2xl font-bold">{value}</p>
                <p className="text-muted-foreground text-xs">{label}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
