(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-booking-hotel-update-booking-hotel-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-booking-hotel/update-booking-hotel.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-booking-hotel/update-booking-hotel.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"dark\">\n      <ion-title>Update Hotel Booking</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n        <ion-item>\n            <ion-input placeholder=\"Enter Customer Name\" [(ngModel)]=\"bookinghotel.customerName\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input placeholder=\"Enter Contact Number\" [(ngModel)]=\"bookinghotel.contactNumber\"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-input placeholder=\"Enter Cat Name\" [(ngModel)]=\"bookinghotel.catName\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-textarea rows=\"6\" [(ngModel)]=\"bookinghotel.remark\" placeholder=\"Enter new remark here...\"></ion-textarea>\n          </ion-item>\n          <ion-item>\n            <ion-input>\n                <ion-datetime value=\"19-02-1990\" placeholder=\"Select Date\"  [(ngModel)]=\"bookinghotel.checkInDate\"></ion-datetime>\n            </ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-input>\n                  <ion-datetime value=\"19-02-1990\" placeholder=\"Select Date\"  [(ngModel)]=\"bookinghotel.checkOutDate\"></ion-datetime>\n              </ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-input>\n                  <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" placeholder=\"Select Time\" [(ngModel)]=\"bookinghotel.timeIn\"></ion-datetime>\n              </ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-input>\n                  <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" placeholder=\"Select Time\" [(ngModel)]=\"bookinghotel.timeOut\"></ion-datetime>\n              </ion-input>\n          </ion-item>\n    </ion-list>\n    <ion-button color=\"primary\" expand=\"full\" (click)=\"updateBookingHotel()\">Update</ion-button>\n  </ion-content>");

/***/ }),

/***/ "./src/app/update-booking-hotel/update-booking-hotel-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/update-booking-hotel/update-booking-hotel-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: UpdateBookingHotelPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBookingHotelPageRoutingModule", function() { return UpdateBookingHotelPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _update_booking_hotel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-booking-hotel.page */ "./src/app/update-booking-hotel/update-booking-hotel.page.ts");




const routes = [
    {
        path: '',
        component: _update_booking_hotel_page__WEBPACK_IMPORTED_MODULE_3__["UpdateBookingHotelPage"]
    }
];
let UpdateBookingHotelPageRoutingModule = class UpdateBookingHotelPageRoutingModule {
};
UpdateBookingHotelPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UpdateBookingHotelPageRoutingModule);



/***/ }),

/***/ "./src/app/update-booking-hotel/update-booking-hotel.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/update-booking-hotel/update-booking-hotel.module.ts ***!
  \*********************************************************************/
/*! exports provided: UpdateBookingHotelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBookingHotelPageModule", function() { return UpdateBookingHotelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _update_booking_hotel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-booking-hotel-routing.module */ "./src/app/update-booking-hotel/update-booking-hotel-routing.module.ts");
/* harmony import */ var _update_booking_hotel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-booking-hotel.page */ "./src/app/update-booking-hotel/update-booking-hotel.page.ts");







let UpdateBookingHotelPageModule = class UpdateBookingHotelPageModule {
};
UpdateBookingHotelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _update_booking_hotel_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateBookingHotelPageRoutingModule"]
        ],
        declarations: [_update_booking_hotel_page__WEBPACK_IMPORTED_MODULE_6__["UpdateBookingHotelPage"]]
    })
], UpdateBookingHotelPageModule);



/***/ }),

/***/ "./src/app/update-booking-hotel/update-booking-hotel.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/update-booking-hotel/update-booking-hotel.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1ib29raW5nLWhvdGVsL3VwZGF0ZS1ib29raW5nLWhvdGVsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/update-booking-hotel/update-booking-hotel.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/update-booking-hotel/update-booking-hotel.page.ts ***!
  \*******************************************************************/
/*! exports provided: UpdateBookingHotelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBookingHotelPage", function() { return UpdateBookingHotelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");







let UpdateBookingHotelPage = class UpdateBookingHotelPage {
    constructor(activatedRoute, fbService, router, afs, user, storage) {
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router;
        this.afs = afs;
        this.user = user;
        this.storage = storage;
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
        this.mainuser = afs.doc(`users/${user.getUID()}`);
        this.sub = this.mainuser.valueChanges().subscribe(event => {
            this.username = event.username;
            this.isAdmin = event.isAdmin;
            this.isCustomer = event.isCustomer;
            this.posts = event.posts;
            this.profilePic = event.profilePic;
            this.contact = event.contact;
            this.address = event.address;
        });
    }
    ngOnInit() {
        this.storage.setItem('username', this.username);
        this.storage.setItem('isAdmin', this.isAdmin);
        this.storage.setItem('isCustomer', this.isCustomer);
        this.storage.setItem('contact', this.contact);
        this.storage.setItem('address', this.address);
    }
    ngAfterViewInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.fbService.getHotelBooking(id).subscribe(hotelBookingData => {
                this.bookinghotel = hotelBookingData;
            });
        }
    }
    updateBookingHotel() {
        this.fbService.updateBookingHotel(this.bookinghotel).then(() => {
            this.router.navigate(['/view-profile']);
        }, err => {
        });
    }
};
UpdateBookingHotelPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"] }
];
UpdateBookingHotelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-booking-hotel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-booking-hotel.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-booking-hotel/update-booking-hotel.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-booking-hotel.page.scss */ "./src/app/update-booking-hotel/update-booking-hotel.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
        _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"]])
], UpdateBookingHotelPage);



/***/ })

}]);
//# sourceMappingURL=update-booking-hotel-update-booking-hotel-module-es2015.js.map