import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

/**
 * Keputusan D3: alur admin diverifikasi manual dulu. Isi
 * `E2E_ADMIN_EMAIL` & `E2E_ADMIN_PASSWORD` di `.env.local` (jangan pernah dikomit)
 * agar blok ini ikut berjalan otomatis.
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

test.describe("alur admin", () => {
  test.skip(!hasCredentials, "Butuh E2E_ADMIN_EMAIL dan E2E_ADMIN_PASSWORD di .env.local.");

  test("login, unggah cover, lalu tampil di /projects dan bisa dihapus", async ({ page }) => {
    await login(page);

    await page.goto("/admin/projects/new");
    const slug = `e2e-proyek-${Date.now()}`;
    await page.getByLabel("Judul").fill(`E2E Proyek ${slug}`);
    await page.getByLabel("Slug").fill(slug);
    await page
      .getByLabel("Ringkasan")
      .fill("Proyek uji otomatis untuk memverifikasi unggah gambar cover.");
    await page.locator('input[type="file"]').first().setInputFiles({
      name: "cover.png",
      mimeType: "image/png",
      buffer: TINY_PNG,
    });
    await page.getByLabel("Teks Alternatif Cover").fill("Cover proyek uji");
    await page.getByLabel("Publikasikan").check();
    await page.getByRole("button", { name: "Buat Proyek" }).click();

    await expect(page).toHaveURL(/\/admin\/projects$/);
    await page.goto(`/projects/${slug}`);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("E2E Proyek");

    await page.goto("/admin/projects");
    await page
      .getByRole("button", { name: /hapus proyek E2E Proyek/ })
      .first()
      .click();
    await page.getByRole("button", { name: "Hapus" }).click();
    await expect(page.getByRole("dialog")).toBeHidden();
  });

  test("tambah pendidikan lalu muncul di /about", async ({ page }) => {
    await login(page);

    await page.goto("/admin/education/new");
    const institution = `E2E Kampus ${Date.now()}`;
    await page.getByLabel("Institusi").fill(institution);
    await page.getByLabel("Jenjang / Gelar").fill("S1 Teknik Informatika");
    await page.getByRole("button", { name: "Buat Pendidikan" }).click();

    await expect(page).toHaveURL(/\/admin\/education$/);
    await page.goto("/about");
    await expect(page.getByText(institution)).toBeVisible();
  });

  test("inbox pesan: tandai dibaca", async ({ page }) => {
    await login(page);
    await page.goto("/admin/messages");

    const emptyState = page.getByText("Kotak masuk masih kosong");
    if (await emptyState.isVisible()) test.skip(true, "Belum ada pesan untuk diuji.");

    await page.locator("ul li button").first().click();
    await expect(page.getByText("Sudah dibaca")).toBeVisible();
  });

  test("tidak ada pelanggaran aksesibilitas di /admin/projects", async ({ page }) => {
    await login(page);
    await page.goto("/admin/projects");

    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
  });
});
