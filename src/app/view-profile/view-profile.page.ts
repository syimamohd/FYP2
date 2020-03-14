import { AfterViewInit,Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import {FirebaseService} from '../services/firebase.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingHotel} from '../model/BookingHotel';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})

export class ViewProfilePage implements OnInit //, AfterViewInit  
{
  private hotelBooking: Observable<BookingHotel[]>;
  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false;
  isCustomer: boolean = true;
  userPosts
	posts
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

  constructor
  (
    private activatedRoute: ActivatedRoute, 
    private fbService: FirebaseService,
    private afs: AngularFirestore,
    private user: UserService, 
    private storage: NativeStorage,
    private router: Router
    ) 
  { 
    this.mainuser = afs.doc(`users/${user.getUID()}`)
    this.sub = this.mainuser.valueChanges().subscribe(event => 
      {
        this.username = event.username
        this.isAdmin= event.isAdmin
        this.isCustomer = event.isCustomer
        this.posts = event.posts
        this.profilePic = event.profilePic
        this.contact = event.contact
        this.address = event.address
		})
  }
  
  ngOnDestroy() 
  {
		this.sub.unsubscribe()
	}

  // goTo(postID: string) 
  // {

	// 	this.router.navigate(['/tabs/post/' + postID.split('/')[0]])
  // }
  
  // ngAfterViewInit(): void 
  // {
  //   const id = this.activatedRoute.snapshot.paramMap.get('id');
  //   if (id) {
  //     this.fbService.getHotelBooking(id).subscribe(hotelBookingData => {
  //       this.bookinghotel = hotelBookingData;
  //     });
  //   }
  // }

  ngOnInit() 
  {
    this.hotelBooking = this.fbService.getHotelBookings();

    this.storage.setItem('username', this.username);
    this.storage.setItem('isAdmin', this.isAdmin);
    this.storage.setItem('isCustomer', this.isCustomer);
    this.storage.setItem('contact', this.contact);
    this.storage.setItem('address', this.address);
  }


}
