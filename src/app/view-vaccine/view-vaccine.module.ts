import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewVaccinePageRoutingModule } from './view-vaccine-routing.module';

import { ViewVaccinePage } from './view-vaccine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewVaccinePageRoutingModule
  ],
  declarations: [ViewVaccinePage]
})
export class ViewVaccinePageModule {}
