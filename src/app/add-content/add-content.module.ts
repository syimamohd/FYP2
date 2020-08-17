import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddContentPageRoutingModule } from './add-content-routing.module';
import { AddContentPage } from './add-content.page';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddContentPageRoutingModule
  ],
  declarations: [AddContentPage]
})
export class AddContentPageModule {}
