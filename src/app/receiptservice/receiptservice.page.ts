import { Component, OnInit,AfterViewInit  } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingSpa} from '../model/BookingSpa';
 //call the page that has crud operaions in firebase.service
import {FirebaseService} from '../services/firebase.service';

@Component({
    selector: 'app-receiptservice',
    templateUrl: './receiptservice.page.html',
    styleUrls: ['./receiptservice.page.scss'],
  })
  

  export class ReceiptservicePage implements OnInit , AfterViewInit 
{
  //note properties
  bookingspa: BookingSpa = {
    customerName: '',
    contactNumber:'',
    catName:'',
    remark:'',
    date: '',
    time: ''
    // createdAt: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private fbService: FirebaseService, private router: Router) { }

  ngOnInit() 
  {}

  ngAfterViewInit(): void 
  {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.fbService.getSpaBooking(id).subscribe(bookingspaData => {
        this.bookingspa = bookingspaData;
      });
    }
  }

}
