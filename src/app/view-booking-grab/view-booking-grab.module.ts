import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewBookingGrabPageRoutingModule } from './view-booking-grab-routing.module';

import { ViewBookingGrabPage } from './view-booking-grab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewBookingGrabPageRoutingModule
  ],
  declarations: [ViewBookingGrabPage]
})
export class ViewBookingGrabPageModule {}
