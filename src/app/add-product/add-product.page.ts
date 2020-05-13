import { Component, OnInit, ViewChild } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {CatProduct} from '../model/CatProduct';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Http } from '@angular/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit 
{
  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false;
  isCustomer: boolean = true;

  product: CatProduct = {
    productName: '',
    productDetails: '',
    productPrice: null,
    quantity: null
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
      private router: Router,
      private afs: AngularFirestore,
      private user: UserService, 
      private storage: NativeStorage,
      private http: Http 
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

  ngOnInit(): void 
  {
    this.storage.setItem('username', this.username);
    this.storage.setItem('isAdmin', this.isAdmin);
    this.storage.setItem('isCustomer', this.isCustomer);
  }

  addProduct() 
  {
    this.fbService.addProduct(this.product).then(() => {
      this.router.navigateByUrl('/menuproduct');
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
        this.product.image=`https://ucarecdn.com/${uuid}/-/scale_crop/150x150/center/`;
				// this.mainuser.update({
				// 	profilePic: uuid
				// })
			})
		}

}
