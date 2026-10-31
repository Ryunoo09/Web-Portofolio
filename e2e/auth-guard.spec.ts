import { expect, test, type Page } from "@playwright/test";

/**
 * Regresi proteksi rute admin. Blok pertama selalu jalan (tanpa kredensial);
 * blok sesi di-skip bila `.env.local` tidak memuat akun uji admin.
 */
const email = process.env.E2E_ADMIN_EMAIL;
const password = process.env.E2E_ADMIN_PASSWORD;
const hasCredentials = Boolean(email && password);

/** Semua route admin: tanpa sesi harus berakhir di `/admin/login`. */
const PROTECTED_ROUTES = [
  "/admin",
  "/admin/projects",
  "/admin/projects/new",
  "/admin/projects/xxx/edit",
  "/admin/skills",
  "/admin/skills/new",
  "/admin/skills/xxx/edit",
  "/admin/experiences",
  "/admin/experiences/new",
  "/admin/experiences/xxx/edit",
  "/admin/education",
  "/admin/education/new",
  "/admin/education/xxx/edit",
  "/admin/organizations",
  "/admin/organizations/new",
  "/admin/organizations/xxx/edit",
  "/admin/languages",
  "/admin/languages/new",
  "/admin/languages/xxx/edit",
  "/admin/certificates",
  "/admin/certificates/new",
  "/admin/certificates/xxx/edit",
  "/admin/profile",
  "/admin/messages",
  "/admin/unknown-path",
];

async function login(page: Page) {
  await page.goto("/admin/login");
  await page.getByLabel(/email/i).fill(email!);
  await page.getByLabel(/password|kata sandi/i).fill(password!);
  await page.getByRole("button", { name: /masuk|login/i }).click();

  // URL saja belum cukup: tunggu shell admin benar-benar ter-render supaya
  // navigasi berikutnya tidak menyalip set-cookie dari server action login.
  await expect(page).toHaveURL(/\/admin$/);
  await expect(page.getByRole("navigation", { name: "Navigasi Admin" })).toBeVisible();

  // Widget dev tools Next menempel di kiri bawah dan menutupi tombol "Keluar"
  // (sama seperti di `visual.spec.ts`), sehingga klik jadi tidak deterministik.
  await page.addStyleTag({ content: "nextjs-portal{display:none!important}" });
}

test.describe("proteksi rute admin", () => {
  // Kompilasi rute pertama di dev server bisa memakan beberapa detik.
  test.describe.configure({ timeout: 45_000 });

  for (const path of PROTECTED_ROUTES) {
    test(`tanpa sesi, ${path} dialihkan ke login`, async ({ page }) => {
      await page.goto(path);
      await expect(page).toHaveURL(/\/admin\/login$/);
    });
  }

  test("respons admin tidak boleh di-cache dan tidak boleh diindeks", async ({ request }) => {
    const response = await request.get("/admin/certificates", { maxRedirects: 0 });

    expect(response.status()).toBe(307);
    expect(response.headers()["cache-control"]).toContain("no-store");
    expect(response.headers()["x-robots-tag"]).toContain("noindex");
  });
});

test.describe("sesi admin", () => {
  test.describe.configure({ timeout: 60_000 });
  test.skip(!hasCredentials, "Butuh E2E_ADMIN_EMAIL dan E2E_ADMIN_PASSWORD di .env.local.");

  test("cookie sesi pendek dan tidak dapat dibaca JavaScript", async ({ page, context }) => {
    await login(page);

    const authCookies = (await context.cookies()).filter((cookie) =>
      cookie.name.includes("auth-token"),
    );
    expect(authCookies.length).toBeGreaterThan(0);

    for (const cookie of authCookies) {
      expect(cookie.httpOnly).toBe(true);
      expect(cookie.sameSite).toBe("Lax");
      // Sesi 12 jam (bukan 400 hari bawaan @supabase/ssr); beri toleransi refresh.
      const hoursLeft = (cookie.expires - Date.now() / 1000) / 3600;
      expect(hoursLeft).toBeLessThanOrEqual(12.5);
    }
  });

  test("admin aktif yang membuka /admin/login dialihkan ke /admin", async ({ page }) => {
    await login(page);

    await page.goto("/admin/login");
    await expect(page).toHaveURL(/\/admin$/);
  });

  test("logout menghapus cookie dan menutup akses URL langsung", async ({ page, context }) => {
    await login(page);

    await page.getByRole("button", { name: "Keluar" }).click();
    await expect(page).toHaveURL(/\/admin\/login$/);

    const authCookies = (await context.cookies()).filter((cookie) =>
      cookie.name.includes("auth-token"),
    );
    expect(authCookies).toEqual([]);

    await page.goto("/admin/certificates");
    await expect(page).toHaveURL(/\/admin\/login$/);
  });
});
