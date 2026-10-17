"use client";

import * as React from "react";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import type { ActionResult } from "@/shared/types/action-result";

interface ConfirmDeleteDialogProps {
  /** Judul dialog, mis. "Hapus Pengalaman". */
  title: string;
  /** Nama item yang dihapus; disebut di dalam dialog agar tidak salah hapus. */
  itemName: string;
  ariaLabel: string;
  successMessage: string;
  /** Keterangan tambahan, mis. akibat ikutan dari penghapusan. */
  description?: string;
  /** Ukuran tombol pemicu; `icon` dipakai bila baris galeri butuh target lebih besar. */
  triggerSize?: "icon" | "icon-sm";
  /** Tombol pemicu kustom, mis. tombol berlabel "Hapus". */
  trigger?: ReactNode;
  onConfirm: () => Promise<ActionResult>;
}

/**
 * Konfirmasi hapus yang sama untuk semua daftar admin: fokus langsung ke tombol
 * destruktif, `Esc` menutup dialog (bawaan Radix), dan nama item disebut.
 */
export function ConfirmDeleteDialog({
  title,
  itemName,
  ariaLabel,
  successMessage,
  description,
  triggerSize = "icon-sm",
  trigger,
  onConfirm,
}: ConfirmDeleteDialogProps) {
  const router = useRouter();
  const confirmRef = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);
  const [pending, startTransition] = React.useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      const result = await onConfirm();
      if (result.ok) {
        toast.success(successMessage);
        setOpen(false);
        router.refresh();
      } else {
        toast.error(result.error);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button
            variant="ghost"
            size={triggerSize}
            className="text-destructive hover:text-destructive min-h-11 min-w-11"
            aria-label={ariaLabel}
          >
            <Trash2 className="size-3.5" aria-hidden="true" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent
        onOpenAutoFocus={(event) => {
          event.preventDefault();
          confirmRef.current?.focus();
        }}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Yakin ingin menghapus <strong>{itemName}</strong>?{description ? ` ${description}` : ""}{" "}
            Tindakan ini tidak dapat dibatalkan.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Batal
          </Button>
          <Button ref={confirmRef} variant="destructive" onClick={handleDelete} disabled={pending}>
            {pending ? "Menghapus..." : "Hapus"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
