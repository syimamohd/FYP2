import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Content} from '../model/Content';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.page.html',
  styleUrls: ['./view-contact.page.scss'],
})

export class ViewContactPage implements OnInit, AfterViewInit 
{
  //note properties
  content: Content = {
    
    contentDetails: '',
    title: '',
    contactDetails:'',
    contacttitle:'',
    // createdAt: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private fbService: FirebaseService, private router: Router) { }

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

  deleteContent() 
  {
    this.fbService.deleteContent(this.content.id).then(() => {
      this.router.navigateByUrl('/home');
    }, err => {
    });
  }

}
