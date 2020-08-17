import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddVaccinePageRoutingModule } from './add-vaccine-routing.module';
import { AddVaccinePage } from './add-vaccine.page';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddVaccinePageRoutingModule
  ],
  declarations: [AddVaccinePage]
})
export class AddVaccinePageModule {}
