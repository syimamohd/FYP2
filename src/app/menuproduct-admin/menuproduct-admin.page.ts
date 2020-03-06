import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CatProduct} from '../model/CatProduct';
//call the page that has crud operaions in firebase.service
import {FirebaseService} from '../services/firebase.service';


@Component({
  selector: 'app-menuproduct-admin',
  templateUrl: './menuproduct-admin.page.html',
  styleUrls: ['./menuproduct-admin.page.scss'],
})

export class MenuproductAdminPage implements OnInit 
{
  private catProduct: Observable<CatProduct[]>;
  constructor(private fbService: FirebaseService) {}

  ngOnInit(): void 
  {
    this.catProduct = this.fbService.getProducts();
  }

}
