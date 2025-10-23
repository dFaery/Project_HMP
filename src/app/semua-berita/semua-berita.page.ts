import { Beritaservice } from './../services/beritaservice';
import { Component, OnInit } from '@angular/core';
import { FavoriteService, FavoriteNews } from '../services/favorite.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-semua-berita',
  templateUrl: './semua-berita.page.html',
  styleUrls: ['./semua-berita.page.scss'],
  standalone: false,
})
export class SemuaBeritaPage implements OnInit {
  constructor(
    private favoriteService: FavoriteService,
    private route: ActivatedRoute,
    public beritaservice: Beritaservice
  ) {}

  berita: any;
  jenisTampilan: string = 'trending';
  beritaDicari: string = '';
  semuaBerita: any[] = [];
  hasilPencarian: any[] = [];

  ngOnInit() {
    this.semuaBerita = this.beritaservice.berita;
  }

  cariBeritaByJudul() {
    const lowerKeyword = this.beritaDicari.toLowerCase();
    this.jenisTampilan = 'search';
    if (!lowerKeyword) {
      // kalau kosong, show semua berita
      this.hasilPencarian = [...this.semuaBerita];
    } else {
      this.hasilPencarian = this.semuaBerita.filter((berita) =>
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

  getBeritaByKategori(kategori: string) {
    return this.semuaBerita.filter((b: any) =>
      Array.isArray(b.kategori)
        ? b.kategori.includes(kategori)
        : b.kategori === kategori
    );
  }

  addViews(id: number) {
    this.beritaservice.addView(id);
  }
}
