"use client";

import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { skillFormSchema, type SkillFormValues } from "../../schemas";
import { createSkill, updateSkill } from "../../server/actions";
import { ROUTES } from "@/shared/constants/routes";
import { FormField } from "@/shared/components";
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
import { SKILL_LEVELS } from "../../levels";
import type { Skill } from "../../types";

interface SkillFormProps {
  skill?: Skill;
  /** Kategori yang sudah dipakai, untuk saran input (mencegah kategori kembar). */
  categories: string[];
}

export function SkillForm({ skill, categories }: SkillFormProps) {
  const router = useRouter();
  const isEdit = !!skill;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SkillFormValues>({
    resolver: zodResolver(skillFormSchema),
    defaultValues: {
      name: skill?.name ?? "",
      category: skill?.category ?? "",
      level: skill?.level ?? 3,
      sortOrder: skill?.sortOrder ?? 0,
      isPublished: skill?.isPublished ?? true,
      isLearning: skill?.isLearning ?? false,
    },
  });

  const onSubmit = async (data: SkillFormValues) => {
    const result = isEdit ? await updateSkill(skill.id, data) : await createSkill(data);

    if (result.ok) {
      toast.success(isEdit ? "Keahlian diperbarui." : "Keahlian dibuat.");
      router.push(ROUTES.admin.skills);
      router.refresh();
    } else {
      toast.error(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl space-y-6">
      <FormField label="Nama" name="name" error={errors.name?.message}>
        {(props) => <Input placeholder="Laravel & PHP" {...props} {...register("name")} />}
      </FormField>

      <FormField
        label="Kategori"
        name="category"
        error={errors.category?.message}
        hint="Pilih dari kategori yang sudah ada, atau tulis kategori baru."
      >
        {(props) => (
          <>
            <Input
              list="skill-categories"
              placeholder="Backend"
              {...props}
              {...register("category")}
            />
            <datalist id="skill-categories">
              {categories.map((category) => (
                <option key={category} value={category} />
              ))}
            </datalist>
          </>
        )}
      </FormField>

      <FormField label="Tingkat Kemahiran" name="level" error={errors.level?.message}>
        {(props) => (
          <Controller
            control={control}
            name="level"
            render={({ field }) => (
              <Select
                value={String(field.value)}
                onValueChange={(value) => field.onChange(Number(value))}
              >
                <SelectTrigger {...props} className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {SKILL_LEVELS.map((option) => (
                    <SelectItem key={option.value} value={String(option.value)}>
                      {option.value} — {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        )}
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

      <div className="flex flex-wrap gap-6">
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

        <Controller
          control={control}
          name="isLearning"
          render={({ field }) => (
            <label className="flex cursor-pointer items-center gap-2 text-sm">
              <Checkbox
                checked={field.value}
                onCheckedChange={(value) => field.onChange(value === true)}
              />
              Sedang dipelajari
            </label>
          )}
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Menyimpan..." : isEdit ? "Simpan Perubahan" : "Buat Keahlian"}
        </Button>
        <Button type="button" variant="outline" asChild>
          <Link href={ROUTES.admin.skills}>Batal</Link>
        </Button>
      </div>
    </form>
  );
}
