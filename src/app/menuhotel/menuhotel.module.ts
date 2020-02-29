import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuhotelPageRoutingModule } from './menuhotel-routing.module';

import { MenuhotelPage } from './menuhotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuhotelPageRoutingModule
  ],
  declarations: [MenuhotelPage]
})
export class MenuhotelPageModule {}
