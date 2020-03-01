import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceiptservicePageRoutingModule } from './receiptservice-routing.module';

import { ReceiptservicePage } from './receiptservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceiptservicePageRoutingModule
  ],
  declarations: [ReceiptservicePage]
})
export class ReceiptservicePageModule {}
