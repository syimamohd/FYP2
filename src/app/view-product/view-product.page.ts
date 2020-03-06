import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CatProduct} from '../model/CatProduct';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.page.html',
  styleUrls: ['./view-product.page.scss'],
})

export class ViewProductPage implements OnInit, AfterViewInit 
{
  //note properties
  product: CatProduct = {
    productName: '',
    productDetails: '',
    productPrice: ''
    // createdAt: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private fbService: FirebaseService, private router: Router) { }

  ngOnInit() 
  {}

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
      this.router.navigateByUrl('/');
    }, err => {
    });
  }

}
