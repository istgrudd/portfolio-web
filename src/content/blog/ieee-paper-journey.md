---
title: "Perjalanan Publikasi IEEE sebagai First Author"
date: 2026-05-15
lang: "id"
summary: "Dari dataset custom sampai accepted paper: pengalaman submit riset computer vision ke IEEE sebagai mahasiswa S1."
tags: ["research", "computer-vision", "ieee", "yolo"]
draft: false
---

## Awal Mula

Semester 6, saya mengambil topik riset vehicle detection dengan YOLO. Saat itu belum terpikir untuk submit ke IEEE—target awalnya hanya menyelesaikan proyek mata kuliah dengan hasil yang solid.

Tapi setelah beberapa bulan mengerjakan, datanya menarik: footage CCTV lalu lintas Indonesia dengan variasi kendaraan yang jauh lebih beragam dibanding dataset publik seperti COCO atau KITTI. Motor, mobil, bus, truk, sampai becak—dataset _real_ yang tidak ada di benchmark internasional.

## Proses Submit

### 1. Dataset Preparation

Mengumpulkan dan menganotasi footage CCTV dari beberapa persimpangan di Yogyakarta. Total ribuan frame, dianotasi manual dengan bounding box untuk 5+ kelas kendaraan. Ini bagian paling melelahkan—labeling manual memakan waktu berminggu-minggu.

### 2. Eksperimen

Melatih YOLOv11 dan membandingkan dengan YOLOv8 baseline. Hyperparameter tuning, data augmentation, dan evaluasi dengan metrik standar (mAP@0.5, mAP@0.5:0.95, FPS).

### 3. Penulisan Paper

Ini pengalaman pertama menulis paper akademik dalam bahasa Inggris dengan format IEEE. Beberapa pelajaran:

- **Abstract itu krusial.** Reviewer membaca abstract dulu. Kalau tidak menarik, paper tidak dilirik. Tulis ulang minimal 5 kali.
- **Related work bukan sekadar daftar.** Harus menunjukkan _gap_ yang diisi oleh riset kita.
- **Figure lebih berbicara daripada tabel.** Visualisasi arsitektur dan hasil deteksi lebih meyakinkan.

### 4. Revisi

Dapat minor revision. Reviewer meminta klarifikasi di bagian metodologi dan tambahan eksperimen pada kondisi low-light. Seminggu nonstop revisi dan eksperimen tambahan.

## Pelajaran

1. **Jangan tunggu "sempurna".** Paper ini bukan riset terbaik yang bisa saya lakukan, tapi cukup baik untuk publish sekarang. Momentum itu penting.
2. **First author itu tanggung jawab.** Koordinasi dengan co-author, memimpin revisi, dan memastikan semua bagian paper koheren—semua di pundak first author.
3. **Dataset lokal punya nilai.** Reviewer internasional justru tertarik pada dataset Indonesia yang belum tereksplorasi.

## Penutup

Publikasi IEEE sebagai S1 bukan hal mustahil. Butuh: (1) dataset yang solid, (2) eksperimen yang rigorous, (3) penulisan yang jelas, dan (4) kesabaran menghadapi revisi. Paper ini sekarang menjadi fondasi thesis saya tentang traffic flow estimation—tapi itu cerita untuk tulisan lain.

---

_Link ke paper: [IEEE Xplore](#)._
