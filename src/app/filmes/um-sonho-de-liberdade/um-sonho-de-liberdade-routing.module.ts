import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UmSonhoDeLiberdadePage } from './um-sonho-de-liberdade.page';

const routes: Routes = [
  {
    path: '',
    component: UmSonhoDeLiberdadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UmSonhoDeLiberdadePageRoutingModule {}
