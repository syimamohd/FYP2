(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookingspa-bookingspa-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookingspa/bookingspa.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookingspa/bookingspa.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title>Cat Service Booking</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n    <ion-content padding class=\"background\">\r\n        <ion-list>\r\n          <ion-item>\r\n            <ion-input placeholder=\" Name\" [(ngModel)]=\"bookingspa.customerName\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-input placeholder=\"Contact Number\" [(ngModel)]=\"bookingspa.contactNumber\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-input placeholder=\"Cat Name\" [(ngModel)]=\"bookingspa.catName\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-input placeholder=\"Remark\" [(ngModel)]=\"bookingspa.remark\"></ion-input>\r\n          </ion-item>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                  <ion-label>DATE</ion-label>\r\n                  <ion-input>\r\n                      <ion-datetime displayFormat=\"D/MM/YYYY\" pickerFormat=\"DDDD MMMM YYYY\" placeholder=\"Select Date\"  [(ngModel)]=\"bookingspa.date\"></ion-datetime>\r\n                  </ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col>    \r\n              <ion-item>\r\n                  <ion-label>TIME</ion-label>\r\n                  <ion-input>\r\n                      <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" placeholder=\"Select Time\" [(ngModel)]=\"bookingspa.time\"></ion-datetime>\r\n                  </ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <!-- <ion-item>\r\n            <ion-checkbox slot=\"start\" ></ion-checkbox>\r\n            <ion-label>Add cat food in booking.</ion-label>\r\n          </ion-item> -->\r\n          </ion-list>\r\n          <ion-row>\r\n            <ion-col>\r\n                <ion-button (click)=\"submitBookingSpa()\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"primary\">Confirm</ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button [routerLink]=\"['/menuspa']\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"warning\" >Cancel</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n      </ion-content>\r\n\r\n<!-- <ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title>Cat Service Booking</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"background\">\r\n\t<ion-list>\r\n\t\t<ion-item>\r\n\t\t  <ion-label position=\"floating\">NAME  </ion-label>\r\n\t\t  <ion-input type=\"text\" [(ngModel)]=\"username\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n\t\t  <ion-label position=\"floating\">CONTACT NUMBER  </ion-label>\r\n\t\t  <ion-input type=\"text\" [(ngModel)]=\"username\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n\t\t  <ion-label position=\"floating\">CAT NAME  </ion-label>\r\n\t\t  <ion-input type=\"text\" [(ngModel)]=\"username\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n\t\t  <ion-label position=\"floating\">REMARK  </ion-label>\r\n\t\t  <ion-input type=\"text\" [(ngModel)]=\"username\"></ion-input>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label> DATE</ion-label>\r\n          <ion-datetime value=\"19-02-1990\" placeholder=\"Select Date\"></ion-datetime>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>TIME</ion-label>\r\n          <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-item>\r\n      <ion-checkbox slot=\"start\" ></ion-checkbox>\r\n      <ion-label>Add cat food in booking.</ion-label>\r\n    </ion-item>\r\n    </ion-list>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button [routerLink]=\"['/receiptservice']\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"primary\">Confirm</ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button [routerLink]=\"['/booking']\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"warning\" >Cancel</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-button fill=\"solid\" expand=\"block\" color=\"dark\" (click)=\"login()\">Continue</ion-button> \r\n</ion-content> -->");

/***/ }),

/***/ "./src/app/bookingspa/bookingspa-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/bookingspa/bookingspa-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: BookingspaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingspaPageRoutingModule", function() { return BookingspaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bookingspa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookingspa.page */ "./src/app/bookingspa/bookingspa.page.ts");




const routes = [
    {
        path: '',
        component: _bookingspa_page__WEBPACK_IMPORTED_MODULE_3__["BookingspaPage"]
    }
];
let BookingspaPageRoutingModule = class BookingspaPageRoutingModule {
};
BookingspaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookingspaPageRoutingModule);



/***/ }),

/***/ "./src/app/bookingspa/bookingspa.module.ts":
/*!*************************************************!*\
  !*** ./src/app/bookingspa/bookingspa.module.ts ***!
  \*************************************************/
/*! exports provided: BookingspaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingspaPageModule", function() { return BookingspaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _bookingspa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookingspa-routing.module */ "./src/app/bookingspa/bookingspa-routing.module.ts");
/* harmony import */ var _bookingspa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookingspa.page */ "./src/app/bookingspa/bookingspa.page.ts");







let BookingspaPageModule = class BookingspaPageModule {
};
BookingspaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bookingspa_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingspaPageRoutingModule"]
        ],
        declarations: [_bookingspa_page__WEBPACK_IMPORTED_MODULE_6__["BookingspaPage"]]
    })
], BookingspaPageModule);



/***/ }),

/***/ "./src/app/bookingspa/bookingspa.page.scss":
/*!*************************************************!*\
  !*** ./src/app/bookingspa/bookingspa.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmdzcGEvYm9va2luZ3NwYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/bookingspa/bookingspa.page.ts":
/*!***********************************************!*\
  !*** ./src/app/bookingspa/bookingspa.page.ts ***!
  \***********************************************/
/*! exports provided: BookingspaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingspaPage", function() { return BookingspaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");









let BookingspaPage = class BookingspaPage {
    constructor(activatedRoute, fbService, afs, user, storage, toastCtrl, router, alertController) {
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.afs = afs;
        this.user = user;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.alertController = alertController;
        this.isAdmin = false;
        this.isCustomer = true;
        this.bookingspa = {
            customerName: '',
            contactNumber: '',
            catName: '',
            remark: '',
            date: '',
            time: ''
            // catFood: Selection;
            // createdAt: new Date().getTime()
        };
        this.mainuser = afs.doc(`users/${user.getUID()}`);
        this.sub = this.mainuser.valueChanges().subscribe(event => {
            this.username = event.username;
            // this.profilePic = event.profilePic
            this.isAdmin = event.isAdmin;
            this.isCustomer = event.isCustomer;
        });
    }
    ngOnInit() {
        this.storage.setItem('username', this.username);
        this.storage.setItem('isAdmin', this.isAdmin);
        this.storage.setItem('isCustomer', this.isCustomer);
    }
    presentAlert(title, content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: content,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    submitBookingSpa() {
        this.fbService.submitBookingSpa(this.bookingspa).then(() => {
            this.presentAlert('Done!', 'Your booking was created!');
            this.router.navigateByUrl('/menuspa');
        }, err => {
        });
    }
};
BookingspaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
BookingspaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bookingspa',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bookingspa.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookingspa/bookingspa.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bookingspa.page.scss */ "./src/app/bookingspa/bookingspa.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
        _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], BookingspaPage);



/***/ })

}]);
//# sourceMappingURL=bookingspa-bookingspa-module-es2015.js.map