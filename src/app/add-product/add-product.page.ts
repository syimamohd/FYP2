import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {CatProduct} from '../model/CatProduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit 
{
  product: CatProduct = {
    productName: '',
    productDetails: '',
    productPrice:''
    // createdAt: new Date().getTime()
  };

  constructor(
      private activatedRoute: ActivatedRoute,
      private fbService: FirebaseService,
      private toastCtrl: ToastController,
      private router: Router
  ) { }

  ngOnInit() {
  }

  addProduct() 
  {
    this.fbService.addProduct(this.product).then(() => {
      this.router.navigateByUrl('/');
    }, err => {
    });
  }

}
