import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBookingGrabPage } from './update-booking-grab.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBookingGrabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBookingGrabPageRoutingModule {}
