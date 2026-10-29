import { AdminPageHeader } from "@/shared/components/admin";
import { ProfileForm } from "@/features/profile/admin";
import { getProfileForAdmin } from "@/features/profile";

export default async function AdminProfilePage() {
  const profile = await getProfileForAdmin();

  return (
    <main className="space-y-6">
      <AdminPageHeader
        title="Profil"
        description="Data ini dipakai di beranda, /about, dan meta description situs."
      />

      {profile ? (
        <ProfileForm profile={profile} />
      ) : (
        <p className="text-destructive text-sm">
          Baris profil belum tersedia. Jalankan migrasi &amp; seed Supabase terlebih dahulu.
        </p>
      )}
    </main>
  );
}
