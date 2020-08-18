import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

	username: string;
	password: string ;
	cpassword: string;
	isAdmin: boolean = false;
	isCustomer: boolean = true;
	contact: string;
	address: string;

	constructor
	(
		public afAuth: AngularFireAuth,
		public afstore: AngularFirestore,
		public user: UserService,
		public alertController: AlertController,
		public router: Router
		) { }

	ngOnInit() {
	}

	async presentAlert(title: string, content: string) {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})

		await alert.present()
	}

	async register() 
	{

		// const { username, password, cpassword, isAdmin, isCustomer, contact, address } = this
		// if(password !== cpassword) {
		// 	return console.error("Passwords don't match")
		// }

		// try {
		// 	const res = await this.afAuth.auth.createUserWithEmailAndPassword(username  + '@codedamn.com', password);
		// 	this.afstore.doc(`users/${res.user.uid}`).set({	username, isAdmin, isCustomer, contact, address})//add
		// 	this.user.setUser({username, uid: res.user.uid})
		// 	// const res = await this.afAuth.auth.createUserWithEmailAndPassword(username , password)

		// 	this.presentAlert('Success', 'You are registered!')
		// 	this.router.navigate(['/home'])

		// } catch(error) {
		// 	console.dir(error)
		// }
		const {username, password, cpassword, isAdmin, isCustomer} = this
    if (password !== cpassword)
    {
      return console.error ("Password don't match")
    }
    try
    {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword (username + '@codedamn.com', password)
      this.afstore.doc(`users/${res.user.uid}`).set
      ({
        username, isAdmin, isCustomer
      })
      this.user.setUser
      ({
        username,
        uid: res.user.uid
      })

      this.presentAlert('Success', 'You are registered!')
      this.router.navigate(['/home'])
    }
    catch (error)
    {
      console.dir(error)
    }
	}

}