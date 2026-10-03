import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {
  namaPemilik: string = 'Christopher Albert';
  tanggalUsahaDibangun: string = '03 Oktober 2024';
  alamatUsaha: string = 'Jl. Pantai Mentari No. 28';
  ttl: string = 'Surabaya, 12 Oktober 1990';
  noTelp: string = '089543198321';
  email: string = 's160424028@student.ubaya.ac.id';

  constructor() { }

  ngOnInit() {
  }

}
