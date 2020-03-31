import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Content} from '../model/Content';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-view-content',
  templateUrl: './view-content.page.html',
  styleUrls: ['./view-content.page.scss'],
})

export class ViewContentPage implements OnInit, AfterViewInit 
{
  //note properties
  content: Content = {
    
    contentDetails: '',
    title: ''
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
