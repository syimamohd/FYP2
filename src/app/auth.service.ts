import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { UserService } from './user.service'

@Injectable()
export class AuthService implements CanActivate 
{
	private _userIsAuthenticated = false;

	get userIsAuthenticated() {
		return this._userIsAuthenticated;
	  }

	constructor(private router: Router, private user: UserService) {

	}

	async canActivate(route) {
		if(await this.user.isAuthenticated()) {
			return true
		}

		this.router.navigate(['/login'])
		return false
	}

	login() 
	{
		this._userIsAuthenticated = true;
	  }

	logout() {
		this._userIsAuthenticated = false;
	  }
}