/**
 * Komponen admin fitur ini. Dipisah dari `index.ts` agar bundel halaman publik
 * tidak menarik form/tabel admin (RHF, zod, dialog).
 */
export { LanguageTable } from "./components/admin/LanguageTable";
export { LanguageForm } from "./components/admin/LanguageForm";
