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
  comments: Comment[] = [
    { 
      idBerita: 1, 
      username: 'Username123', 
      comment: 'Komentar dari Username123', 
      avatar: 'assets/avatar1.png' 
    },
    { 
      idBerita: 2, 
      username: 'User456', 
      comment: 'Saya setuju dengan kebijakan ini', 
      avatar: 'assets/avatar2.png' 
    },
  ];

  berita: any;
  filteredComments: Comment[] = [];
  newComment: string = '';
  rating = 0;
  indexBerita = 0;
  semuaBerita: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private beritaService: Beritaservice
  ) {}

  ngOnInit() {
    this.semuaBerita = [...this.beritaService.berita];

    this.route.params.subscribe((params) => {
      this.indexBerita = parseInt(params['index'], 10);
      this.berita = this.semuaBerita[this.indexBerita];

      if (!this.berita) {
        console.warn('Berita tidak ditemukan untuk index:', this.indexBerita);
        return;
      }

      this.filteredComments = this.comments.filter(
        (c) => c.idBerita === this.indexBerita
      );

      console.log('Berita detail:', this.berita);
    });
  }

  addComment() {
    if (this.newComment.trim() !== '') {
      const newCmt = {
        idBerita: this.indexBerita,
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