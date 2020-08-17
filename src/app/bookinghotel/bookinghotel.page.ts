import { Component, OnInit } from '@angular/core';
import { FirebaseService} from '../services/firebase.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { ActivatedRoute, Router} from '@angular/router';
import { ToastController} from '@ionic/angular';
import { BookingHotel} from '../model/BookingHotel';
import { AlertController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import {CatHotel} from '../model/CatHotel';

@Component({
  selector: 'app-bookinghotel',
  templateUrl: './bookinghotel.page.html',
  styleUrls: ['./bookinghotel.page.scss'],
})

export class BookinghotelPage implements OnInit 
{
  validations_form: FormGroup;
  errorMessage: string = '';
  //doBook: any;
  //book: {} = {};
  
  //form: FormGroup; 
  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false;
  isCustomer: boolean = true;
  today = new Date() ;
  todate : string;
  
    bookinghotel: BookingHotel = {
      hotelid:'',
      customerName: '',
      contactNumber: '',
      catName: '',
      remark: '',
      checkInDate: '',
      checkOutDate: '',
      timeIn: '',
      timeOut: ''
      };
      
      hotel: CatHotel = {
        hotelName: '',
        hotelDetails: '',
        hotelPrice: '',
        image:''
        // createdAt: ''
      };


    constructor
    (
      private activatedRoute: ActivatedRoute,
      private fbService: FirebaseService,
      private afs: AngularFirestore,
      private user: UserService, 
      private auth: AngularFireAuth,
      private storage: NativeStorage,
      private toastCtrl: ToastController,
      private router: Router,
      private alertController: AlertController,
      private formBuilder: FormBuilder
  ) 
  {

    this.mainuser = afs.doc(`users/${user.getUID()}`)
    this.sub = this.mainuser.valueChanges().subscribe(event => 
      {
		
			this.username = event.username     
      this.isAdmin= event.isAdmin
      this.isCustomer= event.isCustomer
		})
  }

  ngOnInit()
  {
    //this.bookinghotel.hotelid = this.activatedRoute.snapshot.paramMap.get('hotelid');
    //console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    //console.log(this.activatedRoute.snapshot.params.id);
    // this.activatedRoute.params.subscribe((params) => {
    //   let id = params.get('id');

  //     this.activatedRoute.params.subscribe((params) => {
  //       const id: string =  params.id;
    
  //     console.log(id);
  // });

    this.validations_form = this.formBuilder.group
    ({
      customerName: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      contactNumber: new FormControl('', Validators.compose([
        Validators.required
      ])),
      catName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      remark: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      checkInDate: new FormControl('', Validators.compose([
        Validators.required
      ])),
      checkOutDate: new FormControl('', Validators.compose([
        Validators.required
      ])),
      timeIn: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      timeOut: new FormControl('', Validators.compose([
        Validators.required
      ])),
      
    });

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

  
 submitBookingHotel(value) 
  {
    //console.log(this.bookinghotel.hotelid);

    this.bookinghotel.customerName=value.customerName;
    this.bookinghotel.catName=value.catName;
    this.bookinghotel.contactNumber=value.contactNumber;
    this.bookinghotel.remark=value.remark;
    this.bookinghotel.checkInDate=value.checkInDate;
    this.bookinghotel.checkOutDate=value.checkOutDate;
    this.bookinghotel.timeIn=value.timeIn;
    this.bookinghotel.timeOut=value.timeOut;

    //this.bookinghotel.hoteltype==this.hotel.hotelName;

    this.fbService.submitBookingHotel(this.bookinghotel).then(() => 
    {
      this.presentAlert('Done!', 'Your booking was created!')

      this.router.navigateByUrl('/menuhotel');
    }, err => {
    })

  }

  ionViewWillEnter()
  {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {

      this.fbService.getHotel(id).subscribe(hotelData => {

        this.hotel = hotelData;


      });
    }
  }  

 
}
