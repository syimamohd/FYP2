import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookinggrabPage } from './bookinggrab.page';

const routes: Routes = [
  {
    path: '',
    component: BookinggrabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookinggrabPageRoutingModule {}
