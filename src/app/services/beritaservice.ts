import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Beritaservice {
  berita = [
    {
      id: 0,
      judulBerita:
        'Dedi Mulyadi Undang Kepala BGN Jabar Evaluasi Keracunan Massal MBG',
      tanggalRilis: '2025-05-29',
      gambarUrl:
        'https://akcdn.detik.net.id/visual/2025/05/29/gubernur-jabar-dedi-mulyadi-1748486247098_169.png?w=650&q=90',
      penerbit: 'CNN Indonesia',
      rating: 0,
      jumlahReview: 0,
      kategori: ['trending', 'economics'],
    },
    {
      id: 1,
      judulBerita: 'Indonesia Raih Juara Umum di ASEAN Games 2025',
      tanggalRilis: '2025-06-15',
      gambarUrl:
        'https://cdn0-production-images-kly.akamaized.net/G8sGLUKgPIgFA3GHTH1tB_9qq0g=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4452163/original/043911800_1685812091-2023.06.03_RB_Defile_Tim_Indonesia_di_Opening_Ceremony_ASEAN_Para_Games_XII_Cambodia_2023__Morodok_Techo__Kamboja__Sabtu_3_Juni_2023___3_.jpg',
      penerbit: 'Kompas',
      rating: 0,
      jumlahReview: 0,
      kategori: ['trending'],
    },
    {
      id: 2,
      judulBerita:
        'Pemilu Serentak 2025 Catat Partisipasi Tertinggi dalam 20 Tahun',
      tanggalRilis: '2025-07-01',
      gambarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWw-aOL1tUGonl0_G_aewnKwBhiBeZQgH0lw&s',
      penerbit: 'Detik News',
      rating: 0,
      jumlahReview: 0,
      kategori: ['trending', 'law'],
    },
    {
      id: 3,
      judulBerita: 'Rupiah Menguat ke Rp14.800 per Dolar AS',
      tanggalRilis: '2025-06-10',
      gambarUrl:
        'https://akcdn.detik.net.id/community/media/visual/2025/04/08/dolar-as-kian-perkasa-1744106243512_169.jpeg?w=700&q=90',
      penerbit: 'Kontan',
      rating: 0,
      jumlahReview: 0,
      kategori: ['economics'],
    },
    {
      id: 4,
      judulBerita: 'Pemerintah Umumkan Subsidi Baru untuk UMKM',
      tanggalRilis: '2025-07-03',
      gambarUrl:
        'https://cdn1-production-images-kly.akamaized.net/75YW8EheL5qe1lqe-iR-T7SQPEc=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/5349723/original/098030100_1757928294-1000075932.jpg',
      penerbit: 'Bisnis Indonesia',
      rating: 0,
      jumlahReview: 0,
      kategori: ['economics'],
    },
    {
      id: 5,
      judulBerita: 'IHSG Ditutup Menguat 1,2% di Tengah Optimisme Pasar',
      tanggalRilis: '2025-08-12',
      gambarUrl:
        'https://img.antaranews.com/cache/1200x800/2025/04/23/IHSG-Ditutup-Menguat-230425-Adm-5.jpg.webp',
      penerbit: 'CNBC Indonesia',
      rating: 0,
      jumlahReview: 0,
      kategori: ['economics'],
    },
    {
      id: 6,
      judulBerita: 'Startup Indonesia Luncurkan AI Chatbot Mirip Manusia',
      tanggalRilis: '2025-06-25',
      gambarUrl:
        'https://img.antaranews.com/cache/1200x800/2017/09/20170915rina.jpg.webp',
      penerbit: 'Tech In Asia',
      rating: 0,
      jumlahReview: 0,
      kategori: ['technology', 'trending'],
    },
    {
      id: 7,
      judulBerita: 'Google Buka Data Center Baru di Jakarta',
      tanggalRilis: '2025-07-15',
      gambarUrl:
        'https://img.antaranews.com/cache/1200x800/2025/05/15/1000277968.jpg.webp',
      penerbit: 'Kompas Tekno',
      rating: 0,
      jumlahReview: 0,
      kategori: ['technology'],
    },
    {
      id: 8,
      judulBerita: 'Peluncuran Jaringan 6G Pertama di Asia Tenggara',
      tanggalRilis: '2025-08-05',
      gambarUrl:
        'https://img.inews.co.id/media/1050/files/inews_new/2024/02/19/Satelit_Uji_6G.jpg',
      penerbit: 'The Verge',
      rating: 0,
      jumlahReview: 0,
      kategori: ['technology'],
    },
  ];

  constructor() {
    this.meanRatings = this.hitungRataRataRatings();
  }

  meanRatings: number = 0;

  // Fungsi untuk menghitung rata-rata rating
  hitungRataRataRatings(): number {
    if (this.berita.length === 0) return 0;

    const totalRating = this.berita.reduce((sum, item) => sum + item.rating, 0);
    const rataRata = totalRating / this.berita.length;

    return Math.round(rataRata * 10) / 10;
  }

  updateRating(id: number, ratingBaru: number): void {
    const berita = this.berita.find((b) => b.id === id);
    if (!berita) return;

    const totalSebelumnya = berita.rating * berita.jumlahReview;
    berita.jumlahReview += 1;
    berita.rating = (totalSebelumnya + ratingBaru) / berita.jumlahReview;
    berita.rating = Math.round(berita.rating * 10) / 10;
    
    this.meanRatings = this.hitungRataRataRatings();
  }
}
