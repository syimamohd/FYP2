import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BookingHotel} from '../model/BookingHotel';
//call the page that has crud operaions in firebase.service
import {FirebaseService} from '../services/firebase.service';


@Component({
  selector: 'app-menuhotel',
  templateUrl: './receipthotel.page.html',
  styleUrls: ['./receipthotel.page.scss'],
})

export class ReceipthotelPage implements OnInit 
{
  private hotelBooking: Observable<BookingHotel[]>;
  constructor(private fbService: FirebaseService) {}

  ngOnInit(): void 
  {
    this.hotelBooking = this.fbService.getHotelBookings();
  }

}
