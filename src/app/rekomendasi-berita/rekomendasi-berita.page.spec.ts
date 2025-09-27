import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RekomendasiBeritaPage } from './rekomendasi-berita.page';

describe('RekomendasiBeritaPage', () => {
  let component: RekomendasiBeritaPage;
  let fixture: ComponentFixture<RekomendasiBeritaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RekomendasiBeritaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
