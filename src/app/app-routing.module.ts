import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list-pokemons',
    loadChildren: () => import('./pages/list-pokemons/list-pokemons.module').then( m => m.ListPokemonsPageModule)
  },
  {
    path: '',
    redirectTo: 'list-pokemons',
    pathMatch: 'full'
  },
  
  {
    path: 'detail-pokemon',
    loadChildren: () => import('./pages/detail-pokemon/detail-pokemon.module').then( m => m.DetailPokemonPageModule)
  },
  {
    path: 'capacitores',
    loadChildren: () => import('./pages/capacitores/capacitores.module').then( m => m.CapacitoresPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
