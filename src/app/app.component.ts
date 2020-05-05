import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import { AuthService } from './auth.service';
//import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  pages: any[]=[];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() 
  {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.pages = [
        {
        pagename: "Dashboard",
        icon: "home",
        url: "/home"
        },
        // {
        //   pagename: "Sign Up",
        //   icon: "person-add-outline",
        //   url: "/"
        //   },
        {
          pagename: "Profile",
          icon: "person",
          url: "/view-profile"
        },
        {
          pagename: "Cat Services",
          icon: "list",
          url: "/booking"
        },
        {
          pagename: "Cat Products",
          icon: "basket",
          url: "/menuproduct"
        },
        {
          pagename: "Contact Us",
          icon: "call",
          url: "/contact"
        },
        // {
        //   pagename: "Information",
        //   icon: "information",
        //   url: "/"
        // },
        // {
        //   pagename: "Log Out",
        //   icon: "exit",
        //   url: "/"
        // }
      ]
    });
  }

  Goto(page)
  {
    this.router.navigate([page.url]);
  }

  onLogout() {
    // tslint:disable-next-line: no-unused-expression
    this.authService.logout;
    this.router.navigateByUrl('/login');
  }

}
