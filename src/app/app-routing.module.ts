import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'um-sonho-de-liberdade',
    loadChildren: () => import('./filmes/um-sonho-de-liberdade/um-sonho-de-liberdade.module').then( m => m.UmSonhoDeLiberdadePageModule)
  },
  {
    path: 'a-espera-de-um-milagre',
    loadChildren: () => import('./filmes/a-espera-de-um-milagre/a-espera-de-um-milagre.module').then( m => m.AEsperaDeUmMilagrePageModule)
  },
  {
    path: 'a-vida-e-bela',
    loadChildren: () => import('./filmes/a-vida-e-bela/a-vida-e-bela.module').then( m => m.AVidaEBelaPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
