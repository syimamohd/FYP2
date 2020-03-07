import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CatHotel} from '../model/CatHotel';
//call the page that has crud operaions in firebase.service
import {FirebaseService} from '../services/firebase.service';


@Component({
  selector: 'app-menuhotel',
  templateUrl: './menuhotel.page.html',
  styleUrls: ['./menuhotel.page.scss'],
})

export class MenuhotelPage implements OnInit 
{
  private catHotel: Observable<CatHotel[]>;
  constructor(private fbService: FirebaseService) {}

  ngOnInit(): void 
  {
    this.catHotel = this.fbService.getHotels();
  }

}
