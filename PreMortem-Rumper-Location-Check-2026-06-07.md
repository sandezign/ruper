# Pre-Mortem: Rumper Location Check

Tanggal: 7 Juni 2026

## Tigers (Risiko Nyata)

### Launch-blocking

1. **Skor kelayakan terlihat objektif, tetapi belum punya metode yang konsisten**
   - Risiko: Dua analis dapat memberi skor berbeda untuk lokasi yang sama, sehingga kepercayaan pengguna turun.
   - Mitigasi: Buat rubric terukur untuk setiap risiko, bobot skor, aturan red flag, dan contoh penilaian.

2. **Data tidak cukup akurat atau mutakhir untuk mendukung keputusan bernilai besar**
   - Risiko: Report memberi rasa aman palsu, terutama untuk banjir, commute, dan akses fisik.
   - Mitigasi: Tetapkan daftar sumber, tanggal pengecekan, metode verifikasi silang, serta batasan klaim untuk setiap bagian.

3. **Belum terbukti pengguna mau membayar sebelum booking fee**
   - Risiko: Pengguna tertarik pada konsep, tetapi memilih melakukan pengecekan sendiri atau meminta bantuan agen.
   - Mitigasi: Jual 10 report secara manual sebelum membangun otomasi; ukur conversion, willingness to pay, dan keputusan yang berubah setelah membaca report.

### Fast-follow

4. **Report terlalu generik dan tidak mengubah keputusan**
   - Mitigasi: Wajibkan bagian "apa yang harus dilakukan berikutnya" dan tanyakan keputusan pengguna sebelum serta sesudah menerima report.

5. **Checklist survei tidak terkait langsung dengan temuan**
   - Mitigasi: Hasilkan checklist khusus berdasarkan red flag lokasi, bukan checklist generik.

6. **Waktu pengerjaan membesar karena pencarian data tidak dibatasi**
   - Mitigasi: Tetapkan batas waktu per bagian dan aturan berhenti ketika confidence sudah cukup atau data tidak tersedia.

### Track

7. **Nama produk tidak konsisten antara "Rumper" dan "Ruper"**
   - Mitigasi: Konfirmasi dan gunakan satu nama pada semua materi.

## Paper Tigers (Kekhawatiran Berlebihan)

1. **MVP belum berupa software**
   - Operasi manual justru tepat untuk mempelajari kebutuhan pengguna dan membangun dataset, selama prosesnya terstruktur.

2. **Report hanya 1–2 halaman**
   - Panjang singkat bukan masalah jika report menjawab keputusan pengguna, menunjukkan bukti, dan memberi langkah berikutnya.

3. **Prospek area belum dianalisis**
   - Keputusan ini tepat untuk MVP karena prospek area lebih spekulatif dan tidak sepenting risiko langsung lokasi.

## Elephants (Asumsi yang Belum Cukup Dibahas)

1. **Siapa yang bertanggung jawab jika data atau kesimpulan salah?**
   - Tentukan disclaimer, masa berlaku report, dan bahasa yang membedakan fakta, estimasi, serta opini.

2. **Apa unit analisisnya: titik rumah, kompleks, kelurahan, atau rute?**
   - Definisikan unit per jenis risiko agar pengguna tidak menganggap data area luas berlaku tepat untuk rumahnya.

3. **Apakah empat risiko ini adalah risiko terpenting bagi target user?**
   - Validasi melalui wawancara dan penjualan, bukan hanya asumsi internal.

4. **Apa arti confidence label dan bagaimana label itu dihitung?**
   - Buat definisi berdasarkan kualitas, kebaruan, dan jumlah sumber, bukan penilaian subjektif analis.

## Action Plans for Launch-Blocking Tigers

| Risiko | Tindakan | Owner | Tenggat |
|---|---|---|---|
| Skor tidak konsisten | Buat rubric v0 dan uji dua analis pada tiga lokasi yang sama | Product/Ops | Sebelum report berbayar pertama |
| Data tidak cukup tepercaya | Buat source registry, aturan verifikasi, dan disclaimer | Research/Ops | Sebelum report berbayar pertama |
| Pengguna tidak mau membayar | Tawarkan dan selesaikan 10 report berbayar manual | Founder/GTM | Sebelum membangun otomasi |

