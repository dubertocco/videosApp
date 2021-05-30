import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UmSonhoDeLiberdadePageRoutingModule } from './um-sonho-de-liberdade-routing.module';

import { UmSonhoDeLiberdadePage } from './um-sonho-de-liberdade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UmSonhoDeLiberdadePageRoutingModule
  ],
  declarations: [UmSonhoDeLiberdadePage]
})
export class UmSonhoDeLiberdadePageModule {}
