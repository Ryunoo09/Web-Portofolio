const FALLBACK_NAME = "Rakha Yuda Wicaksono";

/** Nama unduhan CV; buang karakter yang tidak valid untuk nama berkas. */
export function buildCvFilename(fullName: string | null | undefined): string {
  const safeName = (fullName ?? "")
    .replace(/[\\/:*?"<>|\r\n]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return `CV ATS ${safeName || FALLBACK_NAME}.pdf`;
}
