import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beritaservice } from '../services/beritaservice';

interface Comment {
  idBerita: number;
  username: string;
  comment: string;
  avatar: string;
}

@Component({
  selector: 'app-detail-berita',
  templateUrl: './detail-berita.page.html',
  styleUrls: ['./detail-berita.page.scss'],
  standalone: false,
})
export class DetailBeritaPage implements OnInit {
  berita: any;
  comments: Comment[] = [
    { idBerita: 1, username: 'Username123', comment: 'Komentar dari Username123', avatar: 'assets/avatar1.png' },
    { idBerita: 2, username: 'User456', comment: 'Saya setuju dengan kebijakan ini', avatar: 'assets/avatar2.png' },
  ];
  filteredComments: Comment[] = [];
  newComment: string = '';
  rating = 0;

  constructor(
    private route: ActivatedRoute,
    private beritaService: Beritaservice
  ) {}

  ngOnInit() {
    //  Ambil parameter id dari URL
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    //  Cari berita berdasarkan id
    this.berita = this.beritaService.berita.find((b) => b.id === id);

    if (!this.berita) {
      console.warn('Berita tidak ditemukan untuk ID:', id);
      return;
    }

    //  Filter komentar sesuai id berita
    this.filteredComments = this.comments.filter((c) => c.idBerita === id);

    console.log('Berita detail:', this.berita);
  }

  addComment() {
    if (this.newComment.trim() !== '') {
      const newCmt = {
        idBerita: this.berita.id,
        username: 'Saya',
        comment: this.newComment,
        avatar: 'assets/my-avatar.png',
      };

      this.comments.push(newCmt);
      this.filteredComments.push(newCmt);
      this.newComment = '';
    }
  }

  addRating() {
    this.rating += 1;
  }
}
