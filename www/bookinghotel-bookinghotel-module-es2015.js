(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookinghotel-bookinghotel-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookinghotel/bookinghotel.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookinghotel/bookinghotel.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Cat Hotel Booking</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"background\">\n\t<ion-list>\n\t\t<ion-item>\n\t\t  <!-- <ion-label position=\"floating\">NAME  </ion-label> -->\n      <ion-input placeholder=\" Name\" [(ngModel)]=\"bookinghotel.customerName\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder=\"Contact Number\" [(ngModel)]=\"bookinghotel.contactNumber\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder=\"Cat Name\" [(ngModel)]=\"bookinghotel.catName\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder=\"Remark\" [(ngModel)]=\"bookinghotel.remark\"></ion-input>\n    </ion-item>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n            <ion-label>CHECK IN DATE</ion-label>\n            <ion-input>\n                <ion-datetime displayFormat=\"MMM DD, YYYY\" pickerFormat=\"DDDD MMMM YYYY\" placeholder=\"Select Date\" value=(DateTime.Now) [(ngModel)]=\"todate\" min = {{todate}} max=\"2025\" [(ngModel)]=\"bookinghotel.checkInDate\"></ion-datetime>\n            </ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>TIME IN</ion-label>\n            <ion-input>\n                <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" placeholder=\"Select Time\" [(ngModel)]=\"bookinghotel.timeIn\"></ion-datetime>\n            </ion-input>\n        </ion-item>\n      </ion-col>\n      \n      <ion-col>\n        <ion-item>\n          <ion-label>CHECK OUT DATE</ion-label>\n          <ion-input>\n              <ion-datetime displayFormat=\"D/MM/YYYY\" pickerFormat=\"DDDD MMMM YYYY\" placeholder=\"Select Date\"  min = {{todate}} max=\"2025\" [(ngModel)]=\"bookinghotel.checkOutDate\"></ion-datetime>\n          </ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>TIME OUT</ion-label>\n          <ion-input>\n              <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" placeholder=\"Select Time\" [(ngModel)]=\"bookinghotel.timeOut\"></ion-datetime>\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-item>\n      <ion-checkbox slot=\"start\" ></ion-checkbox>\n      <ion-label>Add cat food in booking.</ion-label>\n    </ion-item> -->\n    </ion-list>\n    <ion-row>\n      <ion-col>\n        <ion-button (click)=\"submitBookingHotel()\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"primary\">Confirm</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button [routerLink]=\"['/menuhotel']\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"warning\" >Cancel</ion-button>\n      </ion-col>\n    </ion-row>\n    \n</ion-content>\n\n<!-- [routerLink]=\"'/receipthotel/'+bookinghotel.id\"  -->");

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







let BookinghotelPageModule = class BookinghotelPageModule {
};
BookinghotelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content.background {\n  --background: url('background.jpg') 0 0/100% 100% no-repeat, transparent; }\n\n#button {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va2luZ2hvdGVsL0M6XFxVc2Vyc1xcaXJzeWFcXERlc2t0b3BcXEZZUDItbWFzdGVyL3NyY1xcYXBwXFxib29raW5naG90ZWxcXGJvb2tpbmdob3RlbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSx3RUFBYSxFQUFBOztBQUdqQjtFQUVJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYm9va2luZ2hvdGVsL2Jvb2tpbmdob3RlbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5kXG57XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQsIHRyYW5zcGFyZW50O1xufVxuXG4jYnV0dG9uXG57XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4iXX0= */");

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









let BookinghotelPage = class BookinghotelPage {
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
            // this.profilePic = event.profilePic
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
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], BookinghotelPage);



/***/ })

}]);
//# sourceMappingURL=bookinghotel-bookinghotel-module-es2015.js.map