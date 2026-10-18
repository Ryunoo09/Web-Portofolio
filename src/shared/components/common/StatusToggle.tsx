"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Switch } from "@/shared/components/ui/switch";
import type { ActionResult } from "@/shared/types/action-result";

interface StatusToggleProps {
  /** ID baris yang statusnya diubah. */
  id: string;
  /** Nama item, dipakai di label aksesibilitas dan pesan toast. */
  name: string;
  isPublished: boolean;
  /** Server Action pengubah status (mis. `toggleProjectPublish`). */
  action: (id: string, isPublished: boolean) => Promise<ActionResult>;
}

/**
 * Sakelar terbit/draf langsung dari tabel, tanpa membuka halaman edit.
 * Teks status di sampingnya menjaga informasi tetap terbaca, tidak hanya warna.
 */
export function StatusToggle({ id, name, isPublished, action }: StatusToggleProps) {
  const router = useRouter();
  const [pending, startTransition] = React.useTransition();

  const handleChange = (next: boolean) => {
    startTransition(async () => {
      const result = await action(id, next);
      if (result.ok) {
        toast.success(next ? `${name} diterbitkan.` : `${name} dijadikan draf.`);
        router.refresh();
      } else {
        toast.error(result.error);
      }
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={isPublished}
        onCheckedChange={handleChange}
        disabled={pending}
        aria-label={`Ubah status terbit: ${name}`}
      />
      <span className="text-muted-foreground text-xs">{isPublished ? "Terbit" : "Draf"}</span>
    </div>
  );
}
