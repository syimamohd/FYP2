import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {BookingVacc} from '../model/BookingVacc';
import { AlertController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-bookingvacc',
  templateUrl: './bookingvacc.page.html',
  styleUrls: ['./bookingvacc.page.scss'],
})
export class BookingvaccPage implements OnInit 
{
  
    sub: any;
    username: string;
    mainuser: AngularFirestoreDocument;
    isAdmin: boolean = false;
    isCustomer: boolean = true;

    bookingvacc: BookingVacc = {
      customerName: '',
      contactNumber: '',
      catName: '',
      remark: '',
      date: '',
      time: ''
      // catFood: Selection;
    // createdAt: new Date().getTime()
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private fbService: FirebaseService,
    private afs: AngularFirestore,
    private user: UserService, 
    private storage: NativeStorage,
    private toastCtrl: ToastController,
    private router: Router,
    private alertController: AlertController,
  )
  {
    this.mainuser = afs.doc(`users/${user.getUID()}`)
    this.sub = this.mainuser.valueChanges().subscribe(event => 
      {
		
			this.username = event.username
      // this.profilePic = event.profilePic
      this.isAdmin= event.isAdmin
      this.isCustomer= event.isCustomer
		})
  }

  ngOnInit() : void
  {
    this.storage.setItem('username', this.username);
    this.storage.setItem('isAdmin', this.isAdmin);
    this.storage.setItem('isCustomer', this.isCustomer);
  }


  async presentAlert(title: string, content: string) 
  {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})

		await alert.present()
	}

  submitBookingVacc() 
  {
    this.fbService.submitBookingVacc(this.bookingvacc).then(() => 
    {
      this.presentAlert('Done!', 'Your booking was created!')

      this.router.navigateByUrl('/menuvaccine');

    }, err => {
    });
  }

}

