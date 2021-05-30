import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AVidaEBelaPage } from './a-vida-e-bela.page';

const routes: Routes = [
  {
    path: '',
    component: AVidaEBelaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AVidaEBelaPageRoutingModule {}
