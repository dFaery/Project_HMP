import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Akunservice, Akun } from '../services/akunservice';
import { AlertController } from '@ionic/angular';
import { KelolaAkunPageRoutingModule } from './kelola-akun-routing.module';

@Component({
  selector: 'app-kelola-akun',
  templateUrl: './kelola-akun.page.html',
  styleUrls: ['./kelola-akun.page.scss'],
  standalone:false,
})
export class KelolaAkunPage {
  akun!: Akun; // seluruh data akun
  userData!: Akun['biodata']; // bagian biodata saja

  constructor(
    private router: Router,
    private akunService: Akunservice,
    private alertCtrl: AlertController
  ) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.userData.fotoProfil = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  ionViewWillEnter() {
    const user = this.akunService.getCurrentUser();
    if (user) {
      this.akun = user;
      this.userData = { ...user.biodata };
    } else {
      this.router.navigateByUrl('/login');
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
            this.router.navigateByUrl('/login');
          },
        },
      ],
    });
    await alert.present();
  }

  discardChanges() {
    this.ionViewWillEnter(); // kembalikan ke data awal
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
