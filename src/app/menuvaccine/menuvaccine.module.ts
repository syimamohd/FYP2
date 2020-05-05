import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuvaccinePageRoutingModule } from './menuvaccine-routing.module';

import { MenuvaccinePage } from './menuvaccine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuvaccinePageRoutingModule
  ],
  declarations: [MenuvaccinePage]
})
export class MenuvaccinePageModule {}
