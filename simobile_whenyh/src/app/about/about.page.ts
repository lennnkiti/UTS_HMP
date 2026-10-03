import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: false,
})
export class AboutPage implements OnInit {

  logo: string = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg';
  nama: string = 'SIMOBILE';
  toko: string = 'Toko Makmur Jaya';
  versi: string = 'v1.0.0';
  deskripsi: string = 'SIMOBILE dirancang khusus untuk membantu Toko Makmur Jaya dalam mengelola stok produk, memantau penjualan harian, dan mencatat transaksi secara cepat dan tepat';
  developer: string = 'Kelompok WhenYh'
  emailDeveloper: string = 'kelompokwhenyh123@gmail.com';
  constructor() { }

  ngOnInit() {
  }

}
