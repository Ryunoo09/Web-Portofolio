import { expect, test } from "@playwright/test";

/**
 * Visual regression 6 rute × 4 viewport × 2 tema. Snapshot hanya area viewport
 * (bukan full page) agar stabil dan tidak membengkakkan repo. Animasi dimatikan
 * supaya ticker/entrance tidak membuat diff acak.
 */
test.use({ reducedMotion: "reduce" });

const routes = [
  { name: "beranda", path: "/" },
  { name: "proyek", path: "/projects" },
  { name: "studi-kasus", path: "/projects/analisis-prediktif-kualitas-air" },
  { name: "tentang", path: "/about" },
  { name: "keahlian", path: "/skills" },
  { name: "kontak", path: "/contact" },
];

const viewports = [
  { name: "1440", width: 1440, height: 900 },
  { name: "768", width: 768, height: 1024 },
  { name: "390", width: 390, height: 844 },
  { name: "320", width: 320, height: 720 },
];

for (const theme of ["light", "dark"] as const) {
  for (const route of routes) {
    test(`${route.name} ${theme}`, async ({ page }) => {
      await page.addInitScript((value) => localStorage.setItem("theme", value), theme);
      await page.emulateMedia({ colorScheme: theme });

      // `font-display: optional` bisa memakai fallback pada kunjungan pertama.
      // Muat font sekali, lalu reload agar screenshot selalu memakai font final.
      await page.goto(route.path);
      await page.evaluate(async () => {
        await Promise.all(Array.from(document.fonts).map((font) => font.load()));
        await document.fonts.ready;
      });
      await page.reload();

      await page.waitForFunction(
        (value) => document.documentElement.classList.contains(value),
        theme,
      );
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

      // Sembunyikan indikator dev Next dan scrollbar agar diff tidak liar.
      await page.addStyleTag({
        content:
          "nextjs-portal{display:none!important}*{scrollbar-width:none}::-webkit-scrollbar{display:none}",
      });
      await page.evaluate(async () => {
        await Promise.all(Array.from(document.fonts).map((font) => font.load()));
        await document.fonts.ready;
        await Promise.all(
          Array.from(document.images).map((image) =>
            image.complete
              ? undefined
              : new Promise((resolve) => {
                  image.addEventListener("load", resolve, { once: true });
                  image.addEventListener("error", resolve, { once: true });
                }),
          ),
        );
      });

      // Foto profil & dokumentasi pengalaman tidak ikut disimpan di baseline publik;
      // layout tetap diuji.
      const masks =
        route.name === "tentang"
          ? [page.locator("figure img"), page.locator('[data-slot="experience-gallery"] img')]
          : [];

      for (const viewport of viewports) {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.waitForTimeout(150);
        await expect(page).toHaveScreenshot(`${route.name}-${viewport.name}-${theme}.png`, {
          animations: "disabled",
          caret: "hide",
          mask: masks,
          maskColor: "#94a3b8",
          maxDiffPixelRatio: 0.005,
        });
      }
    });
  }
}
