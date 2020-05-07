(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-booking-grab-view-booking-grab-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-booking-grab/view-booking-grab.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-booking-grab/view-booking-grab.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n    <ion-toolbar color=\"dark\">\n      <ion-title>\n        Cat Grab Booking Receipt\n      </ion-title>\n              <ion-buttons slot=\"start\">     \n                  <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\n                </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n      <ion-list-header>\n        <ion-label>Booking Receipt</ion-label>\n      </ion-list-header>\n        <ion-card-content>\n            <ion-item>\n                <h2>Customer Name : </h2>\n                <h2>{{bookinggrab.customerName}}</h2>\n            </ion-item>\n            <ion-item>\n                <h2>Contact Number : </h2>\n                <h2>{{bookinggrab.contactNumber}}</h2>\n            </ion-item>\n            <ion-item>\n                <h2>Cat Name : </h2>\n                <p>{{bookinggrab.catName}}</p>\n            </ion-item>\n            <ion-item>\n                <h2>Remark : </h2>\n                <p>{{bookinggrab.remark}}</p>\n            </ion-item>\n            <ion-item>\n                <h2>Date : </h2>\n                <p>{{bookinggrab.date | date: \"dd/MM/yyyy\"}}</p>\n            </ion-item>\n            <ion-item>\n                <h2>Check Out Time : </h2>\n                <p>{{bookinggrab.time | date: \"shortTime\" }}</p>\n            </ion-item>\n            <!-- <ion-item>\n\n            </ion-item> -->  \n            <ion-button slot=\"start\" color=\"warning\" [routerLink]=\"'/update-booking-grab/' + bookinggrab.id\">Edit</ion-button>\n            <ion-button slot=\"end\" color=\"danger\" (click)=\"deleteBookingGrab()\">Delete</ion-button>\n          </ion-card-content>\n    </ion-list>\n  </ion-content>");

/***/ }),

/***/ "./src/app/view-booking-grab/view-booking-grab-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/view-booking-grab/view-booking-grab-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ViewBookingGrabPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBookingGrabPageRoutingModule", function() { return ViewBookingGrabPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_booking_grab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-booking-grab.page */ "./src/app/view-booking-grab/view-booking-grab.page.ts");




const routes = [
    {
        path: '',
        component: _view_booking_grab_page__WEBPACK_IMPORTED_MODULE_3__["ViewBookingGrabPage"]
    }
];
let ViewBookingGrabPageRoutingModule = class ViewBookingGrabPageRoutingModule {
};
ViewBookingGrabPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewBookingGrabPageRoutingModule);



/***/ }),

/***/ "./src/app/view-booking-grab/view-booking-grab.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/view-booking-grab/view-booking-grab.module.ts ***!
  \***************************************************************/
/*! exports provided: ViewBookingGrabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBookingGrabPageModule", function() { return ViewBookingGrabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _view_booking_grab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-booking-grab-routing.module */ "./src/app/view-booking-grab/view-booking-grab-routing.module.ts");
/* harmony import */ var _view_booking_grab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-booking-grab.page */ "./src/app/view-booking-grab/view-booking-grab.page.ts");







let ViewBookingGrabPageModule = class ViewBookingGrabPageModule {
};
ViewBookingGrabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_booking_grab_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewBookingGrabPageRoutingModule"]
        ],
        declarations: [_view_booking_grab_page__WEBPACK_IMPORTED_MODULE_6__["ViewBookingGrabPage"]]
    })
], ViewBookingGrabPageModule);



/***/ }),

/***/ "./src/app/view-booking-grab/view-booking-grab.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/view-booking-grab/view-booking-grab.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctYm9va2luZy1ncmFiL3ZpZXctYm9va2luZy1ncmFiLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/view-booking-grab/view-booking-grab.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/view-booking-grab/view-booking-grab.page.ts ***!
  \*************************************************************/
/*! exports provided: ViewBookingGrabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBookingGrabPage", function() { return ViewBookingGrabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");







let ViewBookingGrabPage = class ViewBookingGrabPage {
    constructor(activatedRoute, fbService, router, afs, user, storage) {
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router;
        this.afs = afs;
        this.user = user;
        this.storage = storage;
        this.isAdmin = false;
        this.isCustomer = true;
        this.bookinggrab = {
            customerName: '',
            contactNumber: '',
            catName: '',
            remark: '',
            date: '',
            time: ''
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
            this.fbService.getGrabBooking(id).subscribe(grabBookingData => {
                this.bookinggrab = grabBookingData;
            });
        }
    }
    deleteBookingGrab() {
        this.fbService.deleteBookingGrab(this.bookinggrab.id).then(() => {
            this.router.navigateByUrl('/view-profile');
        }, err => {
        });
    }
};
ViewBookingGrabPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"] }
];
ViewBookingGrabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-booking-grab',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-booking-grab.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-booking-grab/view-booking-grab.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-booking-grab.page.scss */ "./src/app/view-booking-grab/view-booking-grab.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
        _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"]])
], ViewBookingGrabPage);



/***/ })

}]);
//# sourceMappingURL=view-booking-grab-view-booking-grab-module-es2015.js.map