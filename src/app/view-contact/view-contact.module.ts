import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewContactPageRoutingModule } from './view-contact-routing.module';

import { ViewContactPage } from './view-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewContactPageRoutingModule
  ],
  declarations: [ViewContactPage]
})
export class ViewContactPageModule {}
