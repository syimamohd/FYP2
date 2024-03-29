import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebaseConfig from './firebase'
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { UserService } from './user.service';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
// import { HTTP } from '@ionic-native/http/ngx';
import { HttpModule } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AuthService } from './auth.service';
import { CartModalPageModule } from './cart-modal/cart-modal.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: 
  [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    AngularFireModule.initializeApp(firebaseConfig),
	  AngularFireAuthModule,
    AngularFirestoreModule,
    HttpModule,
    CartModalPageModule,
    NgxQRCodeModule,
    FormsModule,ReactiveFormsModule ,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    AuthService,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy  },
    { provide: FirestoreSettingsToken, useValue: {}},
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
