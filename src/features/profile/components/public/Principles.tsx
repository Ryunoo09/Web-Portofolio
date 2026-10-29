const PRINCIPLES = [
  {
    title: "Masalah dulu",
    description: "Pilih stack setelah paham batasan, bukan sebelum.",
  },
  {
    title: "Ukur hasil",
    description: "Setiap hasil punya metrik, sumber, dan cara mengukur.",
  },
  {
    title: "Rawat setelah kirim",
    description:
      "Validasi input, otorisasi peran, dan struktur modular agar sistem tetap bisa dirawat.",
  },
] as const;

/** Tiga prinsip kerja sebagai baris bergaris, bukan kartu ikon. */
export function Principles() {
  return (
    <ol className="border-border divide-border divide-y border-y">
      {PRINCIPLES.map((principle, index) => (
        <li
          key={principle.title}
          className="grid gap-2 py-4 sm:grid-cols-[3rem_14rem_1fr] sm:items-baseline sm:gap-4"
        >
          <span className="text-muted-foreground font-mono text-xs tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-foreground font-heading text-base font-semibold">
            {principle.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{principle.description}</p>
        </li>
      ))}
    </ol>
  );
}
