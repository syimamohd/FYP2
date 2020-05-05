import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CatVaccine} from '../model/CatVaccine';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component
({
  selector: 'app-update-vaccine',
  templateUrl: './update-vaccine.page.html',
  styleUrls: ['./update-vaccine.page.scss'],
})

export class UpdateVaccinePage implements OnInit, AfterViewInit 
{
  vaccine: CatVaccine = {
    vaccineName: '',
    vaccineDetails: '',
    vaccinePrice:''
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
      this.fbService.getVaccine(id).subscribe(vaccineData => {
        this.vaccine = vaccineData;
      });
    }
  }

  updateVaccine() 
  {
    this.fbService.updateVaccine(this.vaccine).then(() => {
     this.router.navigate(['/menuvaccine']);
    }, err => {
    });
  }
}