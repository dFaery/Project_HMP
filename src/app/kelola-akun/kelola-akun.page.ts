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
  akun!: Akun;
  userData!: Akun['biodata'];

  constructor(
    private router: Router,
    private akunService: Akunservice,
    private alertCtrl: AlertController
  ) {}

  ionViewWillEnter() {
    this.loadUserData();
  }

  ionViewDidEnter() {
    if (!this.userData) {
      this.loadUserData();
    }
  }

  private loadUserData() {
    const user = this.akunService.getCurrentUser();
    if (user) {
      this.akun = { ...user };
      this.userData = { ...user.biodata };
    } else {
      this.router.navigateByUrl('/login', { replaceUrl: true });
    }
  }

  async logout() {
    const alert = await this.alertCtrl.create({
      header: 'Konfirmasi Logout',
      message: 'Apakah kamu yakin ingin keluar?',
      buttons: [
        { text: 'Batal', role: 'cancel' },
        {
          text: 'Logout',
          handler: () => {
            this.akunService.logout();
            this.router.navigateByUrl('/login', { replaceUrl: true });
          },
        },
      ],
    });
    await alert.present();
  }

  discardChanges() {
    this.loadUserData();
  }

  async saveChanges() {
    this.akun.biodata = { ...this.userData };
    this.akunService.updateUser(this.akun);

    const alert = await this.alertCtrl.create({
      header: 'Berhasil',
      message: 'Perubahan berhasil disimpan!',
      buttons: ['OK'],
    });
    await alert.present();
  }
}