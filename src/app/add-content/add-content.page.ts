import { Component, OnInit, ViewChild } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {Content} from '../model/Content';
import { Http } from '@angular/http';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.page.html',
  styleUrls: ['./add-content.page.scss'],
})
export class AddContentPage implements OnInit 
{
    mainuser: AngularFirestoreDocument
    sub
    username: string
    contentPic: string
    busy: boolean = false
  
    content: Content = {
    contentDetails: '',
    title:''
    // createdAt: new Date().getTime()
    };

    @ViewChild('fileBtn', {static: false}) fileBtn: 
    {
      nativeElement: HTMLInputElement
    }

    constructor
    (
        private http: Http, 
		    private afs: AngularFirestore,
        private activatedRoute: ActivatedRoute,
        private fbService: FirebaseService,
        private toastCtrl: ToastController,
        private router: Router,
        private user: UserService
    ) 
    {
      this.mainuser = afs.doc(`users/${user.getUID()}`)
      this.sub = this.mainuser.valueChanges().subscribe(event => 
      {
        this.username = event.username
        this.contentPic = event.contentPic
        // this.contact = event.contact
        // this.address = event.address
		  })
    }

  ngOnInit() 
  {}

  ngOnDestroy() 
  {
    this.sub.unsubscribe()
  }

  updateContentPic() 
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
      this.mainuser.update({
        contentPic: uuid
      })
    })
  }

  addContent() 
  {
    this.fbService.addContent(this.content).then(() => {
      this.router.navigateByUrl('/home');
    }, err => {
    });
  }

}
