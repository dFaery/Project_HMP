import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

interface Account {
  accountEmail: string;
  accountPass: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  email: string = '';
  pass: string = '';

  acc: Account = {
    accountEmail: '',
    accountPass: '',
  };

  // Dummy akun (simulasi database)
  accounts: Account[] = [
    { accountEmail: 'thia@gmail.com', accountPass: 'thia' },
    { accountEmail: 'hans@gmail.com', accountPass: 'hans' },
    { accountEmail: 'kevin@gmail.com', accountPass: 'kevin' },
    { accountEmail: 'hendra@gmail.com', accountPass: 'hendra' },
  ];

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

  async checkAcc() {
    const found = this.accounts.find(
      (acc) => acc.accountEmail === this.email && acc.accountPass === this.pass
    );

    if (found) {
      //kalau sukses login
      this.navCtrl.navigateRoot('/home');
    } else {
      //kalau gagal login
      const alert = await this.alertCtrl.create({
        header: 'Login Failed',
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
