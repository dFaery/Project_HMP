import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RekomendasiBeritaPage } from './rekomendasi-berita.page';

const routes: Routes = [
  {
    path: '',
    component: RekomendasiBeritaPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RekomendasiBeritaPageRoutingModule {}
