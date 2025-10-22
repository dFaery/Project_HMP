import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beritaservice } from '../services/beritaservice';
import { Akunservice, Akun } from '../services/akunservice';
import { Router } from '@angular/router';


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
  akun!: Akun;
  userData!: Akun['biodata'];
  comments: Comment[] = [
    {
      idBerita: 1,
      username: 'Username123',
      comment: 'Komentar dari Username123',
      avatar: 'assets/avatar1.png',
    },
    {
      idBerita: 2,
      username: 'User456',
      comment: 'Saya setuju dengan kebijakan ini',
      avatar: 'assets/avatar2.png',
    },
  ];

  berita: any;
  filteredComments: Comment[] = [];
  newComment: string = '';
  rating:number = 0;
  indexBerita = 0;
  semuaBerita: any[] = [];
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private akunService: Akunservice,
    private beritaService: Beritaservice,
    private router: Router

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

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.berita = this.beritaService.berita.find((b) => b.id === this.id);
    if (!this.berita) {
      console.warn('Berita tidak ditemukan untuk ID:', this.id);
    }
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
    if (!this.berita) return;
    const nilai = 5;
    this.beritaService.updateRating(this.berita.id, nilai);
    this.rating = nilai;
  }

  beriRating(nilai: number) {
    if (!this.berita) return;
    this.rating = nilai;
    this.beritaService.updateRating(this.berita.id, nilai);
  }

    private loadUserData() {
    const user = this.akunService.getCurrentUser();
    if (user) {
      this.akun = { ...user };
      this.userData = { ...user.biodata };
    } else {
      this.router.navigateByUrl('/login', { replaceUrl: true });
    }
  }
}
