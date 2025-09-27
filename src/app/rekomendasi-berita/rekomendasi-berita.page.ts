import { Component } from '@angular/core';

interface FavoriteNews {
  title: string;
  date: string;
  source: string;
  image: string;
  rating: number;
  reviews: number;
}
@Component({
  selector: 'app-rekomendasi-berita',
  templateUrl: './rekomendasi-berita.page.html',
  styleUrls: ['./rekomendasi-berita.page.scss'],
  standalone: false,
})
export class RekomendasiBeritaPage {
  favorites: FavoriteNews[] = [];

  newsItem: FavoriteNews = {
    title: "Indonesia's Central bank surprises with 25bps rate cut",
    date: 'August 20, 2024 | 14.19',
    source: 'CNN Indonesia',
    image:
      'https://asset.kompas.com/crops/YQrcfXdm304xoWSOn2yxjOxxFyQ=/0x168:5500x3834/750x500/data/photo/2022/01/11/61dd7a1b1e57e.jpg',
    rating: 4.9,
    reviews: 264,
  };

  constructor() {}

  addToFavorite(favorite: FavoriteNews) {
    console.log('Added to favorites:', favorite);
    this.favorites.push(favorite);
    console.log('Current favorites list:', this.favorites);
  }
}
