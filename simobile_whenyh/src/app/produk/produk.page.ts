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
    const sudahAda = this.getJumlahDiKeranjang(item.id) > 0;
    this.keranjang.addProduct(item);
    if (!sudahAda) {                                         
      this.tampilkanAlert = true;
    }
  }

  validasiJumlah(item: any) {
    const dikeranjang = this.keranjang.getItemKeranjang(item.id);
    if (!dikeranjang) {
      return;
    }

    if (dikeranjang.jumlah == null || dikeranjang.jumlah < 1) {
      dikeranjang.jumlah = 1;
    } else if (dikeranjang.jumlah > item.stok) {
      dikeranjang.jumlah = item.stok;
    }
  }

  keranjangItem(id: string) {
    return this.keranjang.getItemKeranjang(id)!;
  }

  kurangiDariKeranjang(item: any) {
    this.keranjang.kurangiProduct(item.id);
  }

  getJumlahDiKeranjang(id: string): number {
    const item = this.keranjang.getItemKeranjang(id);
    return item ? item.jumlah : 0;
  }

}
