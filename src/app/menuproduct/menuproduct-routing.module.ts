import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuproductPage } from './menuproduct.page';

const routes: Routes = [
  {
    path: '',
    component: MenuproductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuproductPageRoutingModule {}
