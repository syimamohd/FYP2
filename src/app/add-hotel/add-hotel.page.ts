import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {CatHotel} from '../model/CatHotel';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.page.html',
  styleUrls: ['./add-hotel.page.scss'],
})
export class AddHotelPage implements OnInit 
{
    validations_form: FormGroup;
    errorMessage: string = '';

    hotel: CatHotel = {
    hotelName: '',
    hotelDetails: '',
    hotelPrice:'',
    image:''
    // createdAt: new Date().getTime()
    };

  @ViewChild('fileBtn', {static: false}) fileBtn: 
  {
		nativeElement: HTMLInputElement
  }

  constructor
  (
      private activatedRoute: ActivatedRoute,
      private fbService: FirebaseService,
      private toastCtrl: ToastController,
      private alertController: AlertController,
      private router: Router,
      private http: Http,
      private formBuilder: FormBuilder  
  ) { }

  ngOnInit() 
  {
    this.validations_form = this.formBuilder.group
    ({
      hotelName: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      hotelDetails: new FormControl('', Validators.compose([
        Validators.required
      ])),
      hotelPrice: new FormControl('', Validators.compose([
        Validators.required
      ]))
      
    });
  }

  async presentAlert(title: string, content: string) {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})

		await alert.present()
  }
  
  addHotel(value) 
  {
    this.hotel.hotelName=value.hotelName;
    this.hotel.hotelDetails=value.hotelDetails;
    this.hotel.hotelPrice=value.hotelPrice;
  
    this.fbService.addHotel(this.hotel).then(() => {
      this.router.navigateByUrl('/menuhotel');
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
