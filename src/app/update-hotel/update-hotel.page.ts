import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CatHotel} from '../model/CatHotel';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component
({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.page.html',
  styleUrls: ['./update-hotel.page.scss'],
})

export class UpdateHotelPage implements OnInit, AfterViewInit 
{
  hotel: CatHotel = {
    hotelName: '',
    hotelDetails: '',
    hotelPrice:''
    // createdAt: new Date().getTime()
  };

  constructor(private activatedRoute: ActivatedRoute, private fbService: FirebaseService, private router: Router) 
  {}

  ngOnInit() 
  {}

  ngAfterViewInit(): void 
  {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.fbService.getHotel(id).subscribe(hotelData => {
        this.hotel = hotelData;
      });
    }
  }

  updateHotel() 
  {
    this.fbService.updateHotel(this.hotel).then(() => {
     this.router.navigate(['/menuhotel']);
    }, err => {
    });
  }
}