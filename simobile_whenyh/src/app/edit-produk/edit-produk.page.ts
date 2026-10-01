import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produk } from '../produk';

@Component({
  selector: 'app-edit-produk',
  templateUrl: './edit-produk.page.html',
  styleUrls: ['./edit-produk.page.scss'],
  standalone: false,
})
export class EditProdukPage implements OnInit {

  produkId: string = '';
  
  nama: string = '';
  kategori: string = '';
  harga_beli: number = 0;
  harga_jual: number = 0;
  stok: number = 0;
  gambar: string = '';

  isSubmit: boolean = false;
  constructor(private produkService: Produk,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      if (id !== null) {
        this.produkId = id;
        
        let produkLama = this.produkService.getProdukById(this.produkId);
        
        if (produkLama) {
          this.nama = produkLama.nama;
          this.kategori = produkLama.kategori;
          this.harga_beli = produkLama.harga_beli;
          this.harga_jual = produkLama.harga_jual;
          this.stok = produkLama.stok;
          this.gambar = produkLama.gambar;
        }
      }
    });
  }

  simpanPerubahan() {
    this.isSubmit = true;

    if (this.nama !== '' && this.kategori !== '' && this.harga_beli > 0 && this.harga_jual > 0 && this.stok >= 0) {
      
      const index = this.produkService.dataProduk.findIndex(p => p.id === this.produkId);

      if (index !== -1) {
        const produkLama = this.produkService.dataProduk[index];

        this.produkService.dataProduk[index] = {
          id: this.produkId,
          nama: this.nama,
          kategori: this.kategori,
          stok: this.stok,
          harga_beli: this.harga_beli,
          harga_jual: this.harga_jual,
          terjual: produkLama.terjual,
          gambar: this.gambar
        };

        this.isSubmit = false;
        this.router.navigate(['/produk']); 
      }
    }
  }
}
