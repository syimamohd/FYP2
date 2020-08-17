import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	username: string = ""
	password: string = ""

	busy: boolean = false

	constructor
	(
		public afAuth: AngularFireAuth, 
		public user: UserService, 
		public router: Router,
		private alertController: AlertController
	) { }

	ngOnInit() {
	}

	async presentAlert(title: string, content: string) 
  {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})

		await alert.present()
	}

	async login() 
	{
		this.busy = true

    if(!this.username) 
    {
			this.busy = false
			return this.presentAlert('Error!', 'You have to enter all details required')
	}

	if(!this.password) 
    {
			this.busy = false
			return this.presentAlert('Error!', 'You have to enter all details required')
	}
	
		const { username, password } = this
		try {
			// kind of a hack. 
			const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@codedamn.com', password)
			
			if(res.user) {
				this.user.setUser({
					username,
					uid: res.user.uid
				})
				this.router.navigate(['/home'])
			}
		
		} catch(err) {
			console.dir(err)
			if(err.code === "auth/user-not-found") {
				console.log("User not found")
			}
		}
	}

}