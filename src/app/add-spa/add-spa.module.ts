import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddSpaPageRoutingModule } from './add-spa-routing.module';
import { AddSpaPage } from './add-spa.page';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddSpaPageRoutingModule
  ],
  declarations: [AddSpaPage]
})
export class AddSpaPageModule {}
