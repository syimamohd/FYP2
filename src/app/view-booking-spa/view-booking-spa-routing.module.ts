import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewBookingSpaPage } from './view-booking-spa.page';

const routes: Routes = [
  {
    path: '',
    component: ViewBookingSpaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewBookingSpaPageRoutingModule {}
