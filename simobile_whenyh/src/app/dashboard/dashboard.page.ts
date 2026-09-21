import { Component, OnInit } from '@angular/core';
import { Produk } from '../produk';
import { Auth } from '../auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {
namaUser: string = '';
  totalProduk: number = 0;
  produkTerlaris: string = '';
  
  constructor(public auth: Auth, private produk: Produk) {
    this.namaUser = this.auth.activeUser;
  }

  ngOnInit() {
    this.namaUser = this.auth.activeUser;
    
    this.totalProduk = this.produk.getTotalMacamProduk();
    this.produkTerlaris = this.produk.getProdukTerlaris();
  }
}
