import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CatProduct} from '../model/CatProduct';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Http } from '@angular/http';
import { AlertController } from '@ionic/angular';

@Component
({
  selector: 'app-update-product',
  templateUrl: './update-product.page.html',
  styleUrls: ['./update-product.page.scss'],
})

export class UpdateProductPage implements OnInit, AfterViewInit 
{
  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false;
  isCustomer: boolean = true;
  productPic: string;
  busy: boolean = false;

  product: CatProduct = {
    productName: '',
    productDetails: '',
    productPrice: null,
    quantity: null,
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
    private activatedRoute: ActivatedRoute, 
    private fbService: FirebaseService, 
    private router: Router,
    private afs: AngularFirestore,
    private user: UserService, 
    private storage: NativeStorage,
    private alertController: AlertController
  ) 
  {
    this.mainuser = afs.doc(`users/${user.getUID()}`)
    this.sub = this.mainuser.valueChanges().subscribe(event => 
    {
      this.username = event.username
      //this.profilePic = event.profilePic
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

  ngAfterViewInit(): void 
  {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.fbService.getProduct(id).subscribe(productData => {
        this.product = productData;
      });
    }
  }

  async updateProduct() 
  {
    this.fbService.updateProduct(this.product).then(() => {
     this.router.navigate(['/menuproduct']);
    }, err => {
    });

    await this.presentAlert('Done!', 'Details was updated!')
  }

  ngOnDestroy() 
  {
    this.sub.unsubscribe()
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

  async presentAlert(title: string, content: string) 
  {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})

		await alert.present()
	}

}