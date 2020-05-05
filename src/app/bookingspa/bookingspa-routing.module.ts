import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingspaPage } from './bookingspa.page';

const routes: Routes = [
  {
    path: '',
    component: BookingspaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingspaPageRoutingModule {}
