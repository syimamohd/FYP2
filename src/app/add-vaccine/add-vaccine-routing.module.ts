import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVaccinePage } from './add-vaccine.page';

const routes: Routes = [
  {
    path: '',
    component: AddVaccinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVaccinePageRoutingModule {}
