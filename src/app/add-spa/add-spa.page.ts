import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {CatSpa} from '../modal/CatSpa';

@Component({
  selector: 'app-add-spa',
  templateUrl: './add-spa.page.html',
  styleUrls: ['./add-spa.page.scss'],
})
export class AddSpaPage implements OnInit 
{
  spa: CatSpa = {
      spaName: '',
      spaDetails: '',
      spaPrice:''
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

  addSpa() 
  {
    this.fbService.addSpa(this.spa).then(() => {
      this.router.navigateByUrl('/');
    }, err => {
    });
  }

}
