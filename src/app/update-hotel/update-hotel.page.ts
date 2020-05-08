import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CatHotel} from '../model/CatHotel';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';
import { Http } from '@angular/http';

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

  @ViewChild('fileBtn', {static: false}) fileBtn: 
  {
		nativeElement: HTMLInputElement
  }

  constructor(private activatedRoute: ActivatedRoute, private fbService: FirebaseService, private router: Router, private http: Http ) 
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

  updateProfilePic() 
  {
  this.fileBtn.nativeElement.click()
}

  uploadPic(event) 
  {
    const files = event.target.files

    const data = new FormData()
    data.append('file', files[0])
    data.append('UPLOADCARE_STORE', '1')
    data.append('UPLOADCARE_PUB_KEY', '00f055ada25dcea69cac')

    
    this.http.post('https://upload.uploadcare.com/base/', data)
    .subscribe(event => {
      const uuid = event.json().file
      this.hotel.image=`https://ucarecdn.com/${uuid}/-/scale_crop/150x150/center/`;
      // this.mainuser.update({
      // 	profilePic: uuid
      // })
    })
  }
}