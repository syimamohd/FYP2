import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {CatHotel} from '../modal/CatHotel';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.page.html',
  styleUrls: ['./add-hotel.page.scss'],
})
export class AddHotelPage implements OnInit 
{
    hotel: CatHotel = {
    hotelName: '',
    hotelDetails: '',
    hotelPrice:''
    // createdAt: new Date().getTime()
  };

  constructor(
      private activatedRoute: ActivatedRoute,
      private fbService: FirebaseService,
      private toastCtrl: ToastController,
      private router: Router
  ) { }

  ngOnInit() {
  }

  addNote() 
  {
    this.fbService.addHotel(this.hotel).then(() => {
      this.router.navigateByUrl('/');
    }, err => {
    });
  }

}
