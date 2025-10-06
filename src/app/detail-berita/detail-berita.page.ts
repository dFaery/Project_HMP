import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Comment {
  idBerita: string;
  username: string;
  comment: string;
  avatar: string; // optional
}

@Component({
  selector: 'app-detail-berita',
  templateUrl: './detail-berita.page.html',
  styleUrls: ['./detail-berita.page.scss'],
  standalone: false,
})
export class DetailBeritaPage {
  berita: any;
  index = 0;

  constructor(private route: ActivatedRoute) {}
  berita_trending = [
    {
      idBerita: 'bt_1',
      judulBerita:
        'Dedi Mulyadi Undang Kepala BGN Jabar Evaluasi Keracunan Massal MBG',
      tanggalRilis: '2025-05-29',
      gambarUrl:
        'https://akcdn.detik.net.id/visual/2025/05/29/gubernur-jabar-dedi-mulyadi-1748486247098_169.png?w=650&q=90',
      penerbit: 'CNN Indonesia',
      rating: 5,
      jumlahReview: 29,
      isiBerita: [
        'Gubernur Jawa Barat Dedi Mulyadi mengundang Kepala Badan Geologi Nasional (BGN) Jawa Barat untuk mengevaluasi kasus keracunan massal yang diduga akibat mengonsumsi mi berformalin di Kabupaten Bandung Barat. Dedi menekankan pentingnya evaluasi menyeluruh terhadap kejadian ini untuk mencegah insiden serupa di masa depan.',
        'Dalam pertemuan tersebut, Dedi Mulyadi menyatakan keprihatinannya atas insiden keracunan massal yang telah menimbulkan keresahan di masyarakat. Ia meminta BGN Jawa Barat untuk melakukan investigasi mendalam terkait sumber dan penyebab kontaminasi formalin dalam mi yang dikonsumsi oleh warga.',
      ],
    },
    {
      idBerita: 'bt_2',
      judulBerita: 'Indonesia Raih Juara Umum di ASEAN Games 2025',
      tanggalRilis: '2025-06-15',
      gambarUrl:
        'https://cdn0-production-images-kly.akamaized.net/G8sGLUKgPIgFA3GHTH1tB_9qq0g=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4452163/original/043911800_1685812091-2023.06.03_RB_Defile_Tim_Indonesia_di_Opening_Ceremony_ASEAN_Para_Games_XII_Cambodia_2023__Morodok_Techo__Kamboja__Sabtu_3_Juni_2023___3_.jpg',
      penerbit: 'Kompas',
      rating: 4,
      jumlahReview: 120,
      isiBerita: [
        'Tim Indonesia berhasil meraih gelar juara umum di ASEAN Games 2025 yang berlangsung di Phnom Penh, Kamboja. Dengan total perolehan medali emas sebanyak 150, Indonesia mengungguli negara-negara peserta lainnya dan menunjukkan dominasinya dalam berbagai cabang olahraga.',
        'Keberhasilan ini tidak lepas dari persiapan matang yang dilakukan oleh para atlet dan pelatih selama beberapa tahun terakhir. Selain itu, dukungan penuh dari pemerintah dan masyarakat juga menjadi faktor penting dalam pencapaian prestasi gemilang ini.',
      ],
    },
    {
      idBerita: 'bt_3',
      judulBerita:
        'Pemilu Serentak 2025 Catat Partisipasi Tertinggi dalam 20 Tahun',
      tanggalRilis: '2025-07-01',
      gambarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWw-aOL1tUGonl0_G_aewnKwBhiBeZQgH0lw&s',
      penerbit: 'Detik News',
      rating: 4,
      jumlahReview: 78,
      isiBerita: [
        'Pemilu serentak yang digelar pada tahun 2025 mencatat partisipasi pemilih tertinggi dalam dua dekade terakhir. Dengan tingkat partisipasi mencapai 85%, pemilu ini menunjukkan antusiasme masyarakat yang tinggi dalam menentukan masa depan bangsa.',
        'Berbagai upaya telah dilakukan oleh Komisi Pemilihan Umum (KPU) untuk meningkatkan partisipasi pemilih, termasuk kampanye edukasi dan penyediaan fasilitas pemungutan suara yang lebih mudah diakses. Hasil pemilu ini diharapkan dapat mencerminkan aspirasi rakyat secara lebih akurat dan memperkuat legitimasi pemerintahan yang terpilih.',
      ],
    },
  ];

  comments: Comment[] = [
    {
      idBerita: 'bt_1',
      username: 'Username123',
      comment: 'Komentar dari Username123',
      avatar: 'assets/avatar1.png',
    },
    {
      idBerita: 'bt_2',
      username: 'User456',
      comment: 'Saya setuju dengan kebijakan ini',
      avatar: 'assets/avatar2.png',
    },
  ];

  filteredComments: Comment[] = [];

  newComment: string = '';

  addComment() {
    if (this.newComment.trim() !== '') {
      const newCmt = {
      idBerita: this.berita.idBerita,
      username: 'Saya',
      comment: this.newComment,
      avatar: 'assets/my-avatar.png',
    };

    this.comments.push(newCmt);
    this.filteredComments.push(newCmt); // <--- tambahkan ini supaya langsung muncul
    this.newComment = '';
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.index = Number(this.route.snapshot.paramMap.get('index'));
      this.berita = this.berita_trending[this.index];

      this.filteredComments = this.comments.filter(
        (c) => c.idBerita === this.berita.idBerita
      );

      console.log('Berita index:', this.index);
      console.log('Berita detail:', this.berita);
    });
  }
}