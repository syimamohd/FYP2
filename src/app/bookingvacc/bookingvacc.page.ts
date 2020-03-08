import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {BookingVacc} from '../model/BookingVacc';

@Component({
  selector: 'app-bookingvacc',
  templateUrl: './bookingvacc.page.html',
  styleUrls: ['./bookingvacc.page.scss'],
})
export class BookingvaccPage implements OnInit 
{
    bookingvacc: BookingVacc = {
      customerName: '',
      contactNumber: '',
      catName: '',
      remark: '',
      date: '',
      time: ''
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

  submitBookingVacc() 
  {
    this.fbService.submitBookingVacc(this.bookingvacc).then(() => {
      this.router.navigateByUrl('/');
    }, err => {
    });
  }

}

