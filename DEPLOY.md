# DEPLOY — VPS + Nginx Proxy Manager + Cloudflare + CI/CD

Panduan sekali-pasang. Setelah selesai, **update cukup `git push` ke `main`** — GitHub Actions
build image, push ke GHCR, lalu VPS menarik & me-restart container sendiri.

Alur:

```
git push main → GitHub Actions (lint/typecheck/test → build image) → GHCR
                → SSH ke VPS → docker compose pull && up -d → cek /api/health
```

DNS & TLS ditangani **Cloudflare → Nginx Proxy Manager → container `portfolio-web:3000`**.
Container app **tidak membuka port ke host**; hanya terhubung lewat network Docker `npm-net`.

---

## 0. Yang perlu diganti

Contoh di dokumen ini memakai:

| Placeholder      | Ganti dengan                                           |
| ---------------- | ------------------------------------------------------ |
| `namaanda.com`   | domain Anda                                            |
| `ryunoo09`       | username GitHub Anda (repo: `Ryunoo09/Web-Portofolio`) |
| `/opt/portfolio` | folder deploy di VPS (boleh beda)                      |

---

## 1. Sekali di VPS

```bash
# network bersama app ↔ Nginx Proxy Manager
docker network create npm-net
docker network connect npm-net <nama-container-npm>
```

Cari nama container NPM: `docker ps --format '{{.Names}}'` (biasanya
`nginx-proxy-manager-app-1` atau `npm-app`). **`docker network connect` cukup sekali**, tapi
wajib diulang bila container NPM dibuat ulang (mis. setelah NPM di-update/recreate).

```bash
# folder deploy + env runtime
sudo mkdir -p /opt/portfolio
sudo chown -R "$USER":"$USER" /opt/portfolio
cd /opt/portfolio
nano .env      # isi seperti di bawah, lalu: chmod 600 .env
```

Isi `/opt/portfolio/.env` (jangan pernah dikomit):

```dotenv
NEXT_PUBLIC_SITE_URL=https://namaanda.com
NEXT_PUBLIC_SUPABASE_URL=https://kggrbhvbowszljemvxan.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key>
SUPABASE_SERVICE_ROLE_KEY=<service role key>
```

> `NEXT_PUBLIC_*` sudah "dibekukan" ke dalam image saat build, tapi tetap ditulis di sini
> supaya kode server yang membaca `process.env` saat runtime tetap mendapat nilainya.
> `SUPABASE_SERVICE_ROLE_KEY` **hanya** hidup di file ini — tidak pernah masuk CI/GitHub.

`docker-compose.yml` **tidak perlu** Anda salin manual: workflow deploy menyalinnya setiap kali.

---

## 2. Nginx Proxy Manager

**Hosts → Proxy Hosts → Add Proxy Host**

| Tab     | Isi                                                                                                                                                                               |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Details | Domain: `namaanda.com`, `www.namaanda.com` · Scheme: `http` · Forward Hostname: **`portfolio-web`** · Forward Port: **`3000`** · ✅ Block Common Exploits · ✅ Websockets Support |
| SSL     | SSL Certificate: **Request a new SSL Certificate** · ✅ Force SSL · ✅ HTTP/2 · ✅ HSTS Enabled · ✅ HSTS Subdomains · Setujui ToS                                                |

`portfolio-web` adalah `container_name` di `docker-compose.yml`, dan NPM menemukannya karena
keduanya berada di network `npm-net`.

**Advanced** (opsional, header keamanan tambahan yang dulu ada di Caddyfile):

```nginx
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
proxy_set_header X-Forwarded-Proto $scheme;
```

> Bila "Request a new SSL Certificate" gagal, biasanya Cloudflare masih mem-proxy (awan oranye)
> sementara SSL/TLS mode belum **Full (strict)**. Set dulu modenya di Cloudflare, lalu ulangi.

---

## 3. Cloudflare

| Setelan                     | Nilai                                                                                               |
| --------------------------- | --------------------------------------------------------------------------------------------------- |
| DNS                         | A record `namaanda.com` → IP VPS · A record `www` → IP VPS · Proxy status **Proxied** (awan oranye) |
| SSL/TLS → Overview          | **Full (strict)**                                                                                   |
| SSL/TLS → Edge Certificates | Always Use HTTPS **On** · Minimum TLS 1.2                                                           |
| Speed → Optimization        | Brotli **On**                                                                                       |

Karena SSL di origin (NPM) sudah `Full (strict)`, jangan pakai mode **Flexible**.

---

## 4. GitHub — Variables & Secrets

**Settings → Secrets and variables → Actions**

**Variables** (tab _Variables_) — nilai publik, aman terlihat:

| Name                            | Nilai                                          |
| ------------------------------- | ---------------------------------------------- |
| `DEPLOY_ENABLED`                | `true` — **tanpa ini workflow deploy di-skip** |
| `NEXT_PUBLIC_SITE_URL`          | `https://namaanda.com`                         |
| `NEXT_PUBLIC_SUPABASE_URL`      | `https://kggrbhvbowszljemvxan.supabase.co`     |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | anon key (memang publik, dilindungi RLS)       |
| `VPS_APP_DIR`                   | `/opt/portfolio` (opsional; default ini)       |

**Secrets** (tab _Secrets_):

| Name          | Nilai                                          |
| ------------- | ---------------------------------------------- |
| `VPS_HOST`    | IP VPS                                         |
| `VPS_USER`    | user SSH non-root, mis. `deploy`               |
| `VPS_SSH_KEY` | isi **private key** kunci deploy (lihat bawah) |
| `VPS_PORT`    | opsional, default `22`                         |

Hanya CI yang menyentuh kunci ini; **jangan** pakai kunci SSH pribadi Anda.

```bash
# di komputer lokal — kunci khusus deploy, tanpa passphrase
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/portfolio_deploy -N ""

# pasang public key ke VPS (sekali)
ssh-copy-id -i ~/.ssh/portfolio_deploy.pub deploy@IP_VPS
```

Isi `VPS_SSH_KEY` = seluruh isi `~/.ssh/portfolio_deploy` (private key).

---

## 5. GHCR — jadikan package publik

Setelah deploy pertama, di GitHub → **Packages** → `web-portofolio` →
**Package settings → Change visibility → Public**.

Kalau tetap private, VPS harus `docker login ghcr.io` dengan PAT (`read:packages`) dan login itu
hilang setiap `docker logout`/prune kredensial — pakai Public lebih sedikit langkah.

---

## 6. Deploy pertama

1. Pastikan langkah 1–5 selesai.
2. **Actions → Deploy → Run workflow** (branch `main`).
3. Tunggu job `build-and-push` lalu `deploy` hijau.
4. Verifikasi:

```bash
docker ps --filter name=portfolio-web        # status: healthy
curl -I https://namaanda.com                 # 200, ada header CF/Server NPM
curl -s https://namaanda.com/api/health      # {"status":"ok"}
```

Setelah ini, **setiap push ke `main` otomatis men-deploy**.

---

## 7. Rollback

Setiap deploy juga menghasilkan tag `:<sha-7>` (mis. `:a1b2c3d`). Untuk kembali ke versi lama:

```bash
cd /opt/portfolio
IMAGE_TAG=a1b2c3d docker compose up -d web   # tanpa mengubah .env secara permanen
```

Atau tambahkan `IMAGE_TAG=a1b2c3d` ke `.env` untuk menetap. Tag yang tersedia:
GitHub → Packages → `web-portofolio` → tab _Versions_.

---

## 8. Perawatan

| Hal                       | Cara                                                                                    |
| ------------------------- | --------------------------------------------------------------------------------------- |
| Log app                   | `docker compose logs -f web` (rotasi sudah diatur: 10 MB × 3 file)                      |
| Bersihkan image lama      | `docker image prune -f` (sudah otomatis tiap deploy)                                    |
| Supabase free tier dijeda | Pasang cron/UptimeRobot yang memanggil `/api/health` + satu query ringan secara berkala |
| Uptime                    | UptimeRobot / Better Stack memantau `https://namaanda.com/api/health`                   |
| Backup data               | Simpan sumber gambar/CV asli di komputer; ekspor tabel berkala dari Supabase            |

---

## 9. Troubleshooting

| Gejala                             | Sebab & solusi                                                                                                                           |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| NPM: **502 Bad Gateway**           | Container tidak di `npm-net`, atau `docker network connect` belum diulang setelah NPM di-recreate. Cek: `docker network inspect npm-net` |
| Deploy job **skipped**             | Variable `DEPLOY_ENABLED` belum `true`                                                                                                   |
| Push image gagal                   | Nama image harus huruf kecil — workflow sudah meng-_lowercase_ otomatis                                                                  |
| Container `unhealthy`              | Lihat `docker logs portfolio-web`; healthcheck memanggil `/api/health` pada port 3000                                                    |
| Halaman admin/logout aneh di HTTPS | Sudah Full (strict)? `NEXT_PUBLIC_SITE_URL` harus `https://…` tanpa trailing slash                                                       |
| Build di CI lambat                 | Cache `type=gha` sudah aktif; wajar bila cache kosong pada run pertama                                                                   |

---

## 10. Kendala nyata yang sudah pernah terjadi

Dicatat dari setup pertama, supaya tidak mengulang kesalahan yang sama.

| Gejala di GitHub Actions                                                                     | Sebab                                                                                                                                                    | Perbaikan                                                                                                                                                         |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tar: docker-compose.yml: Cannot open: Permission denied`                                    | `VPS_APP_DIR` (`/opt/portfolio`) milik `root`, sedangkan `VPS_USER` user lain — `/opt` memang milik root                                                 | Pakai `VPS_USER=root`, atau `usermod -aG docker <user>` + `chown -R <user>:<user> /opt/portfolio`                                                                 |
| `ssh: unable to authenticate, attempted methods [none publickey]`                            | Public key tidak ada di `~/.ssh/authorized_keys` **milik user yang dipakai**. Saat setup VPS kunci sering terpasang di user lain (user default penyedia) | `Get-Content $HOME\.ssh\id_ed25519.pub \| ssh root@IP "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"` |
| Job `deploy` menggantung lalu gagal `unhealthy`, padahal log container bersih (`Ready in …`) | Healthcheck memakai `wget http://localhost:3000` — `localhost` di Alpine bisa di-resolve ke IPv6 `::1`, sementara Next hanya mendengarkan IPv4           | Healthcheck kini memakai `node` + `127.0.0.1` (sudah diperbaiki di `docker-compose.yml`)                                                                          |
| Warning `Unexpected input(s) 'script_stop'`                                                  | Input itu tidak ada di `appleboy/ssh-action@v1`                                                                                                          | Sudah dihapus                                                                                                                                                     |

**Cara memeriksa healthcheck dengan cepat** (di VPS):

```bash
docker ps --filter name=portfolio-web
docker inspect --format '{{.State.Status}} exit={{.State.ExitCode}} restarts={{.RestartCount}}' portfolio-web
docker inspect --format '{{range .State.Health.Log}}exit={{.ExitCode}} {{.Output}}{{end}}' portfolio-web
```

`restarts=0` + log container hanya satu banner `Ready` = aplikasi sehat, masalahnya di healthcheck — bukan di aplikasi.

**Bukti kunci SSH berlaku** (harus keluar `OK` tanpa prompt password):

```powershell
ssh -i $HOME\.ssh\id_ed25519 <VPS_USER>@<IP> "echo OK"
```
