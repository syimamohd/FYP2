import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuspaPageRoutingModule } from './menuspa-routing.module';

import { MenuspaPage } from './menuspa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuspaPageRoutingModule
  ],
  declarations: [MenuspaPage]
})
export class MenuspaPageModule {}
