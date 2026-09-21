import { Component, OnInit } from '@angular/core';
import { Produk } from '../produk';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {

  searchQuery: string = '';
  semuaProduk: any[] = [];

  constructor(private produk: Produk) { }

  ngOnInit() {
    this.semuaProduk = this.produk.dataProduk;
  }

  getFilteredProduk() {
    if (this.searchQuery === '') {
      return this.semuaProduk;
    }
    return this.semuaProduk.filter(p =>
      p.nama.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
  
  tambahKeKeranjang(item: any) {
    console.log('Berhasil menambahkan', item.nama, 'ke keranjang!');
  }

}
