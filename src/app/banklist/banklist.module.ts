import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BanklistPageRoutingModule } from './banklist-routing.module';

import { BanklistPage } from './banklist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BanklistPageRoutingModule
  ],
  declarations: [BanklistPage]
})
export class BanklistPageModule {}
