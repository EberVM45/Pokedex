import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapacitoresPage } from './capacitores.page';

const routes: Routes = [
  {
    path: '',
    component: CapacitoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapacitoresPageRoutingModule {}
