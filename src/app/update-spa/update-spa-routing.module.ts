import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateSpaPage } from './update-spa.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateSpaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateSpaPageRoutingModule {}
