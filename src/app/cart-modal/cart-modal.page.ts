import { CartService } from '../services/cart.service';
import {CatProduct} from '../model/CatProduct';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import {Observable} from 'rxjs';
 
@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit 
{
  product: CatProduct = {
    productName: '',
    productDetails:'',
    productPrice: 0,
    quantity: 0,
    image: '',
  };
 
  cart: CatProduct[] = [];
  private catProduct: Observable<CatProduct[]>;
 
  constructor(private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController) { }
 
  ngOnInit() 
  {
    this.cart = this.cartService.getCart();
  }
 
  decreaseCartItem(product) 
  {
    this.cartService.decreaseProduct(product);
  }
 
  increaseCartItem(product) 
  {
    this.cartService.addProduct(product);
  }
 
  removeCartItem(product) 
  {
    this.cartService.removeProduct(product);
  }
 
  getTotal() 
  {
    return this.cart.reduce((i, j) => i + j.productPrice * j.quantity, 0);
  }
 
  close() 
  {
    this.modalCtrl.dismiss();
  }
 
  async checkout() 
  {
    // Perfom PayPal or Stripe checkout process
 
    let alert = await this.alertCtrl.create({
      header: 'Thanks for your Order!',
      message: 'We will deliver your item as soon as possible',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
  }
}