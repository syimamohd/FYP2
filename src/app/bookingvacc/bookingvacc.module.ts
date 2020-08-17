import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookingvaccPageRoutingModule } from './bookingvacc-routing.module';
import { BookingvaccPage } from './bookingvacc.page';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BookingvaccPageRoutingModule
  ],
  declarations: [BookingvaccPage]
})
export class BookingvaccPageModule {}
