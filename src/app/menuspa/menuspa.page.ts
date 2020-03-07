import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CatSpa} from '../model/CatSpa';
//call the page that has crud operaions in firebase.service
import {FirebaseService} from '../services/firebase.service';


@Component({
  selector: 'app-menuspa',
  templateUrl: './menuspa.page.html',
  styleUrls: ['./menuspa.page.scss'],
})

export class MenuspaPage implements OnInit 
{
  private catSpa: Observable<CatSpa[]>;
  constructor(private fbService: FirebaseService) {}

  ngOnInit(): void 
  {
    this.catSpa = this.fbService.getSpas();
  }

}
