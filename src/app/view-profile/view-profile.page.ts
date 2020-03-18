import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
// import { HTTP } from '@ionic-native/http/ngx';
import { Http } from '@angular/http';
import {Observable} from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import {FirebaseService} from '../services/firebase.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingHotel} from '../model/BookingHotel';
import { AlertController } from '@ionic/angular';
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})

export class ViewProfilePage implements OnInit //, AfterViewInit  
{
  // imageURL: string
	// desc: string
	// noFace: boolean = false
	
	// scaleCrop: string = '-/scale_crop/200x200'
	
	// effects = {
	// 	effect1: '',
	// 	effect2: '-/exposure/50/-/saturation/50/-/warmth/-30/',
	// 	effect3: '-/filter/vevera/150/',
	// 	effect4: '-/filter/carris/150/',
	// 	effect5: '-/filter/misiara/150/'
	// }
	
	// activeEffect: string = this.effects.effect1
	// busy: boolean = false

	// @ViewChild('fileButton',  {static: false}) fileButton

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

  // async createPost() 
  // {
	// 	this.busy = true

	// 	const image = this.imageURL
	// 	const activeEffect = this.activeEffect
	// 	const desc = this.desc

	// 	this.afs.doc(`users/${this.user.getUID()}`).update({
	// 		posts: firestore.FieldValue.arrayUnion(`${image}/${activeEffect}`)
	// 	})

	// 	this.afs.doc(`posts/${image}`).set({
	// 		desc,
	// 		author: this.user.getUsername(),
	// 		likes: [],
	// 		effect: activeEffect
	// 	})
		
	// 	this.busy = false
	// 	this.imageURL = ""
	// 	this.desc = ""

	// 	const alert = await this.alertController.create({
	// 		header: 'Done',
	// 		message: 'Your post was created!',
	// 		buttons: ['Cool!']
	// 	})

	// 	await alert.present()

	// 	this.router.navigate(['/tabs/feed'])
	// }

  // setSelected(effect: string) 
  // {
	// 	this.activeEffect = this.effects[effect]
	// }

  // uploadFile() 
  // {
	// 	this.fileButton.nativeElement.click()
	// }

  // fileChanged(event) 
  // {
		
	// 	this.busy = true

	// 	const files = event.target.files
		
	// 	const data = new FormData()
	// 	data.append('file', files[0])
	// 	data.append('UPLOADCARE_STORE', '1')
	// 	data.append('UPLOADCARE_PUB_KEY', 'ada5e3cb2da06dee6d82')
		
	// 	this.http.post('https://upload.uploadcare.com/base/', data)
	// 	.subscribe(event => {
	// 		console.log(event)
	// 		this.imageURL = event.json().file
	// 		this.busy = false
	// 		this.http.get(`https://ucarecdn.com/${this.imageURL}/detect_faces/`)
	// 		.subscribe(event => {
	// 			this.noFace = event.json().faces == 0
	// 		})
	// 	})
	// }

}
