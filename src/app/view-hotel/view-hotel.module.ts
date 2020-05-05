import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewHotelPageRoutingModule } from './view-hotel-routing.module';

import { ViewHotelPage } from './view-hotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewHotelPageRoutingModule
  ],
  declarations: [ViewHotelPage]
})
export class ViewHotelPageModule {}
