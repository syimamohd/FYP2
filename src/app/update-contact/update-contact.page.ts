import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Content} from '../model/Content';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component
({
  selector: 'app-update-contact',
  templateUrl: './update-contact.page.html',
  styleUrls: ['./update-contact.page.scss'],
})

export class UpdateContactPage implements OnInit, AfterViewInit 
{
    content: Content = {
    title: '',
    contentDetails: '',
    contactDetails:'',
    contacttitle:'',
    
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
      this.fbService.getContent(id).subscribe(contentData => {
        this.content = contentData;
      });
    }
  }

  updateContent() 
  {
    this.fbService.updateContent(this.content).then(() => {
     this.router.navigate(['/home']);
    }, err => {
    });
  }
}