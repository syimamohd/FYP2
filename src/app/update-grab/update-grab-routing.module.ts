import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateGrabPage } from './update-grab.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateGrabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateGrabPageRoutingModule {}
