import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddGrabPage } from './add-grab.page';

const routes: Routes = [
  {
    path: '',
    component: AddGrabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddGrabPageRoutingModule {}
