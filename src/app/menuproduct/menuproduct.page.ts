import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {CatProduct} from '../model/CatProduct';
import {FirebaseService} from '../services/firebase.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { CartService } from './../services/cart.service';
import { ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-menuproduct',
  templateUrl: './menuproduct.page.html',
  styleUrls: ['./menuproduct.page.scss'],
})
export class MenuproductPage implements OnInit, AfterViewInit 
{
  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false;
  isCustomer: boolean = true;
  productPic: string

  private catProduct: Observable<CatProduct[]>;

  product: CatProduct = {
    productName: '',
    productDetails: '',
    productPrice: 0,
    quantity: 0
   
  };

  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
 
  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  constructor
  (
    
    private cartService: CartService, 
    private modalCtrl: ModalController,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fbService: FirebaseService,
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
    this.catProduct = this.fbService.getProducts();
    // this.cart = this.cartService.getCart();
    // this.cartItemCount = this.cartService.getCartItemCount();

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

  // addToCart(product) 
  // {
  //   this.cartService.addProduct(product);
  //   this.animateCSS('tada');
  // }

  // minusToCart(product) 
  // {
  //   this.cartService.minusProduct(product);
  //   this.animateCSS('tada');
  // }
 
  // async openCart() 
  // {
  //   this.animateCSS('bounceOutLeft', true);
 
  //   let modal = await this.modalCtrl.create({
  //     component: CartModalPage,
  //     cssClass: 'cart-modal'
  //   });
  //   modal.onWillDismiss().then(() => {
  //     this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
  //     this.animateCSS('bounceInLeft');
  //   });
  //   modal.present();
  // }
 
  // animateCSS(animationName, keepAnimated = false) 
  // {
  //   const node = this.fab.nativeElement;
  //   node.classList.add('animated', animationName)
    
  //   //https://github.com/daneden/animate.css
  //   function handleAnimationEnd() {
  //     if (!keepAnimated) {
  //       node.classList.remove('animated', animationName);
  //     }
  //     node.removeEventListener('animationend', handleAnimationEnd)
  //   }
  //   node.addEventListener('animationend', handleAnimationEnd)
  // }

}
