"use client";

import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { languageFormSchema, LANGUAGE_LEVELS, type LanguageFormValues } from "../../schemas";
import { createLanguage, updateLanguage } from "../../server/actions";
import { ROUTES } from "@/shared/constants/routes";
import { FormField } from "@/shared/components/admin";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Checkbox } from "@/shared/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import type { Language } from "../../types";

interface LanguageFormProps {
  language?: Language;
}

export function LanguageForm({ language }: LanguageFormProps) {
  const router = useRouter();
  const isEdit = !!language;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<LanguageFormValues>({
    resolver: zodResolver(languageFormSchema),
    defaultValues: {
      name: language?.name ?? "",
      level: language?.level ?? "",
      score: language?.score ?? "",
      sortOrder: language?.sortOrder ?? 0,
      isPublished: language?.isPublished ?? true,
    },
  });

  const onSubmit = async (data: LanguageFormValues) => {
    const result = isEdit ? await updateLanguage(language.id, data) : await createLanguage(data);

    if (result.ok) {
      toast.success(isEdit ? "Bahasa diperbarui." : "Bahasa dibuat.");
      router.push(ROUTES.admin.languages);
      router.refresh();
    } else {
      toast.error(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl space-y-6">
      <FormField label="Nama Bahasa" name="name" error={errors.name?.message}>
        {(props) => <Input placeholder="Inggris" {...props} {...register("name")} />}
      </FormField>

      <FormField label="Tingkat" name="level" error={errors.level?.message}>
        {(props) => (
          <Controller
            control={control}
            name="level"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger {...props} className="w-full">
                  <SelectValue placeholder="Pilih tingkat kemampuan" />
                </SelectTrigger>
                <SelectContent>
                  {LANGUAGE_LEVELS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        )}
      </FormField>

      <FormField
        label="Skor / Sertifikat"
        name="score"
        error={errors.score?.message}
        hint="Opsional, mis. TOEIC 685."
      >
        {(props) => <Input placeholder="TOEIC 685" {...props} {...register("score")} />}
      </FormField>

      <FormField label="Urutan Tampil" name="sortOrder" error={errors.sortOrder?.message}>
        {(props) => (
          <Input
            type="number"
            min={0}
            {...props}
            {...register("sortOrder", {
              setValueAs: (value) => (value === "" ? 0 : Number(value)),
            })}
          />
        )}
      </FormField>

      <Controller
        control={control}
        name="isPublished"
        render={({ field }) => (
          <label className="flex cursor-pointer items-center gap-2 text-sm">
            <Checkbox
              checked={field.value}
              onCheckedChange={(value) => field.onChange(value === true)}
            />
            Publikasikan
          </label>
        )}
      />

      <div className="flex flex-wrap gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Menyimpan..." : isEdit ? "Simpan Perubahan" : "Buat Bahasa"}
        </Button>
        <Button type="button" variant="outline" asChild>
          <Link href={ROUTES.admin.languages}>Batal</Link>
        </Button>
      </div>
    </form>
  );
}
