import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuspaAdminPageRoutingModule } from './menuspa-admin-routing.module';

import { MenuspaAdminPage } from './menuspa-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuspaAdminPageRoutingModule
  ],
  declarations: [MenuspaAdminPage]
})
export class MenuspaAdminPageModule {}
