# UTS Hybrid Mobile Programming (SIMOBILE - Toko Makmur Jaya)
Nama Kelompok : When Yh <br>
Anggota Kelompok : <br>
  1. Christopher Albert (160424028) <br>
  2. Valentino Fittivaldi Santoso (160424011) <br>
  3. Kelvin Adrian Revananda Gunawan (160424089) <br>
  4. Jovanka Natalie Swandito (160424104)

## Prerequirement dan Install Dependensi
Install Node.js (https://nodejs.org/dist/v24.21.0/node-v24.21.0-x64.msi)
  - Buka command prompt dan install dependensi.
  - Jalankan perintah ``` npm install ```
  - jalankan perintah ``` npm install -g @ionic/cli ```

## Cara Instalasi
1. Clone Repository
  - Buat 1 folder di komputer/laptop untuk menampung repositori yang akan di clone.
  - Clone repository bisa menggunakan github desktop atau git bash (terminal) pada folder yang sudah di buat. <br>
    ```bash
    git clone https://github.com/lennnkiti/UTS_HMP.git
    ```
## Menjalankan Aplikasi
1. Buka di visual studio code
  - Buka visual studio code buka menu file
  - Pilih open folder
  - Buka folder dari repositori yang sudah berhasil di clone
  - Pilih folder "simobile_whenyh" lalu open
2. Jalankan SIMOBILE
  - Buka menu terminal
  - Pilih new terminal
  - Jalankan perintah ``` ionic serve ```
  - Jika ditanya "? Install @angular/cli? (Y/n)" ketikkan Y lalu enter (hanya ditanya ketika pertama kali menjalankan aplikasi)
  - Website akan terbuka pada port 8100 dengan url "localhost:8100"

## Daftar Fitur
1. Struktur Navigasi
   - Tab Navigasi Utama : Terdapat di bawah pada halaman website lalu ada 4 menu yaitu Dashboard, Produk, Transaksi, dan Profil.
   - Side Drawer Menu : ada pada sisi kiri website yang dapat dibuka dengan klik garis 3 di pojok kiri atas atau slide layar dari kiri ke kanan.
2. Halaman Dashboard
   - Dapat menampilkan ringkasan penjualan harian secara real time, data yang ditampilkan meliputi Total keseluruhan produk, Total transaksi hari ini, Total penjualan hari ini, dan Produk terlaris.
3. Pencarian Produk Real Time
   - Pencarian produk berdasarkan nama produk yang dapat diinputkan oleh pengguna.
   - Terdapat juga filter Kategori produk menggunakan radio button.
4. Detail Produk Via Route Parameter
   - Navigasi yang dapat dilakukan secara dinamis menuju halaman details berdasarkan ID produk dengan contoh "http://localhost:8100/details/p03"
   - Menampilkan rincian lengkap prodduk seperti : nama produk, stok tersisa, harga beli, harga jual, dan margin dari produk tersebut.
5. Form Tambah dan Edit Produk
   - Membuat form untuk menambahkan produk baru dan mengedit produk yang sudah ada menggunakan Angular Reactive Forms.
   - Terdapat pesan error yang muncul di bawah field yang salah tanpa mereset isian form.
6. Toogle Dark Mode
   - Pergantian mode menjadi dark atau light yang bertujuan untuk kenyamanan penggunaan. Untuk menggunakan fitur ini dapat mencari tooglenya di halaman pengaturan.
7. Animasi
   - Animasi Profile : Terdapat animasi pada halaman profil dimana foto pengguna muncul dengan efek transisi membesar dari ukuran kecil ke besar.
   - Animasi Masuk Halaman Produk : Saat pengguna berpindah ke halaman produk, daftar produk muncul bergerak dari bawah ke atas secara perlahan.
   - Animasi Badge Keranjang : Saat pengguna menekan tombol "Tambah ke Keranjang" dan menambah jumlah produk yang ingin dibeli, terdapat ikon angka pada logo keranjang beranimasi yang menandakan produk tersebut berhasil ditambah.
8. Keranjang dan Checkout
   - Terdapat halaman keranjang yang berfungsi menampung produk yang ingin dibeli pengguna sebelum checkout.
   - Terdapat tombol "Konfirmasi Transaksi" untuk memproses belanjaan dan sistem secaara otomatis memotong stok produk yang telah dibeli dan menyimpan transaksi tersebut ke ke halaman daftar transaksi.
9. Riwayat dan Detail Transaksi
   - Menampilkan daftar seluruh transaksi yang pernah dilakukan
   - Setiap riwayat transaksi dapat di klik untuk melihat detail rincian produk yang dibeli.
