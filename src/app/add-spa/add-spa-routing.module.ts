import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSpaPage } from './add-spa.page';

const routes: Routes = [
  {
    path: '',
    component: AddSpaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSpaPageRoutingModule {}
