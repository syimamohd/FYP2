import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CatGrab} from '../model/CatGrab';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-view-grab',
  templateUrl: './view-grab.page.html',
  styleUrls: ['./view-grab.page.scss'],
})

export class ViewGrabPage implements OnInit, AfterViewInit 
{
  //note properties
  grab: CatGrab = {
    grabName: '',
    grabDetails: '',
    grabPrice: ''
    // createdAt: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private fbService: FirebaseService, private router: Router) { }

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

  deleteGrab() 
  {
    this.fbService.deleteGrab(this.grab.id).then(() => {
      this.router.navigateByUrl('/');
    }, err => {
    });
  }

}
