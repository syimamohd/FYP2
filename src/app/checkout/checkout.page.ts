import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PurchasedItem} from '../model/PurchasedItem';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertController } from '@ionic/angular';

import { CartService } from './../services/cart.service';
import { ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { BehaviorSubject } from 'rxjs';
 
@Component({
  selector: 'app-checkout',
  templateUrl: 'checkout.page.html',
  styleUrls: ['checkout.page.scss']
})

export class CheckoutPage implements OnInit //, AfterViewInit
{
  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false;
  isCustomer: boolean = true;
  productPic: string;

  item: PurchasedItem = {
    customerName: '',
    contactNumber: '',
    address: ''
  };
 
  constructor
  (
    private cartService: CartService, 
    private modalCtrl: ModalController,
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
      // this.profilePic = event.profilePic
      this.isAdmin= event.isAdmin
      this.isCustomer= event.isCustomer
    })
  }
 
  ngOnInit():void 
  {
    //this.product = this.cartService.getProducts();
    
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

  submitPurchasedItem() 
  {
    this.fbService.submitPurchasedItem(this.item).then(() => 
    {

      this.presentAlert('Done!', 'You have purchased item. We will deliver soon!')

      this.router.navigateByUrl('/menuproduct');
    }, err => {
    })

  }
 
  // ngAfterViewInit(): void 
  // {
  //   const id = this.activatedRoute.snapshot.paramMap.get('id');
  //   if (id) {
  //     this.fbService.getProduct(id).subscribe(productData => {
  //       this.product = productData;
  //     });
  //   }
  // }


}
