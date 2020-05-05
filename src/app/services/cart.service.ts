import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CatProduct} from '../model/CatProduct';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   amount: number;
// }

@Injectable({
  providedIn: 'root'
})
export class CartService 
{
//   data: Product[] = [
//     { id: 0, name: 'Pizza Salami', price: 8.99, amount: 0 },
//     { id: 1, name: 'Pizza Classic', price: 5.49, amount: 0 },
//     { id: 2, name: 'Sliced Bread', price: 4.99, amount: 0 },
//     { id: 3, name: 'Salad', price: 6.99, amount: 0 }
//   ];

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
  amount: null,
  id: null

};
 
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
 
  constructor() {}
 
  getProducts() 
  {
    return this.product;
  }
 
  getCart() 
  {
    return this.cart;
  }
 
  getCartItemCount() 
  {
    return this.cartItemCount;
  }
 
  addProduct(product) 
  {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amoun = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  minusProduct(product) 
  {
    let minus = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount -= 1;
        minus= true;
        break;
      }
    }
    if (!minus) {
      product.amoun = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  decreaseProduct(product) 
  {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) 
  {
    for (let [index, p] of this.cart.entries()) 
    {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}