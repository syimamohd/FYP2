import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CatGrab} from '../model/CatGrab';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component
({
  selector: 'app-update-grab',
  templateUrl: './update-grab.page.html',
  styleUrls: ['./update-grab.page.scss'],
})

export class UpdateGrabPage implements OnInit, AfterViewInit 
{
  grab: CatGrab = {
    grabName: '',
    grabDetails: '',
    grabPrice:''
    // createdAt: new Date().getTime()
  };

  constructor(private activatedRoute: ActivatedRoute, private fbService: FirebaseService, private router: Router) 
  {}

  ngOnInit() 
  {}

  ngAfterViewInit(): void 
  {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.fbService.getGrab(id).subscribe(grabData => {
        this.grab = grabData;
      });
    }
  }

  updateGrab() 
  {
    this.fbService.updateGrab(this.grab).then(() => {
     this.router.navigate(['/menugrab']);
    }, err => {
    });
  }
}