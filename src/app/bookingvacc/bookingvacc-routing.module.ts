import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingvaccPage } from './bookingvacc.page';

const routes: Routes = [
  {
    path: '',
    component: BookingvaccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingvaccPageRoutingModule {}
