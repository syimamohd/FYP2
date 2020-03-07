import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {BookingHotel} from '../model/BookingHotel';

@Component({
  selector: 'app-bookinghotel',
  templateUrl: './bookinghotel.page.html',
  styleUrls: ['./bookinghotel.page.scss'],
})
export class BookinghotelPage implements OnInit 
{
    bookinghotel: BookingHotel = {
      customerName: '',
      contactNumber: '',
      catName: '',
      remark: '',
      checkInDate: '',
      checkOutDate: '',
      timeIn: '',
      timeOut: ''
      // catFood: Selection;
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

  submitBookingHotel() 
  {
    this.fbService.submitBookingHotel(this.bookinghotel).then(() => {
      this.router.navigateByUrl('/');
    }, err => {
    });
  }

}
