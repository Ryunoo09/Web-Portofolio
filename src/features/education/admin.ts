/**
 * Komponen admin fitur ini. Dipisah dari `index.ts` agar bundel halaman publik
 * tidak menarik form/tabel admin (RHF, zod, dialog).
 */
export { EducationTable } from "./components/admin/EducationTable";
export { EducationForm } from "./components/admin/EducationForm";
