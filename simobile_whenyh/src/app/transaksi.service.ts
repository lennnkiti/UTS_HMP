import { Injectable } from '@angular/core';
import { Produk } from './produk';

interface ItemRaw {
    produkId: string;
    jumlah: number;
}
interface TransaksiRaw {
    tanggal: string;
    items: ItemRaw[];
}

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

@Injectable({ providedIn: 'root' })
export class TransaksiService {
    private dataRaw: TransaksiRaw[] = [
        {
            tanggal: '27 September 2026',
            items: [
                { produkId: 'p04', jumlah: 2 },
                { produkId: 'p10', jumlah: 3 },
            ],
        },
        {
            tanggal: '28 September 2026',
            items: [
                { produkId: 'p01', jumlah: 1 },
                { produkId: 'p05', jumlah: 5 },
            ],
        },
        {
            tanggal: '29 September 2026',
            items: [{ produkId: 'p02', jumlah: 2 }],
        },
    ];

    private riwayat: Transaksi[] = [];

    private sudahInit: boolean = false;

    constructor() {

    }

    inisialisasi(produkService: any) {
        if (this.sudahInit) {
            return;
        }
        for (let t of this.dataRaw) {
            let itemsLengkap: ItemBelanja[] = [];
            let totalharga = 0;
            for (let item of t.items) {
                const prod = produkService.getProdukById(item.produkId);
                if (prod) {
                    itemsLengkap.push({
                        nama: prod.nama,
                        jumlah: item.jumlah,
                        harga: prod.harga_jual,
                    });
                    totalharga += prod.harga_jual * item.jumlah;
                }
            }
            this.riwayat.push({
                tanggal: t.tanggal,
                items: itemsLengkap,
                totalHarga: totalharga,
            });
        }
        this.sudahInit = true;
    }

    tambahTransaksi(items: ItemBelanja[], total: number) {
        const bulan = [
            'Januari',
            'Februari',
            'Maret',
            'April',
            'Mei',
            'Juni',
            'Juli',
            'Agustus',
            'September',
            'Oktober',
            'November',
            'Desember',
        ];
        const sekarang = new Date();
        const d = sekarang.getDate();
        const n = sekarang.getMonth(); // 0-11
        const y = sekarang.getFullYear();
        const tanggal = d + ' ' + bulan[n] + ' ' + y;

        this.riwayat.unshift({
            tanggal: tanggal,
            items: items,
            totalHarga: total,
        });

        console.log('RIWAYAT SEKARANG:', this.riwayat);

    }

    getRiwayat(): Transaksi[] {
        return this.riwayat;
    }
}
