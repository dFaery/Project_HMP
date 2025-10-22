import { Component, OnInit } from '@angular/core';
import { FavoriteService, FavoriteNews } from '../services/favorite.service';
import { Beritaservice } from '../services/beritaservice';

@Component({
  selector: 'app-rekomendasi-berita',
  templateUrl: './rekomendasi-berita.page.html',
  styleUrls: ['./rekomendasi-berita.page.scss'],
  standalone: false,
})
export class RekomendasiBeritaPage implements OnInit {
  favorites: FavoriteNews[] = [];

  berita: any[] = [];

  constructor(private favoriteService: FavoriteService, private beritaService: Beritaservice) {}

  ngOnInit(): void {
    this.berita = this.beritaService.berita;
  }

  isToastOpen = false;
  toastMessage = '';
  
  addToFavorite(favorite: FavoriteNews) {
    this.toastMessage = 'Berita ditambahkan ke favorit';
    this.isToastOpen = true;
    this.favoriteService.addFavorite(favorite);
  }
}
