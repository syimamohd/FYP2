import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookinghotelPageRoutingModule } from './bookinghotel-routing.module';
import { BookinghotelPage } from './bookinghotel.page';
//import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // ReactiveFormsModule, FormControl, Validators, 
    BookinghotelPageRoutingModule
  ],
  declarations: [BookinghotelPage]
})
export class BookinghotelPageModule {}
