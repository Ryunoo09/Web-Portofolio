import AxeBuilder from "@axe-core/playwright";
import { expect, type Page, test } from "@playwright/test";

/**
 * Aksesibilitas halaman publik. Halaman admin ikut diuji di `admin-flow.spec.ts`
 * karena butuh sesi login (lihat keputusan D3).
 */
const publicPages = ["/", "/about", "/projects", "/skills", "/contact"];
const themes = ["light", "dark"] as const;

async function applyTheme(page: Page, theme: "light" | "dark") {
  await page.addInitScript((value) => localStorage.setItem("theme", value), theme);
  await page.emulateMedia({ colorScheme: theme });
}

async function openThemed(page: Page, path: string, theme: "light" | "dark") {
  await applyTheme(page, theme);
  await page.goto(path);
  await page.waitForFunction((value) => document.documentElement.classList.contains(value), theme);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
}

async function expectNoViolations(page: Page) {
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
}

for (const theme of themes) {
  for (const path of publicPages) {
    test(`tidak ada pelanggaran aksesibilitas di ${path} (${theme})`, async ({ page }) => {
      await openThemed(page, path, theme);
      await expectNoViolations(page);
    });
  }
}

for (const theme of themes) {
  test(`tidak ada pelanggaran aksesibilitas di detail proyek (${theme})`, async ({ page }) => {
    await applyTheme(page, theme);
    await page.goto("/projects");
    await page.locator('[data-slot="case-card"] a').first().click();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("navigation", { name: "Daftar isi studi kasus" })).toBeVisible();
    await expectNoViolations(page);
  });
}

for (const theme of themes) {
  test(`tidak ada pelanggaran aksesibilitas di halaman 404 (${theme})`, async ({ page }) => {
    await applyTheme(page, theme);
    const response = await page.goto("/halaman-tidak-ada");
    expect(response?.status()).toBe(404);
    await page.waitForFunction(
      (value) => document.documentElement.classList.contains(value),
      theme,
    );
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expectNoViolations(page);
  });
}
