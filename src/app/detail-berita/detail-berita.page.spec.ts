import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailBeritaPage } from './detail-berita.page';

describe('DetailBeritaPage', () => {
  let component: DetailBeritaPage;
  let fixture: ComponentFixture<DetailBeritaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBeritaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
