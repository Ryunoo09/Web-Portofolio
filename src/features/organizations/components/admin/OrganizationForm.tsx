"use client";

import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { organizationFormSchema, type OrganizationFormValues } from "../../schemas";
import { createOrganization, updateOrganization } from "../../server/actions";
import { ROUTES } from "@/shared/constants/routes";
import { FormField } from "@/shared/components";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Checkbox } from "@/shared/components/ui/checkbox";
import type { Organization } from "../../types";

interface OrganizationFormProps {
  organization?: Organization;
}

export function OrganizationForm({ organization }: OrganizationFormProps) {
  const router = useRouter();
  const isEdit = !!organization;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<OrganizationFormValues>({
    resolver: zodResolver(organizationFormSchema),
    defaultValues: {
      name: organization?.name ?? "",
      role: organization?.role ?? "",
      description: organization?.description ?? "",
      startedAt: organization?.startedAt ?? "",
      endedAt: organization?.endedAt ?? "",
      memberCount: organization?.memberCount ?? undefined,
      sortOrder: organization?.sortOrder ?? 0,
      isPublished: organization?.isPublished ?? true,
    },
  });

  const onSubmit = async (data: OrganizationFormValues) => {
    const result = isEdit
      ? await updateOrganization(organization.id, data)
      : await createOrganization(data);

    if (result.ok) {
      toast.success(isEdit ? "Organisasi diperbarui." : "Organisasi dibuat.");
      router.push(ROUTES.admin.organizations);
      router.refresh();
    } else {
      toast.error(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl space-y-6">
      <FormField label="Nama Organisasi" name="name" error={errors.name?.message}>
        {(props) => (
          <Input placeholder="Polytechnic Computer Club (PCC)" {...props} {...register("name")} />
        )}
      </FormField>

      <FormField label="Peran" name="role" error={errors.role?.message}>
        {(props) => <Input placeholder="Anggota Aktif" {...props} {...register("role")} />}
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
        label="Jumlah Anggota"
        name="memberCount"
        error={errors.memberCount?.message}
        hint="Kosongkan bila tidak diketahui."
      >
        {(props) => (
          <Input
            type="number"
            min={0}
            {...props}
            {...register("memberCount", {
              setValueAs: (value) => (value === "" ? undefined : Number(value)),
            })}
          />
        )}
      </FormField>

      <FormField
        label="Deskripsi"
        name="description"
        error={errors.description?.message}
        hint="Satu poin per baris — tampil sebagai daftar berbutir di /about."
      >
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
          {isSubmitting ? "Menyimpan..." : isEdit ? "Simpan Perubahan" : "Buat Organisasi"}
        </Button>
        <Button type="button" variant="outline" asChild>
          <Link href={ROUTES.admin.organizations}>Batal</Link>
        </Button>
      </div>
    </form>
  );
}
