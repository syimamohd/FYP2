import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookinghotelPage } from './bookinghotel.page';

const routes: Routes = [
  {
    path: '',
    component: BookinghotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookinghotelPageRoutingModule {}
