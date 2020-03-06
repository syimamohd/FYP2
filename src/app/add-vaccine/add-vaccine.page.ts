import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {CatVaccine} from '../modal/CatVaccine';

@Component({
  selector: 'app-add-vaccine',
  templateUrl: './add-vaccine.page.html',
  styleUrls: ['./add-vaccine.page.scss'],
})
export class AddVaccinePage implements OnInit 
{
  vaccine: CatVaccine = {
    vaccineName: '',
    vaccineDetails: '',
    vaccinePrice:''
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

  addVaccine() 
  {
    this.fbService.addVaccine(this.vaccine).then(() => {
      this.router.navigateByUrl('/');
    }, err => {
    });
  }

}
