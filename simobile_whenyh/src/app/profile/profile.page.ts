import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth';
import { AnimationController } from '@ionic/angular/lazy';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {

  constructor(public auth: Auth, private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.fadeInAvatar();
  }

  fadeInAvatar() {
    const avatarElement = document.querySelector('#myAvatar') as HTMLElement;
    if (!avatarElement) return;

    const animation = this.animationCtrl.create().addElement(avatarElement).duration(800).iterations(1).keyframes([
      { offset: 0, opacity: '0', transform: 'scale(0.8)' },
      { offset: 1, opacity: '1', transform: 'scale(1)' }
    ]);

    animation.play();
  }

}
