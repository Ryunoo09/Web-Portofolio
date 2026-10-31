import fs from "node:fs";
import path from "node:path";
import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright tidak memuat `.env.local`. Ambil hanya kredensial blok admin
 * (Fase D3) agar `pnpm test:e2e` benar-benar menjalankannya tanpa dependensi baru.
 */
function loadE2ECredentials(): void {
  const file = path.join(process.cwd(), ".env.local");
  if (!fs.existsSync(file)) return;

  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const match = /^(E2E_ADMIN_EMAIL|E2E_ADMIN_PASSWORD)=(.*)$/.exec(line.trim());
    if (!match) continue;

    const [, key, value] = match;
    if (key && value && !process.env[key]) process.env[key] = value.trim();
  }
}

loadE2ECredentials();

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  // Database uji adalah Supabase bersama dan tes admin menulis data. Jalankan
  // berurutan agar jumlah/isi halaman publik tidak berubah di tengah snapshot.
  workers: 1,
  reporter: "html",
  // Kompilasi pertama dev server (Turbopack) bisa memakan beberapa detik.
  expect: { timeout: 15_000 },
  use: { baseURL: "http://localhost:3000", trace: "on-first-retry" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "pnpm dev",
    url: "http://localhost:3000",
    reuseExistingServer: true,
  },
});
