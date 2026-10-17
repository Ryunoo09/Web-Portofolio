import type { ReactNode } from "react";

interface AdminPageHeaderProps {
  title: string;
  description?: ReactNode;
  action?: ReactNode;
}

/** Kepala halaman admin yang konsisten (judul, keterangan, tombol aksi). */
export function AdminPageHeader({ title, description, action }: AdminPageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <h1 className="text-foreground font-heading text-2xl font-bold">{title}</h1>
        {description ? <p className="text-muted-foreground mt-1 text-sm">{description}</p> : null}
      </div>
      {action ? <div className="flex shrink-0 items-center gap-2">{action}</div> : null}
    </div>
  );
}
