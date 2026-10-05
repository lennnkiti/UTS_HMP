import { Injectable } from '@angular/core';



export interface ItemKeranjang {
    id: string;
    nama: string;
    harga_jual: number;
    jumlah: number;
    gambar: string;
}
@Injectable({ providedIn: 'root' })

export class Keranjang {
    private items: ItemKeranjang[] = [];

    addProduct(produk: any) {
        const exsisting = this.items.find(i => i.id == produk.id);
        if (exsisting) {
            exsisting.jumlah++;        
        } else {
            this.items.push({ 
                id: produk.id,
                nama: produk.nama,
                harga_jual: produk.harga_jual,
                gambar: produk.gambar,
                jumlah: 1 
            });
        }
    }

    getItems(): ItemKeranjang[] {
        return this.items;
    }

    getTotal(): number {
        let total = 0;
        for (let item of this.items) {
            total += item.harga_jual * item.jumlah;
        }
        return total;
    }

    hapusItem(id: string) {
        let itemsBaru: ItemKeranjang [] = [];
        for (let item of this.items) {
            if (item.id != id) {
                itemsBaru.push(item);
            }
        }

        this.items.length = 0;
        for (let item of itemsBaru) {
            this.items.push(item);
        }
    }

    hapusSemua() {
        this.items.length = 0;
    }

    getJumlahItem(): number {
        let jumlah = 0;
        for (let item of this.items) {
            jumlah  += item.jumlah;
        }
        return jumlah;
    }

    getItemKeranjang(id:string) : ItemKeranjang | undefined {
        return this.items.find(i => i.id == id);
    }

    kurangiProduct(id: string) {
        const item = this.items.find(i => i.id == id);
        if (item) {
            item.jumlah--;
            if (item.jumlah <= 0) {
                this.hapusItem(id);
            }
        }
    }
}