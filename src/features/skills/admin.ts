/**
 * Komponen admin fitur ini. Dipisah dari `index.ts` agar bundel halaman publik
 * tidak menarik form/tabel admin (RHF, zod, dialog).
 */
export { SkillTable } from "./components/admin/SkillTable";
export { SkillForm } from "./components/admin/SkillForm";
