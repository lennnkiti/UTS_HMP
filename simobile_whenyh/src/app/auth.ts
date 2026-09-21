import { Service } from '@angular/core';

@Service()
export class Auth {
  public isLoggedIn: boolean = false; 
  public activeUser: string = '';
  constructor() { }

  login(user: string, pass: string): boolean {
    if (user === 'admin' && pass === '1234') {
      this.isLoggedIn = true;
      this.activeUser = 'bu marni';
      return true;
    }
    else if (user === 'valent' && pass === '123') {
      this.isLoggedIn = true;
      this.activeUser = 'valent';
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedIn = false;
    this.activeUser = '';
  }
}
