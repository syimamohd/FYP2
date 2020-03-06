import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuproductAdminPageRoutingModule } from './menuproduct-admin-routing.module';

import { MenuproductAdminPage } from './menuproduct-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuproductAdminPageRoutingModule
  ],
  declarations: [MenuproductAdminPage]
})
export class MenuproductAdminPageModule {}
