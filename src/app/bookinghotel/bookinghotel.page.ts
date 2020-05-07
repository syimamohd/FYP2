import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {BookingHotel} from '../model/BookingHotel';
import { AlertController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
<<<<<<< HEAD

=======
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3

@Component({
  selector: 'app-bookinghotel',
  templateUrl: './bookinghotel.page.html',
  styleUrls: ['./bookinghotel.page.scss'],
})

export class BookinghotelPage implements OnInit 
{
<<<<<<< HEAD
=======
  myform: FormGroup;

>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3
  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false;
  isCustomer: boolean = true;
  today = new Date() ;
  todate : string;

    bookinghotel: BookingHotel = {
      customerName: '',
      contactNumber: '',
      catName: '',
      remark: '',
      checkInDate: '',
      checkOutDate: '',
      timeIn: '',
      timeOut: ''
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
<<<<<<< HEAD
=======
    // this.myform = new FormGroup
    // ({
    //   customerName: new FormControl('',Validators.required),
    //   contactNumber: new FormControl('',Validators.required),
    //   catName: new FormControl('',[Validators.required, Validators.maxLength(20)]),
    // })

>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3
    this.mainuser = afs.doc(`users/${user.getUID()}`)
    this.sub = this.mainuser.valueChanges().subscribe(event => 
      {
		
			this.username = event.username
      // this.profilePic = event.profilePic
      this.isAdmin= event.isAdmin
      this.isCustomer= event.isCustomer
		})
  }

  ngOnInit(): void 
  {
    this.today.setDate(this.today.getDate() + 3);
    this.todate = this.today.toISOString().substr(0, 10);
    
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

  submitBookingHotel() 
  {
    this.fbService.submitBookingHotel(this.bookinghotel).then(() => 
    {

      this.presentAlert('Done!', 'Your booking was created!')

      this.router.navigateByUrl('/menuhotel');
    }, err => {
    })

  }

}