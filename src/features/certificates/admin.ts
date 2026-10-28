/**
 * Komponen admin fitur ini. Dipisah dari `index.ts` agar bundel halaman publik
 * tidak menarik form/tabel admin (RHF, zod, dialog).
 */
export { CertificateTable } from "./components/admin/CertificateTable";
export { CertificateForm } from "./components/admin/CertificateForm";
