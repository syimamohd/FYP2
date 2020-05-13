(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookinghotel-bookinghotel-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookinghotel/bookinghotel.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookinghotel/bookinghotel.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title>Cat Hotel Booking</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content padding class=\"background\">\r\n<!-- <form [formGroup]=\"myform\"> -->\r\n\t<ion-list>\r\n\t\t<ion-item>\r\n      <ion-input  placeholder=\" Name\" [(ngModel)]=\"bookinghotel.customerName\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input  placeholder=\"Contact Number\" [(ngModel)]=\"bookinghotel.contactNumber\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input  placeholder=\"Cat Name\" [(ngModel)]=\"bookinghotel.catName\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input placeholder=\"Remark\" [(ngModel)]=\"bookinghotel.remark\"></ion-input>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n            <ion-label>CHECK IN DATE</ion-label>\r\n            <ion-input>\r\n                <ion-datetime displayFormat=\"MMM DD, YYYY\" pickerFormat=\"DDDD MMMM YYYY\" placeholder=\"Select Date\" value=(DateTime.Now) [(ngModel)]=\"todate\" min = {{todate}} max=\"2025\" [(ngModel)]=\"bookinghotel.checkInDate\"></ion-datetime>\r\n            </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label>TIME IN</ion-label>\r\n            <ion-input>\r\n                <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" placeholder=\"Select Time\" [(ngModel)]=\"bookinghotel.timeIn\"></ion-datetime>\r\n            </ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      \r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label>CHECK OUT DATE</ion-label>\r\n          <ion-input>\r\n              <ion-datetime displayFormat=\"D/MM/YYYY\" pickerFormat=\"DDDD MMMM YYYY\" placeholder=\"Select Date\"  min = {{todate}} max=\"2025\" [(ngModel)]=\"bookinghotel.checkOutDate\"></ion-datetime>\r\n          </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>TIME OUT</ion-label>\r\n          <ion-input>\r\n              <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" placeholder=\"Select Time\" [(ngModel)]=\"bookinghotel.timeOut\"></ion-datetime>\r\n          </ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <ion-item>\r\n      <ion-checkbox slot=\"start\" ></ion-checkbox>\r\n      <ion-label>Add cat food in booking.</ion-label>\r\n    </ion-item> -->\r\n    </ion-list>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button (click)=\" submitBookingHotel() \" fill=\"solid\" expand=\"block\" size=\"med\" color=\"primary\">Confirm</ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button [routerLink]=\"['/menuhotel']\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"warning\" >Cancel</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  <!-- </form>     -->\r\n</ion-content>\r\n\r\n<!-- [routerLink]=\"'/receipthotel/'+bookinghotel.id\"  -->");

/***/ }),

/***/ "./src/app/bookinghotel/bookinghotel-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/bookinghotel/bookinghotel-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: BookinghotelPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookinghotelPageRoutingModule", function() { return BookinghotelPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bookinghotel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookinghotel.page */ "./src/app/bookinghotel/bookinghotel.page.ts");




const routes = [
    {
        path: '',
        component: _bookinghotel_page__WEBPACK_IMPORTED_MODULE_3__["BookinghotelPage"]
    }
];
let BookinghotelPageRoutingModule = class BookinghotelPageRoutingModule {
};
BookinghotelPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookinghotelPageRoutingModule);



/***/ }),

/***/ "./src/app/bookinghotel/bookinghotel.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/bookinghotel/bookinghotel.module.ts ***!
  \*****************************************************/
/*! exports provided: BookinghotelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookinghotelPageModule", function() { return BookinghotelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _bookinghotel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookinghotel-routing.module */ "./src/app/bookinghotel/bookinghotel-routing.module.ts");
/* harmony import */ var _bookinghotel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookinghotel.page */ "./src/app/bookinghotel/bookinghotel.page.ts");







//import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
let BookinghotelPageModule = class BookinghotelPageModule {
};
BookinghotelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            // ReactiveFormsModule, FormControl, Validators, 
            _bookinghotel_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookinghotelPageRoutingModule"]
        ],
        declarations: [_bookinghotel_page__WEBPACK_IMPORTED_MODULE_6__["BookinghotelPage"]]
    })
], BookinghotelPageModule);



/***/ }),

/***/ "./src/app/bookinghotel/bookinghotel.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/bookinghotel/bookinghotel.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content.background {\n  --background: url('background.jpg') 0 0/100% 100% no-repeat, transparent;\n}\n\n#button {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va2luZ2hvdGVsL0M6XFxVc2Vyc1xcaXJzeWFcXERlc2t0b3BcXEZZUDItbWFzdGVyL3NyY1xcYXBwXFxib29raW5naG90ZWxcXGJvb2tpbmdob3RlbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2Jvb2tpbmdob3RlbC9ib29raW5naG90ZWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksd0VBQUE7QUNBSjs7QURHQTtFQUVJLGlCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9ib29raW5naG90ZWwvYm9va2luZ2hvdGVsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmRcbntcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCwgdHJhbnNwYXJlbnQ7XG59XG5cbiNidXR0b25cbntcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiIsImlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCwgdHJhbnNwYXJlbnQ7XG59XG5cbiNidXR0b24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/bookinghotel/bookinghotel.page.ts":
/*!***************************************************!*\
  !*** ./src/app/bookinghotel/bookinghotel.page.ts ***!
  \***************************************************/
/*! exports provided: BookinghotelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookinghotelPage", function() { return BookinghotelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");










let BookinghotelPage = class BookinghotelPage {
    constructor(activatedRoute, fbService, afs, user, auth, storage, toastCtrl, router, alertController) {
        // this.myform = new FormGroup
        // ({
        //   customerName: new FormControl('',Validators.required),
        //   contactNumber: new FormControl('',Validators.required),
        //   catName: new FormControl('',[Validators.required, Validators.maxLength(20)]),
        // })
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.afs = afs;
        this.user = user;
        this.auth = auth;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.alertController = alertController;
        this.book = {};
        this.isAdmin = false;
        this.isCustomer = true;
        this.today = new Date();
        this.bookinghotel = {
            customerName: '',
            contactNumber: '',
            catName: '',
            remark: '',
            checkInDate: '',
            checkOutDate: '',
            timeIn: '',
            timeOut: ''
            // catFood: Selection;
            // createdAt: new Date().getTime()
        };
        this.mainuser = afs.doc(`users/${user.getUID()}`);
        this.sub = this.mainuser.valueChanges().subscribe(event => {
            this.username = event.username;
            this.isAdmin = event.isAdmin;
            this.isCustomer = event.isCustomer;
        });
    }
    ngOnInit() {
        this.today.setDate(this.today.getDate() + 3);
        this.todate = this.today.toISOString().substr(0, 10);
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
    submitBookingHotel() {
        this.fbService.submitBookingHotel(this.bookinghotel).then(() => {
            this.presentAlert('Done!', 'Your booking was created!');
            this.router.navigateByUrl('/menuhotel');
        }, err => {
        });
    }
};
BookinghotelPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
BookinghotelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bookinghotel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bookinghotel.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookinghotel/bookinghotel.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bookinghotel.page.scss */ "./src/app/bookinghotel/bookinghotel.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], BookinghotelPage);



/***/ })

}]);
//# sourceMappingURL=bookinghotel-bookinghotel-module-es2015.js.map