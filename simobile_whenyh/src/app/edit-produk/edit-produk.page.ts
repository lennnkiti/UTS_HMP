import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produk } from '../produk';

@Component({
  selector: 'app-edit-produk',
  templateUrl: './edit-produk.page.html',
  styleUrls: ['./edit-produk.page.scss'],
  standalone: false,
})
export class EditProdukPage implements OnInit {

  editForm!: FormGroup;
  isSubmit: boolean = false;
  produkId: string = '';
  constructor(private fb: FormBuilder, private produkService: Produk,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      nama: ['', Validators.required],
      kategori: ['', Validators.required],
      harga_beli: ['', [Validators.required, Validators.min(1)]],
      harga_jual: ['', [Validators.required, Validators.min(1)]],
      stok: ['', [Validators.required, Validators.min(0)]],
      gambar: ['']
    });

    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      if (id !== null) {
        this.produkId = id;

        let produkLama = this.produkService.getProdukById(this.produkId);
        
        if (produkLama) {
          this.editForm.patchValue({
            nama: produkLama.nama,
            kategori: produkLama.kategori,
            harga_beli: produkLama.harga_beli,
            harga_jual: produkLama.harga_jual,
            stok: produkLama.stok,
            gambar: produkLama.gambar
          });
        }
      }
    });
  }

  get f() {
    return this.editForm.controls;
  }

  simpanPerubahan() {
    this.isSubmit = true;

    if (this.editForm.valid) {
      const dataUpdate = this.editForm.value;
      
      const index = this.produkService.dataProduk.findIndex(p => p.id === this.produkId);

      if (index !== -1) {
        const produkLama = this.produkService.dataProduk[index];
        
        this.produkService.dataProduk[index] = {
          id: this.produkId,
          nama: dataUpdate.nama,
          kategori: dataUpdate.kategori,
          stok: dataUpdate.stok,
          harga_beli: dataUpdate.harga_beli,
          harga_jual: dataUpdate.harga_jual,
          terjual: produkLama.terjual,
          gambar: dataUpdate.gambar
        };

        this.isSubmit = false;
        this.router.navigate(['/produk']); 
      }
    }
  }

}
