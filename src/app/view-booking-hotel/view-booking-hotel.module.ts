import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewBookingHotelPageRoutingModule } from './view-booking-hotel-routing.module';

import { ViewBookingHotelPage } from './view-booking-hotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewBookingHotelPageRoutingModule
  ],
  declarations: [ViewBookingHotelPage]
})
export class ViewBookingHotelPageModule {}
