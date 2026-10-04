import { Component, OnInit } from '@angular/core';
import { Produk } from '../produk';
import { Keranjang } from '../keranjang';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {

  searchQuery: string = '';
  selectedCategory: string = 'Semua';
  semuaProduk: any[] = [];
  alertButtons = ['OK'];
  tampilkanAlert = false;

  constructor(private produk: Produk, private keranjang: Keranjang) { }

  ngOnInit() {
    this.semuaProduk = this.produk.dataProduk;
  }

  getFilteredProduk() {
    let hasilFilter = [];

    for (let i = 0; i < this.semuaProduk.length; i++) {
      let p = this.semuaProduk[i];

      let cocokNama = false;
      if (this.searchQuery === '') {
        cocokNama = true;
      } else if (p.nama.toLowerCase().includes(this.searchQuery.toLowerCase())) {
        cocokNama = true;
      }

      let cocokKategori = false;
      if (this.selectedCategory === 'Semua') {
        cocokKategori = true;
      } else if (p.kategori === this.selectedCategory) {
        cocokKategori = true;
      }

      if (cocokNama && cocokKategori) {
        hasilFilter.push(p);
      }
    }

    return hasilFilter;
  }


  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  tambahKeKeranjang(item: any) {
    this.keranjang.addProduct(item);
    this.tampilkanAlert = true;
  }

}
