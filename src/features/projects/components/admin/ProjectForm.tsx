"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { projectFormSchema, type ProjectFormValues } from "../../schemas";
import { createProject, updateProject, uploadProjectImage } from "../../server/actions";
import { slugify } from "@/shared/lib/utils";
import { PROJECT_DOMAIN_OPTIONS, type ProjectDomain } from "@/shared/lib/taxonomy";
import { IMAGE_ACCEPT } from "@/shared/constants/media";
import { ROUTES } from "@/shared/constants/routes";
import { FormField, ImageUploadField } from "@/shared/components/admin";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Label } from "@/shared/components/ui/label";
import { Checkbox } from "@/shared/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import type { Skill } from "@/features/skills";
import type { Project } from "../../types";

const PROJECT_TYPES = ["Skripsi", "Tugas Kuliah", "Lomba", "Freelance", "Pribadi"];

/** Radix Select tidak mengizinkan item bernilai string kosong. */
const DOMAIN_UNSET = "none";

interface ProjectFormProps {
  project?: Project;
  skills: Skill[];
}

export function ProjectForm({ project, skills }: ProjectFormProps) {
  const router = useRouter();
  const isEdit = !!project;

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      title: project?.title ?? "",
      slug: project?.slug ?? "",
      summary: project?.summary ?? "",
      startedAt: project?.startedAt ?? "",
      endedAt: project?.endedAt ?? "",
      descriptionHtml: project?.descriptionHtml ?? "",
      repoUrl: project?.repoUrl ?? "",
      demoUrl: project?.demoUrl ?? "",
      coverImageUrl: project?.coverImageUrl ?? "",
      coverImageAlt: project?.coverImageAlt ?? "",
      skillIds: project?.skills.map((skill) => skill.id) ?? [],
      isFeatured: project?.isFeatured ?? false,
      isPublished: project?.isPublished ?? false,
      projectType: project?.projectType ?? "",
      role: project?.role ?? "",
      teamSize: project?.teamSize ?? undefined,
      problem: project?.problem ?? "",
      solution: project?.solution ?? "",
      challenges: project?.challenges ?? "",
      features: project?.features ?? [],
      outcomes: project?.outcomes ?? [],
      isDeployed: project?.isDeployed ?? false,
      domain: project?.domain ?? null,
      seoTitle: project?.seoTitle ?? "",
      seoDescription: project?.seoDescription ?? "",
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = form;

  const title = useWatch({ control, name: "title" });
  const slug = useWatch({ control, name: "slug" });
  const skillIds = useWatch({ control, name: "skillIds" });
  const isFeatured = useWatch({ control, name: "isFeatured" });
  const isPublished = useWatch({ control, name: "isPublished" });

  const projectId = project?.id ?? null;

  const uploadCover = React.useCallback(
    (file: File) => {
      const formData = new FormData();
      formData.append("file", file);
      return uploadProjectImage(projectId, formData);
    },
    [projectId],
  );

  // Slug dibuat otomatis dari judul selama admin belum mengubahnya sendiri.
  const handleTitleBlur = () => {
    if (!isEdit && (!slug || slug === slugify(title.slice(0, -1)))) {
      setValue("slug", slugify(title), { shouldValidate: true });
    }
  };

  const onSubmit = async (data: ProjectFormValues) => {
    const result = isEdit ? await updateProject(project.id, data) : await createProject(data);

    if (result.ok) {
      toast.success(isEdit ? "Proyek diperbarui." : "Proyek dibuat.");
      router.push(ROUTES.admin.projects);
      router.refresh();
    } else {
      toast.error(result.error);
    }
  };

  const toggleSkill = (skillId: string) => {
    const next = skillIds.includes(skillId)
      ? skillIds.filter((id) => id !== skillId)
      : [...skillIds, skillId];
    setValue("skillIds", next, { shouldValidate: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormField label="Judul" name="title" error={errors.title?.message}>
        {(props) => <Input {...props} {...register("title")} onBlur={handleTitleBlur} />}
      </FormField>

      <FormField
        label="Slug"
        name="slug"
        error={errors.slug?.message}
        hint="Dipakai di URL: /projects/slug-anda"
      >
        {(props) => <Input {...props} {...register("slug")} />}
      </FormField>

      <FormField label="Ringkasan" name="summary" error={errors.summary?.message}>
        {(props) => <Textarea rows={3} {...props} {...register("summary")} />}
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

      <Controller
        control={control}
        name="coverImageUrl"
        render={({ field }) => (
          <ImageUploadField
            label="Gambar Cover"
            value={field.value || null}
            onChange={(url) => field.onChange(url ?? "")}
            upload={uploadCover}
            accept={IMAGE_ACCEPT}
            help="Rasio 16:9 disarankan. Maksimal 5 MB."
          />
        )}
      />

      <FormField
        label="Teks Alternatif Cover"
        name="coverImageAlt"
        error={errors.coverImageAlt?.message}
        hint="Wajib bila cover diunggah; dibacakan screen reader dan dipakai mesin pencari."
      >
        {(props) => (
          <Input
            placeholder="Tangkapan layar beranda aplikasi"
            {...props}
            {...register("coverImageAlt")}
          />
        )}
      </FormField>

      <div className="space-y-2">
        <Label htmlFor="descriptionHtml">Deskripsi (HTML)</Label>
        {/* shortcut: ganti dengan Tiptap editor nanti */}
        <Textarea id="descriptionHtml" rows={8} {...register("descriptionHtml")} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          label="Jenis Proyek"
          name="projectType"
          error={errors.projectType?.message}
          hint="Skripsi, Tugas Kuliah, Lomba, Freelance, atau Pribadi."
        >
          {(props) => (
            <>
              <Input
                list="project-types"
                placeholder="Freelance"
                {...props}
                {...register("projectType")}
              />
              <datalist id="project-types">
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type} />
                ))}
              </datalist>
            </>
          )}
        </FormField>

        <FormField label="Peran" name="role" error={errors.role?.message}>
          {(props) => <Input placeholder="Backend Developer" {...props} {...register("role")} />}
        </FormField>
      </div>

      <FormField
        label="Domain"
        name="domain"
        error={errors.domain?.message}
        hint="Kapabilitas utama proyek; dipakai untuk filter di halaman publik."
      >
        {(props) => (
          <Controller
            control={control}
            name="domain"
            render={({ field }) => (
              <Select
                value={field.value ?? DOMAIN_UNSET}
                onValueChange={(value) =>
                  field.onChange(value === DOMAIN_UNSET ? null : (value as ProjectDomain))
                }
              >
                <SelectTrigger {...props} className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={DOMAIN_UNSET}>Belum ditentukan</SelectItem>
                  {PROJECT_DOMAIN_OPTIONS.map((option) => (
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

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          label="Ukuran Tim"
          name="teamSize"
          error={errors.teamSize?.message}
          hint="Jumlah orang; kosongkan bila dikerjakan sendiri."
        >
          {(props) => (
            <Input
              type="number"
              min={1}
              {...props}
              {...register("teamSize", {
                setValueAs: (value) => (value === "" ? undefined : Number(value)),
              })}
            />
          )}
        </FormField>

        <Controller
          control={control}
          name="isDeployed"
          render={({ field }) => (
            <label className="flex cursor-pointer items-center gap-2 self-end text-sm">
              <Checkbox
                checked={field.value}
                onCheckedChange={(value) => field.onChange(value === true)}
              />
              Sudah dipakai pihak lain
            </label>
          )}
        />
      </div>

      <FormField label="Masalah yang Diselesaikan" name="problem" error={errors.problem?.message}>
        {(props) => <Textarea rows={3} {...props} {...register("problem")} />}
      </FormField>

      <FormField label="Solusi yang Dibangun" name="solution" error={errors.solution?.message}>
        {(props) => <Textarea rows={3} {...props} {...register("solution")} />}
      </FormField>

      <Controller
        control={control}
        name="features"
        render={({ field }) => (
          <div className="space-y-2">
            <Label htmlFor="features">Fitur Utama</Label>
            <Textarea
              id="features"
              rows={4}
              placeholder="Satu fitur per baris"
              value={(field.value ?? []).join("\n")}
              onChange={(event) => field.onChange(event.target.value.split("\n"))}
              onBlur={field.onBlur}
            />
          </div>
        )}
      />

      <Controller
        control={control}
        name="outcomes"
        render={({ field }) => (
          <div className="space-y-2">
            <Label htmlFor="outcomes">Hasil &amp; Dampak</Label>
            <Textarea
              id="outcomes"
              rows={3}
              placeholder="Satu hasil per baris"
              value={(field.value ?? []).join("\n")}
              onChange={(event) => field.onChange(event.target.value.split("\n"))}
              onBlur={field.onBlur}
            />
          </div>
        )}
      />

      <FormField label="Tantangan Terbesar" name="challenges" error={errors.challenges?.message}>
        {(props) => <Textarea rows={2} {...props} {...register("challenges")} />}
      </FormField>

      <FormField label="URL Repositori" name="repoUrl" error={errors.repoUrl?.message}>
        {(props) => (
          <Input
            type="url"
            placeholder="https://github.com/..."
            {...props}
            {...register("repoUrl")}
          />
        )}
      </FormField>

      <FormField label="URL Demo" name="demoUrl" error={errors.demoUrl?.message}>
        {(props) => (
          <Input type="url" placeholder="https://..." {...props} {...register("demoUrl")} />
        )}
      </FormField>

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">Keahlian Terkait</legend>
        <div className="flex max-h-48 flex-wrap gap-2 overflow-y-auto rounded-md border p-3">
          {skills.map((skill) => (
            <label
              key={skill.id}
              className="hover:bg-accent flex cursor-pointer items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors"
            >
              <Checkbox
                checked={skillIds.includes(skill.id)}
                onCheckedChange={() => toggleSkill(skill.id)}
              />
              {skill.name}
            </label>
          ))}
          {skills.length === 0 && (
            <p className="text-muted-foreground text-sm">Belum ada keahlian.</p>
          )}
        </div>
      </fieldset>

      {!isEdit && (
        <p className="text-muted-foreground text-sm">
          Gambar galeri bisa ditambahkan setelah proyek disimpan.
        </p>
      )}

      <fieldset className="border-border/70 space-y-4 rounded-lg border p-4">
        <legend className="px-1 text-sm font-medium">SEO (opsional)</legend>
        <FormField
          label="Judul SEO"
          name="seoTitle"
          error={errors.seoTitle?.message}
          hint="Kosongkan untuk memakai judul proyek."
        >
          {(props) => <Input maxLength={70} {...props} {...register("seoTitle")} />}
        </FormField>
        <FormField
          label="Deskripsi SEO"
          name="seoDescription"
          error={errors.seoDescription?.message}
          hint="Kosongkan untuk memakai ringkasan proyek. Maksimal 160 karakter."
        >
          {(props) => (
            <Textarea rows={2} maxLength={160} {...props} {...register("seoDescription")} />
          )}
        </FormField>
      </fieldset>

      <div className="flex flex-wrap gap-6">
        <label className="flex cursor-pointer items-center gap-2 text-sm">
          <Checkbox
            checked={isFeatured}
            onCheckedChange={(value) => setValue("isFeatured", value === true)}
          />
          Unggulan
        </label>
        <label className="flex cursor-pointer items-center gap-2 text-sm">
          <Checkbox
            checked={isPublished}
            onCheckedChange={(value) => setValue("isPublished", value === true)}
          />
          Publikasikan
        </label>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Menyimpan..." : isEdit ? "Simpan Perubahan" : "Buat Proyek"}
        </Button>
        <Button type="button" variant="outline" asChild>
          <Link href={ROUTES.admin.projects}>Batal</Link>
        </Button>
      </div>
    </form>
  );
}
