import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CatProduct} from '../model/CatProduct';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component
({
  selector: 'app-update-product',
  templateUrl: './update-product.page.html',
  styleUrls: ['./update-product.page.scss'],
})

export class UpdateProductPage implements OnInit, AfterViewInit 
{
  product: CatProduct = {
    productName: '',
    productDetails: '',
    productPrice:''
    // createdAt: new Date().getTime()
  };

  constructor(private activatedRoute: ActivatedRoute, private fbService: FirebaseService, private router: Router) 
  {}
  
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

  updateProduct() 
  {
    this.fbService.updateProduct(this.product).then(() => {
     this.router.navigate(['/']);
    }, err => {
    });
  }
}