import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CatSpa} from '../modal/CatSpa';
//call the page that has crud operaions in firebase.service
import {FirebaseService} from '../services/firebase.service';


@Component({
  selector: 'app-menuspa-admin',
  templateUrl: './menuspa-admin.page.html',
  styleUrls: ['./menuspa-admin.page.scss'],
})

export class MenuspaAdminPage implements OnInit 
{
  private catSpa: Observable<CatSpa[]>;
  constructor(private fbService: FirebaseService) {}

  ngOnInit(): void 
  {
    this.catSpa = this.fbService.getSpas();
  }

}
