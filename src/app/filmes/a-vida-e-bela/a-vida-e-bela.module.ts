import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AVidaEBelaPageRoutingModule } from './a-vida-e-bela-routing.module';

import { AVidaEBelaPage } from './a-vida-e-bela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AVidaEBelaPageRoutingModule
  ],
  declarations: [AVidaEBelaPage]
})
export class AVidaEBelaPageModule {}
