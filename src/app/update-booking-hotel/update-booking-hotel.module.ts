import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBookingHotelPageRoutingModule } from './update-booking-hotel-routing.module';

import { UpdateBookingHotelPage } from './update-booking-hotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBookingHotelPageRoutingModule
  ],
  declarations: [UpdateBookingHotelPage]
})
export class UpdateBookingHotelPageModule {}
