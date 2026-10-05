import { Component, OnInit } from '@angular/core';
import { ItemKeranjang, Keranjang } from '../keranjang';
import { ItemBelanja, TransaksiService } from '../transaksi.service';
import { Produk } from '../produk';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false,
})
export class KeranjangPage implements OnInit {
  items: ItemKeranjang[] = [];
  gagalCheckout: boolean = false;
  alertButtons = ['OK'];

  constructor(private keranjangService: Keranjang, private transaksiService: TransaksiService, private produkService: Produk, private router: Router) { }

  ngOnInit() {
    this.items = this.keranjangService.getItems();
  }

  getStok(id: string): number {
    let semuaProduk = this.produkService.dataProduk;
    for (let i = 0; i < semuaProduk.length; i++) {
      if (semuaProduk[i].id === id) {
        return semuaProduk[i].stok;
      }
    }
    return 0;
  }


  getTotal() {
    return this.keranjangService.getTotal();
  }

  hapus(id: string) {
    this.keranjangService.hapusItem(id);
  }

  tambah(item: any) {
    if (item.jumlah < 100) {
      let stokProduk = this.getStok(item.id);
      if (item.jumlah < stokProduk) {
        item.jumlah++;
      }
    }
  }

  kurang(item: any) {
    this.keranjangService.kurangiProduct(item.id);
  }

  validasiJumlah(item: any) {
    let stokTersedia = this.getStok(item.id);
    if (item.jumlah < 1 || item.jumlah == null) {
      item.jumlah = 1;
    } else if (item.jumlah > stokTersedia) {
      item.jumlah = stokTersedia;
    }
  }

  stokTidakCukup(): boolean {
    for (let item of this.items) {
      if (item.jumlah > this.getStok(item.id)) {
        return true;
      }
    }
    return false;
  }

  konfirmasiTransaksi() {
    if (this.stokTidakCukup()) {
      this.gagalCheckout = true;
      return;
    }

    let itemBelanja: ItemBelanja[] = [];
    for (let i of this.items) {
      itemBelanja.push({
        nama: i.nama,
        jumlah: i.jumlah,
        harga: i.harga_jual,
        produkId: i.id
      })
      this.produkService.kurangiStok(i.id, i.jumlah);
    }


    this.transaksiService.tambahTransaksi(itemBelanja, this.getTotal());
    this.keranjangService.hapusSemua();

    this.router.navigate(['/transaksi']);
  }

}
