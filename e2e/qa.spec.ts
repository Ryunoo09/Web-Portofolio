import { expect, type Page, test } from "@playwright/test";

async function openFirstProject(page: Page) {
  await page.goto("/projects");
  await page.locator('[data-slot="case-card"] a').first().click();
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
}

test("skip link membawa fokus ke konten utama dengan keyboard", async ({ page }) => {
  await page.goto("/");

  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Lewati ke konten utama" });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeVisible();

  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
});

test("filter proyek dapat dipakai dengan keyboard", async ({ page }) => {
  await page.goto("/projects");

  const backend = page.getByRole("button", { name: "Backend & API" });
  await backend.focus();
  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(/domain=backend-system/);
  await expect(backend).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByText("4 proyek")).toBeVisible();
});

test("daftar isi desktop dapat dijangkau dan membuka section", async ({ page }) => {
  await openFirstProject(page);

  const toc = page.getByRole("navigation", { name: "Daftar isi studi kasus" });
  const firstLink = toc.getByRole("link").first();
  await firstLink.focus();
  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(/#masalah$/);
  await expect(page.locator("#masalah")).toBeInViewport();
});

test("daftar isi mobile memakai details yang bisa dibuka dengan keyboard", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await openFirstProject(page);

  const details = page.locator("details").filter({ hasText: "Daftar isi studi kasus" });
  const summary = details.locator("summary");
  await summary.focus();
  await page.keyboard.press("Enter");

  await expect(details).toHaveAttribute("open", "");
  await details.getByRole("link").first().focus();
  await page.keyboard.press("Enter");

  expect(await details.evaluate((element) => (element as HTMLDetailsElement).open)).toBe(false);
});

test("form kontak: error summary menerima fokus dan tautannya membawa ke field", async ({
  page,
}) => {
  await page.goto("/contact");

  await page.getByRole("button", { name: "Kirim pesan" }).focus();
  await page.keyboard.press("Enter");

  const summary = page.getByRole("alert").filter({ hasText: "Ada isian yang perlu diperbaiki." });
  await expect(summary).toBeFocused();

  await page.keyboard.press("Tab");
  const firstError = page.getByRole("link", { name: "Nama minimal 2 karakter." });
  await expect(firstError).toBeFocused();
  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(/#name$/);
  await expect(page.getByLabel("Nama")).toBeFocused();
});

test("halaman 404 tetap punya skip link, H1, dan CTA yang bisa dijangkau", async ({ page }) => {
  const response = await page.goto("/halaman-tidak-ada");
  expect(response?.status()).toBe(404);

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Lewati ke konten utama" })).toBeFocused();

  const home = page.getByRole("link", { name: "Kembali ke beranda" });
  await home.focus();
  await expect(home).toBeFocused();
});

test("reduced motion mematikan animasi dan smooth scroll", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const motion = await page.evaluate(() => {
    const hero = document.querySelector(".animate-rise");
    const ticker = document.querySelector(".animate-ticker");

    return {
      scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
      heroDuration: hero ? Number.parseFloat(getComputedStyle(hero).animationDuration) : null,
      tickerAnimation: ticker ? getComputedStyle(ticker).animationName : null,
    };
  });

  expect(motion.scrollBehavior).toBe("auto");
  expect(motion.tickerAnimation).toBe("none");
  expect(motion.heroDuration).not.toBeNull();
  expect(motion.heroDuration).toBeLessThanOrEqual(0.001);
  await expect(page.getByRole("button", { name: /ticker/i })).toBeHidden();
});
