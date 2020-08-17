import { Component, OnInit, ViewChild } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {Content} from '../model/Content';
import { Http } from '@angular/http';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.page.html',
  styleUrls: ['./add-content.page.scss'],
})
export class AddContentPage implements OnInit 
{
    validations_form: FormGroup;
    errorMessage: string = '';
    mainuser: AngularFirestoreDocument
    sub
    username: string
    contentPic: string
    busy: boolean = false
  
    content: Content = {
    contentDetails: '',
    title:'',
    contactDetails:'',
    contacttitle:'',
    image:''
    // createdAt: new Date().getTime()
    };
  
    @ViewChild('fileBtn', {static: false}) fileBtn: 
    {
      nativeElement: HTMLInputElement
    }

    constructor
    (
        private http: Http, 
		    private afs: AngularFirestore,
        private activatedRoute: ActivatedRoute,
        private fbService: FirebaseService,
        private toastCtrl: ToastController,
        private alertController: AlertController,
        private router: Router,
        private user: UserService,        
        private formBuilder: FormBuilder 
    ) 
    {
      this.mainuser = afs.doc(`users/${user.getUID()}`)
      this.sub = this.mainuser.valueChanges().subscribe(event => 
      {
        this.username = event.username
        this.contentPic = event.contentPic
        // this.contact = event.contact
        // this.address = event.address
      })
      
     
    }

  ngOnInit() 
  {
    this.validations_form = this.formBuilder.group
    ({
      title: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      contentDetails: new FormControl('', Validators.compose([
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

  addContent(value) 
  {
    this.content.title=value.title;
    this.content.contentDetails=value.contentDetails;

    this.fbService.addContent(this.content).then(() => {
      this.router.navigateByUrl('/home');
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
        //this.content.image=`https://ucarecdn.com/${uuid}/-/smart/1024x1024/`;
        this.content.image=`https://ucarecdn.com/${uuid}/-/scale_crop/150x150/center/`;
				// this.mainuser.update({
				// 	profilePic: uuid
				// })
			})
		}


}
