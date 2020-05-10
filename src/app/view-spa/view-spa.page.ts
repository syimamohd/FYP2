import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CatSpa} from '../model/CatSpa';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-view-spa',
  templateUrl: './view-spa.page.html',
  styleUrls: ['./view-spa.page.scss'],
})

export class ViewSpaPage implements OnInit, AfterViewInit 
{
  //note properties
  spa: CatSpa = {
    spaName: '',
    spaDetails: '',
    spaPrice: '',
    image:''
    // createdAt: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private fbService: FirebaseService, private router: Router) { }

  ngOnInit() 
  {}

  ngAfterViewInit(): void 
  {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.fbService.getSpa(id).subscribe(spaData => {
        this.spa = spaData;
      });
    }
  }

  deleteSpa() 
  {
    this.fbService.deleteSpa(this.spa.id).then(() => {
      this.router.navigateByUrl('/menuspa');
    }, err => {
    });
  }

}
