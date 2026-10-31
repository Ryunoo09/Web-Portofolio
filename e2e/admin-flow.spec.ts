import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

/**
 * Blok alur admin. Kredensial dibaca dari `.env.local` oleh `playwright.config.ts`
 * (`E2E_ADMIN_EMAIL` / `E2E_ADMIN_PASSWORD`); tanpa itu blok ini di-skip.
 * Setiap test membersihkan datanya sendiri agar database tidak terisi sampah uji.
 */
const email = process.env.E2E_ADMIN_EMAIL;
const password = process.env.E2E_ADMIN_PASSWORD;
const hasCredentials = Boolean(email && password);

// PNG 1x1 px: cukup untuk menguji unggah gambar tanpa berkas biner di repo.
const TINY_PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFAAH/q842iQAAAABJRU5ErkJggg==",
  "base64",
);

async function login(page: Page) {
  await page.goto("/admin/login");
  await page.getByLabel(/email/i).fill(email!);
  await page.getByLabel(/password|kata sandi/i).fill(password!);
  await page.getByRole("button", { name: /masuk|login/i }).click();
  await expect(page).toHaveURL(/\/admin$/);
}

/** Tekan konfirmasi di `ConfirmDeleteDialog` bersama, lalu pastikan dialognya tutup. */
async function confirmDelete(page: Page) {
  await page.getByRole("button", { name: "Hapus", exact: true }).click();
  // Server action + `router.refresh()` bisa lambat saat dev server baru meng-compile.
  await expect(page.getByRole("dialog")).toBeHidden({ timeout: 45_000 });
}

test.describe("alur admin", () => {
  // Tes admin berbagi database dan dev server. Jalankan berurutan agar tidak
  // saling berebut kompilasi/Server Action; timeout dinaikkan untuk CI lambat.
  test.describe.configure({ mode: "serial", timeout: 120_000 });

  test.skip(!hasCredentials, "Butuh E2E_ADMIN_EMAIL dan E2E_ADMIN_PASSWORD di .env.local.");

  test("login, unggah cover, lalu tampil di /projects dan bisa dihapus", async ({ page }) => {
    await login(page);

    const stamp = Date.now();
    const title = `E2E Proyek ${stamp}`;
    // Slug terisi otomatis dari judul saat judul kehilangan fokus.
    const slug = `e2e-proyek-${stamp}`;

    await page.goto("/admin/projects/new");
    await page.getByLabel("Judul", { exact: true }).fill(title);
    await page
      .getByLabel("Ringkasan")
      .fill("Proyek uji otomatis untuk memverifikasi unggah gambar cover.");
    await expect(page.getByLabel("Slug")).toHaveValue(slug);

    await page.locator('input[type="file"]').first().setInputFiles({
      name: "cover.png",
      mimeType: "image/png",
      buffer: TINY_PNG,
    });
    // Unggahan selesai ketika pratinjau menggantikan tombol "Pilih berkas".
    await expect(page.getByRole("button", { name: "Ganti berkas" })).toBeVisible();

    await page.getByLabel("Teks Alternatif Cover").fill("Cover proyek uji");
    await page.getByLabel("Publikasikan").check();
    await expect(page.getByLabel("Publikasikan")).toBeChecked();
    await page.getByRole("button", { name: "Buat Proyek" }).click();

    await expect(page).toHaveURL(/\/admin\/projects$/);
    await page.goto(`/projects/${slug}`);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(title);

    await page.goto("/admin/projects");
    await page.getByRole("button", { name: `Hapus proyek ${title}` }).click();
    await confirmDelete(page);
  });

  test("sakelar status di tabel proyek langsung mengubah tayangan publik", async ({ page }) => {
    await login(page);

    const stamp = Date.now();
    const title = `E2E Status ${stamp}`;
    const slug = `e2e-status-${stamp}`;

    await page.goto("/admin/projects/new");
    await page.getByLabel("Judul", { exact: true }).fill(title);
    await page.getByLabel("Ringkasan").fill("Proyek uji sakelar status terbit/draf.");
    await expect(page.getByLabel("Slug")).toHaveValue(slug);
    await page.getByLabel("Domain").click();
    await page.getByRole("option", { name: "Backend & API" }).click();
    await page.getByLabel("Publikasikan").check();
    await page.getByRole("button", { name: "Buat Proyek" }).click();
    await expect(page).toHaveURL(/\/admin\/projects$/);

    await page.getByRole("link", { name: `Ubah proyek ${title}` }).click();
    await expect(page.getByLabel("Domain")).toHaveText("Backend & API");
    await page.goto("/admin/projects");

    const toggleName = `Ubah status terbit: ${title}`;
    const heading = page.getByRole("heading", { name: title });

    // Terbit → draf: hilang dari daftar publik tanpa membuka halaman edit.
    await page.getByRole("switch", { name: toggleName }).click();
    await expect(page.getByRole("switch", { name: toggleName })).not.toBeChecked();
    await page.goto("/projects");
    await expect(heading).toHaveCount(0);

    // Draf → terbit: muncul lagi.
    await page.goto("/admin/projects");
    await page.getByRole("switch", { name: toggleName }).click();
    await expect(page.getByRole("switch", { name: toggleName })).toBeChecked();
    await page.goto("/projects");
    await expect(heading).toBeVisible();

    // Bersihkan.
    await page.goto("/admin/projects");
    await page.getByRole("button", { name: `Hapus proyek ${title}` }).click();
    await confirmDelete(page);
  });

  test("tambah pendidikan lalu muncul di /about, lalu dibersihkan lagi", async ({ page }) => {
    await login(page);

    const institution = `E2E Kampus ${Date.now()}`;
    await page.goto("/admin/education/new");
    await page.getByLabel("Institusi").fill(institution);
    await page.getByLabel("Jenjang / Gelar").fill("S1 Teknik Informatika");
    await page.getByRole("button", { name: "Buat Pendidikan" }).click();

    await expect(page).toHaveURL(/\/admin\/education$/);
    await page.goto("/about");
    await expect(page.getByText(institution)).toBeVisible();

    // Bersihkan jejak uji agar tidak menumpuk di /about.
    await page.goto("/admin/education");
    await page
      .getByRole("row", { name: new RegExp(institution) })
      .getByRole("button", { name: /Hapus pendidikan/ })
      .click();
    await confirmDelete(page);
  });

  test("pesan kontak: kirim lewat /contact lalu tandai dibaca dan hapus", async ({ page }) => {
    const subject = `E2E Pesan ${Date.now()}`;

    await page.goto("/contact");
    await page.getByLabel("Nama", { exact: true }).fill("E2E Pengirim");
    await page.getByLabel("Email", { exact: true }).fill("e2e@example.com");
    await page.getByLabel("Topik").fill(subject);
    await page.getByLabel("Pesan", { exact: true }).fill("Pesan uji otomatis dari Playwright.");
    await page.getByRole("button", { name: "Kirim pesan" }).click();
    await expect(page.getByText("Pesan terkirim.")).toBeVisible();

    await login(page);
    await page.goto("/admin/messages");
    await page.getByRole("button", { name: new RegExp(subject) }).click();
    // Membuka pesan langsung menandainya terbaca.
    await expect(page.getByText("Sudah dibaca")).toBeVisible();

    await page.getByRole("button", { name: "Hapus pesan" }).click();
    await confirmDelete(page);
  });

  test("tidak ada pelanggaran aksesibilitas di /admin/projects", async ({ page }) => {
    await login(page);
    await page.goto("/admin/projects");
    // Pastikan shell admin selesai render sebelum memindai.
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
  });

  test("organisasi: tambah lalu muncul di /about, lalu dibersihkan lagi", async ({ page }) => {
    await login(page);

    const name = `E2E Organisasi ${Date.now()}`;
    await page.goto("/admin/organizations/new");
    await page.getByLabel("Nama Organisasi").fill(name);
    await page.getByLabel("Peran").fill("Anggota Aktif");
    await page.getByRole("button", { name: "Buat Organisasi" }).click();

    await expect(page).toHaveURL(/\/admin\/organizations$/);
    await page.goto("/about");
    await expect(page.getByText(name)).toBeVisible();

    await page.goto("/admin/organizations");
    await page
      .getByRole("row", { name: new RegExp(name) })
      .getByRole("button", { name: /Hapus organisasi/ })
      .click();
    await confirmDelete(page);
  });

  test("bahasa: tambah lalu muncul di /about, lalu dibersihkan lagi", async ({ page }) => {
    await login(page);

    const name = `E2E Bahasa ${Date.now()}`;
    await page.goto("/admin/languages/new");
    await page.getByLabel("Nama Bahasa").fill(name);
    await page.getByLabel("Tingkat").click();
    await page.getByRole("option", { name: /Intermediate/ }).click();
    await page.getByRole("button", { name: "Buat Bahasa" }).click();

    await expect(page).toHaveURL(/\/admin\/languages$/);
    await page.goto("/about");
    await expect(page.getByText(name)).toBeVisible();

    await page.goto("/admin/languages");
    await page
      .getByRole("row", { name: new RegExp(name) })
      .getByRole("button", { name: /Hapus bahasa/ })
      .click();
    await confirmDelete(page);
  });

  test("tidak ada pelanggaran aksesibilitas di halaman admin organisasi & bahasa", async ({
    page,
  }) => {
    await login(page);

    for (const path of ["/admin/organizations", "/admin/languages"]) {
      await page.goto(path);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations, `${path}: ${JSON.stringify(results.violations, null, 2)}`).toEqual(
        [],
      );
    }
  });

  test("sertifikat: deskripsi tampil di /about, lalu dibersihkan lagi", async ({ page }) => {
    await login(page);

    const stamp = Date.now();
    const title = `E2E Sertifikat ${stamp}`;
    const description = `Ringkasan sertifikat uji ${stamp}.`;

    await page.goto("/admin/certificates/new");
    await page.getByLabel("Nama Sertifikat").fill(title);
    await page.getByLabel("Penerbit").fill("E2E Penerbit");
    await page.getByLabel("Deskripsi").fill(description);
    await page.getByLabel("Publikasikan").check();
    await page.getByRole("button", { name: "Buat Sertifikat" }).click();

    await expect(page).toHaveURL(/\/admin\/certificates$/);
    await page.goto("/about");
    await expect(page.getByText(description)).toBeVisible();

    await page.goto("/admin/certificates");
    await page.getByRole("button", { name: `Hapus sertifikat ${title}` }).click();
    await confirmDelete(page);
  });

  test("pengalaman: unggah dokumentasi lalu tampil di /about, lalu dibersihkan lagi", async ({
    page,
  }) => {
    await login(page);

    const stamp = Date.now();
    const role = `E2E Dokumentasi ${stamp}`;
    const alt = `Dokumentasi uji ${stamp}`;

    await page.goto("/admin/experiences/new");
    await page.getByLabel("Posisi").fill(role);
    await page.getByLabel("Perusahaan").fill("PT E2E");
    await page.getByLabel("Mulai").fill("2025-01-01");
    await page.getByLabel("Publikasikan").check();
    await page.getByRole("button", { name: "Buat Pengalaman" }).click();
    await expect(page).toHaveURL(/\/admin\/experiences$/);

    // Dokumentasi hanya tersedia di halaman ubah setelah data tersimpan.
    await page.getByRole("link", { name: `Ubah pengalaman ${role}` }).click();
    await expect(
      page.getByRole("heading", { level: 2, name: "Dokumentasi Pengalaman" }),
    ).toBeVisible();

    await page.locator('input[type="file"]').setInputFiles({
      name: "dokumentasi.png",
      mimeType: "image/png",
      buffer: TINY_PNG,
    });
    // Unggahan selesai ketika kartu dokumentasi (alt sementara) muncul.
    await expect(page.getByAltText(/Dokumentasi 1/)).toBeVisible({ timeout: 30_000 });

    await page.getByLabel("Teks alternatif").fill(alt);
    await page.getByLabel("Teks alternatif").blur();
    await expect(page.getByText("Teks alternatif disimpan.")).toBeVisible();

    await page.goto("/about");
    await expect(page.getByAltText(alt)).toBeVisible();

    // Bersihkan: hapus pengalaman ikut membersihkan baris & berkas dokumentasi.
    await page.goto("/admin/experiences");
    await page.getByRole("button", { name: `Hapus pengalaman ${role}` }).click();
    await confirmDelete(page);

    await page.goto("/about");
    await expect(page.getByText(role)).toHaveCount(0);
  });
});
