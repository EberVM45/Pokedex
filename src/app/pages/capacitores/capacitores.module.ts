import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapacitoresPageRoutingModule } from './capacitores-routing.module';

import { CapacitoresPage } from './capacitores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapacitoresPageRoutingModule
  ],
  declarations: [CapacitoresPage]
})
export class CapacitoresPageModule {}
