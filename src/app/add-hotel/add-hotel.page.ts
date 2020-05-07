<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit,  ViewChild } from '@angular/core';
import { Http } from '@angular/http';
>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {CatHotel} from '../model/CatHotel';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.page.html',
  styleUrls: ['./add-hotel.page.scss'],
})
export class AddHotelPage implements OnInit 
{
    hotel: CatHotel = {
    hotelName: '',
    hotelDetails: '',
<<<<<<< HEAD
    hotelPrice:''
    // createdAt: new Date().getTime()
  };

=======
    hotelPrice:'',
    image:''
    // createdAt: new Date().getTime()
  };

  @ViewChild('fileBtn', {static: false}) fileBtn: 
  {
		nativeElement: HTMLInputElement
  }

>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3
  constructor(
      private activatedRoute: ActivatedRoute,
      private fbService: FirebaseService,
      private toastCtrl: ToastController,
<<<<<<< HEAD
      private router: Router
  ) { }
=======
      private router: Router,
      private http: Http  ) { }
>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3

  ngOnInit() {
  }

  addNote() 
  {
    this.fbService.addHotel(this.hotel).then(() => {
<<<<<<< HEAD
      this.router.navigateByUrl('/');
=======
      this.router.navigateByUrl('/menuhotel');
>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3
    }, err => {
    });
  }

<<<<<<< HEAD
=======
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

>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3
}
