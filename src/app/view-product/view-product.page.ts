import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CatProduct} from '../model/CatProduct';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.page.html',
  styleUrls: ['./view-product.page.scss'],
})

export class ViewProductPage implements OnInit, AfterViewInit 
{
  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false;
  isCustomer: boolean = true;
  productPic: string;

  product: CatProduct = {
    productName: '',
    productDetails: '',
    productPrice: null,
    quantity: 0,
    image:''
    // createdAt: ''
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

  ngAfterViewInit(): void 
  {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.fbService.getProduct(id).subscribe(productData => {
        this.product = productData;
      });
    }
  }

  deleteProduct() 
  {
    this.fbService.deleteProduct(this.product.id).then(() => {
      this.router.navigateByUrl('/menuproduct');
    }, err => {
    });
  }

}
