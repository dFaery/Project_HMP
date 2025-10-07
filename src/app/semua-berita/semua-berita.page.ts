import { Beritaservice } from './../services/beritaservice';
import { Component } from '@angular/core';
import { FavoriteService, FavoriteNews } from '../services/favorite.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-semua-berita',
  templateUrl: './semua-berita.page.html',
  styleUrls: ['./semua-berita.page.scss'],
  standalone: false,
})
export class SemuaBeritaPage {
  constructor(
    private favoriteService: FavoriteService,
    private route: ActivatedRoute,
    public beritaservice: Beritaservice
  ) {}
  jenisTampilan: string = 'trending';

  semuaBerita = [
  ...this.berita_trending,
  ...this.berita_economics,
  ...this.berita_technology,
  ];

  hasilPencarian = [...this.semuaBerita];

 cariBeritaByJudul() {
    const lowerKeyword = this.beritaDicari.toLowerCase();
    this.jenisTampilan = "search";
    if (!lowerKeyword) {
      // kalau kosong, tampilkan semua berita
      this.hasilPencarian = [...this.semuaBerita];
    } else {
      this.hasilPencarian = this.semuaBerita.filter(berita =>
        berita.judulBerita.toLowerCase().includes(lowerKeyword)
      );
    }
  }

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  isToastOpen = false;
  toastMessage = '';

  favorites: FavoriteNews[] = [];
  addToFavorite(favorite: FavoriteNews) {
    this.toastMessage = 'Berita ditambahkan ke favorit';
    this.isToastOpen = true;
    this.favoriteService.addFavorite(favorite);
  }
}
