import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Akunservice } from '../services/akunservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  email: string = '';
  pass: string = '';

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private akunService: Akunservice
  ) {}

  async checkAcc() {
    const user = this.akunService.login(this.email, this.pass);

    if (user) {
      // Jika login berhasil
      this.navCtrl.navigateRoot('/home');
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Login Gagal',
        message: 'Email atau password salah!',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  ionViewWillEnter() {
    document.body.classList.add('page-login');
  }

  ionViewWillLeave() {
    document.body.classList.remove('page-login');
  }
}
