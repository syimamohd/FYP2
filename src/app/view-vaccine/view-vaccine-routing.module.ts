import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewVaccinePage } from './view-vaccine.page';

const routes: Routes = [
  {
    path: '',
    component: ViewVaccinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewVaccinePageRoutingModule {}
