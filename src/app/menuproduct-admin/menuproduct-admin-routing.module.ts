import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuproductAdminPage } from './menuproduct-admin.page';

const routes: Routes = [
  {
    path: '',
    component: MenuproductAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuproductAdminPageRoutingModule {}
