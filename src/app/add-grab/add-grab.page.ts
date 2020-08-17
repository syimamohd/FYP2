import { Component, OnInit, ViewChild } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {CatGrab} from '../model/CatGrab';
import { Http } from '@angular/http';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-grab',
  templateUrl: './add-grab.page.html',
  styleUrls: ['./add-grab.page.scss'],
})
export class AddGrabPage implements OnInit 
{
  validations_form: FormGroup;
  errorMessage: string = '';

  grab: CatGrab = {
    grabName: '',
    grabDetails: '',
    grabPrice:'',
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
      grabName: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      grabDetails: new FormControl('', Validators.compose([
        Validators.required
      ])),
      grabPrice: new FormControl('', Validators.compose([
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

  addGrab(value) 
  {
    this.grab.grabName=value.grabName;
    this.grab.grabDetails=value.grabDetails;
    this.grab.grabPrice=value.grabPrice;

    this.fbService.addGrab(this.grab).then(() => {
      this.router.navigateByUrl('/menugrab');
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
        this.grab.image=`https://ucarecdn.com/${uuid}/-/scale_crop/150x150/center/`;
				// this.mainuser.update({
				// 	profilePic: uuid
				// })
			})
		}

}
