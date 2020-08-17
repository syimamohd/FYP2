import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CatHotel} from '../model/CatHotel';
import {FirebaseService} from '../services/firebase.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-menuhotel',
  templateUrl: './menuhotel.page.html',
  styleUrls: ['./menuhotel.page.scss'],
})

export class MenuhotelPage implements OnInit 
{
  private catHotel: Observable<CatHotel[]>;

  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false;
  isCustomer: boolean = true;

  constructor
  (
    private fbService: FirebaseService,
    private afs: AngularFirestore,
    private user: UserService, 
    private storage: NativeStorage,
  )
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
    this.catHotel = this.fbService.getHotels();

    this.storage.setItem('username', this.username);
    this.storage.setItem('isAdmin', this.isAdmin);
    this.storage.setItem('isCustomer', this.isCustomer);
  }

  


}
