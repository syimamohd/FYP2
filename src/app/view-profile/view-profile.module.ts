import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewProfilePageRoutingModule } from './view-profile-routing.module';
import { ViewProfilePage } from './view-profile.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewProfilePageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [ViewProfilePage]
})
export class ViewProfilePageModule {}
