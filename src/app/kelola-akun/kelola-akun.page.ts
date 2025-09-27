import { Component } from '@angular/core';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRange,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  personCircle,
  personCircleOutline,
  sunny,
  sunnyOutline,
} from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kelola-akun',
  templateUrl: './kelola-akun.page.html',
  styleUrls: ['./kelola-akun.page.scss'],
  standalone: false,
})
export class KelolaAkunPage {
  userData: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state) {
      this.userData = nav.extras.state;
    }
  }
  
}
