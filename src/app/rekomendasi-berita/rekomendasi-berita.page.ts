import { Component } from '@angular/core';
import { FavoriteService, FavoriteNews } from '../services/favorite.service';

@Component({
  selector: 'app-rekomendasi-berita',
  templateUrl: './rekomendasi-berita.page.html',
  styleUrls: ['./rekomendasi-berita.page.scss'],
  standalone: false,
})
export class RekomendasiBeritaPage {
  favorites: FavoriteNews[] = [];

  berita: FavoriteNews[] = [{
    judulBerita: "Indonesia's Central bank surprises with 25bps rate cut",
    tanggalRilis: '2025-08-06',
    gambarUrl:
      'https://asset.kompas.com/crops/YQrcfXdm304xoWSOn2yxjOxxFyQ=/0x168:5500x3834/750x500/data/photo/2022/01/11/61dd7a1b1e57e.jpg',
    penerbit: 'CNN Indonesia',
    rating: 4.9,
    jumlahReview: 264,
  },
  {
    judulBerita: 'Indonesia Raih Juara Umum di ASEAN Games 2025',
    tanggalRilis: '2025-06-15',
    gambarUrl:
      'https://cdn0-production-images-kly.akamaized.net/G8sGLUKgPIgFA3GHTH1tB_9qq0g=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4452163/original/043911800_1685812091-2023.06.03_RB_Defile_Tim_Indonesia_di_Opening_Ceremony_ASEAN_Para_Games_XII_Cambodia_2023__Morodok_Techo__Kamboja__Sabtu_3_Juni_2023___3_.jpg',
    penerbit: 'Kompas',
    rating: 4,
    jumlahReview: 120,
  },
  {
    judulBerita:
      'Dedi Mulyadi Undang Kepala BGN Jabar Evaluasi Keracunan Massal MBG',
    tanggalRilis: '2025-05-29',
    gambarUrl:
      'https://akcdn.detik.net.id/visual/2025/05/29/gubernur-jabar-dedi-mulyadi-1748486247098_169.png?w=650&q=90',
    penerbit: 'CNN Indonesia',
    rating: 5,
    jumlahReview: 29,
  }
];

  constructor(private favoriteService: FavoriteService) {}

  isToastOpen = false;
  toastMessage = '';
  
  addToFavorite(favorite: FavoriteNews) {
    this.toastMessage = 'Berita ditambahkan ke favorit';
    this.isToastOpen = true;
    this.favoriteService.addFavorite(favorite);
  }
}
