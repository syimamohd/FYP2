import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddHotelPageRoutingModule } from './add-hotel-routing.module';
import { AddHotelPage } from './add-hotel.page';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddHotelPageRoutingModule
  ],
  declarations: [AddHotelPage]
})
export class AddHotelPageModule {}
