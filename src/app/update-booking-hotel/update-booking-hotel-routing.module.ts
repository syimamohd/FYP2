import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBookingHotelPage } from './update-booking-hotel.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBookingHotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBookingHotelPageRoutingModule {}
