import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BanklistPage } from './banklist.page';

const routes: Routes = [
  {
    path: '',
    component: BanklistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanklistPageRoutingModule {}
