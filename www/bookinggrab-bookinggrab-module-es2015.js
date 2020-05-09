(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookinggrab-bookinggrab-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookinggrab/bookinggrab.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookinggrab/bookinggrab.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Cat Grab Booking</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"background\">\n\t<ion-list>\n\t\t<ion-item>\n      <ion-input placeholder=\" Name\" [(ngModel)]=\"bookinggrab.customerName\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder=\"Contact Number\" [(ngModel)]=\"bookinggrab.contactNumber\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder=\"Cat Name\" [(ngModel)]=\"bookinggrab.catName\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder=\"Remark\" [(ngModel)]=\"bookinggrab.remark\"></ion-input>\n    </ion-item>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n            <ion-label> DATE</ion-label>\n            <ion-input>\n                <ion-datetime value=\"19-02-1990\" placeholder=\"Select Date\"  [(ngModel)]=\"bookinggrab.date\"></ion-datetime>\n            </ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>TIME </ion-label>\n            <ion-input>\n                <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\" placeholder=\"Select Time\" [(ngModel)]=\"bookinggrab.time\"></ion-datetime>\n            </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-item>\n      <ion-checkbox slot=\"start\" ></ion-checkbox>\n      <ion-label>Add cat food in booking.</ion-label>\n    </ion-item> -->\n    </ion-list>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"primary\" expand=\"full\"  (click)=\"submitBookingGrab()\">Confirm</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button [routerLink]=\"['/menugrab']\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"warning\" >Cancel</ion-button>\n      </ion-col>\n    </ion-row>\n</ion-content>");

/***/ }),

/***/ "./src/app/bookinggrab/bookinggrab-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/bookinggrab/bookinggrab-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BookinggrabPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookinggrabPageRoutingModule", function() { return BookinggrabPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bookinggrab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookinggrab.page */ "./src/app/bookinggrab/bookinggrab.page.ts");




const routes = [
    {
        path: '',
        component: _bookinggrab_page__WEBPACK_IMPORTED_MODULE_3__["BookinggrabPage"]
    }
];
let BookinggrabPageRoutingModule = class BookinggrabPageRoutingModule {
};
BookinggrabPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookinggrabPageRoutingModule);



/***/ }),

/***/ "./src/app/bookinggrab/bookinggrab.module.ts":
/*!***************************************************!*\
  !*** ./src/app/bookinggrab/bookinggrab.module.ts ***!
  \***************************************************/
/*! exports provided: BookinggrabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookinggrabPageModule", function() { return BookinggrabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _bookinggrab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookinggrab-routing.module */ "./src/app/bookinggrab/bookinggrab-routing.module.ts");
/* harmony import */ var _bookinggrab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookinggrab.page */ "./src/app/bookinggrab/bookinggrab.page.ts");







let BookinggrabPageModule = class BookinggrabPageModule {
};
BookinggrabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bookinggrab_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookinggrabPageRoutingModule"]
        ],
        declarations: [_bookinggrab_page__WEBPACK_IMPORTED_MODULE_6__["BookinggrabPage"]]
    })
], BookinggrabPageModule);



/***/ }),

/***/ "./src/app/bookinggrab/bookinggrab.page.scss":
/*!***************************************************!*\
  !*** ./src/app/bookinggrab/bookinggrab.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmdncmFiL2Jvb2tpbmdncmFiLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/bookinggrab/bookinggrab.page.ts":
/*!*************************************************!*\
  !*** ./src/app/bookinggrab/bookinggrab.page.ts ***!
  \*************************************************/
/*! exports provided: BookinggrabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookinggrabPage", function() { return BookinggrabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");









let BookinggrabPage = class BookinggrabPage {
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
        this.bookinggrab = {
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
    submitBookingGrab() {
        this.fbService.submitBookingGrab(this.bookinggrab).then(() => {
            this.presentAlert('Done!', 'Your booking was created!');
            this.router.navigateByUrl('/menugrab');
        }, err => {
        });
    }
};
BookinggrabPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
BookinggrabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bookinggrab',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bookinggrab.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookinggrab/bookinggrab.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bookinggrab.page.scss */ "./src/app/bookinggrab/bookinggrab.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], BookinggrabPage);



/***/ })

}]);
//# sourceMappingURL=bookinggrab-bookinggrab-module-es2015.js.map