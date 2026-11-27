import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  username = '';
  password = '';
  isError = false;

  constructor(private auth: Auth, private router: Router) { }

  ngOnInit() {
    if (this.auth.isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }

  login() {
    this.auth.login(this.username, this.password).subscribe({
      next: (response: any) => {
        if (response.result === 'success') {
          this.isError = false;
          this.auth.setSession(response.data);
          this.router.navigate(['/dashboard']);
        } else {
          this.isError = true;
        }
      },
      error: (err) => {
        console.error('Login error:', err);
        this.isError = true;
      }
    });
  }
}
