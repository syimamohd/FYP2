import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateHotelPageRoutingModule } from './update-hotel-routing.module';

import { UpdateHotelPage } from './update-hotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateHotelPageRoutingModule
  ],
  declarations: [UpdateHotelPage]
})
export class UpdateHotelPageModule {}
