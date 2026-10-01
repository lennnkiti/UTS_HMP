import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produk } from '../produk';

@Component({
  selector: 'app-tambah-produk',
  templateUrl: './tambah-produk.page.html',
  styleUrls: ['./tambah-produk.page.scss'],
  standalone: false,
})
export class TambahProdukPage implements OnInit {
  produkForm!: FormGroup;
  isSubmit: boolean = false;

  constructor(private produkService: Produk, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.produkForm = this.fb.group({
      nama: ['', Validators.required],
      kategori: ['', Validators.required],
      harga_beli: [0, [Validators.required, Validators.min(1)]],
      harga_jual: [0, [Validators.required, Validators.min(1)]],
      stok: [0, [Validators.required, Validators.min(0)]],
      gambar: ['']
    });
  }
  get f() {
    return this.produkForm.controls;
  }
  simpan() {
    this.isSubmit = true;

    if (this.produkForm.valid) {
      const dataForm = this.produkForm.value;

      let idBaru = 'p' + (this.produkService.dataProduk.length + 1).toString().padStart(2, '0');

      let produkBaru = {
        id: idBaru,
        nama: dataForm.nama,
        kategori: dataForm.kategori,
        stok: dataForm.stok,
        harga_beli: dataForm.harga_beli,
        harga_jual: dataForm.harga_jual,
        terjual: 0,
        gambar: dataForm.gambar
      };

      this.produkService.dataProduk.push(produkBaru);

      this.produkForm.reset();
      this.isSubmit = false;
      this.router.navigate(['/produk']);
    }
  }
}
