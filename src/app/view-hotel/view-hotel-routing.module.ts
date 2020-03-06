import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewHotelPage } from './view-hotel.page';

const routes: Routes = [
  {
    path: '',
    component: ViewHotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewHotelPageRoutingModule {}
