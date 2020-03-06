import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CatHotel} from '../modal/CatHotel';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-view-hotel',
  templateUrl: './view-hotel.page.html',
  styleUrls: ['./view-hotel.page.scss'],
})

export class ViewHotelPage implements OnInit, AfterViewInit 
{
  //note properties
  hotel: CatHotel = {
    hotelName: '',
    hotelDetails: '',
    hotelPrice: ''
    // createdAt: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private fbService: FirebaseService, private router: Router) { }

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

  deleteHotel() 
  {
    this.fbService.deleteHotel(this.hotel.id).then(() => {
      this.router.navigateByUrl('/');
    }, err => {
    });
  }

}
