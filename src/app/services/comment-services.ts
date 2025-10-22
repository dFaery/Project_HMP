import { Injectable } from '@angular/core';

export interface Comment {
  idBerita: number;
  username: string;
  comment: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})

export class CommentServices {
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

  constructor() {
    this.totalComments = this.comments.length;
  }

  totalComments: number = 0;

  getAllComments(): Comment[] {
    return this.comments;
  }

  getCommentsByBeritaId(idBerita: number): Comment[] {
    return this.comments.filter(c => c.idBerita === idBerita);
  }

  getCommentCountByBeritaId(idBerita: number): number {
    return this.comments.filter(c => c.idBerita === idBerita).length;
  }

  addComment(newComment: Comment): void {
    this.comments.push(newComment);
  }
}
