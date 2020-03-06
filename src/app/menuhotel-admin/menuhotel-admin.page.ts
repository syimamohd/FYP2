import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CatHotel} from '../modal/CatHotel';
//call the page that has crud operaions in firebase.service
import {FirebaseService} from '../services/firebase.service';


@Component({
  selector: 'app-menuhotel-admin',
  templateUrl: './menuhotel-admin.page.html',
  styleUrls: ['./menuhotel-admin.page.scss'],
})

export class MenuhotelAdminPage implements OnInit 
{
  private catHotel: Observable<CatHotel[]>;
  constructor(private fbService: FirebaseService) {}

  ngOnInit(): void 
  {
    this.catHotel = this.fbService.getHotels();
  }

}
