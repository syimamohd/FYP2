import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddGrabPageRoutingModule } from './add-grab-routing.module';

import { AddGrabPage } from './add-grab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddGrabPageRoutingModule
  ],
  declarations: [AddGrabPage]
})
export class AddGrabPageModule {}
