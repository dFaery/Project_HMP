import { Injectable } from '@angular/core';

export interface FavoriteNews {
  id: number;
  judulBerita: string;
  tanggalRilis: string;
  gambarUrl: string;
  penerbit: string;
  rating: number;
  jumlahReview: number;
  views: number;
}

@Injectable({
  providedIn: 'root'
})

export class FavoriteService {
  private favorites: FavoriteNews[] = [];

  getFavorites():FavoriteNews[] {
    return this.favorites;
  }

  addFavorite(berita: FavoriteNews) {
    const exists = this.favorites.some(fav => fav.judulBerita === berita.judulBerita);
    if (!exists) {
      this.favorites.push(berita);
      console.log('Berhasil ditambahkan:', berita.judulBerita);
    } else {
      console.log('Sudah ada di favorit:', berita.judulBerita);
    }
  }

  removeFavorite(berita: FavoriteNews) {
    this.favorites = this.favorites.filter(
      fav => fav.judulBerita !== berita.judulBerita
    );
  }

  showIconFavorites(id: number) {
    for (let i = 0; i < this.favorites.length; i++) {
      if (this.favorites[i].id === id) {
        return true;
      }
    }
    return false;
  }
}
