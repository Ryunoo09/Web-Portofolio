"use client";

import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { educationFormSchema, type EducationFormValues } from "../../schemas";
import { createEducation, updateEducation } from "../../server/actions";
import { ROUTES } from "@/shared/constants/routes";
import { FormField } from "@/shared/components";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Checkbox } from "@/shared/components/ui/checkbox";
import type { Education } from "../../types";

interface EducationFormProps {
  education?: Education;
}

export function EducationForm({ education }: EducationFormProps) {
  const router = useRouter();
  const isEdit = !!education;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<EducationFormValues>({
    resolver: zodResolver(educationFormSchema),
    defaultValues: {
      institution: education?.institution ?? "",
      degree: education?.degree ?? "",
      field: education?.field ?? "",
      startedAt: education?.startedAt ?? "",
      endedAt: education?.endedAt ?? "",
      description: education?.description ?? "",
      sortOrder: education?.sortOrder ?? 0,
      isPublished: education?.isPublished ?? true,
    },
  });

  const onSubmit = async (data: EducationFormValues) => {
    const result = isEdit ? await updateEducation(education.id, data) : await createEducation(data);

    if (result.ok) {
      toast.success(isEdit ? "Pendidikan diperbarui." : "Pendidikan dibuat.");
      router.push(ROUTES.admin.education);
      router.refresh();
    } else {
      toast.error(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl space-y-6">
      <FormField label="Institusi" name="institution" error={errors.institution?.message}>
        {(props) => (
          <Input placeholder="Universitas Indonesia" {...props} {...register("institution")} />
        )}
      </FormField>

      <FormField label="Jenjang / Gelar" name="degree" error={errors.degree?.message}>
        {(props) => (
          <Input placeholder="S1 Teknik Informatika" {...props} {...register("degree")} />
        )}
      </FormField>

      <FormField label="Bidang Studi" name="field" error={errors.field?.message}>
        {(props) => <Input placeholder="Ilmu Komputer" {...props} {...register("field")} />}
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

      <FormField label="Deskripsi" name="description" error={errors.description?.message}>
        {(props) => <Textarea rows={5} {...props} {...register("description")} />}
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
          {isSubmitting ? "Menyimpan..." : isEdit ? "Simpan Perubahan" : "Buat Pendidikan"}
        </Button>
        <Button type="button" variant="outline" asChild>
          <Link href={ROUTES.admin.education}>Batal</Link>
        </Button>
      </div>
    </form>
  );
}
