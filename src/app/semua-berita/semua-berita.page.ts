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
  constructor(private favoriteService: FavoriteService, private route: ActivatedRoute) {}
  jenisTampilan: string = 'trending';
  beritaDicari : string = "";

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
        'https://akcdn.detik.net.id/community/media/visual/2025/04/08/dolar-as-kian-perkasa-1744106243512_169.jpeg?w=700&q=90',
      penerbit: 'Kontan',
      rating: 5,
      jumlahReview: 56,
    },
    {
      judulBerita: 'Pemerintah Umumkan Subsidi Baru untuk UMKM',
      tanggalRilis: '2025-07-03',
      gambarUrl:
        'https://cdn1-production-images-kly.akamaized.net/75YW8EheL5qe1lqe-iR-T7SQPEc=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/5349723/original/098030100_1757928294-1000075932.jpg',
      penerbit: 'Bisnis Indonesia',
      rating: 4,
      jumlahReview: 41,
    },
    {
      judulBerita: 'IHSG Ditutup Menguat 1,2% di Tengah Optimisme Pasar',
      tanggalRilis: '2025-08-12',
      gambarUrl:
        'https://img.antaranews.com/cache/1200x800/2025/04/23/IHSG-Ditutup-Menguat-230425-Adm-5.jpg.webp',
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
        'https://img.antaranews.com/cache/1200x800/2017/09/20170915rina.jpg.webp',
      penerbit: 'Tech In Asia',
      rating: 5,
      jumlahReview: 67,
    },
    {
      judulBerita: 'Google Buka Data Center Baru di Jakarta',
      tanggalRilis: '2025-07-15',
      gambarUrl:
        'https://img.antaranews.com/cache/1200x800/2025/05/15/1000277968.jpg.webp',
      penerbit: 'Kompas Tekno',
      rating: 5,
      jumlahReview: 92,
    },
    {
      judulBerita: 'Peluncuran Jaringan 6G Pertama di Asia Tenggara',
      tanggalRilis: '2025-08-05',
      gambarUrl:
        'https://img.inews.co.id/media/1050/files/inews_new/2024/02/19/Satelit_Uji_6G.jpg',
      penerbit: 'The Verge',
      rating: 4,
      jumlahReview: 50,
    },
  ];

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
