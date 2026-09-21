import { Service } from '@angular/core';

@Service()
export class Produk {

    public dataProduk = [
    { id: 'p01', nama: 'Beras Ramos 5kg', kategori: 'Sembako', stok: 15, harga_beli: 60000, harga_jual: 65000, terjual: 12, gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfqMQoBNA13CSOsKqaSA5QxEzh60mF7N6mM_C_zvG6sor6LXaAkD8n2ApD&s=10' },
    { id: 'p02', nama: 'Gula Gulaku 1kg', kategori: 'Sembako', stok: 20, harga_beli: 12000, harga_jual: 14000, terjual: 8, gambar: 'https://diabetasol.com/uploads/ngc_global_posts/67d8d8a434192_20250318092124-1-800.jpg' },
    { id: 'p03', nama: 'Minyak Goreng Bimoli 2L', kategori: 'Sembako', stok: 0, harga_beli: 30000, harga_jual: 34000, terjual: 25, gambar: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/10/6/ac342dfb-f635-4c3a-abc5-2e4693746842.jpg.webp' }, 
    { id: 'p04', nama: 'Indomie Goreng', kategori: 'Makanan', stok: 100, harga_beli: 2500, harga_jual: 3000, terjual: 150, gambar: 'https://cdn.bormadago.com/media/images/products/2021/04/2501a.jpg' }, 
    { id: 'p05', nama: 'Teh Pucuk Harum', kategori: 'Minuman', stok: 50, harga_beli: 3000, harga_jual: 4000, terjual: 45, gambar: '' },
    { id: 'p06', nama: 'Kopi Kapal Api', kategori: 'Minuman', stok: 30, harga_beli: 1000, harga_jual: 1500, terjual: 60, gambar: 'https://jagadtani.com/uploads/news/2025/12/kopi-kapal-api-dari-91958a31ba9d48b.png' },
    { id: 'p07', nama: 'Tepung Segitiga Biru', kategori: 'Sembako', stok: 10, harga_beli: 10000, harga_jual: 12000, terjual: 5, gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdLMer5T_miXkjo8uP0XGecWicztXuNgvsHrsv-0h4zhOuZybu7ESofWnL&s=10' },
    { id: 'p08', nama: 'Sabun Lifebuoy', kategori: 'Kebutuhan Mandi', stok: 25, harga_beli: 3000, harga_jual: 4000, terjual: 18, gambar: '' }, 
    { id: 'p09', nama: 'Shampoo Clear', kategori: 'Kebutuhan Mandi', stok: 0, harga_beli: 18000, harga_jual: 22000, terjual: 10, gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0nCkZVKuoW6VyEtuhQMsTOWyD6At4FlJmbvRRhKjM0qk0cs9Fe63NN3kG&s=10' }, 
    { id: 'p10', nama: 'Kecap Bango', kategori: 'Bumbu', stok: 40, harga_beli: 8000, harga_jual: 10000, terjual: 30, gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDPjtVanZGUyZne1UnXP_h1zWnb4amHqnGRqPFI4Mpen7DA0FP5DnZG3YC&s=10' }
  ];

   getTotalMacamProduk(): number {
    return this.dataProduk.length;
  }

  getProdukTerlaris() {
    let terlaris = this.dataProduk[0];
    for (let p of this.dataProduk) {
      if (p.terjual > terlaris.terjual) {
        terlaris = p;
      }
    }
    return terlaris.nama;
  }

  getProdukById(id: string) {
    return this.dataProduk.find(p => p.id === id);
  }
}
