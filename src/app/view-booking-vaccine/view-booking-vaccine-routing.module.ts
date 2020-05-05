import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewBookingVaccinePage } from './view-booking-vaccine.page';

const routes: Routes = [
  {
    path: '',
    component: ViewBookingVaccinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewBookingVaccinePageRoutingModule {}
