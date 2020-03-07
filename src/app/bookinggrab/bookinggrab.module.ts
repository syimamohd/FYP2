import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookinggrabPageRoutingModule } from './bookinggrab-routing.module';

import { BookinggrabPage } from './bookinggrab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookinggrabPageRoutingModule
  ],
  declarations: [BookinggrabPage]
})
export class BookinggrabPageModule {}
