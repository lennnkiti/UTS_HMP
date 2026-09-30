import { Component, OnInit } from '@angular/core';
import { ItemKeranjang, Keranjang } from '../keranjang';
import { ItemBelanja, TransaksiService } from '../transaksi.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false,
})
export class KeranjangPage implements OnInit {
  items: ItemKeranjang[] = [];

  constructor( private keranjangService: Keranjang, private transaksiService: TransaksiService, private router: Router) { }

  ngOnInit() {
    this.items = this.keranjangService.getItems();
  }


  getTotal() {
    return this.keranjangService.getTotal();
  }

  hapus(id: string) {
    this.keranjangService.hapusItem(id);
  }

  tambah(item: any) {
    if (item.jumlah < 100) {
      item.jumlah++;
    }
  }

  kurang(item: any) {
    if (item.jumlah > 1) {
      item.jumlah--;
    }
  }

  validasiJumlah(item: any) {
    if (item.jumlah < 1 || item.jumlah == null) {
      item.jumlah = 1; 
    } else if (item.jumlah > 100) {
      item.jumlah = 100;
    }
  }


  konfirmasiTransaksi() {
    let itemBelanja: ItemBelanja[] = [];
    for (let i of this.items) {
      itemBelanja.push({
        nama: i.nama,
        jumlah: i.jumlah,
        harga: i.harga_jual
      })
    }
    

    this.transaksiService.tambahTransaksi(itemBelanja, this.getTotal());
    this.keranjangService.hapusSemua();

    this.router.navigate(['/transaksi']);
  }

}
