import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {BookingGrab} from '../model/BookingGrab';

@Component({
  selector: 'app-bookinggrab',
  templateUrl: './bookinggrab.page.html',
  styleUrls: ['./bookinggrab.page.scss'],
})
export class BookinggrabPage implements OnInit 
{
    bookinggrab: BookingGrab = {
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

  submitBookingGrab() 
  {
    this.fbService.submitBookingGrab(this.bookinggrab).then(() => {
      this.router.navigateByUrl('/');
    }, err => {
    });
  }

}

