import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuvaccineAdminPage } from './menuvaccine-admin.page';

const routes: Routes = [
  {
    path: '',
    component: MenuvaccineAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuvaccineAdminPageRoutingModule {}
