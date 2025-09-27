import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeritaFavoritePage } from './berita-favorite.page';

const routes: Routes = [
  {
    path: '',
    component: BeritaFavoritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeritaFavoritePageRoutingModule {}
