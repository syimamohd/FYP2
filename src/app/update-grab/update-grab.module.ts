import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateGrabPageRoutingModule } from './update-grab-routing.module';

import { UpdateGrabPage } from './update-grab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateGrabPageRoutingModule
  ],
  declarations: [UpdateGrabPage]
})
export class UpdateGrabPageModule {}
