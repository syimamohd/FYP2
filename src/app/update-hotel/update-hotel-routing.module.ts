import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateHotelPage } from './update-hotel.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateHotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateHotelPageRoutingModule {}
