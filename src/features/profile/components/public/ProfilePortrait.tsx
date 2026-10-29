import { MediaFrame } from "@/shared/components";

interface ProfilePortraitProps {
  avatarUrl: string | null;
  name: string;
  role: string;
}

/**
 * Potret profil di halaman tentang. Rasio 1:1 mengikuti anjuran unggah avatar;
 * fallback monogram dipakai selama foto belum diisi, tanpa gambar palsu.
 */
export function ProfilePortrait({ avatarUrl, name, role }: ProfilePortraitProps) {
  return (
    <MediaFrame
      src={avatarUrl}
      alt={`Foto ${name}`}
      aspect="1/1"
      priority
      sizes="(min-width: 1024px) 320px, 280px"
      className="w-full max-w-[280px] lg:ml-auto lg:max-w-[320px]"
      fallback={
        <div className="bg-surface-2 absolute inset-0 flex flex-col items-center justify-center gap-2">
          <span className="font-heading text-gold text-5xl font-semibold tracking-tight">RYW</span>
          <span className="text-muted-foreground font-mono text-[10px] tracking-[0.14em] uppercase">
            Foto menyusul
          </span>
        </div>
      }
      caption={
        <span className="flex flex-col gap-1 font-mono text-[10px] tracking-[0.14em] uppercase">
          <span className="text-foreground">{name}</span>
          <span>{role}</span>
        </span>
      }
    />
  );
}
