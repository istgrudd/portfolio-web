# Content Guide — Portfolio Rudi Firdaus

Panduan mengelola isi website tanpa menyentuh kode tampilan. Tiga hal: **menambah project**,
**menulis blog**, dan **mengubah teks/deskripsi** di tiap bagian.

> Setelah edit: file `.md` dan halaman akan **hot-reload** otomatis di `npm run dev`. Mengedit
> `src/lib/constants.ts` membuat dev server **restart sendiri** (tunggu beberapa detik).
> Sebelum deploy jalankan `npm run build` untuk memastikan tidak ada error. Push ke GitHub →
> Netlify deploy otomatis.

---

## 1. Menambah Project

### Langkah singkat
1. Buat file baru di `src/content/projects/`, mis. `nama-project.md`.
   Nama file = **slug URL** → otomatis jadi `/projects/nama-project`. Gunakan huruf kecil & tanda hubung.
2. Isi frontmatter (lihat template di bawah).
3. Taruh gambar (lihat bagian Gambar). List & filter di `/projects` ter-update otomatis.

### Template lengkap (copy-paste)

```markdown
---
title: "Nama Project"
category: "Computer Vision"        # WAJIB: salah satu PERSIS dari daftar di bawah
tags: ["RAG", "Segmentation"]      # opsional: topik lintas-kategori (BUKAN tools)
summary: "Satu kalimat ringkas untuk kartu."   # WAJIB
featured: false                    # true = tampil di Home (saat ini 3: ScreenAI, LabLink, Dolanan)
order: 8                           # WAJIB: urutan tampil (kecil = atas). Jangan kembar.
status: "completed"                # "completed" | "in-progress"
timeframe: "2026 · 8 minggu"       # opsional: label waktu
thumbnail: "/images/projects/nama-project.png"   # opsional (lihat bagian Gambar)
metrics:                           # opsional: HANYA angka nyata; kosongkan kalau tak ada
  - { value: "0.91", label: "F1 score" }
  - { value: "Top 5", label: "national" }
problem: |                         # WAJIB
  Masalah yang diselesaikan. Pisahkan paragraf dengan satu baris kosong.
approach: |                        # WAJIB
  Metode / arsitektur.

  Paragraf kedua kalau perlu.
results: |                         # WAJIB — pakai bullet "- "
  - Hasil konkret pertama.
  - Hasil kedua.
role: "Peran personal Anda di project ini."     # WAJIB
# --- 3 field di bawah OPSIONAL, untuk project flagship saja ---
architecture: |
  Penjelasan arsitektur (boleh paragraf).
decisions: |
  - Keputusan penting: alasannya. (teks sebelum ": " akan ditebalkan)
lessons: |
  - Pelajaran: penjelasan.
stack:                             # tools saja (topik taruh di "tags")
  - "PyTorch"
  - "Python"
links:                             # "#" atau dikosongkan = tombol disembunyikan
  github: "https://github.com/istgrudd/..."
  demo: "https://..."
  paper: "https://..."
---
```

### Aturan penting
- **`category` harus PERSIS** salah satu dari: `Computer Vision` · `NLP` · `Full-stack` · `Machine Learning`.
  Salah ketik/huruf besar-kecil = **build gagal**. Daftar ini juga jadi tombol filter di `/projects`.
- **`order` wajib & unik** — kalau ada dua project `order` sama, urutannya tak menentu.
- **`metrics` hanya untuk angka jujur.** Tampil sebagai strip di halaman detail. Kalau tak ada angka, biarkan kosong (jangan dipaksakan).
- Field naratif (`problem/approach/results`) memakai blok `|` (YAML). Aturan render:
  - Baris kosong = paragraf baru.
  - Baris diawali `- ` = bullet list.
  - Bullet berbentuk `Label: isi` → kata sebelum `: ` ditebalkan (cocok untuk Decisions/Lessons).
- Urutan section di halaman detail sudah tetap: **Role → Problem → Approach → Results → Architecture
  → Technical decisions → Lessons → Stack**. Section opsional yang kosong otomatis tidak muncul.
- Tanpa `thumbnail`, kartu memakai fallback otomatis `cls:<kategori>`.

---

## 2. Menaruh Gambar

| Untuk apa | Letakkan di | Tulis di frontmatter / kode sebagai |
|---|---|---|
| Thumbnail project | `public/images/projects/` | `/images/projects/nama-file.png` |
| Foto profil | `public/images/profile.jpg` | sudah dipakai di hero |
| Gambar dalam isi blog | `public/images/blog/` (buat folder ini) | `![alt](/images/blog/nama.png)` |

Aturan:
- Path **selalu diawali `/`** dan **tanpa `public/`** (mis. `/images/projects/x.png`, bukan `public/images/...`).
- **Hindari spasi** di nama file (pakai `nama-file.png`, bukan `Nama File.png`).
- Optimalkan ukuran (WebP/PNG, lebar ~1200px cukup untuk thumbnail) demi performa.

---

## 3. Menulis Blog

1. Buat file di `src/content/blog/`, mis. `judul-post.md`. Nama file = slug → `/blog/judul-post`.
2. Isi frontmatter + tulis isi pakai Markdown biasa di bawah `---`.

### Template

```markdown
---
title: "Judul Tulisan"
date: 2026-06-20                 # WAJIB, format YYYY-MM-DD
lang: "id"                       # "en" | "id" (tag bahasa per-post)
summary: "Ringkasan 1–2 kalimat untuk daftar & meta."   # WAJIB
tags: ["computer-vision", "yolo"]    # opsional
draft: false                     # true = tidak tampil (sembunyikan draft)
---

Tulis isi di sini dengan **Markdown**.

## Subjudul

- poin
- poin

\`\`\`python
print("code highlighting otomatis")
\`\`\`

> Kutipan, tabel, gambar, link — semua didukung.
```

Catatan:
- Estimasi waktu baca dihitung otomatis dari panjang tulisan.
- Set `draft: true` untuk menyimpan tulisan yang belum siap (tidak akan muncul di list maupun build).
- Urutan list blog otomatis: terbaru di atas (berdasarkan `date`).

---

## 4. Mengubah Deskripsi / Teks — di mana?

Sebagian besar teks "data diri" ada di **satu file**: `src/lib/constants.ts`.

| Yang ingin diubah | Lokasi |
|---|---|
| Nama, email, **paragraf value-proposition di Hero**, role/eyebrow, lokasi, link sosial | `src/lib/constants.ts` → `PERSONAL` (paragraf hero = `valueProposition`) |
| Judul situs, deskripsi default SEO, URL, OG image | `src/lib/constants.ts` → `SITE` |
| Menu navigasi | `src/lib/constants.ts` → `NAV_LINKS` |
| **Paper IEEE** (judul, venue, tahun, abstrak, co-author, metrik, link DOI/IEEE) | `src/lib/constants.ts` → `RESEARCH.paper` |
| **Thesis** (judul, pendekatan, status) | `src/lib/constants.ts` → `RESEARCH.thesis` |
| Publikasi co-authored di halaman Research | `src/lib/constants.ts` → `COAUTHORED_PUBLICATIONS` |
| Leadership (role, periode, poin-poin) | `src/lib/constants.ts` → `LEADERSHIP` |
| Tech stack / Skills (kategori & item) | `src/lib/constants.ts` → `TECH_STACK` |

Teks yang **ditulis langsung di halaman** (bukan di constants):

| Yang ingin diubah | File |
|---|---|
| **Baris telemetri Hero** (`IEEE first-author · mAP@0.5 0.896 · 122 FPS · …`) | `src/pages/index.astro` (blok "Telemetry readout") |
| Judul section Home ("Research, shipped to production", "Tools I actually use", dll.) | `src/pages/index.astro` |
| Teks & heading bagian **Contact** | `src/pages/index.astro` (section `#contact`) |
| **Bio** naratif & **timeline "Journey"** | `src/pages/about.astro` (array `timeline`) |
| Teks "Research interests" & format **sitasi** | `src/pages/research.astro` (array `interests`) |
| Tagline & "Built with…" di footer | `src/components/Footer.astro` |
| **Meta description per halaman** (SEO) | prop `description=` di tiap `src/pages/*.astro` |

> Tip: kalau bingung, cari potongan teksnya dengan fitur "Find in Files" editor — string yang
> tampil di web persis sama dengan yang ada di file.

---

## Checklist sebelum publish
- [ ] `npm run build` sukses (tanpa error schema/category).
- [ ] Gambar muncul (path diawali `/`, tanpa spasi).
- [ ] Link eksternal benar; yang belum ada diisi `#` agar tombol disembunyikan.
- [ ] `order` project tidak kembar; `featured` sesuai keinginan.
- [ ] Cek tampilan di `npm run dev` (toggle dark/light).
```
