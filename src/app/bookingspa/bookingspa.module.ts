import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookingspaPageRoutingModule } from './bookingspa-routing.module';
import { BookingspaPage } from './bookingspa.page';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BookingspaPageRoutingModule
  ],
  declarations: [BookingspaPage]
})
export class BookingspaPageModule {}
