"use client";

import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { projectFormSchema, type ProjectFormValues } from "../../schemas";
import { createProject, updateProject } from "../../server/actions";
import { slugify } from "@/shared/lib/utils";
import { ROUTES } from "@/shared/constants/routes";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Label } from "@/shared/components/ui/label";
import { Checkbox } from "@/shared/components/ui/checkbox";
import type { Skill } from "@/features/skills";

interface ProjectFormProps {
  project?: {
    id: string;
    title: string;
    slug: string;
    summary: string;
    descriptionHtml: string | null;
    repoUrl: string | null;
    demoUrl: string | null;
    isFeatured: boolean;
    isPublished: boolean;
    skillIds: string[];
  };
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
      skillIds: project?.skillIds ?? [],
      isFeatured: project?.isFeatured ?? false,
      isPublished: project?.isPublished ?? false,
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = form;

  const title = watch("title");
  const slug = watch("slug");
  const skillIds = watch("skillIds");

  // Auto-generate slug from title
  const handleTitleBlur = useCallback(() => {
    if (!isEdit && (!slug || slug === slugify(title.slice(0, -1)))) {
      setValue("slug", slugify(title), { shouldValidate: true });
    }
  }, [isEdit, slug, title, setValue]);

  const onSubmit = async (data: ProjectFormValues) => {
    const result = isEdit ? await updateProject(project!.id, data) : await createProject(data);

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
        <Input id="title" {...register("title")} onBlur={handleTitleBlur} />
        {errors.title && <p className="text-destructive text-xs">{errors.title.message}</p>}
      </div>

      {/* Slug */}
      <div className="space-y-2">
        <Label htmlFor="slug">Slug</Label>
        <Input id="slug" {...register("slug")} />
        {errors.slug && <p className="text-destructive text-xs">{errors.slug.message}</p>}
      </div>

      {/* Summary */}
      <div className="space-y-2">
        <Label htmlFor="summary">Ringkasan</Label>
        <Textarea id="summary" rows={3} {...register("summary")} />
        {errors.summary && <p className="text-destructive text-xs">{errors.summary.message}</p>}
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
          {...register("repoUrl")}
        />
        {errors.repoUrl && <p className="text-destructive text-xs">{errors.repoUrl.message}</p>}
      </div>

      {/* Demo URL */}
      <div className="space-y-2">
        <Label htmlFor="demoUrl">URL Demo</Label>
        <Input id="demoUrl" type="url" placeholder="https://..." {...register("demoUrl")} />
        {errors.demoUrl && <p className="text-destructive text-xs">{errors.demoUrl.message}</p>}
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

      {/* Toggles */}
      <div className="flex flex-wrap gap-6">
        <label className="flex cursor-pointer items-center gap-2 text-sm">
          <Checkbox
            checked={watch("isFeatured")}
            onCheckedChange={(v) => setValue("isFeatured", v === true)}
          />
          Unggulan
        </label>
        <label className="flex cursor-pointer items-center gap-2 text-sm">
          <Checkbox
            checked={watch("isPublished")}
            onCheckedChange={(v) => setValue("isPublished", v === true)}
          />
          Publikasikan
        </label>
      </div>

      {/* Submit */}
      <div className="flex gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Menyimpan..." : isEdit ? "Simpan Perubahan" : "Buat Proyek"}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Batal
        </Button>
      </div>
    </form>
  );
}
