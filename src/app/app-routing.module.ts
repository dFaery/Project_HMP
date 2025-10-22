import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
    {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./rekomendasi-berita/rekomendasi-berita.module').then((m) => m.RekomendasiBeritaPageModule),
  },
  {
    path: 'berita-favorite',
    loadChildren: () => import('./berita-favorite/berita-favorite.module').then( m => m.BeritaFavoritePageModule)
  },
  {
    path: 'kelola-akun',
    loadChildren: () => import('./kelola-akun/kelola-akun.module').then( m => m.KelolaAkunPageModule)
  },
  {
    path: 'rekomendasi-berita',
    loadChildren: () => import('./rekomendasi-berita/rekomendasi-berita.module').then( m => m.RekomendasiBeritaPageModule)
  },
  {
    path: 'semua-berita',
    loadChildren: () => import('./semua-berita/semua-berita.module').then( m => m.SemuaBeritaPageModule)
  },
  {
    path: 'detail-berita/:id',
    loadChildren: () => import('./detail-berita/detail-berita.module').then( m => m.DetailBeritaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
