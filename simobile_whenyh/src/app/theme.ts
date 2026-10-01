import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Theme {
    public isDarkMode: boolean = false;

    toggleTheme() {
        if (this.isDarkMode) {
            document.body.classList.add('tema-gelap');
        } else {
            document.body.classList.remove('tema-gelap');
        }

        console.log('Dark mode is now:', this.isDarkMode);
        console.log('Body class list:', document.body.classList);
    }
}
