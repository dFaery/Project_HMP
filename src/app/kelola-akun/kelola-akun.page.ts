import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Akunservice, Akun } from '../services/akunservice';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-kelola-akun',
  templateUrl: './kelola-akun.page.html',
  styleUrls: ['./kelola-akun.page.scss'],
  standalone: false,
})
export class KelolaAkunPage {
  userData: Akun | null = null;

  constructor(
    private router: Router,
    private akunService: Akunservice,
    private alertCtrl: AlertController
  ) {}

  ionViewWillEnter() {
    this.userData = this.akunService.getCurrentUser();
    if (!this.userData) {
      // kalau tidak ada user login, kembali ke halaman login
      this.router.navigateByUrl('/login');
    }
  }

  async logout() {
    const alert = await this.alertCtrl.create({
      header: 'Konfirmasi Logout',
      message: 'Apakah kamu yakin ingin keluar?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
        },
        {
          text: 'Logout',
          handler: () => {
            this.akunService.logout();
            this.router.navigateByUrl('/login');
          },
        },
      ],
    });
    await alert.present();
  }
}
