(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-profile-view-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-profile/view-profile.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-profile/view-profile.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar  color=\"dark\">\n    <ion-title >My Profile</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\">\n          </ion-menu-button>\n        <!-- <ion-back-button icon=\"arrow-back-outline\"></ion-back-button> -->\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n      <!-- <app-loading *ngIf=\"!posts\"></app-loading> -->\n      <ion-grid>\n        <ion-row>\n            <div class=\"center\" id=\"profile-info\" *ngIf=\"username\">\n                <!-- <ion-grid> -->\n                  <ion-row>\n                    <ion-col size=\"4\" class=\"user-image\">\n                      <ion-img src=\"https://ucarecdn.com/{{ profilePic }}/-/scale_crop/200x200/center/\"></ion-img>\n                    </ion-col>\n                    <ion-col size=\"8\">\n                      <h1>Welcome, {{ username }} !</h1>\n                      <!-- <p>Contact Number: {{ contact }}</p>\n                      <p>Address: {{ address }}</p> -->\n                      <ion-button shape=\"round\" color=\"primary\" routerLink=\"/edit-profile\">Edit Profile</ion-button>\n                    </ion-col>\n                  </ion-row>\n              </div>\n        </ion-row>\n      \n      <div>  \n        <ion-card>\n            <ion-title>Your Hotel Booking:</ion-title>\n            <ion-item *ngFor=\"let bookinghotel of (hotelBooking | async)\">\n              <ion-label>\n                  <ion-row>\n                      <ion-col>\n                          <p>Name: {{bookinghotel.customerName}}</p>\n                      </ion-col>\n                      <ion-col>\n                          <p>Cat Name: {{bookinghotel.catName}}</p>\n                      </ion-col>\n                    </ion-row> \n                  <ion-row>\n                    <ion-col>\n                        <p>Check In : {{bookinghotel.checkInDate | date: \"dd/MM/yyyy\"}}</p>\n                    </ion-col>\n                    <ion-col>\n                        <p>Check Out : {{bookinghotel.checkOutDate | date: \"dd/MM/yyyy\"}}</p>\n                    </ion-col>\n                  </ion-row>  \n                  <ion-row>\n                    <ion-col>\n                        <p>Time In : {{bookinghotel.timeIn | date: \"shortTime\" }}</p>\n                    </ion-col>\n                    <ion-col>\n                        <p>Time Out : {{bookinghotel.timeOut | date: \"shortTime\" }}</p>\n                    </ion-col>\n                  </ion-row>\n              </ion-label>\n                <ion-button *ngIf=\"isCustomer\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-booking-hotel/'+bookinghotel.id\">View</ion-button>\n              </ion-item>\n        </ion-card>     \n      </div>\n\n      <div>  \n        <ion-card>\n            <ion-title>Your Spa & Grooming Booking:</ion-title>\n            <ion-item *ngFor=\"let bookingspa of (spaBooking | async)\">\n              <ion-label>\n                  <ion-row>\n                      <ion-col>\n                          <p>Name: {{bookingspa.customerName}}</p>\n                      </ion-col>\n                      <ion-col>\n                          <p>Cat Name: {{bookingspa.catName}}</p>\n                      </ion-col>\n                    </ion-row> \n                  <ion-row>\n                    <ion-col>\n                        <p>Date : {{bookingspa.date | date: \"dd/MM/yyyy\"}}</p>\n                    </ion-col>\n                    <ion-col>\n                        <p>Time : {{bookingspa.time | date: \"shortTime\" }}</p>\n                    </ion-col>\n                  </ion-row>\n              </ion-label>\n                <ion-button *ngIf=\"isCustomer\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-booking-spa/'+bookingspa.id\">View</ion-button>\n              </ion-item>\n        </ion-card>     \n      </div>\n\n      <div>  \n          <ion-card>\n              <ion-title>Your Vaccine & Neuter Booking:</ion-title>\n              <ion-item *ngFor=\"let bookingvacc of (vaccBooking | async)\">\n                <ion-label>\n                    <ion-row>\n                        <ion-col>\n                            <p>Name: {{bookingvacc.customerName}}</p>\n                        </ion-col>\n                        <ion-col>\n                            <p>Cat Name: {{bookingvacc.catName}}</p>\n                        </ion-col>\n                      </ion-row> \n                    <ion-row>\n                      <ion-col>\n                          <p>Date : {{bookingvacc.date | date: \"dd/MM/yyyy\"}}</p>\n                      </ion-col>\n                      <ion-col>\n                          <p>Time : {{bookingvacc.time | date: \"shortTime\" }}</p>\n                      </ion-col>\n                    </ion-row>\n                </ion-label>\n                  <ion-button *ngIf=\"isCustomer\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-booking-vaccine/'+bookingvacc.id\">View</ion-button>\n                </ion-item>\n          </ion-card>     \n        </div>\n\n        <div>  \n            <ion-card>\n                <ion-title>Your Grab Booking:</ion-title>\n                <ion-item *ngFor=\"let bookinggrab of (grabBooking | async)\">\n                  <ion-label>\n                      <ion-row>\n                          <ion-col>\n                              <p>Name: {{bookinggrab.customerName}}</p>\n                          </ion-col>\n                          <ion-col>\n                              <p>Cat Name: {{bookinggrab.catName}}</p>\n                          </ion-col>\n                        </ion-row> \n                      <ion-row>\n                        <ion-col>\n                            <p>Date : {{bookinggrab.date | date: \"dd/MM/yyyy\"}}</p>\n                        </ion-col>\n                        <ion-col>\n                            <p>Time : {{bookinggrab.time | date: \"shortTime\" }}</p>\n                        </ion-col>\n                      </ion-row>\n                  </ion-label>\n                    <ion-button *ngIf=\"isCustomer\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-booking-grab/'+bookinggrab.id\">View</ion-button>\n                  </ion-item>\n            </ion-card>     \n          </div>\n\n          <div>  \n              <ion-card>\n                  <ion-title>Your Purchased Item:</ion-title>\n                  <ion-item *ngFor=\"let item of (purchasedItem | async)\">\n                    <ion-label>\n                        <ion-row>\n                            <ion-col>\n                                <p>Name: {{item.customerName}}</p>\n                            </ion-col>\n                            <ion-col>\n                                <p>Contact Number: {{item.contactNumber}}</p>\n                            </ion-col>\n                          </ion-row> \n                          <ion-row>\n                              <ion-col>\n                                  <p>Address: {{item.address}}</p>\n                              </ion-col>\n                          </ion-row>\n                          <ion-row>\n                              <ion-col>\n                                  <p>Total: RM52.50</p>\n                              </ion-col>\n                              <ion-col>\n                                  <p>Payment: Cash On Delivery</p>\n                              </ion-col>\n                          </ion-row>\n                    </ion-label>\n                      <!-- <ion-button *ngIf=\"isCustomer\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-booking-grab/'+bookinggrab.id\">View</ion-button> -->\n                    </ion-item>\n              </ion-card>     \n            </div>\n\n      <!-- </div> -->\n  </ion-grid>\n  </ion-content>");

/***/ }),

/***/ "./src/app/view-profile/view-profile-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/view-profile/view-profile-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ViewProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfilePageRoutingModule", function() { return ViewProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-profile.page */ "./src/app/view-profile/view-profile.page.ts");




const routes = [
    {
        path: '',
        component: _view_profile_page__WEBPACK_IMPORTED_MODULE_3__["ViewProfilePage"]
    }
];
let ViewProfilePageRoutingModule = class ViewProfilePageRoutingModule {
};
ViewProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/view-profile/view-profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/view-profile/view-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: ViewProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfilePageModule", function() { return ViewProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _view_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-profile-routing.module */ "./src/app/view-profile/view-profile-routing.module.ts");
/* harmony import */ var _view_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-profile.page */ "./src/app/view-profile/view-profile.page.ts");







let ViewProfilePageModule = class ViewProfilePageModule {
};
ViewProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewProfilePageRoutingModule"]
        ],
        declarations: [_view_profile_page__WEBPACK_IMPORTED_MODULE_6__["ViewProfilePage"]]
    })
], ViewProfilePageModule);



/***/ }),

/***/ "./src/app/view-profile/view-profile.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/view-profile/view-profile.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#images {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  max-width: 100%;\n  width: 606px; }\n\n.image {\n  margin-left: 1px;\n  margin-right: 1px; }\n\n.main-image, .user-image {\n  width: 200px;\n  height: 200px; }\n\n.center {\n  text-align: center; }\n\n.user-image {\n  -webkit-box-align: center;\n          align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1wcm9maWxlL0M6XFxVc2Vyc1xcaXJzeWFcXERlc2t0b3BcXEZZUDItbWFzdGVyL3NyY1xcYXBwXFx2aWV3LXByb2ZpbGVcXHZpZXctcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxvQkFBYTtFQUFiLGFBQWE7RUFDYixlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBR2I7RUFDQyxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR2xCO0VBQ0MsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHZDtFQUNDLGtCQUFrQixFQUFBOztBQUluQjtFQUVDLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXctcHJvZmlsZS92aWV3LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ltYWdlcyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdG1heC13aWR0aDogMTAwJTtcblx0d2lkdGg6IDYwNnB4O1xufVxuXG4uaW1hZ2Uge1xuXHRtYXJnaW4tbGVmdDogMXB4O1xuXHRtYXJnaW4tcmlnaHQ6IDFweDtcbn1cblxuLm1haW4taW1hZ2UsIC51c2VyLWltYWdlIHtcblx0d2lkdGg6IDIwMHB4O1xuXHRoZWlnaHQ6IDIwMHB4O1xufVxuXG4uY2VudGVyIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcbn1cblxuLnVzZXItaW1hZ2Vcbntcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/view-profile/view-profile.page.ts":
/*!***************************************************!*\
  !*** ./src/app/view-profile/view-profile.page.ts ***!
  \***************************************************/
/*! exports provided: ViewProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfilePage", function() { return ViewProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");









let ViewProfilePage = class ViewProfilePage {
    constructor(http, activatedRoute, fbService, afs, user, storage, router, alertController) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.afs = afs;
        this.user = user;
        this.storage = storage;
        this.router = router;
        this.alertController = alertController;
        this.isAdmin = false;
        this.isCustomer = true;
        this.bookinghotel = {
            customerName: '',
            contactNumber: '',
            catName: '',
            remark: '',
            checkInDate: '',
            checkOutDate: '',
            timeIn: '',
            timeOut: ''
        };
        this.bookingspa = {
            customerName: '',
            contactNumber: '',
            catName: '',
            remark: '',
            date: '',
            time: ''
        };
        this.bookingvacc = {
            customerName: '',
            contactNumber: '',
            catName: '',
            remark: '',
            date: '',
            time: ''
        };
        this.bookinggrab = {
            customerName: '',
            contactNumber: '',
            catName: '',
            remark: '',
            date: '',
            time: ''
        };
        this.item = {
            customerName: '',
            contactNumber: '',
            address: ''
        };
        this.mainuser = afs.doc(`users/${user.getUID()}`);
        this.sub = this.mainuser.valueChanges().subscribe(event => {
            this.username = event.username;
            this.isAdmin = event.isAdmin;
            this.isCustomer = event.isCustomer;
            // this.posts = event.posts
            this.profilePic = event.profilePic;
            this.contact = event.contact;
            this.address = event.address;
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    ngOnInit() {
        this.hotelBooking = this.fbService.getHotelBookings();
        this.spaBooking = this.fbService.getSpaBookings();
        this.vaccBooking = this.fbService.getVaccBookings();
        this.grabBooking = this.fbService.getGrabBookings();
        this.purchasedItem = this.fbService.getPurchasedItems();
        this.storage.setItem('username', this.username);
        this.storage.setItem('isAdmin', this.isAdmin);
        this.storage.setItem('isCustomer', this.isCustomer);
        this.storage.setItem('contact', this.contact);
        this.storage.setItem('address', this.address);
    }
};
ViewProfilePage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
];
ViewProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-profile/view-profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-profile.page.scss */ "./src/app/view-profile/view-profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]])
], ViewProfilePage);



/***/ })

}]);
//# sourceMappingURL=view-profile-view-profile-module-es2015.js.map