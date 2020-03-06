import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
//call the page that has crud operaions in firebase.service
import {FirebaseService} from '../services/firebase.service';
import { CatVaccine } from '../model/CatVaccine';


@Component({
  selector: 'app-menuvaccine-admin',
  templateUrl: './menuvaccine-admin.page.html',
  styleUrls: ['./menuvaccine-admin.page.scss'],
})

export class MenuvaccineAdminPage implements OnInit 
{
  private catVaccine: Observable<CatVaccine[]>;
  constructor(private fbService: FirebaseService) {}

  ngOnInit(): void 
  {
    this.catVaccine = this.fbService.getVaccines();
  }

}
