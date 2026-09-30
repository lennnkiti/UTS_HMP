import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Produk } from '../produk';
import { TransaksiService } from '../transaksi.service';

export interface ItemBelanja {
  nama: string;
  jumlah: number;
  harga: number;
}

export interface Transaksi {
  tanggal: string;
  items: ItemBelanja[];
  totalHarga: number;
}

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {

  daftarTransaksi: Transaksi[] = [];

  constructor(private transaksiService: TransaksiService, private productService: Produk, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.transaksiService.inisialisasi(this.productService);
    this.refreshHistory();
    // const dataRaw = [
    //   {
    //     tanggal: '27 September 2026',
    //     items: [
    //       { produkId: 'p04', jumlah: 2 },
    //       { produkId: 'p10', jumlah: 3 }
    //     ]
    //   },
    //   {
    //     tanggal: '28 September 2026',
    //     items: [
    //       { produkId: 'p01', jumlah: 1 },
    //       { produkId: 'p05', jumlah: 5 }
    //     ]
    //   },
    //   {
    //     tanggal: '29 September 2026',
    //     items: [
    //       { produkId: 'p02', jumlah: 2 }
    //     ]
    //   }
    // ];

    // for (let t of dataRaw) {
    //   let itemsLengkap: ItemBelanja[] = [];
    //   let totalHarga = 0;

    //   for (let item of t.items) {
    //     const prod = this.produkService.getProdukById(item.produkId);
    //     if (prod) {
    //       itemsLengkap.push({
    //         nama: prod.nama,
    //         jumlah: item.jumlah,
    //         harga: prod.harga_jual
    //       });

    //       totalHarga += prod.harga_jual * item.jumlah;
    //     }
    //   }

    //   this.daftarTransaksi.push({
    //     tanggal: t.tanggal,
    //     items: itemsLengkap,
    //     totalHarga: totalHarga
    //   });
    // }
  }

  ionViewDidEnter() {
    this.refreshHistory();
  }

  private refreshHistory() {
    this.daftarTransaksi = [...this.transaksiService.getRiwayat()];
    this.cdr.detectChanges();
  }
}




