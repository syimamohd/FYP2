import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuvaccineAdminPageRoutingModule } from './menuvaccine-admin-routing.module';

import { MenuvaccineAdminPage } from './menuvaccine-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuvaccineAdminPageRoutingModule
  ],
  declarations: [MenuvaccineAdminPage]
})
export class MenuvaccineAdminPageModule {}
