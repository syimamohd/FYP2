import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuhotelAdminPageRoutingModule } from './menuhotel-admin-routing.module';

import { MenuhotelAdminPage } from './menuhotel-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuhotelAdminPageRoutingModule
  ],
  declarations: [MenuhotelAdminPage]
})
export class MenuhotelAdminPageModule {}
