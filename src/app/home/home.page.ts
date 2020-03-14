import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {Note} from '../model/Note';
//call the page that has crud operaions in firebase.service
import {FirebaseService} from '../services/firebase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit
{
  private notes: Observable<Note[]>;
  constructor(private fbService: FirebaseService,public afAuth: AngularFireAuth,public router: Router) {}

  ngOnInit(): void 
  {
    this.notes = this.fbService.getNotes();
  }

//   onLogout() 
//   {
//     this.afAuth.logout;
//     this.router.navigateByUrl('/login');
// }

}
