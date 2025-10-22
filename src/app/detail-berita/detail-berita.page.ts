import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beritaservice } from '../services/beritaservice';
import { Akunservice, Akun } from '../services/akunservice';
import { CommentServices } from '../services/comment-services';
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

  berita: any;
  filteredComments: Comment[] = [];
  newComment: string = '';
  indexBerita = 0;
  semuaBerita: any[] = [];
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private akunService: Akunservice,
    private beritaService: Beritaservice,
    private router: Router,
    private commentServices: CommentServices
  ) {}

  ngOnInit() {
    console.log('indexBerita:', this.indexBerita);
    console.log('id:', this.id);
    this.semuaBerita = [...this.beritaService.berita];
    this.loadUserData();

    this.route.params.subscribe((params) => {
      this.id = parseInt(params['id'], 10);
      this.berita = this.semuaBerita[this.id];

      if (!this.berita) {
        console.warn('Berita tidak ditemukan untuk index:', this.id);
        return;
      }

      this.filteredComments = this.commentServices.getCommentsByBeritaId(
        this.id
      );

      console.log('Berita detail:', this.berita);
    });    
  }

  addComment() {
    if (this.newComment.trim() !== '') {
      const newCmt = {
        idBerita: this.id,
        username: `${this.userData.namaDepan} ${this.userData.namaBelakang}`,
        comment: this.newComment,
        avatar: this.userData.fotoProfil || 'assets/my-avatar.png',
      };

      this.commentServices.addComment(newCmt);
      this.filteredComments.push(newCmt);
      this.newComment = '';
    }
  }

  countComments(idBerita: number): number {
    return this.commentServices.getCommentCountByBeritaId(this.id);
  }

  getComments(idBerita: number): Comment[] {
    return this.commentServices.getCommentsByBeritaId(this.id);
  }

  beriRating(nilai: number) {
    if (!this.berita) return;
    if(this.beritaService.berita[this.id].rateUser != nilai){
      this.beritaService.updateRating(this.berita.id, nilai);
    }
    
    this.beritaService.berita[this.id].rateUser = nilai;

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
