import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceiptservicePage } from './receiptservice.page';

const routes: Routes = [
  {
    path: '',
    component: ReceiptservicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceiptservicePageRoutingModule {}
