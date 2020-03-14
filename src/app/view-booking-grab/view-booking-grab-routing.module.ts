import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewBookingGrabPage } from './view-booking-grab.page';

const routes: Routes = [
  {
    path: '',
    component: ViewBookingGrabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewBookingGrabPageRoutingModule {}
