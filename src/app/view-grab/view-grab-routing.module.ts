import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewGrabPage } from './view-grab.page';

const routes: Routes = [
  {
    path: '',
    component: ViewGrabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewGrabPageRoutingModule {}
