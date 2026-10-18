"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Award,
  Briefcase,
  Building2,
  ExternalLink,
  FolderKanban,
  GraduationCap,
  Languages,
  LayoutDashboard,
  LogOut,
  Mail,
  Menu,
  User,
  Wrench,
} from "lucide-react";
import { ROUTES } from "@/shared/constants/routes";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { logout } from "../server/actions";

const links = [
  { href: ROUTES.admin.root, label: "Ringkasan", icon: LayoutDashboard },
  { href: ROUTES.admin.projects, label: "Proyek", icon: FolderKanban },
  { href: ROUTES.admin.skills, label: "Keahlian", icon: Wrench },
  { href: ROUTES.admin.experiences, label: "Pengalaman", icon: Briefcase },
  { href: ROUTES.admin.education, label: "Pendidikan", icon: GraduationCap },
  { href: ROUTES.admin.organizations, label: "Organisasi", icon: Building2 },
  { href: ROUTES.admin.certificates, label: "Sertifikat", icon: Award },
  { href: ROUTES.admin.languages, label: "Bahasa", icon: Languages },
  { href: ROUTES.admin.profile, label: "Profil", icon: User },
  { href: ROUTES.admin.messages, label: "Pesan", icon: Mail },
];

const linkClass =
  "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none";

/** Sub-route ikut menyala; "/admin" hanya saat persis di ringkasan. */
function isActive(pathname: string, href: string): boolean {
  if (href === ROUTES.admin.root) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

interface NavProps {
  unreadCount: number;
  onNavigate?: () => void;
}

function NavLinks({ unreadCount, onNavigate }: NavProps) {
  const pathname = usePathname();

  return (
    <nav className="flex-1 space-y-1 p-3" aria-label="Navigasi Admin">
      {links.map(({ href, label, icon: Icon }) => {
        const active = isActive(pathname, href);
        const showBadge = href === ROUTES.admin.messages && unreadCount > 0;

        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={cn(
              linkClass,
              active
                ? "bg-gold/10 text-gold font-semibold"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
            )}
          >
            <Icon className="size-4" aria-hidden="true" />
            <span>{label}</span>
            {showBadge ? (
              <span className="bg-gold text-primary-foreground ml-auto rounded-full px-1.5 py-0.5 font-mono text-[11px] font-semibold">
                <span aria-hidden="true">{unreadCount}</span>
                <span className="sr-only">pesan belum dibaca</span>
              </span>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}

function UtilityLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="border-border/60 space-y-1 border-t p-3">
      <Link
        href={ROUTES.home}
        onClick={onNavigate}
        className={cn(linkClass, "text-muted-foreground hover:bg-secondary hover:text-foreground")}
      >
        <ExternalLink className="size-4" aria-hidden="true" />
        <span>Lihat Situs</span>
      </Link>
      <form action={logout}>
        <button
          type="submit"
          className={cn(
            linkClass,
            "text-muted-foreground hover:bg-secondary w-full hover:text-red-500",
          )}
        >
          <LogOut className="size-4" aria-hidden="true" />
          <span>Keluar</span>
        </button>
      </form>
    </div>
  );
}

interface AdminSidebarProps {
  email: string | null;
  unreadCount: number;
}

export function AdminSidebar({ email, unreadCount }: AdminSidebarProps) {
  const [open, setOpen] = React.useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Bar atas hanya untuk layar kecil; sidebar geser masuk lewat tombol ini. */}
      <header className="border-border/60 bg-card/60 sticky top-0 z-40 flex items-center justify-between gap-4 border-b px-4 py-3 backdrop-blur md:hidden">
        <div className="min-w-0">
          <p className="text-foreground text-sm font-semibold">Panel Admin</p>
          <p className="text-muted-foreground truncate text-xs">{email ?? "—"}</p>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Buka menu admin">
              <Menu className="size-4" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 max-w-[85vw] gap-0 p-0">
            <SheetHeader className="border-border/60 border-b">
              <SheetTitle>Panel Admin</SheetTitle>
            </SheetHeader>
            <NavLinks unreadCount={unreadCount} onNavigate={closeMenu} />
            <UtilityLinks onNavigate={closeMenu} />
          </SheetContent>
        </Sheet>
      </header>

      <aside className="border-border/60 bg-card/40 hidden w-60 shrink-0 flex-col border-r md:flex">
        <div className="border-border/60 border-b p-4">
          <p className="text-foreground text-sm font-semibold">Panel Admin</p>
          <p className="text-muted-foreground truncate text-xs" title={email ?? undefined}>
            {email ?? "—"}
          </p>
        </div>

        <NavLinks unreadCount={unreadCount} />
        <UtilityLinks />
      </aside>
    </>
  );
}
