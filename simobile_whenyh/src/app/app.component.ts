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
  private logoutDiminta = false;
  constructor(public auth: Auth, private router: Router) { }

  requestLogout() {
    this.logoutDiminta = true;
  }

  onMenuClose() {
    if (this.logoutDiminta) {
      this.logoutDiminta = false;
      this.auth.logout();
      this.router.navigate(['/target-route']);
    }
  }
}
