import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceipthotelPageRoutingModule } from './receipthotel-routing.module';

import { ReceipthotelPage } from './receipthotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceipthotelPageRoutingModule
  ],
  declarations: [ReceipthotelPage]
})
export class ReceipthotelPageModule {}
