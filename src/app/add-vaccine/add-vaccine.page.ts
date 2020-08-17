import { Component, OnInit, ViewChild } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {CatVaccine} from '../model/CatVaccine';
import { Http } from '@angular/http';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-vaccine',
  templateUrl: './add-vaccine.page.html',
  styleUrls: ['./add-vaccine.page.scss'],
})
export class AddVaccinePage implements OnInit 
{
  validations_form: FormGroup;
  errorMessage: string = '';

  vaccine: CatVaccine = {
    vaccineName: '',
    vaccineDetails: '',
    vaccinePrice:'',
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
      vaccineName: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      vaccineDetails: new FormControl('', Validators.compose([
        Validators.required
      ])),
      vaccinePrice: new FormControl('', Validators.compose([
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

  addVaccine(value) 
  {
    this.vaccine.vaccineName=value.vaccineName;
    this.vaccine.vaccineDetails=value.vaccineDetails;
    this.vaccine.vaccinePrice=value.vaccinePrice;

    this.fbService.addVaccine(this.vaccine).then(() => {
      this.router.navigateByUrl('/menuvaccine');
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
        this.vaccine.image=`https://ucarecdn.com/${uuid}/-/scale_crop/150x150/center/`;
				// this.mainuser.update({
				// 	profilePic: uuid
				// })
			})
	}
}
