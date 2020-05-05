import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewBookingVaccinePageRoutingModule } from './view-booking-vaccine-routing.module';

import { ViewBookingVaccinePage } from './view-booking-vaccine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewBookingVaccinePageRoutingModule
  ],
  declarations: [ViewBookingVaccinePage]
})
export class ViewBookingVaccinePageModule {}
