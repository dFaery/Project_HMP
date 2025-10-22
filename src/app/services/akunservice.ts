import { Injectable } from '@angular/core';

export interface Akun {
  accountEmail: string;
  accountPass: string;
  biodata: {
    namaDepan: string;
    namaBelakang: string;
    gender: string;
    jabatan: string;
    alamat: string;
    telepon: string;
    tanggalLahir: string;
    lokasi: string;
    kodePos: string;
    fotoProfil: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class Akunservice {
  private accounts: Akun[] = [
    {
      accountEmail: 'thia@gmail.com',
      accountPass: 'thia',
      biodata: {
        namaDepan: 'Thia',
        namaBelakang: 'Aurelia',
        gender: 'Female',
        jabatan: 'Kasir',
        alamat: 'Jl. Melati No. 10, Bandung',
        telepon: '(022) 555-0101',
        tanggalLahir: '2001-04-25',
        lokasi: 'Bandung, Indonesia',
        kodePos: '40123',
        fotoProfil: 'assets/avatar-thia.jpeg',
      },
    },
    {
      accountEmail: 'hans@gmail.com',
      accountPass: 'hans',
      biodata: {
        namaDepan: 'Hans',
        namaBelakang: 'Kristofer',
        gender: 'Male',
        jabatan: 'Kasir',
        alamat: 'Jl. Merdeka No. 12, Jakarta',
        telepon: '(021) 555-0123',
        tanggalLahir: '1999-09-10',
        lokasi: 'Jakarta, Indonesia',
        kodePos: '10210',
        fotoProfil: 'assets/avatar-hans.jpeg',
      },
    },
    {
      accountEmail: 'kevin@gmail.com',
      accountPass: 'kevin',
      biodata: {
        namaDepan: 'Kevin',
        namaBelakang: 'Santoso',
        gender: 'Male',
        jabatan: 'Kasir',
        alamat: 'Jl. Diponegoro No. 5, Surabaya',
        telepon: '(031) 555-0108',
        tanggalLahir: '2000-02-12',
        lokasi: 'Surabaya, Indonesia',
        kodePos: '60234',
        fotoProfil: 'assets/avatar-kevin.jpeg',
      },
    },
    {
      accountEmail: 'hendra@gmail.com',
      accountPass: 'hendra',
      biodata: {
        namaDepan: 'Hendra',
        namaBelakang: 'Wijaya',
        gender: 'Male',
        jabatan: 'Kasir',
        alamat: 'Jl. Gatot Subroto No. 99, Medan',
        telepon: '(061) 555-0188',
        tanggalLahir: '1998-07-20',
        lokasi: 'Medan, Indonesia',
        kodePos: '20111',
        fotoProfil: 'assets/avatar-hendra.jpeg',
      },
    },
  ];

  private loggedInUser: Akun | null = null;

  constructor() {}

  /** Login */
  login(email: string, pass: string): Akun | null {
    const found = this.accounts.find(
      (acc) => acc.accountEmail === email && acc.accountPass === pass
    );
    if (found) {
      this.loggedInUser = found;
      localStorage.setItem('loggedUser', JSON.stringify(found));
      return found;
    }
    return null;
  }

  /** Ambil akun yang sedang login */
  getCurrentUser(): Akun | null {
    if (this.loggedInUser) return this.loggedInUser;

    const stored = localStorage.getItem('loggedUser');
    if (stored) {
      this.loggedInUser = JSON.parse(stored);
      return this.loggedInUser;
    }
    return null;
  }

  /** Logout */
  logout(): void {
    this.loggedInUser = null;
    localStorage.removeItem('loggedUser');
  }

  /** Update data user dan simpan ke localStorage */
  updateUser(updated: Akun): void {
    // Update di array accounts
    const index = this.accounts.findIndex(
      (acc) => acc.accountEmail === updated.accountEmail
    );
    if (index > -1) {
      this.accounts[index] = updated;
    }

    // Update di memori
    this.loggedInUser = updated;

    // Simpan ke localStorage
    localStorage.setItem('loggedUser', JSON.stringify(updated));
  }

  /** Cek apakah ada user yang sedang login */
  isUserLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }

}
