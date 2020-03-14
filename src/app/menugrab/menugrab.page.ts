import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CatGrab} from '../model/CatGrab';
//call the page that has crud operaions in firebase.service
import {FirebaseService} from '../services/firebase.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-menugrab',
  templateUrl: './menugrab.page.html',
  styleUrls: ['./menugrab.page.scss'],
})

export class MenugrabPage implements OnInit 
{
  private catGrab: Observable<CatGrab[]>;
  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false;
  isCustomer: boolean = true;

  constructor(private fbService: FirebaseService,
    private afs: AngularFirestore,
    private user: UserService, 
    private storage: NativeStorage) 
    {
      
    this.mainuser = afs.doc(`users/${user.getUID()}`)
    this.sub = this.mainuser.valueChanges().subscribe(event => 
      {
		
			this.username = event.username
      // this.profilePic = event.profilePic
      this.isAdmin= event.isAdmin
      this.isCustomer= event.isCustomer
		})
    }

  ngOnInit(): void 
  {
    this.catGrab = this.fbService.getGrabs();

    this.storage.setItem('username', this.username);
    this.storage.setItem('isAdmin', this.isAdmin);
    this.storage.setItem('isCustomer', this.isCustomer);
  }

}
