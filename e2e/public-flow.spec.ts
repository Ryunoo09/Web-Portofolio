import { expect, test } from "@playwright/test";

test("beranda dapat dibuka", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("daftar proyek membuka detail proyek", async ({ page }) => {
  await page.goto("/projects");

  const detailLink = page.getByRole("link", { name: "Detail Proyek" }).first();
  await expect(detailLink).toBeVisible();
  await detailLink.click();

  await expect(page).toHaveURL(/\/projects\/[^/]+$/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("setiap gambar proyek punya teks alternatif", async ({ page }) => {
  await page.goto("/projects");

  const images = page.locator('[data-slot="card"] img');
  const count = await images.count();

  for (let index = 0; index < count; index += 1) {
    await expect(images.nth(index)).toHaveAttribute("alt", /\S/);
  }
});

test("halaman proyek menampilkan galeri bila gambarnya ada", async ({ page }) => {
  await page.goto("/projects");

  const detailLink = page.getByRole("link", { name: "Detail Proyek" }).first();
  await detailLink.click();

  const gallery = page.getByRole("heading", { name: "Galeri Proyek" });
  if (await gallery.isVisible()) {
    const galleryImages = page.locator("figure img");
    expect(await galleryImages.count()).toBeGreaterThan(0);
  }
});

test("halaman keahlian dikelompokkan per kategori", async ({ page }) => {
  await page.goto("/skills");

  await expect(page.getByRole("heading", { name: "Bahasa Pemrograman" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Data & ML" })).toBeVisible();
  // Sejak dikelompokkan, nama skill bukan lagi heading (dulu satu kartu per skill).
  await expect(page.getByRole("heading", { name: "Python" })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Sedang Dipelajari" })).toBeVisible();
});
