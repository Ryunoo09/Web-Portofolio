import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

/**
 * Aksesibilitas halaman publik. Halaman admin ikut diuji di `admin-flow.spec.ts`
 * karena butuh sesi login (lihat keputusan D3).
 */
const publicPages = ["/", "/about", "/projects", "/skills", "/contact"];

for (const path of publicPages) {
  test(`tidak ada pelanggaran aksesibilitas di ${path}`, async ({ page }) => {
    await page.goto(path);

    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
  });
}
