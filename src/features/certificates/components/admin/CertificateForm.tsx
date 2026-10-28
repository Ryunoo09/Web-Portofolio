"use client";

import * as React from "react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { certificateFormSchema, type CertificateFormValues } from "../../schemas";
import { createCertificate, updateCertificate, uploadCertificateImage } from "../../server/actions";
import { ROUTES } from "@/shared/constants/routes";
import { FormField, ImageUploadField } from "@/shared/components/admin";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Checkbox } from "@/shared/components/ui/checkbox";
import type { Certificate } from "../../types";

interface CertificateFormProps {
  certificate?: Certificate;
}

export function CertificateForm({ certificate }: CertificateFormProps) {
  const router = useRouter();
  const isEdit = !!certificate;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<CertificateFormValues>({
    resolver: zodResolver(certificateFormSchema),
    defaultValues: {
      title: certificate?.title ?? "",
      issuer: certificate?.issuer ?? "",
      issuedAt: certificate?.issuedAt ?? "",
      credentialUrl: certificate?.credentialUrl ?? "",
      imageUrl: certificate?.imageUrl ?? "",
      sortOrder: certificate?.sortOrder ?? 0,
      isPublished: certificate?.isPublished ?? true,
    },
  });

  const uploadImage = React.useCallback((file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    return uploadCertificateImage(formData);
  }, []);

  const onSubmit = async (data: CertificateFormValues) => {
    const result = isEdit
      ? await updateCertificate(certificate.id, data)
      : await createCertificate(data);

    if (result.ok) {
      toast.success(isEdit ? "Sertifikat diperbarui." : "Sertifikat dibuat.");
      router.push(ROUTES.admin.certificates);
      router.refresh();
    } else {
      toast.error(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl space-y-6">
      <FormField label="Nama Sertifikat" name="title" error={errors.title?.message}>
        {(props) => (
          <Input placeholder="AWS Certified Developer" {...props} {...register("title")} />
        )}
      </FormField>

      <FormField label="Penerbit" name="issuer" error={errors.issuer?.message}>
        {(props) => <Input placeholder="Amazon Web Services" {...props} {...register("issuer")} />}
      </FormField>

      <FormField label="Tanggal Terbit" name="issuedAt" error={errors.issuedAt?.message}>
        {(props) => <Input type="date" {...props} {...register("issuedAt")} />}
      </FormField>

      <FormField
        label="URL Verifikasi"
        name="credentialUrl"
        error={errors.credentialUrl?.message}
        hint="Tautan halaman verifikasi resmi dari penerbit."
      >
        {(props) => (
          <Input type="url" placeholder="https://..." {...props} {...register("credentialUrl")} />
        )}
      </FormField>

      <Controller
        control={control}
        name="imageUrl"
        render={({ field }) => (
          <ImageUploadField
            label="Gambar Sertifikat"
            value={field.value || null}
            onChange={(url) => field.onChange(url ?? "")}
            upload={uploadImage}
            help="Pratinjau sertifikat yang tampil di halaman /about. Maksimal 5 MB."
          />
        )}
      />

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
          {isSubmitting ? "Menyimpan..." : isEdit ? "Simpan Perubahan" : "Buat Sertifikat"}
        </Button>
        <Button type="button" variant="outline" asChild>
          <Link href={ROUTES.admin.certificates}>Batal</Link>
        </Button>
      </div>
    </form>
  );
}
