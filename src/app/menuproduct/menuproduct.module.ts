import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuproductPageRoutingModule } from './menuproduct-routing.module';

import { MenuproductPage } from './menuproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuproductPageRoutingModule
  ],
  declarations: [MenuproductPage]
})
export class MenuproductPageModule {}
