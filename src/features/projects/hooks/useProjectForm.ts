"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectFormSchema, type ProjectFormValues } from "../schemas";

export function useProjectForm(defaultValues?: Partial<ProjectFormValues>) {
  return useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      title: "",
      slug: "",
      summary: "",
      descriptionHtml: "",
      repoUrl: "",
      demoUrl: "",
      skillIds: [],
      isFeatured: false,
      isPublished: false,
      seoTitle: "",
      seoDescription: "",
      ...defaultValues,
    },
  });
}

export type { ProjectFormValues };
