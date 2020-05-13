(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-title>Home</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"background\">\r\n    <ion-list>\r\n       <ion-card>\r\n         <ion-item *ngFor=\"let content of (contentItem | async)\">\r\n           <ion-slides>\r\n             <ion-slide>\r\n               <div class=\"slide\">\r\n                  <ion-img *ngIf=\"!!content.image\" class=\"profile-pic\"  [src]=\"content.image\"></ion-img>\r\n                 <h2>{{content.title}}</h2>\r\n                 <p>{{content.contentDetails}}</p>\r\n               </div>\r\n             <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-content/'+content.id\">Edit</ion-button>\r\n             </ion-slide>\r\n           </ion-slides>\r\n         </ion-item>  \r\n       </ion-card>\r\n\r\n       <!-- <ion-card>\r\n           <ion-slide>\r\n               <div class=\"slide\">\r\n                 <img src=\"background.jpg\"/>\r\n                 <h2>We provide the best services</h2>\r\n                 <h2><a href=\"https://www.instagram.com/littlepawsstation/\">Visit our insta!</a></h2>\r\n                 <p><a [routerLink]=\"'/menuhotel/'\">Cat Boarding</a>,<a [routerLink]=\"'/menuspa/'\"> Cat Spa & Grooming</a>,<a [routerLink]=\"'/menuvaccine/'\">Cat Vaccine & Neuter</a>,<a [routerLink]=\"'/menugrab/'\"> Cat Grab (soon)</a></p>\r\n               </div>\r\n               <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-content/'\">Edit</ion-button>\r\n             </ion-slide>\r\n        </ion-card>\r\n       <ion-card>\r\n           <ion-slide>\r\n               <div class=\"slide\">\r\n                 <img size=\"med\" src=\"assets/img/vaccine.jpg\"/>\r\n                 \r\n                 <p>Vaccine and Neuter Service by our Certified Veterinarian every weekend.</p>\r\n               </div>\r\n               <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-content/'\">Edit</ion-button>\r\n             </ion-slide>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-slides>\r\n             <ion-slide>\r\n                 <div class=\"slide\">\r\n                   <h2>Operating Hours:</h2>\r\n                     <p>Everyday</p>\r\n                     <p>10 AM to PM</p>\r\n                   <h2>Address:</h2>\r\n                     <p>Little Paws Station</p>\r\n                     <p>57 Jalan Pulai 21,</p>\r\n                     <p>Taman Pulai Utama,</p>\r\n                     <p>81300 Skudai,</p>\r\n                     <p>Johor Bharu</p>\r\n                 </div>\r\n                 <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-content/'\">Edit</ion-button>\r\n               </ion-slide>\r\n               <ion-slide>\r\n                 \r\n                       <div class=\"slide\">\r\n                           <img src=\"assets/img/map.png\"/>\r\n                           <h2>Location</h2>\r\n                       </div>    \r\n                   \r\n               </ion-slide>\r\n          </ion-slides>\r\n         </ion-card>  -->\r\n        \r\n    </ion-list>\r\n\r\n    <ion-fab *ngIf=\"isAdmin\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n       <ion-fab-button [routerLink]=\"'/add-content'\">\r\n         <ion-icon name=\"add\"></ion-icon>\r\n       </ion-fab-button>\r\n     </ion-fab>\r\n</ion-content>\r\n\r\n  <!-- <ion-footer>\r\n    <ion-toolbar color=\"dark\">\r\n      <ion-title>Footer</ion-title>\r\n    </ion-toolbar>\r\n  </ion-footer> -->\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content.background {\n  color: grey;\n}\n\nion-text.first {\n  text-align: center;\n  position: absolute;\n}\n\ndiv.second {\n  text-align: center;\n  position: absolute;\n}\n\n#images {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  max-width: 100%;\n  width: 606px;\n}\n\n.image {\n  margin-left: 1px;\n  margin-right: 1px;\n}\n\n.main-image, .user-image {\n  width: 200px;\n  height: 200px;\n}\n\n.center {\n  text-align: center;\n}\n\n.user-image {\n  align-items: center;\n}\n\nion-slides {\n  height: 100%;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n\n.profile-pic {\n  width: 750px;\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGlyc3lhXFxEZXNrdG9wXFxGWVAyLW1hc3Rlci9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSxXQUFBO0FDREY7O0FESUE7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFFQyxrQkFBQTtFQUNDLGtCQUFBO0FDSEY7O0FETUE7RUFDQyxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0hEOztBRE1BO0VBQ0MsZ0JBQUE7RUFDQSxpQkFBQTtBQ0hEOztBRE1BO0VBQ0MsWUFBQTtFQUNBLGFBQUE7QUNIRDs7QURNQTtFQUNDLGtCQUFBO0FDSEQ7O0FET0E7RUFFQyxtQkFBQTtBQ0xEOztBRFFBO0VBQ0MsWUFBQTtBQ0xEOztBRFFFO0VBQ0QsY0FBQTtBQ0xEOztBRFFFO0VBQ0Qsa0JBQUE7QUNMRDs7QURRRTtFQUNELGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0xEOztBRFFFO0VBQ0QsZ0JBQUE7QUNMRDs7QURRRTtFQUNELGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQ0xEOztBRFFFO0VBQ0QscUNBQUE7QUNMRDs7QURRQTtFQUdDLFlBQUE7RUFDQSxhQUFBO0FDUEQiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZFxyXG57XHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbmlvbi10ZXh0LmZpcnN0XHJcbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG5kaXYuc2Vjb25kIFxyXG57XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuI2ltYWdlcyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdHdpZHRoOiA2MDZweDtcclxufVxyXG5cclxuLmltYWdlIHtcclxuXHRtYXJnaW4tbGVmdDogMXB4O1xyXG5cdG1hcmdpbi1yaWdodDogMXB4O1xyXG59XHJcblxyXG4ubWFpbi1pbWFnZSwgLnVzZXItaW1hZ2Uge1xyXG5cdHdpZHRoOiAyMDBweDtcclxuXHRoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHJcbn1cclxuXHJcbi51c2VyLWltYWdlXHJcbntcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuc3dpcGVyLXNsaWRlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5zd2lwZXItc2xpZGUgaDIge1xyXG5cdG1hcmdpbi10b3A6IDIuOHJlbTtcclxuICB9XHJcblxyXG4gIC5zd2lwZXItc2xpZGUgaW1nIHtcclxuXHRtYXgtaGVpZ2h0OiA1MCU7XHJcblx0bWF4LXdpZHRoOiA4MCU7XHJcblx0bWFyZ2luOiA2MHB4IDAgNDBweDtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcblxyXG4gIGIge1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuXHRwYWRkaW5nOiAwIDQwcHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjU7XHJcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XHJcbiAgfVxyXG5cclxuICBwIGIge1xyXG5cdGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XHJcbiAgfVxyXG5cclxuLnByb2ZpbGUtcGljXHJcbntcclxuXHRcclxuXHR3aWR0aDogNzUwcHg7XHJcblx0aGVpZ2h0OiA1MDBweDtcclxuXHQgXHJcbn1cclxuLy8gI2NvbnRhaW5lciB7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgbGVmdDogMDtcclxuLy8gICByaWdodDogMDtcclxuLy8gICB0b3A6IDUwJTtcclxuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbi8vIH1cclxuXHJcbi8vICNjb250YWluZXIgc3Ryb25nIHtcclxuLy8gICBmb250LXNpemU6IDIwcHg7XHJcbi8vICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbi8vIH1cclxuXHJcbi8vICNjb250YWluZXIgcCB7XHJcbi8vICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuLy8gICBjb2xvcjogIzhjOGM4YztcclxuXHJcbi8vICAgbWFyZ2luOiAwO1xyXG4vLyB9XHJcblxyXG4vLyAjY29udGFpbmVyIGEge1xyXG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xyXG4vLyAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC50aXRsZS1ibG9ja3tcclxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgbWFyZ2luOiAwO1xyXG4vLyAgIHBhZGRpbmc6IDA7XHJcbiBcclxuLy8gICBoZWlnaHQ6IDE2MHB4O1xyXG4vLyB9XHJcblxyXG4vLyAudGl0bGUtYmxvY2sgLmhlYWRpbmd7XHJcbi8vICAgZm9udC1zaXplOiAzNXB4O1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHRvcDogNTAlO1xyXG4vLyAgIGxlZnQ6IDUwJTtcclxuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuLy8gICBmb250LWZhbWlseTogXCJBcmlhbCBCbGFja1wiXHJcbi8vIH1cclxuXHJcbiIsImlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICBjb2xvcjogZ3JleTtcbn1cblxuaW9uLXRleHQuZmlyc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuZGl2LnNlY29uZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jaW1hZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogNjA2cHg7XG59XG5cbi5pbWFnZSB7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG4gIG1hcmdpbi1yaWdodDogMXB4O1xufVxuXG4ubWFpbi1pbWFnZSwgLnVzZXItaW1hZ2Uge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51c2VyLWltYWdlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3dpcGVyLXNsaWRlIGgyIHtcbiAgbWFyZ2luLXRvcDogMi44cmVtO1xufVxuXG4uc3dpcGVyLXNsaWRlIGltZyB7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIG1hcmdpbjogNjBweCAwIDQwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5iIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcbn1cblxucCBiIHtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwMDAwKTtcbn1cblxuLnByb2ZpbGUtcGljIHtcbiAgd2lkdGg6IDc1MHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");








let HomePage = class HomePage {
    constructor(http, activatedRoute, fbService, afs, user, storage, router) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.afs = afs;
        this.user = user;
        this.storage = storage;
        this.router = router;
        this.isAdmin = false;
        this.isCustomer = true;
        this.mainuser = afs.doc(`users/${user.getUID()}`);
        this.sub = this.mainuser.valueChanges().subscribe(event => {
            this.username = event.username;
            //this.contentPic = event.contentPic
            this.isAdmin = event.isAdmin;
            this.isCustomer = event.isCustomer;
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    ngOnInit() {
        this.contentItem = this.fbService.getContents();
        this.storage.setItem('username', this.username);
        this.storage.setItem('isAdmin', this.isAdmin);
        this.storage.setItem('isCustomer', this.isCustomer);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
        _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map