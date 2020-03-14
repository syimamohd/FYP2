import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewBookingHotelPage } from './view-booking-hotel.page';

const routes: Routes = [
  {
    path: '',
    component: ViewBookingHotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewBookingHotelPageRoutingModule {}
