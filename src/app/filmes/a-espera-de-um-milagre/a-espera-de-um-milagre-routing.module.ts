import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AEsperaDeUmMilagrePage } from './a-espera-de-um-milagre.page';

const routes: Routes = [
  {
    path: '',
    component: AEsperaDeUmMilagrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AEsperaDeUmMilagrePageRoutingModule {}
