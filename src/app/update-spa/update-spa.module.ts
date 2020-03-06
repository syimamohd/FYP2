import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateSpaPageRoutingModule } from './update-spa-routing.module';

import { UpdateSpaPage } from './update-spa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateSpaPageRoutingModule
  ],
  declarations: [UpdateSpaPage]
})
export class UpdateSpaPageModule {}
