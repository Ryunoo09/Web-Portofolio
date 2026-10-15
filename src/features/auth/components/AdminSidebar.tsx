"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Award,
  Briefcase,
  ExternalLink,
  FolderKanban,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Mail,
  User,
  Wrench,
} from "lucide-react";
import { ROUTES } from "@/shared/constants/routes";
import { cn } from "@/shared/lib/utils";
import { logout } from "../server/actions";

const links = [
  { href: ROUTES.admin.root, label: "Ringkasan", icon: LayoutDashboard },
  { href: ROUTES.admin.projects, label: "Proyek", icon: FolderKanban },
  { href: ROUTES.admin.skills, label: "Keahlian", icon: Wrench },
  { href: ROUTES.admin.experiences, label: "Pengalaman", icon: Briefcase },
  { href: ROUTES.admin.education, label: "Pendidikan", icon: GraduationCap },
  { href: ROUTES.admin.certificates, label: "Sertifikat", icon: Award },
  { href: ROUTES.admin.profile, label: "Profil", icon: User },
  { href: ROUTES.admin.messages, label: "Pesan", icon: Mail },
];

interface AdminSidebarProps {
  email: string | null;
}

export function AdminSidebar({ email }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="border-border/60 bg-card/40 flex w-60 shrink-0 flex-col border-r">
      <div className="border-border/60 border-b p-4">
        <p className="text-foreground text-sm font-semibold">Panel Admin</p>
        <p className="text-muted-foreground truncate text-xs" title={email ?? undefined}>
          {email ?? "—"}
        </p>
      </div>

      <nav className="flex-1 space-y-1 p-3" aria-label="Navigasi Admin">
        {links.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-gold/10 text-gold font-semibold"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              <Icon className="size-4" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-border/60 space-y-1 border-t p-3">
        <Link
          href={ROUTES.home}
          className="text-muted-foreground hover:bg-secondary hover:text-foreground flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors"
        >
          <ExternalLink className="size-4" />
          <span>Lihat Situs</span>
        </Link>
        <form action={logout}>
          <button
            type="submit"
            className="text-muted-foreground hover:bg-secondary flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors hover:text-red-500"
          >
            <LogOut className="size-4" />
            <span>Keluar</span>
          </button>
        </form>
      </div>
    </aside>
  );
}
