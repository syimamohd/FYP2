import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBookingVaccPageRoutingModule } from './update-booking-vacc-routing.module';

import { UpdateBookingVaccPage } from './update-booking-vacc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBookingVaccPageRoutingModule
  ],
  declarations: [UpdateBookingVaccPage]
})
export class UpdateBookingVaccPageModule {}
