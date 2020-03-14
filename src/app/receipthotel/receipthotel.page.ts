import { Component, OnInit,AfterViewInit  } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingHotel} from '../model/BookingHotel';
 //call the page that has crud operaions in firebase.service
import {FirebaseService} from '../services/firebase.service';

@Component({
    selector: 'app-receipthotel',
    templateUrl: './receipthotel.page.html',
    styleUrls: ['./receipthotel.page.scss'],
  })
  

  export class ReceipthotelPage implements OnInit , AfterViewInit 
{
  //note properties
  bookinghotel: BookingHotel = {
    customerName: '',
    contactNumber:'',
    catName:'',
    remark:'',
    checkInDate: '',
    checkOutDate: '',
    timeIn: '',
    timeOut: ''
    // createdAt: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private fbService: FirebaseService, private router: Router) { }

  ngOnInit() 
  {}

  ngAfterViewInit(): void 
  {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.fbService.getHotelBooking(id).subscribe(bookinghotelData => {
        this.bookinghotel = bookinghotelData;
      });
    }
  }

}

// import { Component, OnInit } from '@angular/core';
// import {Observable} from 'rxjs';
// import {BookingHotel} from '../model/BookingHotel';
// //call the page that has crud operaions in firebase.service
// import {FirebaseService} from '../services/firebase.service';


// @Component({
//   selector: 'app-receipthotel',
//   templateUrl: './receipthotel.page.html',
//   styleUrls: ['./receipthotel.page.scss'],
// })

// export class ReceipthotelPage implements OnInit 
// {
//   private hotelBooking: Observable<BookingHotel[]>;
//   constructor(private fbService: FirebaseService) {}

//   ngOnInit(): void 
//   {
//     this.hotelBooking = this.fbService.getHotelBookings();
//   }

// }