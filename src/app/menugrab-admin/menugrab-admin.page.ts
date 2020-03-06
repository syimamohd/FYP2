import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CatGrab} from '../model/CatGrab';
//call the page that has crud operaions in firebase.service
import {FirebaseService} from '../services/firebase.service';


@Component({
  selector: 'app-menugrab-admin',
  templateUrl: './menugrab-admin.page.html',
  styleUrls: ['./menugrab-admin.page.scss'],
})

export class MenugrabAdminPage implements OnInit 
{
  private catGrab: Observable<CatGrab[]>;
  constructor(private fbService: FirebaseService) {}

  ngOnInit(): void 
  {
    this.catGrab = this.fbService.getGrabs();
  }

}
