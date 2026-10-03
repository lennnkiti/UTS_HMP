import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {

  constructor(public auth: Auth) { }

  ngOnInit() {
  }

}
