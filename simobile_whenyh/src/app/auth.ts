import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  public isLoggedIn: boolean = false;
  public activeUser: any = null;

  constructor(private http: HttpClient) {
    // Cek Local Storage saat aplikasi dibuka/direfresh
    const savedUser = localStorage.getItem('simobile_user');
    if (savedUser) {
      this.activeUser = JSON.parse(savedUser);
      this.isLoggedIn = true;
    }
  }

  login(user: string, pass: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', user);
    body.set('password', pass);
    const urlEncodedData = body.toString();
    return this.http.post(
      "https://ubaya.fun/hybrid/160424011/simobile_whenyh/login.php",
      urlEncodedData,
      { headers }
    );
  }

  setSession(userData: any) {
    this.isLoggedIn = true;
    this.activeUser = userData;
    localStorage.setItem('simobile_user', JSON.stringify(userData));
  }


  logout() {
    this.isLoggedIn = false;
    this.activeUser = null;
    localStorage.removeItem('simobile_user');
  }
}
