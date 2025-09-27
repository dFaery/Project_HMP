import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeritaFavoritePage } from './berita-favorite.page';

describe('BeritaFavoritePage', () => {
  let component: BeritaFavoritePage;
  let fixture: ComponentFixture<BeritaFavoritePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BeritaFavoritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
