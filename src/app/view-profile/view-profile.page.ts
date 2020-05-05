import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { FirebaseService } from '../services/firebase.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ActivatedRoute, Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { firestore } from 'firebase/app';
import { BookingHotel } from '../model/BookingHotel';
import { BookingSpa } from '../model/BookingSpa';
import { BookingVacc } from '../model/BookingVacc';
import { BookingGrab } from '../model/BookingGrab';
import { PurchasedItem } from '../model/PurchasedItem';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})

export class ViewProfilePage implements OnInit //, AfterViewInit  
{
  private hotelBooking: Observable<BookingHotel[]>;
  private spaBooking: Observable<BookingSpa[]>;
  private vaccBooking: Observable<BookingVacc[]>;
  private grabBooking: Observable<BookingGrab[]>;
  private purchasedItem: Observable<PurchasedItem[]>;

  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false;
  isCustomer: boolean = true;
  profilePic: string
  contact: string;
  address: string;
  
  bookinghotel: BookingHotel = 
  {
    customerName: '',
    contactNumber: '',
    catName: '',
    remark: '',
    checkInDate: '',
    checkOutDate: '',
    timeIn: '',
    timeOut: ''
  };

  bookingspa: BookingSpa =
  {
    customerName: '',
    contactNumber: '',
    catName: '',
    remark: '',
    date: '',
    time: ''
  };

  bookingvacc: BookingVacc =
  {
    customerName: '',
    contactNumber: '',
    catName: '',
    remark: '',
    date: '',
    time: ''
  };

  bookinggrab: BookingGrab =
  {
    customerName: '',
    contactNumber: '',
    catName: '',
    remark: '',
    date: '',
    time: ''
  };

  item: PurchasedItem =
  {
    customerName: '',
    contactNumber: '',
    address:''
  };

  constructor
  (
    public http: Http,
    private activatedRoute: ActivatedRoute, 
    private fbService: FirebaseService,
    private afs: AngularFirestore,
    private user: UserService, 
    private storage: NativeStorage,
    private router: Router,
    private alertController: AlertController
    ) 

    { 
      this.mainuser = afs.doc(`users/${user.getUID()}`)
      this.sub = this.mainuser.valueChanges().subscribe(event => 
        {
          this.username = event.username
          this.isAdmin= event.isAdmin
          this.isCustomer = event.isCustomer
          // this.posts = event.posts
          this.profilePic = event.profilePic
          this.contact = event.contact
          this.address = event.address
        })
    }
  
  ngOnDestroy() 
  {
		this.sub.unsubscribe()
	}

  ngOnInit() 
  {
    this.hotelBooking = this.fbService.getHotelBookings();
    this.spaBooking = this.fbService.getSpaBookings();
    this.vaccBooking = this.fbService.getVaccBookings();
    this.grabBooking = this.fbService.getGrabBookings();
    this.purchasedItem = this.fbService.getPurchasedItems();

    this.storage.setItem('username', this.username);
    this.storage.setItem('isAdmin', this.isAdmin);
    this.storage.setItem('isCustomer', this.isCustomer);
    this.storage.setItem('contact', this.contact);
    this.storage.setItem('address', this.address);
  }

}
