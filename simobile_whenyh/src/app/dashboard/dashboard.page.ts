import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Produk } from '../produk';
import { Auth } from '../auth';
import { TransaksiService } from '../transaksi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {
  namaUser: string = '';
  totalProduk: number = 0;
  produkTerlaris: any = null;


  constructor(public auth: Auth, private produk: Produk, private transaksi: TransaksiService, private cdr: ChangeDetectorRef) {
    this.namaUser = this.auth.activeUser;
  }

  ngOnInit() {
    this.namaUser = this.auth.activeUser;

    this.totalProduk = this.produk.getTotalMacamProduk();
    this.produkTerlaris = this.produk.getProdukTerlaris();
  }

  get totalTransaksi(): number {
    return this.transaksi.getTransaksiHariIni();
  }
  get totalPenjualan(): number {
    return this.transaksi.getPenjualanHariIni();
  }


  ionViewWillEnter() {
    console.log('jalan');
    this.transaksi.inisialisasi(this.produk);
    console.log('riwayat:', this.transaksi.getRiwayat());
    console.log(this.totalTransaksi, this.totalPenjualan);
    this.cdr.detectChanges();
  }
}
