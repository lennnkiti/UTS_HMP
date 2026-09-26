import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produk } from '../produk';
@Component({
  selector: 'app-tambah-produk',
  templateUrl: './tambah-produk.page.html',
  styleUrls: ['./tambah-produk.page.scss'],
  standalone: false,
})
export class TambahProdukPage implements OnInit {
  nama: string = '';
  kategori: string = '';
  harga_beli: number = 0;
  harga_jual: number = 0;
  stok: number = 0;
  gambar: string = '';

  isSubmit: boolean = false;

  constructor(private produkService: Produk, private router: Router) { }

  ngOnInit() {
  }
 simpan() {
    this.isSubmit = true; 
    if (this.nama !== '' && this.kategori !== '' && this.harga_beli > 0 && this.harga_jual > 0 && this.stok >= 0) {
      
      let idBaru = 'p' + (this.produkService.dataProduk.length + 1).toString().padStart(2, '0');
      
      let produkBaru = {
        id: idBaru,
        nama: this.nama,
        kategori: this.kategori,
        stok: this.stok,
        harga_beli: this.harga_beli,
        harga_jual: this.harga_jual,
        terjual: 0,
        gambar: this.gambar
      };

      this.produkService.dataProduk.push(produkBaru);
      this.resetForm();
      this.router.navigate(['/produk']);
    }
  }

  resetForm() {
    this.nama = '';
    this.kategori = '';
    this.harga_beli = 0;
    this.harga_jual = 0;
    this.stok = 0;
    this.gambar = '';
    this.isSubmit = false;
  }
}
