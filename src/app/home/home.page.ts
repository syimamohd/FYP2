import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs';
import {Note} from '../modal/Note';
//call the page that has crud operaions in firebase.service
import {FirebaseService} from '../services/firebase.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit
{
  private notes: Observable<Note[]>;
  constructor(private fbService: FirebaseService) {}

  ngOnInit(): void 
  {
    this.notes = this.fbService.getNotes();
  }

}
