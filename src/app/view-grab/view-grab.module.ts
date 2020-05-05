import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewGrabPageRoutingModule } from './view-grab-routing.module';

import { ViewGrabPage } from './view-grab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewGrabPageRoutingModule
  ],
  declarations: [ViewGrabPage]
})
export class ViewGrabPageModule {}
