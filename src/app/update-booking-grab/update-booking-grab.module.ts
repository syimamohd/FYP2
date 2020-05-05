import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBookingGrabPageRoutingModule } from './update-booking-grab-routing.module';

import { UpdateBookingGrabPage } from './update-booking-grab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBookingGrabPageRoutingModule
  ],
  declarations: [UpdateBookingGrabPage]
})
export class UpdateBookingGrabPageModule {}
