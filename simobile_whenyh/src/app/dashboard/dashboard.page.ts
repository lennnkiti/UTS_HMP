import { Component, OnInit } from '@angular/core';
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
  totalTransaksi: number = 0;
  totalPenjualan: number = 0;


  constructor(public auth: Auth, private produk: Produk, private transaksi: TransaksiService) {
    this.namaUser = this.auth.activeUser;
  }

  ngOnInit() {
    this.namaUser = this.auth.activeUser;

    this.muatUlang();
  }


  ionViewEnter() {
    this.muatUlang();
  }

  muatUlang() {
    this.totalProduk = this.produk.getTotalMacamProduk();
    this.produkTerlaris = this.produk.getProdukTerlaris();
    this.totalPenjualan = this.transaksi.getPenjualanHariIni();
    this.totalTransaksi = this.transaksi.getTransaksiHariIni();
  }
}
