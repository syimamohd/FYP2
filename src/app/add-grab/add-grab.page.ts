import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {CatGrab} from '../model/CatGrab';

@Component({
  selector: 'app-add-grab',
  templateUrl: './add-grab.page.html',
  styleUrls: ['./add-grab.page.scss'],
})
export class AddGrabPage implements OnInit 
{
  grab: CatGrab = {
    grabName: '',
    grabDetails: '',
    grabPrice:''
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

  addGrab() 
  {
    this.fbService.addGrab(this.grab).then(() => {
      this.router.navigateByUrl('/');
    }, err => {
    });
  }

}
