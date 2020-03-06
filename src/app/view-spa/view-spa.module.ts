import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSpaPageRoutingModule } from './view-spa-routing.module';

import { ViewSpaPage } from './view-spa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSpaPageRoutingModule
  ],
  declarations: [ViewSpaPage]
})
export class ViewSpaPageModule {}
