import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenugrabAdminPage } from './menugrab-admin.page';

const routes: Routes = [
  {
    path: '',
    component: MenugrabAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenugrabAdminPageRoutingModule {}
