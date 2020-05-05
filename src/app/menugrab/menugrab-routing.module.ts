import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenugrabPage } from './menugrab.page';

const routes: Routes = [
  {
    path: '',
    component: MenugrabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenugrabPageRoutingModule {}
