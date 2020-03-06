import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CatVaccine} from '../modal/CatVaccine';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-view-vaccine',
  templateUrl: './view-vaccine.page.html',
  styleUrls: ['./view-vaccine.page.scss'],
})

export class ViewVaccinePage implements OnInit, AfterViewInit 
{
  //note properties
  vaccine: CatVaccine = {
    vaccineName: '',
    vaccineDetails: '',
    vaccinePrice: ''
    // createdAt: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private fbService: FirebaseService, private router: Router) { }

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

  deleteVaccine() 
  {
    this.fbService.deleteVaccine(this.vaccine.id).then(() => {
      this.router.navigateByUrl('/');
    }, err => {
    });
  }

}

