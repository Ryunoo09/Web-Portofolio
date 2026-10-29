"use client";

import * as React from "react";
import { ErrorSummary, type ErrorSummaryEntry } from "@/shared/components";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import {
  CONTACT_INTENT_LABELS,
  CONTACT_INTENTS,
  isContactIntent,
  type ContactIntent,
} from "../../intents";
import type { ContactFormValues } from "../../schemas";
import { submitContactMessage } from "../../server/actions";

type FieldKey = "name" | "email" | "intent" | "subject" | "message";

type FieldErrors = Partial<Record<FieldKey, string>>;

const FIELD_IDS: readonly FieldKey[] = ["name", "email", "intent", "subject", "message"];

const labelClass = "text-foreground text-sm font-medium";
const errorClass = "text-destructive text-xs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Validasi klien ringkas; server tetap memvalidasi ulang dengan zod. */
function validate(values: ContactFormValues): FieldErrors {
  const errors: FieldErrors = {};

  if (values.name.length < 2) errors.name = "Nama minimal 2 karakter.";
  else if (values.name.length > 100) errors.name = "Nama maksimal 100 karakter.";

  if (!EMAIL_PATTERN.test(values.email)) errors.email = "Email tidak valid.";
  else if (values.email.length > 200) errors.email = "Email maksimal 200 karakter.";

  if (values.subject.length < 3) errors.subject = "Topik minimal 3 karakter.";
  else if (values.subject.length > 120) errors.subject = "Topik maksimal 120 karakter.";

  if (values.message.length < 5) errors.message = "Pesan minimal 5 karakter.";
  else if (values.message.length > 2000) errors.message = "Pesan maksimal 2.000 karakter.";

  return errors;
}

function readForm(form: HTMLFormElement): ContactFormValues {
  const data = new FormData(form);
  const rawIntent = String(data.get("intent") ?? "recruiter");

  return {
    name: String(data.get("name") ?? "").trim(),
    email: String(data.get("email") ?? "").trim(),
    intent: isContactIntent(rawIntent) ? (rawIntent as ContactIntent) : "recruiter",
    subject: String(data.get("subject") ?? "").trim(),
    message: String(data.get("message") ?? "").trim(),
    website: String(data.get("website") ?? ""),
  };
}

/**
 * Form kontak tanpa pustaka form di klien: validasi lokal ringkas, ringkasan
 * error yang mengambil fokus, dan panel sukses `role="status"`. Intent disimpan
 * sebagai awalan subjek karena tabel `contact_messages` belum punya kolomnya.
 */
export function ContactForm() {
  const [errors, setErrors] = React.useState<FieldErrors>({});
  const [serverError, setServerError] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const summaryErrors: ErrorSummaryEntry[] = FIELD_IDS.flatMap((field) => {
    const message = errors[field];
    return message ? [{ id: field, message }] : [];
  });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServerError(null);

    const form = event.currentTarget;
    const values = readForm(form);
    const fieldErrors = validate(values);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const result = await submitContactMessage(values);
      if (result.ok) {
        setIsSuccess(true);
        form.reset();
        return;
      }
      setServerError(result.error ?? "Pesan belum terkirim. Coba lagi atau email langsung.");
    } catch {
      setServerError("Pesan belum terkirim. Coba lagi atau email langsung.");
    } finally {
      setIsSubmitting(false);
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
        <Button
          variant="secondary"
          onClick={() => {
            setIsSuccess(false);
            setErrors({});
          }}
        >
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

      <form onSubmit={onSubmit} noValidate aria-busy={isSubmitting} className="space-y-5">
        <ErrorSummary errors={summaryErrors} />

        {serverError && (
          <p role="alert" className="text-destructive text-sm">
            {serverError}
          </p>
        )}

        {/* Honeypot: tidak terlihat, tidak bisa di-tab. */}
        <div hidden aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="name" className={labelClass}>
              Nama
            </Label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Nama Anda"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className={errorClass}>
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email" className={labelClass}>
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              spellCheck={false}
              placeholder="nama@email.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className={errorClass}>
                {errors.email}
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
            name="intent"
            defaultValue="recruiter"
            className="border-input bg-surface text-foreground focus-visible:ring-ring h-11 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
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
            name="subject"
            placeholder="Peluang Backend / pertanyaan proyek"
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject && (
            <p id="subject-error" className={errorClass}>
              {errors.subject}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="message" className={labelClass}>
            Pesan
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Ceritakan peran, tim, atau masalah yang ingin diselesaikan."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-hint message-error" : "message-hint"}
            className="min-h-[132px] resize-y"
          />
          <p id="message-hint" className="text-muted-foreground text-xs">
            Minimal 5 karakter, maksimal 2.000 karakter.
          </p>
          {errors.message && (
            <p id="message-error" className={errorClass}>
              {errors.message}
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
