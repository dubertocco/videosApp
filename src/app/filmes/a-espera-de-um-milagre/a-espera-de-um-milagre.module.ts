import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AEsperaDeUmMilagrePageRoutingModule } from './a-espera-de-um-milagre-routing.module';

import { AEsperaDeUmMilagrePage } from './a-espera-de-um-milagre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AEsperaDeUmMilagrePageRoutingModule
  ],
  declarations: [AEsperaDeUmMilagrePage]
})
export class AEsperaDeUmMilagrePageModule {}
