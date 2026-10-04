import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produk } from '../produk';
import { Keranjang } from '../keranjang';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: false,
})
export class DetailsPage implements OnInit {

  produkId: string = '';
  produkDetail: any = null;
  alertButtons = ['OK'];
  tampilkanAlert = false;

  constructor(
    private route: ActivatedRoute,
    private produkService: Produk,
    private keranjang: Keranjang
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.produkId = params['id'];
      this.produkDetail = this.produkService.getProdukById(this.produkId);
    });
  }

  tambahKeKeranjang() {
    if (this.produkDetail && this.produkDetail.stok > 0) {
      this.keranjang.addProduct(this.produkDetail);
      this.tampilkanAlert = true;
    }
  }

}
