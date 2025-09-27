import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RekomendasiBeritaPageRoutingModule } from './rekomendasi-berita-routing.module';

import { RekomendasiBeritaPage } from './rekomendasi-berita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RekomendasiBeritaPageRoutingModule
  ],
  declarations: [RekomendasiBeritaPage]
})
export class RekomendasiBeritaPageModule {}
