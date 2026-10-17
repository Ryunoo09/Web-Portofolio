"use client";

import * as React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { profileFormSchema, type ProfileFormValues } from "../../schemas";
import { updateProfile, uploadProfileImage, uploadProfileResume } from "../../server/actions";
import { DOCUMENT_ACCEPT, IMAGE_ACCEPT } from "@/shared/constants/media";
import { FormField, ImageUploadField } from "@/shared/components";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import type { Profile } from "../../types";

interface ProfileFormProps {
  profile: Profile;
}

export function ProfileForm({ profile }: ProfileFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      fullName: profile.fullName,
      headline: profile.headline,
      bio: profile.bio ?? "",
      email: profile.email ?? "",
      location: profile.location ?? "",
      avatarUrl: profile.avatarUrl ?? "",
      resumeUrl: profile.resumeUrl ?? "",
      socialLinks: profile.socialLinks,
      seoTitle: profile.seoTitle ?? "",
      seoDescription: profile.seoDescription ?? "",
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "socialLinks" });

  const uploadAvatar = React.useCallback((file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    return uploadProfileImage(formData);
  }, []);

  const uploadResume = React.useCallback((file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    return uploadProfileResume(formData);
  }, []);

  const onSubmit = async (data: ProfileFormValues) => {
    const result = await updateProfile(data);

    if (result.ok) {
      toast.success("Profil diperbarui.");
    } else {
      toast.error(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl space-y-6">
      <FormField label="Nama Lengkap" name="fullName" error={errors.fullName?.message}>
        {(props) => <Input {...props} {...register("fullName")} />}
      </FormField>

      <FormField
        label="Headline"
        name="headline"
        error={errors.headline?.message}
        hint="Kalimat utama di beranda, mis. “Full-Stack Engineer”."
      >
        {(props) => <Input {...props} {...register("headline")} />}
      </FormField>

      <FormField label="Bio" name="bio" error={errors.bio?.message}>
        {(props) => <Textarea rows={6} {...props} {...register("bio")} />}
      </FormField>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Email" name="email" error={errors.email?.message}>
          {(props) => <Input type="email" {...props} {...register("email")} />}
        </FormField>

        <FormField label="Lokasi" name="location" error={errors.location?.message}>
          {(props) => (
            <Input placeholder="Jakarta, Indonesia" {...props} {...register("location")} />
          )}
        </FormField>
      </div>

      <Controller
        control={control}
        name="avatarUrl"
        render={({ field }) => (
          <ImageUploadField
            label="Foto Avatar"
            value={field.value || null}
            onChange={(url) => field.onChange(url ?? "")}
            upload={uploadAvatar}
            accept={IMAGE_ACCEPT}
            help="Rasio 1:1 disarankan. Maksimal 5 MB."
          />
        )}
      />

      <Controller
        control={control}
        name="resumeUrl"
        render={({ field }) => (
          <ImageUploadField
            label="Berkas CV"
            value={field.value || null}
            onChange={(url) => field.onChange(url ?? "")}
            upload={uploadResume}
            accept={DOCUMENT_ACCEPT}
            help="PDF maksimal 5 MB; tombol “Unduh CV” di beranda memakai berkas ini."
          />
        )}
      />

      <fieldset className="space-y-3">
        <legend className="text-sm font-medium">Tautan Sosial</legend>

        {fields.length === 0 ? (
          <p className="text-muted-foreground text-sm">
            Belum ada tautan. Tambahkan tautan pertama Anda.
          </p>
        ) : (
          <ul className="space-y-3">
            {fields.map((item, index) => (
              <li key={item.id} className="flex items-start gap-2">
                <div className="w-36 shrink-0">
                  <Input
                    aria-label={`Nama platform tautan ${index + 1}`}
                    placeholder="github"
                    {...register(`socialLinks.${index}.platform`)}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <Input
                    type="url"
                    aria-label={`URL tautan ${index + 1}`}
                    placeholder="https://github.com/username"
                    {...register(`socialLinks.${index}.url`)}
                  />
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="text-destructive hover:text-destructive min-h-11 min-w-11"
                  onClick={() => remove(index)}
                  aria-label={`Hapus tautan ${index + 1}`}
                >
                  <Trash2 className="size-4" aria-hidden="true" />
                </Button>
              </li>
            ))}
          </ul>
        )}

        <Button
          type="button"
          variant="outline"
          className="min-h-11"
          onClick={() => append({ platform: "", url: "" })}
        >
          <Plus className="size-4" aria-hidden="true" />
          Tambah tautan
        </Button>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Judul SEO" name="seoTitle" error={errors.seoTitle?.message}>
          {(props) => <Input {...props} {...register("seoTitle")} />}
        </FormField>

        <FormField
          label="Deskripsi SEO"
          name="seoDescription"
          error={errors.seoDescription?.message}
        >
          {(props) => <Input {...props} {...register("seoDescription")} />}
        </FormField>
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Menyimpan..." : "Simpan Perubahan"}
      </Button>
    </form>
  );
}
