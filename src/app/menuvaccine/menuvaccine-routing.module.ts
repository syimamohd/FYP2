import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuvaccinePage } from './menuvaccine.page';

const routes: Routes = [
  {
    path: '',
    component: MenuvaccinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuvaccinePageRoutingModule {}
