"use client";

import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { experienceFormSchema, type ExperienceFormValues } from "../../schemas";
import { createExperience, updateExperience } from "../../server/actions";
import { ROUTES } from "@/shared/constants/routes";
import { FormField } from "@/shared/components/admin";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Checkbox } from "@/shared/components/ui/checkbox";
import type { Experience } from "../../types";

interface ExperienceFormProps {
  experience?: Experience;
}

export function ExperienceForm({ experience }: ExperienceFormProps) {
  const router = useRouter();
  const isEdit = !!experience;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ExperienceFormValues>({
    resolver: zodResolver(experienceFormSchema),
    defaultValues: {
      company: experience?.company ?? "",
      role: experience?.role ?? "",
      startedAt: experience?.startedAt ?? "",
      endedAt: experience?.endedAt ?? "",
      location: experience?.location ?? "",
      description: experience?.description ?? "",
      sortOrder: experience?.sortOrder ?? 0,
      isPublished: experience?.isPublished ?? true,
    },
  });

  const onSubmit = async (data: ExperienceFormValues) => {
    const result = isEdit
      ? await updateExperience(experience.id, data)
      : await createExperience(data);

    if (result.ok) {
      toast.success(isEdit ? "Pengalaman diperbarui." : "Pengalaman dibuat.");
      router.push(ROUTES.admin.experiences);
      router.refresh();
    } else {
      toast.error(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl space-y-6">
      <FormField label="Posisi" name="role" error={errors.role?.message}>
        {(props) => <Input placeholder="Backend Engineer" {...props} {...register("role")} />}
      </FormField>

      <FormField label="Perusahaan" name="company" error={errors.company?.message}>
        {(props) => <Input placeholder="PT Maju Jaya" {...props} {...register("company")} />}
      </FormField>

      <FormField label="Lokasi" name="location" error={errors.location?.message}>
        {(props) => <Input placeholder="Jakarta (Hybrid)" {...props} {...register("location")} />}
      </FormField>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Mulai" name="startedAt" error={errors.startedAt?.message}>
          {(props) => <Input type="date" {...props} {...register("startedAt")} />}
        </FormField>

        <FormField
          label="Selesai"
          name="endedAt"
          error={errors.endedAt?.message}
          hint="Kosongkan bila masih berjalan."
        >
          {(props) => <Input type="date" {...props} {...register("endedAt")} />}
        </FormField>
      </div>

      <FormField
        label="Deskripsi"
        name="description"
        error={errors.description?.message}
        hint="Satu poin per baris — tampil sebagai daftar berbutir di /about."
      >
        {(props) => <Textarea rows={5} {...props} {...register("description")} />}
      </FormField>

      {isEdit && (
        <p className="text-muted-foreground text-sm">
          Dokumentasi foto diunggah di bagian bawah halaman ini, setelah data tersimpan.
        </p>
      )}

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
          {isSubmitting ? "Menyimpan..." : isEdit ? "Simpan Perubahan" : "Buat Pengalaman"}
        </Button>
        <Button type="button" variant="outline" asChild>
          <Link href={ROUTES.admin.experiences}>Batal</Link>
        </Button>
      </div>
    </form>
  );
}
