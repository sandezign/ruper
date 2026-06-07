# STD-SCR-001: Rumper Location Score V1

## Kontrol Dokumen

| Item | Definisi |
|---|---|
| Standard ID | STD-SCR-001 |
| Process owner | Operations Lead |
| Berlaku untuk | Semua desk research lokasi Rumper |
| Effective stage | Validation MVP dan Concierge MVP |
| Skala skor | 0-100 per kategori |
| Frekuensi review | Bulanan selama validasi |

## 1. Tujuan

Standar ini memastikan analyst menilai lokasi dengan kategori, bobot, interpretation band, dan aturan confidence yang konsisten.

Skor adalah alat bantu keputusan. Skor bukan jaminan bahwa lokasi aman, bebas banjir, nyaman, atau sesuai untuk seluruh kebutuhan customer.

## 2. Kategori dan Bobot Wajib

Kelima kategori wajib dinilai pada setiap report.

| Kategori | Bobot |
|---|---:|
| Ketahanan banjir | 30% |
| Efisiensi commute | 25% |
| Akses fisik dan jalan | 15% |
| Fasilitas esensial | 15% |
| Kualitas lingkungan dan red flags | 15% |
| **Total** | **100%** |

Bobot tidak boleh diubah pada satu report tanpa persetujuan Operations Lead dan catatan exception.

## 3. Rumus

```text
RLS = (Banjir x 0,30)
    + (Commute x 0,25)
    + (Akses Fisik x 0,15)
    + (Fasilitas Esensial x 0,15)
    + (Kualitas Lingkungan x 0,15)
```

Setiap kategori diberi skor 0-100. Nilai akhir dibulatkan maksimal dua angka desimal.

Contoh:

| Kategori | Skor | Bobot | Nilai tertimbang |
|---|---:|---:|---:|
| Banjir | 60 | 30% | 18,00 |
| Commute | 70 | 25% | 17,50 |
| Akses fisik | 80 | 15% | 12,00 |
| Fasilitas esensial | 75 | 15% | 11,25 |
| Kualitas lingkungan | 65 | 15% | 9,75 |
| **Total** |  |  | **68,50 / 100** |

## 4. Interpretation Band

| Skor total | Label | Arti operasional |
|---:|---|---|
| 80-100 | Relatif kuat | Tidak ditemukan masalah besar dari desk research, tetapi validasi lapangan tetap wajib |
| 65-79,99 | Layak dengan catatan | Dapat dipertimbangkan setelah catatan utama divalidasi |
| 50-64,99 | Hati-hati | Ada risiko atau ketidakpastian material yang perlu diselesaikan sebelum keputusan |
| Di bawah 50 | Risiko tinggi / perlu validasi kuat | Jangan lanjut tanpa investigasi atau mitigasi yang memadai |

## 5. Rubric Skor Kategori

Analyst memilih skor berdasarkan bukti yang tersedia. Gunakan nilai di antara anchor hanya bila alasannya dicatat.

| Rentang | Arti |
|---:|---|
| 80-100 | Kondisi relatif mendukung; tidak ada masalah material yang ditemukan |
| 65-79 | Cukup mendukung; terdapat catatan yang masih dapat divalidasi atau dikelola |
| 50-64 | Perlu perhatian; terdapat risiko material atau evidence gap penting |
| 25-49 | Risiko tinggi; terdapat masalah besar atau beberapa masalah yang saling memperkuat |
| 0-24 | Sangat tidak mendukung; terdapat red flag kritis atau kondisi tidak dapat diterima |

### Aturan Per Kategori

| Kategori | Faktor utama yang wajib memengaruhi skor |
|---|---|
| Banjir | Indikasi rawan banjir, kedekatan sungai/kali, topografi, riwayat genangan, kualitas bukti klaim bebas banjir |
| Commute | Durasi normal dan jam sibuk, pilihan moda, bottleneck, biaya dan effort harian, toleransi customer |
| Akses fisik | Lebar dan kondisi jalan, akses masuk/keluar, single access point, koneksi jalan besar/tol/stasiun, bottleneck fisik |
| Fasilitas esensial | Ketersediaan dan akses ke kebutuhan harian, kesehatan, sekolah bila relevan, dan transportasi umum |
| Kualitas lingkungan | Kedekatan dan dampak indikatif dari industri, TPA, SUTET, rel, kebisingan, polusi, keamanan, atau red flag lokal lain |

## 6. Confidence Label

Confidence menilai kekuatan evidence, bukan tingkat baik atau buruknya lokasi.

| Label | Kriteria |
|---|---|
| Data kuat | Sumber jelas, relatif resmi atau dapat diverifikasi, relevan dengan titik rumah, dan cukup baru |
| Data sedang | Sumber cukup baik tetapi tidak spesifik sampai titik rumah, kurang baru, atau membutuhkan interpretasi |
| Perlu validasi | Berdasarkan indikasi, proxy, sumber lemah/konflik, atau wajib dicek di lapangan |

Setiap kategori dan setiap finding material wajib memiliki confidence label.

Confidence rendah tidak otomatis berarti skor rendah. Analyst harus menuliskan evidence gap dan tindakan validasi yang dibutuhkan.

## 7. Red-Flag dan Override Rule

Red flag lingkungan tetap merupakan kategori berbobot 15%, tetapi red flag kritis tidak boleh tertutup oleh skor total yang tinggi.

Jika ditemukan red flag kritis:

1. Catat finding, sumber, confidence, dan dampaknya.
2. Tandai overall recommendation minimal sebagai `Verify further before deciding`.
3. Jangan gunakan label keputusan `Relatif kuat` tanpa penjelasan exception dari Operations Lead.
4. Masukkan tindakan validasi spesifik ke checklist survei lapangan.

Contoh red flag kritis: indikasi banjir berulang yang material, akses darurat sangat terbatas, konflik evidence penting, atau paparan lingkungan yang berpotensi mengganggu penggunaan rumah.

## 8. Aturan Rekomendasi

Skor dan rekomendasi harus tetap menjadi dua lapisan analisis yang terpisah.

Pilihan rekomendasi:

- `Proceed`
- `Proceed with caution`
- `Verify further before deciding`
- `Avoid until major concerns are resolved`

Recommendation wajib mempertimbangkan:

- skor total dan skor tiap kategori;
- confidence dan evidence gap;
- red flag kritis;
- kebutuhan, prioritas, serta toleransi customer.

## 9. Definition of Done

Scoring selesai hanya bila:

- lima kategori memiliki skor dan rationale;
- rumus dan pembulatan benar;
- setiap kategori memiliki confidence label;
- evidence gap dan red flag dicatat;
- rekomendasi konsisten dengan evidence dan konteks customer;
- tindakan validasi lapangan tersedia;
- Quality Reviewer menyetujui score worksheet.
