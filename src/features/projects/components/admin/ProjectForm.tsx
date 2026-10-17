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
import { IMAGE_ACCEPT } from "@/shared/constants/media";
import { ROUTES } from "@/shared/constants/routes";
import { FieldError, ImageUploadField } from "@/shared/components";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Label } from "@/shared/components/ui/label";
import { Checkbox } from "@/shared/components/ui/checkbox";
import type { Skill } from "@/features/skills";
import type { Project } from "../../types";

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
      descriptionHtml: project?.descriptionHtml ?? "",
      repoUrl: project?.repoUrl ?? "",
      demoUrl: project?.demoUrl ?? "",
      coverImageUrl: project?.coverImageUrl ?? "",
      coverImageAlt: project?.coverImageAlt ?? "",
      skillIds: project?.skills.map((skill) => skill.id) ?? [],
      isFeatured: project?.isFeatured ?? false,
      isPublished: project?.isPublished ?? false,
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

  // Auto-generate slug from title
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
      {/* Title */}
      <div className="space-y-2">
        <Label htmlFor="title">Judul</Label>
        <Input
          id="title"
          aria-invalid={!!errors.title}
          aria-describedby={errors.title ? "title-error" : undefined}
          {...register("title")}
          onBlur={handleTitleBlur}
        />
        <FieldError id="title-error" message={errors.title?.message} />
      </div>

      {/* Slug */}
      <div className="space-y-2">
        <Label htmlFor="slug">Slug</Label>
        <Input
          id="slug"
          aria-invalid={!!errors.slug}
          aria-describedby={errors.slug ? "slug-error" : undefined}
          {...register("slug")}
        />
        <FieldError id="slug-error" message={errors.slug?.message} />
      </div>

      {/* Summary */}
      <div className="space-y-2">
        <Label htmlFor="summary">Ringkasan</Label>
        <Textarea
          id="summary"
          rows={3}
          aria-invalid={!!errors.summary}
          aria-describedby={errors.summary ? "summary-error" : undefined}
          {...register("summary")}
        />
        <FieldError id="summary-error" message={errors.summary?.message} />
      </div>

      {/* Cover image */}
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

      {/* Cover alt */}
      <div className="space-y-2">
        <Label htmlFor="coverImageAlt">Teks Alternatif Cover</Label>
        <Input
          id="coverImageAlt"
          placeholder="Tangkapan layar beranda aplikasi"
          aria-invalid={!!errors.coverImageAlt}
          aria-describedby={errors.coverImageAlt ? "coverImageAlt-error" : "coverImageAlt-help"}
          {...register("coverImageAlt")}
        />
        <p id="coverImageAlt-help" className="text-muted-foreground text-sm">
          Wajib bila cover diunggah; dibacakan screen reader dan dipakai mesin pencari.
        </p>
        <FieldError id="coverImageAlt-error" message={errors.coverImageAlt?.message} />
      </div>

      {/* Description HTML */}
      <div className="space-y-2">
        <Label htmlFor="descriptionHtml">Deskripsi (HTML)</Label>
        {/* shortcut: ganti dengan Tiptap editor nanti */}
        <Textarea id="descriptionHtml" rows={8} {...register("descriptionHtml")} />
      </div>

      {/* Repo URL */}
      <div className="space-y-2">
        <Label htmlFor="repoUrl">URL Repositori</Label>
        <Input
          id="repoUrl"
          type="url"
          placeholder="https://github.com/..."
          aria-invalid={!!errors.repoUrl}
          aria-describedby={errors.repoUrl ? "repoUrl-error" : undefined}
          {...register("repoUrl")}
        />
        <FieldError id="repoUrl-error" message={errors.repoUrl?.message} />
      </div>

      {/* Demo URL */}
      <div className="space-y-2">
        <Label htmlFor="demoUrl">URL Demo</Label>
        <Input
          id="demoUrl"
          type="url"
          placeholder="https://..."
          aria-invalid={!!errors.demoUrl}
          aria-describedby={errors.demoUrl ? "demoUrl-error" : undefined}
          {...register("demoUrl")}
        />
        <FieldError id="demoUrl-error" message={errors.demoUrl?.message} />
      </div>

      {/* Skills */}
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

      {/* Gallery hint */}
      {!isEdit && (
        <p className="text-muted-foreground text-sm">
          Gambar galeri bisa ditambahkan setelah proyek disimpan.
        </p>
      )}

      {/* Toggles */}
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

      {/* Submit */}
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
