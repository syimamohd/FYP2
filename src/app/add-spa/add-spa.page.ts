import { Component, OnInit, ViewChild } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {CatSpa} from '../model/CatSpa';
import { Http } from '@angular/http';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-spa',
  templateUrl: './add-spa.page.html',
  styleUrls: ['./add-spa.page.scss'],
})
export class AddSpaPage implements OnInit 
{
  validations_form: FormGroup;
  errorMessage: string = '';

  spa: CatSpa = {
      spaName: '',
      spaDetails: '',
      spaPrice:'',
      image:''
    // createdAt: new Date().getTime()
  };

  @ViewChild('fileBtn', {static: false}) fileBtn: 
  {
		nativeElement: HTMLInputElement
  }

  constructor(
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
      spaName: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      spaDetails: new FormControl('', Validators.compose([
        Validators.required
      ])),
      spaPrice: new FormControl('', Validators.compose([
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

  addSpa(value) 
  {
    this.spa.spaName=value.spaName;
    this.spa.spaDetails=value.spaDetails;
    this.spa.spaPrice=value.spaPrice;

    this.fbService.addSpa(this.spa).then(() => {
      this.router.navigateByUrl('/menuspa');
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
        this.spa.image=`https://ucarecdn.com/${uuid}/-/scale_crop/150x150/center/`;
				// this.mainuser.update({
				// 	profilePic: uuid
				// })
			})
		}

}
