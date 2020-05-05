import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenugrabPageRoutingModule } from './menugrab-routing.module';

import { MenugrabPage } from './menugrab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenugrabPageRoutingModule
  ],
  declarations: [MenugrabPage]
})
export class MenugrabPageModule {}
