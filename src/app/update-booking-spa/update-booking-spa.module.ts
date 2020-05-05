import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBookingSpaPageRoutingModule } from './update-booking-spa-routing.module';

import { UpdateBookingSpaPage } from './update-booking-spa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBookingSpaPageRoutingModule
  ],
  declarations: [UpdateBookingSpaPage]
})
export class UpdateBookingSpaPageModule {}
