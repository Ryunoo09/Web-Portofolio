"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Mail, MailOpen, Reply } from "lucide-react";
import { toast } from "sonner";
import { deleteMessage, markMessageRead } from "../../server/actions";
import { ConfirmDeleteDialog } from "@/shared/components";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";
import type { ContactMessage } from "../../types";

function formatDateTime(value: string): string {
  return new Intl.DateTimeFormat("id-ID", { dateStyle: "medium", timeStyle: "short" }).format(
    new Date(value),
  );
}

interface MessageInboxProps {
  messages: ContactMessage[];
}

/** Kotak masuk dua panel: daftar pesan di kiri, isi pesan di kanan. */
export function MessageInbox({ messages }: MessageInboxProps) {
  const router = useRouter();
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [pending, startTransition] = React.useTransition();

  const selected = messages.find((message) => message.id === selectedId) ?? null;

  const openMessage = (message: ContactMessage) => {
    setSelectedId(message.id);
    if (message.isRead) return;

    // Membuka pesan langsung menandainya terbaca; badge sidebar ikut turun.
    startTransition(async () => {
      const result = await markMessageRead(message.id, true);
      if (result.ok) router.refresh();
      else toast.error(result.error);
    });
  };

  const toggleRead = () => {
    if (!selected) return;
    const next = !selected.isRead;

    startTransition(async () => {
      const result = await markMessageRead(selected.id, next);
      if (result.ok) {
        toast.success(next ? "Ditandai sudah dibaca." : "Ditandai belum dibaca.");
        router.refresh();
      } else {
        toast.error(result.error);
      }
    });
  };

  if (messages.length === 0) {
    return (
      <div className="border-border/60 rounded-xl border border-dashed p-10 text-center">
        <Mail className="text-muted-foreground mx-auto size-8" aria-hidden="true" />
        <p className="text-foreground mt-3 font-medium">Kotak masuk masih kosong</p>
        <p className="text-muted-foreground mt-1 text-sm">
          Pesan yang dikirim lewat formulir di halaman /contact akan muncul di sini.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
      <ul className={cn("space-y-2", selected && "hidden lg:block")}>
        {messages.map((message) => {
          const active = message.id === selectedId;

          return (
            <li key={message.id}>
              <button
                type="button"
                onClick={() => openMessage(message)}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "focus-visible:ring-ring w-full rounded-lg border p-3 text-left transition-colors focus-visible:ring-2 focus-visible:outline-none",
                  active ? "border-gold/50 bg-gold/5" : "border-border/70 hover:bg-secondary/50",
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={cn(
                      "truncate text-sm",
                      message.isRead ? "font-medium" : "font-semibold",
                    )}
                  >
                    {message.name}
                  </span>
                  {!message.isRead && (
                    <span className="bg-gold text-primary-foreground shrink-0 rounded-full px-1.5 py-0.5 text-xs font-semibold">
                      Baru
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mt-1 truncate text-xs">
                  {message.subject || "Tanpa subjek"}
                </p>
                <p className="text-muted-foreground mt-1 font-mono text-xs">
                  {formatDateTime(message.createdAt)}
                </p>
              </button>
            </li>
          );
        })}
      </ul>

      <div className={cn("hidden lg:block", selected && "block")}>
        {selected ? (
          <article className="border-border/70 bg-card h-full rounded-xl border p-5 sm:p-6">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="mb-3 lg:hidden"
              onClick={() => setSelectedId(null)}
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Kembali ke daftar
            </Button>

            <header className="border-border/50 space-y-2 border-b pb-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-foreground font-heading text-lg font-bold">
                  {selected.subject || "Tanpa subjek"}
                </h2>
                <Badge
                  variant={selected.isRead ? "secondary" : "default"}
                  className={cn("text-xs", !selected.isRead && "bg-gold text-primary-foreground")}
                >
                  {selected.isRead ? "Sudah dibaca" : "Belum dibaca"}
                </Badge>
              </div>

              <p className="text-sm">
                <span className="text-foreground font-medium">{selected.name}</span>
                <span className="text-muted-foreground"> · </span>
                <a
                  href={`mailto:${selected.email}`}
                  className="text-gold focus-visible:ring-ring rounded-sm underline underline-offset-4 focus-visible:ring-2 focus-visible:outline-none"
                >
                  {selected.email}
                </a>
              </p>

              <p className="text-muted-foreground font-mono text-xs">
                {formatDateTime(selected.createdAt)}
              </p>
            </header>

            <p className="text-foreground mt-4 text-sm leading-relaxed whitespace-pre-wrap">
              {selected.message}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Button
                type="button"
                variant="outline"
                className="min-h-11"
                onClick={toggleRead}
                disabled={pending}
              >
                {selected.isRead ? (
                  <Mail className="size-4" aria-hidden="true" />
                ) : (
                  <MailOpen className="size-4" aria-hidden="true" />
                )}
                {selected.isRead ? "Tandai belum dibaca" : "Tandai sudah dibaca"}
              </Button>

              <Button asChild variant="outline" className="min-h-11">
                <a
                  href={`mailto:${selected.email}?subject=${encodeURIComponent(
                    `Re: ${selected.subject ?? ""}`,
                  )}`}
                >
                  <Reply className="size-4" aria-hidden="true" />
                  Balas via email
                </a>
              </Button>

              <ConfirmDeleteDialog
                trigger={
                  <Button
                    variant="ghost"
                    className="text-destructive hover:text-destructive min-h-11"
                  >
                    Hapus pesan
                  </Button>
                }
                title="Hapus Pesan"
                itemName={selected.subject || `pesan dari ${selected.name}`}
                ariaLabel="Hapus pesan ini"
                successMessage="Pesan dihapus."
                onConfirm={async () => {
                  const result = await deleteMessage(selected.id);
                  if (result.ok) setSelectedId(null);
                  return result;
                }}
              />
            </div>
          </article>
        ) : (
          <div className="border-border/60 flex h-full min-h-48 items-center justify-center rounded-xl border border-dashed p-8 text-center">
            <p className="text-muted-foreground text-sm">Pilih pesan di kiri untuk membacanya.</p>
          </div>
        )}
      </div>
    </div>
  );
}
