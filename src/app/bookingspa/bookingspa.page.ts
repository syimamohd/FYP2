import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {BookingSpa} from '../model/BookingSpa';

@Component({
  selector: 'app-bookingspa',
  templateUrl: './bookingspa.page.html',
  styleUrls: ['./bookingspa.page.scss'],
})
export class BookingspaPage implements OnInit 
{
    bookingspa: BookingSpa = {
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

  submitBookingSpa() 
  {
    this.fbService.submitBookingSpa(this.bookingspa).then(() => {
      this.router.navigateByUrl('/');
    }, err => {
    });
  }

}

