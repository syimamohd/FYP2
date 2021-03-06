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
import { CatProduct } from '../model/CatProduct';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import {CatHotel} from '../model/CatHotel';

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
  //booking: any;

  bookinghotel: BookingHotel = 
  {
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
    address: '',
    quantity: 0,
    totalPrice:0,
    paymenttype:''

  };

  product: CatProduct =
  {
    
    productName: '',
    productDetails: '',
    productPrice: 0,
    quantity: 0,
    image: ''
    
  }
  
  hotel: CatHotel = {
    hotelName: '',
    hotelDetails: '',
    hotelPrice: '',
    image:''
    // createdAt: ''
  };

  catProduct: Observable<CatProduct[]>;
  catHotel: Observable<CatHotel[]>;

  //qr code
  // qrData = null;
  // createdCode = null;
  // scannedCode = null;

  constructor
  (
    public http: Http,
    private fbService: FirebaseService,
    private afs: AngularFirestore,
    private user: UserService, 
    private storage: NativeStorage,
    private router: Router,
    private alertController: AlertController,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private barcodeScanner: BarcodeScanner
    ) 

    { 

      this.mainuser = afs.doc(`users/${user.getUID()}`)
      this.sub = this.mainuser.valueChanges().subscribe((event) => 
        {
          this.username = event.username
          this.isAdmin= event.isAdmin
          this.isCustomer = event.isCustomer
          this.profilePic = event.profilePic
          // this.contact = event.contact
          // this.address = event.address
          // this.booking = Object.values(event.booking)
          // console.log(this.booking);
        })
    }

    // createCode()
    // {
    //     this.createdCode = this.qrData;
    // }

    // scanCode()
    // {
    //     this.barcodeScanner.scan().then(barcodeData => {
    //       this.scannedCode = barcodeData.text;
    //     })
    // }
  
  ngOnDestroy() 
  {
		this.sub.unsubscribe()
	}

  ngOnInit() 
  {
    //this.bookinghotel.hotelid = this.activatedRoute.snapshot.paramMap.get('hotelid');

    this.hotelBooking = this.fbService.getHotelBookings();
    this.spaBooking = this.fbService.getSpaBookings();
    this.vaccBooking = this.fbService.getVaccBookings();
    this.grabBooking = this.fbService.getGrabBookings();
    this.purchasedItem = this.fbService.getPurchasedItems();
    //this.catHotel = this.fbService.getHotels();
    //this.catProduct = this.fbService.getProducts();

    this.storage.setItem('username', this.username);
    this.storage.setItem('isAdmin', this.isAdmin);
    this.storage.setItem('isCustomer', this.isCustomer);
    this.storage.setItem('contact', this.contact);
    this.storage.setItem('address', this.address);
    //this.storage.setItem('booking', this.booking);
  }

  ngAfterViewInit(): void 
  {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) 
    {

      this.fbService.getProduct(id).subscribe(productData => {

        this.product = productData;

        this.fbService.getPurchasedItem(id).subscribe(itemData => {
          this.item = itemData;
        });

      });

      

    }
  }

  ionViewWillEnter()
  {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) 
    {
      this.fbService.getHotel(id).subscribe(hotelData => {

        this.hotel = hotelData;

        this.fbService.getHotelBooking(id).subscribe(hotelBookingData => {

          this.bookinghotel = hotelBookingData;
        });  
      });
    }
  }  
}
