import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Content} from '../model/Content';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';
import { Http } from '@angular/http';

@Component
({
  selector: 'app-update-content',
  templateUrl: './update-content.page.html',
  styleUrls: ['./update-content.page.scss'],
})

export class UpdateContentPage implements OnInit, AfterViewInit 
{
    content: Content = {
    title: '',
    contentDetails: '',
    contactDetails:'',
    contacttitle:'',
    image:''
    
    // createdAt: new Date().getTime()
  };

  constructor
  (private activatedRoute: ActivatedRoute, private fbService: FirebaseService, private router: Router, private http: Http) 
  {}

  
  @ViewChild('fileBtn', {static: false}) fileBtn: 
  {
		nativeElement: HTMLInputElement
  }

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

  updateProfilePic() 
  {
  this.fileBtn.nativeElement.click()
  }

  uploadPic(event) 
  {
    const files = event.target.files

    const data = new FormData()
    data.append('file', files[0])
    data.append('UPLOADCARE_STORE', '1')
    data.append('UPLOADCARE_PUB_KEY', '00f055ada25dcea69cac')

    
    this.http.post('https://upload.uploadcare.com/base/', data)
    .subscribe(event => {
      const uuid = event.json().file
      this.content.image=`https://ucarecdn.com/${uuid}/-/scale_crop/150x150/center/`;
      // this.mainuser.update({
      // 	profilePic: uuid
      // })
    })
  }
}