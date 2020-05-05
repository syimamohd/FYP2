import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Http } from '@angular/http';
import { Observable} from 'rxjs';
import { Content} from '../model/Content';
import { ActivatedRoute, Router} from '@angular/router';
import { FirebaseService} from '../services/firebase.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit
{
  private contentItem : Observable<Content[]>;

  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false;
  isCustomer: boolean = true;
  contentPic: string;

  constructor
  (
    public http: Http,
    private activatedRoute: ActivatedRoute, 
    private fbService: FirebaseService,
    private afs: AngularFirestore,
    private user: UserService, 
    private storage: NativeStorage,
    private router: Router
  
  ) 
  {
    this.mainuser = afs.doc(`users/${user.getUID()}`)
    this.sub = this.mainuser.valueChanges().subscribe(event => 
    {
      this.username = event.username
      //this.contentPic = event.contentPic
      this.isAdmin= event.isAdmin
      this.isCustomer= event.isCustomer
    })

    // this.mainuser = afs.doc(`contentItem/${user.getUID()}`)
    // this.sub = this.mainuser.valueChanges().subscribe(event => 
    //   {
    //     // this.username = event.username
    //     //this.contentPic = event.contentPic
    //     // this.isAdmin= event.isAdmin
    //     // this.isCustomer= event.isCustomer
    //   })
  
  }

  ngOnDestroy() 
  {
		this.sub.unsubscribe()
  }
  
  ngOnInit(): void 
  {
    this.contentItem = this.fbService.getContents();

    this.storage.setItem('username', this.username);
    this.storage.setItem('isAdmin', this.isAdmin);
    this.storage.setItem('isCustomer', this.isCustomer);
  }
  
  // ngOnInit(): void 
  // {
  //   this.notes = this.fbService.getNotes();
  // }

  //   onLogout() 
  //   {
  //     this.afAuth.logout;
  //     this.router.navigateByUrl('/login');
  // }

}
