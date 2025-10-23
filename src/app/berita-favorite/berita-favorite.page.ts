import { Component} from '@angular/core';
import { FavoriteService, FavoriteNews } from '../services/favorite.service';
import { Beritaservice } from '../services/beritaservice';

@Component({
  selector: 'app-berita-favorite',
  templateUrl: './berita-favorite.page.html',
  styleUrls: ['./berita-favorite.page.scss'],
  standalone: false,
})
export class BeritaFavoritePage {
  favorites: FavoriteNews[] = [];

  constructor(
    private favoriteService: FavoriteService,
    private beritaService: Beritaservice,
  ) {}

  ionViewWillEnter() {
    this.loadFavorites();
  }
  
  loadFavorites() {
    this.favorites = this.favoriteService.getFavorites();
  }

  isToastOpen = false;
  toastMessage = '';
  removeFavorite(berita: FavoriteNews) {
    this.favoriteService.removeFavorite(berita);
    this.toastMessage = 'Berita berhasil dihapus dari favorit';
    this.isToastOpen = true;
    this.loadFavorites();
  }

  addViews(id: number) {
    this.beritaService.addView(id);
  }

}
