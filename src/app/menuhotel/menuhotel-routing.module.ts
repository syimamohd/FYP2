import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuhotelPage } from './menuhotel.page';

const routes: Routes = [
  {
    path: '',
    component: MenuhotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuhotelPageRoutingModule {}
