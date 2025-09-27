import { Component } from '@angular/core';
import { FavoriteService, FavoriteNews } from '../services/favorite.service';


@Component({
  selector: 'app-semua-berita',
  templateUrl: './semua-berita.page.html',
  styleUrls: ['./semua-berita.page.scss'],
  standalone: false,
})
export class SemuaBeritaPage {
  constructor(private favoriteService: FavoriteService) {}

  berita_trending = [
    {
      judulBerita:
        'Dedi Mulyadi Undang Kepala BGN Jabar Evaluasi Keracunan Massal MBG',
      tanggalRilis: '2025-05-29',
      gambarUrl:
        'https://akcdn.detik.net.id/visual/2025/05/29/gubernur-jabar-dedi-mulyadi-1748486247098_169.png?w=650&q=90',
      penerbit: 'CNN Indonesia',
      rating: 5,
      jumlahReview: 29,
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
        'Pemilu Serentak 2025 Catat Partisipasi Tertinggi dalam 20 Tahun',
      tanggalRilis: '2025-07-01',
      gambarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWw-aOL1tUGonl0_G_aewnKwBhiBeZQgH0lw&s',
      penerbit: 'Detik News',
      rating: 4,
      jumlahReview: 78,
    },
  ];

  berita_economics = [
    {
      judulBerita: 'Rupiah Menguat ke Rp14.800 per Dolar AS',
      tanggalRilis: '2025-06-10',
      gambarUrl:
        'https://akcdn.detik.net.id/community/media/visual/2025/06/10/rupiah.jpg?w=650&q=90',
      penerbit: 'Kontan',
      rating: 5,
      jumlahReview: 56,
    },
    {
      judulBerita: 'Pemerintah Umumkan Subsidi Baru untuk UMKM',
      tanggalRilis: '2025-07-03',
      gambarUrl:
        'https://akcdn.detik.net.id/community/media/visual/2025/07/03/umkm.jpg?w=650&q=90',
      penerbit: 'Bisnis Indonesia',
      rating: 4,
      jumlahReview: 41,
    },
    {
      judulBerita: 'IHSG Ditutup Menguat 1,2% di Tengah Optimisme Pasar',
      tanggalRilis: '2025-08-12',
      gambarUrl:
        'https://akcdn.detik.net.id/community/media/visual/2025/08/12/ihsg.jpg?w=650&q=90',
      penerbit: 'CNBC Indonesia',
      rating: 4,
      jumlahReview: 34,
    },
  ];

  berita_technology = [
    {
      judulBerita: 'Startup Indonesia Luncurkan AI Chatbot Mirip Manusia',
      tanggalRilis: '2025-06-25',
      gambarUrl:
        'https://akcdn.detik.net.id/community/media/visual/2025/06/25/ai-chatbot.jpg?w=650&q=90',
      penerbit: 'Tech In Asia',
      rating: 5,
      jumlahReview: 67,
    },
    {
      judulBerita: 'Google Buka Data Center Baru di Jakarta',
      tanggalRilis: '2025-07-15',
      gambarUrl:
        'https://akcdn.detik.net.id/community/media/visual/2025/07/15/google-dc.jpg?w=650&q=90',
      penerbit: 'Kompas Tekno',
      rating: 5,
      jumlahReview: 92,
    },
    {
      judulBerita: 'Peluncuran Jaringan 6G Pertama di Asia Tenggara',
      tanggalRilis: '2025-08-05',
      gambarUrl:
        'https://akcdn.detik.net.id/community/media/visual/2025/08/05/6g.jpg?w=650&q=90',
      penerbit: 'The Verge',
      rating: 4,
      jumlahReview: 50,
    },
  ];

  isToastOpen = false;
  toastMessage = '';
  
  favorites: FavoriteNews[] = [];
  addToFavorite(favorite: FavoriteNews) {
    this.toastMessage = 'Berita ditambahkan ke favorit';
    this.isToastOpen = true;
    this.favoriteService.addFavorite(favorite);
  }
}
