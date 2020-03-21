import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBookingSpaPage } from './update-booking-spa.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBookingSpaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBookingSpaPageRoutingModule {}
