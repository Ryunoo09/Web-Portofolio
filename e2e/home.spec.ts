import { expect, test } from "@playwright/test";

test("beranda dapat dibuka", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});
