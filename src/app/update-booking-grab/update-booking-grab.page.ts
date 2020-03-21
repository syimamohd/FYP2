import {AfterViewInit, Component, OnInit} from '@angular/core';
import {BookingGrab} from '../model/BookingGrab';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-update-booking-grab',
  templateUrl: './update-booking-grab.page.html',
  styleUrls: ['./update-booking-grab.page.scss'],
})
export class UpdateBookingGrabPage implements OnInit, AfterViewInit  
{

  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false;
  isCustomer: boolean = true;
  profilePic: string
  contact: string;
  address: string;

  bookinggrab: BookingGrab = 
  {
    customerName: '',
    contactNumber: '',
    catName: '',
    remark: '',
    date: '',
    time: ''
  };

  constructor
  (
    private activatedRoute: ActivatedRoute, 
    private fbService: FirebaseService, 
    private router: Router,
    private afs: AngularFirestore,
    private user: UserService, 
    private storage: NativeStorage
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

  ngOnInit() 
  {
    this.storage.setItem('username', this.username);
    this.storage.setItem('isAdmin', this.isAdmin);
    this.storage.setItem('isCustomer', this.isCustomer);
    this.storage.setItem('contact', this.contact);
    this.storage.setItem('address', this.address);
  }

  ngAfterViewInit(): void 
  {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.fbService.getGrabBooking(id).subscribe(grabBookingData => {
        this.bookinggrab = grabBookingData;
      });
    }
  }

  updateBookingGrab() 
  {
    this.fbService.updateBookingGrab(this.bookinggrab).then(() => {
     this.router.navigate(['/view-profile']);
    }, err => {
    });
  }

}
