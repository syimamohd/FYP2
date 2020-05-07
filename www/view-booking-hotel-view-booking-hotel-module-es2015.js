(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-booking-hotel-view-booking-hotel-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-booking-hotel/view-booking-hotel.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-booking-hotel/view-booking-hotel.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n    <ion-toolbar color=\"dark\">\n      <ion-title>\n        Cat Hotel Booking Receipt\n      </ion-title>\n              <ion-buttons slot=\"start\">     \n                  <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\n                </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n      <ion-list-header>\n        <ion-label>Booking Receipt</ion-label>\n      </ion-list-header>\n        <ion-card-content>\n            <ion-item>\n                <h2>Customer Name : </h2>\n                <h2>{{bookinghotel.customerName}}</h2>\n            </ion-item>\n            <ion-item>\n                <h2>Contact Number : </h2>\n                <h2>{{bookinghotel.contactNumber}}</h2>\n            </ion-item>\n            <ion-item>\n                <h2>Cat Name : </h2>\n                <p>{{bookinghotel.catName}}</p>\n            </ion-item>\n            <ion-item>\n                <h2>Remark : </h2>\n                <p>{{bookinghotel.remark}}</p>\n            </ion-item>\n            <ion-item>\n                <h2>Check In Date : </h2>\n                <p>{{bookinghotel.checkInDate | date: \"dd/MM/yyyy\"}}</p>\n            </ion-item>\n            <ion-item>\n                <h2>Check Out Date : </h2>\n                <p>{{bookinghotel.checkOutDate |  date: \"dd/MM/yyyy\"}}</p>\n            </ion-item>\n            <ion-item>\n                <h2>Check In Time : </h2>\n                <p>{{bookinghotel.timeIn | date: \"shortTime\" }}</p>\n            </ion-item>\n            <ion-item>\n                <h2>Check Out Time : </h2>\n                <p>{{bookinghotel.timeOut | date: \"shortTime\" }}</p>\n            </ion-item>\n            <!-- <ion-item>\n\n            </ion-item> -->\n            \n            <ion-button slot=\"start\" color=\"warning\" [routerLink]=\"'/update-booking-hotel/' + bookinghotel.id\">Edit</ion-button>\n            <ion-button slot=\"end\" color=\"danger\" (click)=\"deleteBookingHotel()\">Delete</ion-button>\n          </ion-card-content>\n        <!-- <ion-button fill=\"outline\" slot=\"end\" [routerLink]=\"'/bookinghotel'\">BOOK</ion-button> -->\n       <!-- </ion-item>  -->\n       <!-- <ion-button slot=\"start\" color=\"warning\" [routerLink]=\"'/update-hotel-booking/' + bookinghotel.id\">Edit</ion-button>\n       <ion-button slot=\"end\" color=\"danger\" (click)=\"deleteHotelBooking()\">Delete</ion-button> -->\n    </ion-list>\n  </ion-content>\n\n\n    ");

/***/ }),

/***/ "./src/app/view-booking-hotel/view-booking-hotel-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/view-booking-hotel/view-booking-hotel-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ViewBookingHotelPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBookingHotelPageRoutingModule", function() { return ViewBookingHotelPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_booking_hotel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-booking-hotel.page */ "./src/app/view-booking-hotel/view-booking-hotel.page.ts");




const routes = [
    {
        path: '',
        component: _view_booking_hotel_page__WEBPACK_IMPORTED_MODULE_3__["ViewBookingHotelPage"]
    }
];
let ViewBookingHotelPageRoutingModule = class ViewBookingHotelPageRoutingModule {
};
ViewBookingHotelPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewBookingHotelPageRoutingModule);



/***/ }),

/***/ "./src/app/view-booking-hotel/view-booking-hotel.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/view-booking-hotel/view-booking-hotel.module.ts ***!
  \*****************************************************************/
/*! exports provided: ViewBookingHotelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBookingHotelPageModule", function() { return ViewBookingHotelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _view_booking_hotel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-booking-hotel-routing.module */ "./src/app/view-booking-hotel/view-booking-hotel-routing.module.ts");
/* harmony import */ var _view_booking_hotel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-booking-hotel.page */ "./src/app/view-booking-hotel/view-booking-hotel.page.ts");







let ViewBookingHotelPageModule = class ViewBookingHotelPageModule {
};
ViewBookingHotelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_booking_hotel_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewBookingHotelPageRoutingModule"]
        ],
        declarations: [_view_booking_hotel_page__WEBPACK_IMPORTED_MODULE_6__["ViewBookingHotelPage"]]
    })
], ViewBookingHotelPageModule);



/***/ }),

/***/ "./src/app/view-booking-hotel/view-booking-hotel.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/view-booking-hotel/view-booking-hotel.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctYm9va2luZy1ob3RlbC92aWV3LWJvb2tpbmctaG90ZWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/view-booking-hotel/view-booking-hotel.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/view-booking-hotel/view-booking-hotel.page.ts ***!
  \***************************************************************/
/*! exports provided: ViewBookingHotelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBookingHotelPage", function() { return ViewBookingHotelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");







let ViewBookingHotelPage = class ViewBookingHotelPage {
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
            // this.posts = event.posts
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
    deleteBookingHotel() {
        this.fbService.deleteBookingHotel(this.bookinghotel.id).then(() => {
            this.router.navigateByUrl('/view-profile');
        }, err => {
        });
    }
};
ViewBookingHotelPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"] }
];
ViewBookingHotelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-booking-hotel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-booking-hotel.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-booking-hotel/view-booking-hotel.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-booking-hotel.page.scss */ "./src/app/view-booking-hotel/view-booking-hotel.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
        _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"]])
], ViewBookingHotelPage);



/***/ })

}]);
//# sourceMappingURL=view-booking-hotel-view-booking-hotel-module-es2015.js.map