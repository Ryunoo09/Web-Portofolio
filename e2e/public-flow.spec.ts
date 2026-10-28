import { expect, test } from "@playwright/test";

test("beranda dapat dibuka", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("beranda memakai metrik jujur dan tanpa angka 500+", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("sistem operasional")).toBeVisible();
  await expect(page.getByText("88,62%").first()).toBeVisible();
  await expect(page.getByText("500+")).toHaveCount(0);

  await expect(
    page.getByRole("heading", { level: 2, name: "Bukti, bukan daftar teknologi." }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Lihat semua proyek" })).toHaveAttribute(
    "href",
    "/projects",
  );
});

test("daftar proyek membuka detail proyek", async ({ page }) => {
  await page.goto("/projects");

  const detailLink = page.locator('[data-slot="case-card"] a').first();
  await expect(detailLink).toBeVisible();
  await detailLink.click();

  await expect(page).toHaveURL(/\/projects\/[^/]+$/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Breadcrumb" })).toBeVisible();

  const jsonLd = (await page.locator('script[type="application/ld+json"]').allTextContents()).join(
    " ",
  );
  expect(jsonLd).toContain("CreativeWork");
});

test("filter proyek menyinkronkan URL dan jumlah hasil", async ({ page }) => {
  await page.goto("/projects");

  await page.getByRole("button", { name: "Backend & API" }).click();

  await expect(page).toHaveURL(/domain=backend-system/);
  await expect(page.getByText("4 proyek")).toBeVisible();
  await expect(page.getByRole("button", { name: "Backend & API" })).toHaveAttribute(
    "aria-pressed",
    "true",
  );

  await page.getByRole("button", { name: "Reset filter" }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.getByText("9 proyek")).toBeVisible();
});

test("URL filter tidak diindeks mesin pencari", async ({ page }) => {
  await page.goto("/projects?domain=backend-system");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);

  // Tanpa filter Next tidak selalu memancarkan meta robots; bila tidak ada,
  // default mesin pencari tetap index.
  await page.goto("/projects");
  const content = await page.evaluate(
    () => document.querySelector('meta[name="robots"]')?.getAttribute("content") ?? null,
  );
  expect(content ?? "index,follow").not.toMatch(/noindex/);
});

test("setiap gambar proyek punya teks alternatif", async ({ page }) => {
  await page.goto("/projects");

  const images = page.locator('[data-slot="case-card"] img');
  const count = await images.count();

  for (let index = 0; index < count; index += 1) {
    await expect(images.nth(index)).toHaveAttribute("alt", /\S/);
  }
});

test("halaman proyek menampilkan galeri bila gambarnya ada", async ({ page }) => {
  await page.goto("/projects");

  const detailLink = page.locator('[data-slot="case-card"] a').first();
  await detailLink.click();

  const gallery = page.getByRole("heading", { name: "Galeri" });
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
