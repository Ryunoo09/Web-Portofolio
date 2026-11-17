"use client";

import Link from "next/link";
import type { V2HeroProps } from "../types";

export function V2Hero({ profile, stats }: V2HeroProps) {
  return (
    <section
      id="beranda"
      className="relative flex min-h-[80vh] flex-col justify-center py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Terbuka untuk Peluang
            </span>

            <div>
              <p className="text-lg font-medium text-[#C59B27]">Halo Semua 👋, Saya</p>
              <h1 className="font-heading mt-2 text-5xl font-bold tracking-tight text-[#0F172A] md:text-[52px]">
                {profile?.fullName ?? "Rakha Yuda Wicaksono"}
              </h1>
              <p className="mt-3 text-base text-[#475569]">{profile?.headline}</p>
              {profile?.bio && <p className="mt-2 text-sm text-[#475569]">{profile.bio}</p>}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/v2#kontak"
                className="rounded-full bg-[#C59B27] px-6 py-3 text-sm font-bold text-[#070B12] transition hover:bg-[#8A6A1F] hover:text-white"
              >
                Hubungi Saya ↗
              </Link>
              <Link
                href="/v2#proyek"
                className="rounded-full border border-[#E2E8F0] bg-white px-6 py-3 text-sm font-bold text-[#0F172A] transition hover:border-[#C59B27] hover:text-[#C59B27]"
              >
                Lihat Studi Kasus →
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <div className="rounded-2xl border border-[#FEF3C7] bg-[#FDFBF9] p-4 text-center">
                <p className="font-heading text-2xl font-bold text-[#C59B27] md:text-3xl">
                  {stats?.operationalSystems ?? "3"}
                </p>
                <p className="mt-1 text-xs font-medium text-[#475569]">Sistem Operasional</p>
              </div>
              <div className="rounded-2xl border border-[#FEF3C7] bg-[#FDFBF9] p-4 text-center">
                <p className="font-heading text-2xl font-bold text-[#C59B27] md:text-3xl">
                  {stats?.predictiveAccuracy ?? "88,62%"}
                </p>
                <p className="mt-1 text-xs font-medium text-[#475569]">Akurasi Prediksi</p>
              </div>
              <div className="rounded-2xl border border-[#FEF3C7] bg-[#FDFBF9] p-4 text-center">
                <p className="font-heading text-2xl font-bold text-[#C59B27] md:text-3xl">
                  {stats?.timeCut ?? "10 → 2 mnt"}
                </p>
                <p className="mt-1 text-xs font-medium text-[#475569]">Percepatan Proses</p>
              </div>
            </div>
          </div>

          {/* Right column - Avatar */}
          <div className="relative flex items-center justify-center md:justify-end">
            <div className="relative flex h-[320px] w-[320px] items-center justify-center md:h-[400px] md:w-[400px]">
              {/* Outer orbit ring */}
              <div className="absolute h-full w-full rounded-full border border-[#C59B27]/30" />
              {/* Inner orbit ring */}
              <div className="absolute h-[85%] w-[85%] rounded-full border border-[#C59B27]/20" />
              {/* Aura glow */}
              <div className="absolute h-[75%] w-[75%] rounded-full bg-[#FEF3C7]/50 blur-2xl" />
              {/* Avatar */}
              <div className="relative flex h-[65%] w-[65%] items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-xl">
                {profile?.avatarUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={profile.avatarUrl}
                    alt={profile?.fullName ?? "Rakha"}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#FDFBF9] text-6xl">
                    🖼️
                  </div>
                )}
              </div>

              {/* Floating badges */}
              <div className="absolute top-8 -right-2 rounded-full border border-[#FEF3C7] bg-white px-4 py-2 text-xs font-semibold text-[#8A6A1F] shadow-lg">
                FastAPI &amp; PostgreSQL
              </div>
              <div className="absolute bottom-16 -left-4 rounded-full border border-[#FEF3C7] bg-white px-4 py-2 text-xs font-semibold text-[#8A6A1F] shadow-lg">
                Computer Vision YOLO26
              </div>
              <div className="absolute right-8 bottom-4 rounded-full border border-[#FEF3C7] bg-white px-4 py-2 text-xs font-semibold text-[#8A6A1F] shadow-lg">
                Brebes · Open Remote
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
