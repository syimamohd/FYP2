import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuspaPage } from './menuspa.page';

const routes: Routes = [
  {
    path: '',
    component: MenuspaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuspaPageRoutingModule {}
