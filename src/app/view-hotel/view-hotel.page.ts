import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CatHotel} from '../model/CatHotel';
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
<<<<<<< HEAD
    hotelPrice: ''
=======
    hotelPrice: '',
    image:''
>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3
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
