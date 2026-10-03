import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  public isLoggedIn: boolean = false;
  public activeUser: any = null;

  public users = [
    {
      username: 'admin',
      password: '1234',
      nama: 'Bu Marni',
      role: 'Pemilik Toko',
      foto: 'https://my.ubaya.ac.id/img/mhs/160424104_l.jpg',
      noTelp: '081234567890',
      alamat: 'Jl. Rungkut Makmur No. 10, Surabaya',
      email: 'bumarni123@gmail.com',
      ttl: 'Surabaya, 12 Juni 1990'
    },
    {
      username: 'valent',
      password: '123',
      nama: 'Valent',
      role: 'Kasir',
      foto: 'https://my.ubaya.ac.id/img/mhs/160424077_l.jpg',
      noTelp: '089876543210',
      alamat: 'Jl. Tenggilis Mejoyo No. 5, Surabaya',
      email: 'valent123@gmail.com',
      ttl: 'Surabaya, 12 April 2006'
    }
  ];

  constructor() { }

  login(user: string, pass: string): boolean {
    for (let i = 0; i < this.users.length; i++) {
      let u = this.users[i];
      if (u.username === user && u.password === pass) {
        this.isLoggedIn = true;
        this.activeUser = u;
        return true;
      }
    }
    return false;
  }

  logout() {
    this.isLoggedIn = false;
    this.activeUser = null;
  }
}
