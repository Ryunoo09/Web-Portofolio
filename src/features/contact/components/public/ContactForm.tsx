"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "../../schemas";
import { submitContactMessage } from "../../server/actions";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Label } from "@/shared/components/ui/label";
import { Card } from "@/shared/components/ui/card";

export function ContactForm() {
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const result = await submitContactMessage(values);
      if (result.ok) {
        setIsSuccess(true);
        toast.success("Pesan terkirim!", {
          description: "Terima kasih telah menghubungi saya. Saya akan membalas segera.",
        });
        reset();
      } else {
        toast.error("Gagal mengirim pesan", {
          description: result.error ?? "Silakan periksa kembali isian formulir.",
        });
      }
    } catch {
      toast.error("Terjadi kesalahan jaringan", {
        description: "Silakan coba beberapa saat lagi.",
      });
    }
  };

  if (isSuccess) {
    return (
      <Card className="card-luxury border-gold/30 bg-card space-y-5 p-8 text-center sm:p-10">
        <div className="border-gold/40 bg-gold/10 text-gold mx-auto flex size-14 items-center justify-center rounded-2xl border shadow-md">
          <CheckCircle2 className="size-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-foreground font-heading text-2xl font-bold">
            Pesan Berhasil Terkirim
          </h3>
          <p className="text-muted-foreground mx-auto max-w-md text-sm leading-relaxed">
            Terima kasih telah menghubungi. Saya telah menerima pesan Anda dan akan merespons dalam
            waktu 1x24 jam kerja.
          </p>
        </div>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
          className="border-border/80 hover:border-gold/40 rounded-full"
        >
          Kirim Pesan Lainnya
        </Button>
      </Card>
    );
  }

  return (
    <Card className="card-luxury border-border/80 bg-card p-6 sm:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Honeypot field (hidden from real users, traps bots) */}
        <input
          type="text"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-foreground/80 text-xs font-semibold tracking-wider uppercase"
            >
              Nama Lengkap <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Contoh: Budi Santoso"
              aria-invalid={!!errors.name}
              className="bg-background/50 border-border/80 focus-visible:border-gold/60"
              {...register("name")}
            />
            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-foreground/80 text-xs font-semibold tracking-wider uppercase"
            >
              Alamat Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="budi@example.com"
              aria-invalid={!!errors.email}
              className="bg-background/50 border-border/80 focus-visible:border-gold/60"
              {...register("email")}
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="subject"
            className="text-foreground/80 text-xs font-semibold tracking-wider uppercase"
          >
            Subjek / Topik Diskusi
          </Label>
          <Input
            id="subject"
            placeholder="Diskusi Proyek Web / Peluang Kolaborasi"
            aria-invalid={!!errors.subject}
            className="bg-background/50 border-border/80 focus-visible:border-gold/60"
            {...register("subject")}
          />
          {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="message"
            className="text-foreground/80 text-xs font-semibold tracking-wider uppercase"
          >
            Pesan Anda <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="message"
            rows={5}
            placeholder="Ceritakan gambaran proyek, target waktu, atau hal yang ingin Anda konsultasikan..."
            aria-invalid={!!errors.message}
            className="bg-background/50 border-border/80 focus-visible:border-gold/60 resize-y"
            {...register("message")}
          />
          {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-gold text-primary-foreground shadow-gold/15 hover:bg-gold/90 w-full cursor-pointer rounded-full px-8 py-2.5 font-semibold shadow-lg transition-all sm:w-auto"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2 className="size-4 animate-spin" />
              <span>Mengirimkan Pesan...</span>
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="size-4" />
              <span>Kirim Pesan Sekarang</span>
            </span>
          )}
        </Button>
      </form>
    </Card>
  );
}
