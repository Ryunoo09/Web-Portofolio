/**
 * Komponen admin fitur ini. Dipisah dari `index.ts` agar bundel halaman publik
 * tidak menarik form/tabel admin (RHF, zod, dialog).
 */
export { OrganizationTable } from "./components/admin/OrganizationTable";
export { OrganizationForm } from "./components/admin/OrganizationForm";
