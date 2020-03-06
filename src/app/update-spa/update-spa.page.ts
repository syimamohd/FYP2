import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CatSpa} from '../modal/CatSpa';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component
({
  selector: 'app-update-spa',
  templateUrl: './update-spa.page.html',
  styleUrls: ['./update-spa.page.scss'],
})

export class UpdateSpaPage implements OnInit, AfterViewInit 
{
  spa: CatSpa = {
    spaName: '',
    spaDetails: '',
    spaPrice:''
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
      this.fbService.getSpa(id).subscribe(spaData => {
        this.spa = spaData;
      });
    }
  }

  updateSpa() 
  {
    this.fbService.updateSpa(this.spa).then(() => {
     this.router.navigate(['/']);
    }, err => {
    });
  }
}