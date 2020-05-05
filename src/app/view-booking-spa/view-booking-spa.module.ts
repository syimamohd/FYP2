import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewBookingSpaPageRoutingModule } from './view-booking-spa-routing.module';

import { ViewBookingSpaPage } from './view-booking-spa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewBookingSpaPageRoutingModule
  ],
  declarations: [ViewBookingSpaPage]
})
export class ViewBookingSpaPageModule {}
