import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSpaPage } from './view-spa.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSpaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSpaPageRoutingModule {}
