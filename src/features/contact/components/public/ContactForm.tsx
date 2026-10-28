"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorSummary, type ErrorSummaryEntry } from "@/shared/components";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import {
  CONTACT_INTENT_LABELS,
  CONTACT_INTENTS,
  contactFormSchema,
  type ContactFormValues,
} from "../../schemas";
import { submitContactMessage } from "../../server/actions";

const FIELD_IDS = ["name", "email", "intent", "subject", "message"] as const;

const labelClass = "text-foreground text-sm font-medium";
const errorClass = "text-destructive text-xs";

/**
 * Form kontak: label terlihat, honeypot tersembunyi, ringkasan error yang
 * mengambil fokus, dan panel sukses `role="status"`. Intent disimpan sebagai
 * awalan subjek karena tabel `contact_messages` belum punya kolom intent.
 */
export function ContactForm() {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [serverError, setServerError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    // Fokus error dipegang `ErrorSummary` (di atas form), bukan field pertama.
    shouldFocusError: false,
    defaultValues: {
      name: "",
      email: "",
      intent: "recruiter",
      subject: "",
      message: "",
      website: "",
    },
  });

  const summaryErrors: ErrorSummaryEntry[] = FIELD_IDS.flatMap((field) => {
    const message = errors[field]?.message;
    return message ? [{ id: field, message: String(message) }] : [];
  });

  const onSubmit = async (values: ContactFormValues) => {
    setServerError(null);
    try {
      const result = await submitContactMessage(values);
      if (result.ok) {
        setIsSuccess(true);
        reset();
        return;
      }
      setServerError(result.error ?? "Pesan belum terkirim. Coba lagi atau email langsung.");
    } catch {
      setServerError("Pesan belum terkirim. Coba lagi atau email langsung.");
    }
  };

  if (isSuccess) {
    return (
      <section
        id="kirim-pesan"
        aria-labelledby="form-kontak-title"
        role="status"
        className="border-border space-y-3 border-y py-8"
      >
        <h2 id="form-kontak-title" className="text-foreground font-heading text-xl font-semibold">
          Pesan terkirim.
        </h2>
        <p className="text-muted-foreground max-w-[52ch] text-sm leading-relaxed">
          Saya akan membalas dalam 1×24 jam kerja.
        </p>
        <Button variant="secondary" onClick={() => setIsSuccess(false)}>
          Kirim pesan lain
        </Button>
      </section>
    );
  }

  return (
    <section id="kirim-pesan" aria-labelledby="form-kontak-title" className="space-y-5">
      <h2 id="form-kontak-title" className="text-foreground font-heading text-xl font-semibold">
        Kirim pesan
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} aria-busy={isSubmitting} className="space-y-5">
        <ErrorSummary errors={summaryErrors} />

        {serverError && (
          <p role="alert" className="text-destructive text-sm">
            {serverError}
          </p>
        )}

        {/* Honeypot: tidak terlihat, tidak bisa di-tab. */}
        <div hidden aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="name" className={labelClass}>
              Nama
            </Label>
            <Input
              id="name"
              autoComplete="name"
              placeholder="Nama Anda"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
            {errors.name && (
              <p id="name-error" className={errorClass}>
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email" className={labelClass}>
              Email
            </Label>
            <Input
              id="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              spellCheck={false}
              placeholder="nama@email.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            {errors.email && (
              <p id="email-error" className={errorClass}>
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="intent" className={labelClass}>
            Saya menghubungi untuk
          </Label>
          <select
            id="intent"
            className="border-input bg-surface text-foreground focus-visible:ring-ring h-11 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
            {...register("intent")}
          >
            {CONTACT_INTENTS.map((intent) => (
              <option key={intent} value={intent}>
                {CONTACT_INTENT_LABELS[intent]}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="subject" className={labelClass}>
            Topik
          </Label>
          <Input
            id="subject"
            placeholder="Peluang Backend / pertanyaan proyek"
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            {...register("subject")}
          />
          {errors.subject && (
            <p id="subject-error" className={errorClass}>
              {errors.subject.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="message" className={labelClass}>
            Pesan
          </Label>
          <Textarea
            id="message"
            rows={5}
            placeholder="Ceritakan peran, tim, atau masalah yang ingin diselesaikan."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-hint message-error" : "message-hint"}
            className="min-h-[132px] resize-y"
            {...register("message")}
          />
          <p id="message-hint" className="text-muted-foreground text-xs">
            Minimal 5 karakter, maksimal 2.000 karakter.
          </p>
          {errors.message && (
            <p id="message-error" className={errorClass}>
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground text-xs">
            Data yang Anda kirim hanya digunakan untuk membalas pesan ini.
          </p>
          <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
            {isSubmitting ? "Mengirim…" : "Kirim pesan"}
          </Button>
        </div>
      </form>
    </section>
  );
}
