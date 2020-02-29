import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenugrabAdminPageRoutingModule } from './menugrab-admin-routing.module';

import { MenugrabAdminPage } from './menugrab-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenugrabAdminPageRoutingModule
  ],
  declarations: [MenugrabAdminPage]
})
export class MenugrabAdminPageModule {}
