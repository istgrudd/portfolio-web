# PRD — Portfolio Website

**Owner:** Rudi Firdaus (Rudd)
**Versi:** 0.1 (Draft)
**Tanggal:** 16 Juni 2026
**Status:** Discussion → siap masuk fase build setelah *Open Decisions* dikonfirmasi

---

## 1. Latar Belakang & Tujuan

Portfolio website ini adalah aset karier jangka panjang, bukan sekadar pajangan project. Target utamanya: mendukung rencana kerja ke luar negeri (Jepang sebagai target dekat) dengan menjadi *single source of truth* yang bisa di-scan cepat oleh recruiter internasional dan kontak akademik.

Materi yang dimiliki sudah kuat dan langka untuk level undergraduate: satu paper IEEE sebagai first author, satu sistem AI full-stack yang jalan di production (ScreenAI), thesis yang memperluas paper tersebut, plus rekam jejak kompetisi nasional dan peran kepemimpinan di lab. Masalahnya bukan kekurangan bahan — tapi bahan itu belum terkurasi di satu tempat yang kredibel dan mudah ditemukan di Google.

PRD ini mendefinisikan apa yang dibangun di versi pertama, untuk siapa, dengan stack apa, dan urutan kerjanya.

---

## 2. Goals & Non-Goals

### Goals (v1)
- Menyampaikan positioning yang jelas dalam < 5 detik pertama kunjungan.
- Menonjolkan diferensiator utama: **ships research to production** (punya paper *dan* sistem production — kombinasi langka).
- Menjadi mudah ditemukan via Google (SEO solid, static HTML, struktur rapi).
- Menyediakan fondasi blog yang bisa diisi rutin tanpa kerja repetitif.
- Bisa di-maintain sendiri dengan nyaman (authoring konten = nulis Markdown, bukan ngedit HTML manual).

### Non-Goals (v1)
- Bukan i18n penuh (toggle EN/ID untuk *semua* halaman) — terlalu mahal di-maintain. Lihat keputusan bahasa di §6.
- Bukan CMS dinamis / backend / database — cukup static site.
- Bukan fitur interaktif berat (live demo model embedded) di v1 — cukup link keluar ke demo yang sudah ada (mis. HF Spaces, GCP URL).
- Bukan animasi heavy yang mengorbankan performa.

---

## 3. Success Metrics

| Metrik | Target v1 |
|---|---|
| Lighthouse Performance | ≥ 95 |
| Lighthouse SEO | 100 |
| Lighthouse Accessibility | ≥ 95 |
| Largest Contentful Paint | < 1.5s |
| Indexed di Google | Halaman utama + semua project/research dalam 2 minggu |
| Konten blog saat launch | Minimal 2–3 post (blog kosong lebih buruk daripada tanpa blog) |
| Recruiter dapat menjawab "siapa ini & apa buktinya" | Dari halaman utama saja, tanpa scroll panjang |

---

## 4. Target Audience (Personas)

1. **Recruiter / hiring manager internasional (prioritas utama).** Scan cepat, bahasa Inggris, butuh: role, skill, bukti konkret, resume downloadable. Mobile & desktop.
2. **Engineer / tech lead yang menilai kedalaman teknis.** Masuk ke detail project, baca arsitektur, cek GitHub. Menghargai kejujuran teknis (metrik, trade-off).
3. **Kontak akademik / peneliti.** Tertarik ke paper IEEE dan thesis. Butuh halaman research yang serius dengan link ke publikasi.
4. **Diri sendiri.** Acuan saat update achievement, dan bahan saat personal branding di LinkedIn.

---

## 5. Positioning & Key Messages

**Positioning utama (perlu dikonfirmasi — lihat §16):**
> **Machine Learning / AI Engineer dengan research edge.**
> Tagline arah: *"ML Engineer who ships research to production."*

Alasan: bukti engineering (ScreenAI: FastAPI, RAG, IndoBERT, Docker, self-hosted VPS) dan bukti riset (paper IEEE, thesis CV) sama-sama kuat. Kombinasi ini lebih believable dan lebih membedakan daripada memilih "Researcher" murni (butuh trajectory grad school) atau "MLOps" murni (belum ada cerita monitoring/registry/orchestration yang bisa dipamerkan). MLOps & full-stack tetap muncul sebagai **kategori skill**, bukan identitas utama.

**Key messages yang harus tersampaikan:**
- Punya publikasi peer-reviewed (IEEE, first author) — kredibilitas riset.
- Bisa membawa model ke production nyata, bukan berhenti di notebook.
- Kedalaman di Computer Vision (YOLO, segmentation, ByteTrack) dan NLP (IndoBERT, RAG).
- Pengalaman memimpin (Vice Coordinator MBC Lab: infrastruktur, riset, tooling).

---

## 6. Keputusan Bahasa

**EN-first, blog bilingual per-post.**
- Halaman inti (Home, Projects, Research, About) → **full English** (audiens utama recruiter abroad).
- Blog → tiap post bebas EN atau ID, ditandai *language tag*. Tidak ada kewajiban menerjemahkan tiap tulisan.

Alasan: i18n penuh menggandakan beban maintenance terutama di blog, dan realistis tiap post tidak akan diterjemahkan. Pendekatan ini ringan tapi tetap menjangkau pembaca ID untuk konten teknis berbahasa Indonesia.

---

## 7. Scope v1 (In / Out)

**In:** Multi-page + blog. Halaman: Home, Projects (list + detail), Research, Blog (list + post), About, Contact (section, bukan halaman terpisah). Dark mode. SEO/meta/OG. Resume download.

**Out (backlog v2):** i18n toggle penuh, komentar blog, search, tag filtering blog, live model demo embedded, analytics dashboard custom.

---

## 8. Information Architecture

```
/                       Home (hero + highlight ringkas tiap section)
/projects               Daftar semua project (grid/kartu)
/projects/[slug]        Detail project (problem, approach, hasil, stack, link)
/research               Paper IEEE + thesis + publikasi
/blog                   Daftar post (terbaru di atas)
/blog/[slug]            Halaman post (Markdown/MDX)
/about                  Bio, perjalanan, MBC Lab leadership, skill lengkap
#contact                Section di Home (email, LinkedIn, GitHub)
/resume.pdf             File statis (downloadable)
```

Navbar: Home · Projects · Research · Blog · About · [dark mode toggle]

---

## 9. Requirements per Halaman

### 9.1 Home
- **Hero:** nama, tagline (typing effect opsional, ringan), 1 paragraf value proposition (English), CTA ganda: *Download Resume* + *Get in Touch*. Foto profil.
- **Highlight Research:** 1 kartu menonjol untuk paper IEEE + status thesis (pintu masuk ke `/research`).
- **Featured Projects:** 3 kartu project unggulan (lihat §10) → link ke `/projects`.
- **Tech Stack:** grid kategori (Languages, ML/DL, MLOps & Infra, Full-stack). Jujur — hanya yang benar-benar dikuasai.
- **Contact section:** email, LinkedIn, GitHub.

### 9.2 Projects (list)
- Grid kartu: judul, 1 kalimat ringkas, tag stack, thumbnail, link demo/code.
- Urutan: featured dulu, lalu sisanya. Idealnya bisa difilter per kategori (CV / NLP / Full-stack) — boleh ditunda ke v2.

### 9.3 Project Detail (`/projects/[slug]`)
Template konsisten tiap project:
- **Problem** — masalah apa yang diselesaikan.
- **Approach** — metode/arsitektur (boleh ada diagram).
- **Results** — metrik konkret, bukan klaim kosong.
- **Stack** — tools yang dipakai.
- **Links** — GitHub, live demo, paper (kalau ada).
- **Role** — kontribusi personal (penting untuk project tim).

### 9.4 Research (`/research`)
- **Paper IEEE** — judul, venue, tahun, peran (first author), abstrak ringkas, link DOI/IEEE Xplore, link PDF kalau boleh.
- **Thesis (ongoing)** — topik, pendekatan, status. Tandai "in progress" dengan jujur.
- Gaya lebih formal/akademik dibanding halaman lain.

### 9.5 Blog
- List: judul, tanggal, language tag (EN/ID), estimasi baca, ringkasan.
- Post: konten dari Markdown/MDX, code highlighting, meta OG per-post.

### 9.6 About
- Bio naratif (English), perjalanan singkat.
- **Leadership:** Vice Coordinator MBC Lab — infrastruktur, riset, internal tooling; penyelenggara company visit IBM Indonesia.
- Skill lengkap terkategorisasi.
- (Opsional) timeline/pencapaian.

---

## 10. Content Inventory — Pemetaan Material Nyata

Kurasi penting: material banyak, tapi portfolio yang fokus lebih kuat daripada yang menumpuk semuanya. Usulan tiering:

### Featured (3 kartu di Home)
| Project | Kenapa featured | Cerita yang dijual |
|---|---|---|
| **ScreenAI** | Flagship full-stack AI di production | FastAPI, RAG, IndoBERT, Docker, self-hosted VPS, staging ~40 tester, redesign UI. Bukti "ships to production". |
| **Vehicle Detection (YOLOv11) — IEEE Paper** | Kredensial riset peer-reviewed | First author, IEEE. Pintu ke `/research`. |
| **Thesis: Traffic Flow Estimation** | Kedalaman riset berkelanjutan | CCTV low-visibility Yogyakarta, YOLOv11/v26 + ByteTrack + modul SMP flow estimation per standar PKJI. |

### Strong supporting (di `/projects`)
| Project | Kategori | Highlight |
|---|---|---|
| **Dolanan Data 2026** | CV / Segmentation | Swin-FPN semantic segmentation untuk pemetaan UAV pasca-banjir; **finalis nasional**. |
| **Face Spoofing Detection** | CV | CLIP ViT-L-14, Focal Loss, WeightedRandomSampler, face cropping. |
| **Emotion Classification (Indonesian Tweets)** | NLP | Perbandingan BiLSTM vs IndoBERT. |

### Side / smaller (boleh masuk list, prioritas rendah)
- **Hermes Agent** — agentic AI assistant + integrasi Telegram di VPS (project yang "fun", menunjukkan inisiatif).
- **QA System (OpenSearch RAG)** — RAG pipeline dengan vector DB.
- **XGBoost Operational Risk + SHAP** — explainability pada dataset manufaktur.

> Catatan: untuk project tim, **selalu cantumkan "Role"** agar kontribusi personal jelas.

---

## 11. Functional Requirements

- **FR-1** Dark/light mode toggle, preferensi tersimpan (localStorage) dan menghormati `prefers-color-scheme`.
- **FR-2** Navigasi responsif (hamburger di mobile).
- **FR-3** Resume bisa di-download sebagai PDF statis.
- **FR-4** Tiap project punya halaman detail ber-slug sendiri.
- **FR-5** Blog dibangun dari content collection (Markdown/MDX) — tambah post = tambah file `.md`, list auto-generate.
- **FR-6** Language tag per blog post.
- **FR-7** Link eksternal (GitHub, demo, paper) terbuka di tab baru dengan `rel` yang benar.
- **FR-8** Smooth scroll untuk anchor di Home.

---

## 12. Non-Functional Requirements

- **NFR-1 Performa:** static-generated, Lighthouse Performance ≥ 95, LCP < 1.5s. Gambar di-optimize (WebP/AVIF, lazy-load).
- **NFR-2 SEO:** meta title/description per halaman, Open Graph + Twitter Card, `sitemap.xml`, `robots.txt`, structured data (JSON-LD `Person` + `ScholarlyArticle` untuk paper).
- **NFR-3 Accessibility:** semantic HTML, kontras AA, alt text, keyboard-navigable, ≥ 95.
- **NFR-4 Responsif:** mobile-first, diuji 360px → desktop.
- **NFR-5 Maintainability:** komponen layout dipakai ulang (navbar/footer sekali tulis), konten terpisah dari presentasi.
- **NFR-6 Analytics:** privacy-friendly (mis. Plausible/Cloudflare Web Analytics) — opsional v1.

---

## 13. Tech Stack & Arsitektur

| Layer | Pilihan | Alasan |
|---|---|---|
| Framework | **Astro** | Content collections cocok untuk blog; output static HTML (SEO + performa); bisa pakai komponen React kalau butuh interaktif. |
| Styling | **Tailwind CSS** | Sudah familiar (LabLink); cepat; konsisten. |
| Interaktivitas | React island (seperlunya) | Hanya untuk komponen yang butuh state (mis. carousel, toggle). Sisanya static. |
| Konten blog | Markdown / MDX | Authoring ringan, type-safe frontmatter. |
| Hosting | **Netlify** atau **Cloudflare Pages** | Gratis, CI dari Git, cepat. Tidak membebani VPS Tencent. |
| Domain | TBD (lihat §16) | Pertimbangkan domain `.com`/`.dev` profesional untuk audiens internasional. |
| Repo | GitHub (public) | Auto-deploy on push. |

**Kenapa bukan vanilla HTML/CSS/JS** (seperti referensi Ardava): vanilla bagus untuk single-page tanpa blog, tapi untuk multi-page + blog akan repetitif (copy-paste navbar/footer tiap file, tulis tiap post HTML manual). Astro menyelesaikan ini sambil tetap menghasilkan static HTML yang sama ringannya.

---

## 14. Design Direction

- **Referensi visual:** layout bersih ala portfolio Ardava (hero dua kolom, grid tech stack, kartu project, dark mode) — **contek polanya, bukan stack-nya**.
- **Tone:** profesional, minimalis, fokus konten. Tidak ramai.
- **Tipografi:** sans-serif modern, hierarki jelas. (Bisa selaras dengan preferensi pribadi; tidak harus mengikuti brand MBC Lab karena ini portfolio personal.)
- **Aksen warna:** satu warna aksen konsisten. Dark mode wajib rapi (audiens engineer banyak yang default dark).
- **Diagram:** untuk project detail yang kompleks (mis. arsitektur ScreenAI, pipeline thesis), sertakan diagram sederhana.

---

## 15. Yang Perlu Disiapkan (Homework Konten)

Sebelum/selama build, siapkan aset berikut:
- [ ] Foto profil profesional (resolusi cukup, background bersih).
- [ ] Resume PDF versi terbaru (English).
- [ ] Untuk tiap project: 1 kalimat ringkas + paragraf detail (Problem/Approach/Results/Role) + metrik konkret + link GitHub/demo.
- [ ] Detail paper IEEE: judul lengkap, venue, tahun, link DOI/Xplore, abstrak.
- [ ] Detail thesis: topik, pendekatan, status terkini.
- [ ] Thumbnail/gambar tiap project (diagram atau screenshot).
- [ ] 2–3 draft blog post untuk launch (boleh EN atau ID).
- [ ] Value proposition paragraph untuk hero (English, 2–3 kalimat).
- [ ] Daftar skill jujur per kategori.

---

## 16. Open Decisions (Konfirmasi Sebelum Build)

1. **Positioning** — setuju dengan "ML/AI Engineer + research edge"? Atau condong ke arah lain (MLOps lebih ditonjolkan)?
2. **Domain** — beli domain profesional baru, atau pakai subdomain gratis dulu (`*.netlify.app` / `*.pages.dev`)?
3. **Hosting** — Netlify atau Cloudflare Pages?
4. **Featured projects** — setuju dengan 3 pilihan di §10, atau mau tukar?
5. **Foto & resume** — sudah tersedia, atau perlu disiapkan dulu?
6. **Brand visual** — pakai arah netral profesional, atau mau mengikat ke palet/identitas tertentu?

---

## 17. Build Roadmap (Fase)

Sesuai gaya kerja: desain & approval inkremental, tiap fase di-review sebelum lanjut.

| Fase | Output | Catatan |
|---|---|---|
| **0. Setup** | Repo, Astro + Tailwind, struktur folder, deploy pipeline | Halaman kosong sudah live di hosting. |
| **1. Layout & Home** | Navbar, footer, dark mode, hero, section Home | Fondasi reusable. |
| **2. Projects** | List + template detail + isi 3 featured | Template konsisten dulu, baru isi. |
| **3. Research** | Halaman paper + thesis | Gaya akademik. |
| **4. Blog** | Content collection + 2–3 post | Sistem dulu, konten menyusul. |
| **5. About + polish** | About, SEO/meta/OG, sitemap, a11y, perf audit | Lighthouse pass. |
| **6. Launch** | Domain, indexing, share di LinkedIn | Personal branding. |

---

*Dokumen ini draft. Setelah Open Decisions (§16) dikonfirmasi, status naik ke v1.0 dan masuk Fase 0.*