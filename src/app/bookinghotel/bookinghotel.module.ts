import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD

import { IonicModule } from '@ionic/angular';

import { BookinghotelPageRoutingModule } from './bookinghotel-routing.module';

import { BookinghotelPage } from './bookinghotel.page';
=======
import { IonicModule } from '@ionic/angular';
import { BookinghotelPageRoutingModule } from './bookinghotel-routing.module';
import { BookinghotelPage } from './bookinghotel.page';
//import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
=======
    // ReactiveFormsModule, FormControl, Validators, 
>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3
    BookinghotelPageRoutingModule
  ],
  declarations: [BookinghotelPage]
})
export class BookinghotelPageModule {}
