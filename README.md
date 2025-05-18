# 📊 Tugas Group Project – MDIK (Kelompok 8)

## 🎯 Judul Proyek
**Desain dan Implementasi Scalable Data Service dengan RDS, Async API, dan Load Testing**

## 👥 Anggota Kelompok 8
- Tsaabita Rizqiina Putri Hidayat (5026211124)  
- Auzan Taqi Syafega (6026242017)  
- Raditya Pratama (6026242019)  

Mata Kuliah: *Manajemen Data Informasi dan Konten (A)*  
Program Magister Sistem Informasi  
Institut Teknologi Sepuluh Nopember – 2025

---

## 📘 Deskripsi Singkat
Proyek ini membangun sistem **RESTful API** berbasis Node.js + Express untuk menyajikan data **World Development Indicators (WDI)** dari Bank Dunia. Data disimpan di database **MySQL Read-Only** dan dapat diakses melalui endpoint utama `/indicators`, yang mendukung:

- Filter: `country`, `indicator`, `year`
- Pagination & sorting
- Format respons JSON konsisten
- Validasi input & penanganan error

Sistem diuji dengan **load testing (Locust)** pada tiga skenario beban pengguna: 100, 300, dan 500 concurrent users.

---

## 🛠️ Teknologi yang Digunakan
| Komponen         | Teknologi                   |
|------------------|-----------------------------|
| Backend Server   | Node.js + Express.js        |
| Database         | MySQL (Read-Only Setup)     |
| Load Testing     | Locust                      |
| API Testing Tool | Postman                     |
| Deployment Dev   | .env (config-based server)  |

---

## 📈 Hasil Load Testing

| Users     | Avg Response Time | p95 Latency | RPS   | Error Rate |
|-----------|-------------------|-------------|--------|------------|
| 100 Users | 10.134 ms         | 12.000 ms   | ~18.9  | 0.0%       |
| 300 Users | 29.546 ms         | 35.000 ms   | ~19.8  | 0.0%       |
| 500 Users | 46.570 ms         | 56.000 ms   | ~21.6  | 0.0%       |

**Catatan:** Bottleneck mulai muncul pada 300 users dan memburuk di 500 users, dengan penurunan throughput (RPS) secara berkala dan peningkatan latency. Diperlukan optimasi melalui indexing, caching, dan penskalaan horizontal.

---

## 🔗 Tautan Penting
- 📦 Koleksi Postman: [worlddevelopmentindicator_postmancollection.json](https://github.com/auzansyafega/tugasmdik8/blob/main/worlddevelopmentindicator_postmancollection.json)
- 🎬 Video Demo: [YouTube - Demo Sistem](https://youtu.be/h8qG57KeoOE)
- 📄 Laporan Tugas: Upload di Classroom atau tambahkan ke repo jika diperlukan

---

## 🧠 Catatan Akhir
Sistem ini dirancang untuk menjadi scalable dan mudah diintegrasikan ke berbagai sistem klien (web, mobile, analitik). Hasil uji menunjukkan sistem tangguh untuk beban ringan–menengah, dan siap ditingkatkan ke level enterprise dengan optimasi lanjutan.

---

## 📬 Kontak
Untuk pertanyaan atau klarifikasi, silakan hubungi anggota kelompok melalui LMS atau email ITS masing-masing.
