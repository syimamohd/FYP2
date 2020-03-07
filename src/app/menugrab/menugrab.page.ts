import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CatGrab} from '../model/CatGrab';
//call the page that has crud operaions in firebase.service
import {FirebaseService} from '../services/firebase.service';


@Component({
  selector: 'app-menugrab',
  templateUrl: './menugrab.page.html',
  styleUrls: ['./menugrab.page.scss'],
})

export class MenugrabPage implements OnInit 
{
  private catGrab: Observable<CatGrab[]>;
  constructor(private fbService: FirebaseService) {}

  ngOnInit(): void 
  {
    this.catGrab = this.fbService.getGrabs();
  }

}
