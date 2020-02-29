import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuhotelAdminPage } from './menuhotel-admin.page';

const routes: Routes = [
  {
    path: '',
    component: MenuhotelAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuhotelAdminPageRoutingModule {}
