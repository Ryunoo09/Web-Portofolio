import { expect, test } from "@playwright/test";

/** Rute publik yang harus hidup saat smoke rilis (6 rute + health). */
const publicRoutes = [
  "/",
  "/projects",
  "/projects/analisis-prediktif-kualitas-air",
  "/about",
  "/skills",
  "/contact",
];

for (const path of publicRoutes) {
  test(`smoke ${path}: 200, satu H1, tanpa error runtime`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));

    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    expect(errors).toEqual([]);
  });
}

test("smoke /api/health menjawab ok", async ({ request }) => {
  const response = await request.get("/api/health");
  expect(response.status()).toBe(200);
  expect(await response.json()).toMatchObject({ status: "ok" });
});

test("smoke 404 mengembalikan status 404", async ({ request }) => {
  const response = await request.get("/halaman-tidak-ada");
  expect(response.status()).toBe(404);
});
