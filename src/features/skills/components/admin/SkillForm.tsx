"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { skillFormSchema, type SkillFormValues } from "../../schemas";
import { createSkill, updateSkill } from "../../server/actions";
import { ROUTES } from "@/shared/constants/routes";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Checkbox } from "@/shared/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import type { Skill } from "../../types";

const LEVELS = [
  { value: 1, label: "Pemula" },
  { value: 2, label: "Dasar" },
  { value: 3, label: "Menengah" },
  { value: 4, label: "Mahir" },
  { value: 5, label: "Ahli" },
];

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
      {/* Nama */}
      <div className="space-y-2">
        <Label htmlFor="name">Nama</Label>
        <Input id="name" placeholder="Laravel & PHP" {...register("name")} />
        {errors.name && <p className="text-destructive text-xs">{errors.name.message}</p>}
      </div>

      {/* Kategori */}
      <div className="space-y-2">
        <Label htmlFor="category">Kategori</Label>
        <Input
          id="category"
          list="skill-categories"
          placeholder="Backend"
          {...register("category")}
        />
        <datalist id="skill-categories">
          {categories.map((category) => (
            <option key={category} value={category} />
          ))}
        </datalist>
        {errors.category && <p className="text-destructive text-xs">{errors.category.message}</p>}
      </div>

      {/* Tingkat */}
      <div className="space-y-2">
        <Label htmlFor="level">Tingkat Kemahiran</Label>
        <Controller
          control={control}
          name="level"
          render={({ field }) => (
            <Select
              value={String(field.value)}
              onValueChange={(value) => field.onChange(Number(value))}
            >
              <SelectTrigger id="level" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {LEVELS.map((option) => (
                  <SelectItem key={option.value} value={String(option.value)}>
                    {option.value} — {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.level && <p className="text-destructive text-xs">{errors.level.message}</p>}
      </div>

      {/* Urutan */}
      <div className="space-y-2">
        <Label htmlFor="sortOrder">Urutan Tampil</Label>
        <Input
          id="sortOrder"
          type="number"
          min={0}
          {...register("sortOrder", { setValueAs: (value) => (value === "" ? 0 : Number(value)) })}
        />
        {errors.sortOrder && <p className="text-destructive text-xs">{errors.sortOrder.message}</p>}
      </div>

      {/* Publikasi */}
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

      <div className="flex gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Menyimpan..." : isEdit ? "Simpan Perubahan" : "Buat Keahlian"}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Batal
        </Button>
      </div>
    </form>
  );
}
