import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from './auth';
import { Theme } from './theme';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(public auth: Auth, private router: Router, public themeService: Theme) { }

  logout() {
    this.auth.logout();
  }
}
