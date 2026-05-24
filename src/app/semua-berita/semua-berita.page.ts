import { Component, OnInit } from '@angular/core';
import { FavoriteService, FavoriteNews } from '../services/favorite.service';
import { Beritaservice } from '../services/beritaservice';

@Component({
  selector: 'app-semua-berita',
  templateUrl: './semua-berita.page.html',
  styleUrls: ['./semua-berita.page.scss'],
  standalone : false,
})
export class SemuaBeritaPage implements OnInit {
  semuaBerita: any[] = [];
  hasilPencarian: any[] = [];
  beritaDicari: string = '';
  jenisTampilan: string = 'trending';

  isToastOpen = false;
  toastMessage = '';

  constructor(
    private favoriteService: FavoriteService,
    public beritaservice: Beritaservice
  ) {}

  ngOnInit(): void {
    this.semuaBerita = this.beritaservice.berita;
  }

  cariBeritaByJudul(): void {
    const lowerKeyword = this.beritaDicari.toLowerCase().trim();

    if (!lowerKeyword) {
      this.hasilPencarian = [...this.semuaBerita];
    } else {
      this.hasilPencarian = this.semuaBerita.filter(b =>
        b.judulBerita.toLowerCase().includes(lowerKeyword)
      );
    }

    this.jenisTampilan = 'search';
  }

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result: any[][] = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  getBeritaByKategori(kategori: string): any[] {
    return this.semuaBerita.filter(b =>
      Array.isArray(b.kategori)
        ? b.kategori.includes(kategori)
        : b.kategori === kategori
    );
  }

  addViews(id: number): void {
    this.beritaservice.addView(id);
  }

  addToFavorite(favorite: FavoriteNews): void {
    this.toastMessage = 'Berita ditambahkan ke favorit';
    this.isToastOpen = true;
    this.favoriteService.addFavorite(favorite);
  }

  checkIsFavorite(id: number): boolean {
    return this.favoriteService.showIconFavorites(id);
  }
}
