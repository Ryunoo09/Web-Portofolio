const FALLBACK_NAME = "Rakha Yuda Wicaksono";

export type CvLanguage = "id" | "en";

/** Nama unduhan CV; buang karakter yang tidak valid untuk nama berkas. */
export function buildCvFilename(
  fullName: string | null | undefined,
  language: CvLanguage = "id",
): string {
  const safeName = (fullName ?? "")
    .replace(/[\\/:*?"<>|\r\n]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const suffix = language === "en" ? " - EN" : "";

  return `CV ATS ${safeName || FALLBACK_NAME}${suffix}.pdf`;
}
