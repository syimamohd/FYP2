(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menuvaccine-menuvaccine-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menuvaccine/menuvaccine.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menuvaccine/menuvaccine.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n        <ion-title> Cat Vaccine & Neuter Menu </ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button autoHide=\"false\">\r\n              </ion-menu-button>\r\n            <!-- <ion-back-button icon=\"arrow-back-outline\"></ion-back-button> -->\r\n          </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-list-header>\r\n        <ion-label>Vaccine & Neuter</ion-label>\r\n      </ion-list-header>\r\n      <ion-item *ngFor=\"let vaccine of (catVaccine | async)\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-img *ngIf=\"!!vaccine.image\" class=\"profile-pic\"  [src]=\"vaccine.image\"></ion-img>\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <h2>{{vaccine.vaccineName}}</h2>\r\n          <p>{{vaccine.vaccineDetails}}</p>\r\n          <p>RM{{vaccine.vaccinePrice}}</p>\r\n        </ion-label>\r\n        <ion-button *ngIf=\"isCustomer\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/bookingvacc/'+vaccine.id\">BOOK</ion-button>\r\n      <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-vaccine/'+vaccine.id\">View</ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-fab *ngIf=\"isAdmin\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n      <ion-fab-button [routerLink]=\"'/add-vaccine'\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n  </ion-content>\r\n  \r\n<!-- \r\n<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title>Cat Vaccine Menu</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n  <ion-card>\r\n      <ion-item>\r\n            <ion-col>\r\n                <ion-img class=\"img\" src=\"assets/img/cat.png\"></ion-img>\r\n            </ion-col>\r\n  \r\n        <ion-col>\r\n            <ion-text>\r\n                <h3>Cat Vaccine</h3>\r\n                <h2>RM50</h2>\r\n            \r\n              </ion-text>\r\n        </ion-col>  \r\n        <ion-col size-sm=\"3\"><ion-button size=\"med\" [routerLink]=\"['/bookingservice']\" fill=\"solid\" expand=\"block\" color=\"dark\" >Book</ion-button></ion-col> \r\n        </ion-item>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n      <ion-item>\r\n            <ion-col>\r\n                <ion-img class=\"img\" src=\"assets/img/cat.png\"></ion-img>\r\n            </ion-col>\r\n\r\n        <ion-col>\r\n            <ion-text>\r\n                <h3>Cat Neuter</h3>\r\n                <h2>RM150</h2>\r\n              <p>Female Cat</p>\r\n              </ion-text>\r\n        </ion-col>  \r\n        <ion-col size-sm=\"3\"><ion-button size=\"med\" [routerLink]=\"['/bookingservice']\" fill=\"solid\" expand=\"block\" color=\"dark\" >Book</ion-button></ion-col> \r\n        </ion-item>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n      <ion-item>\r\n            <ion-col>\r\n                <ion-img class=\"img\" src=\"assets/img/cat.png\"></ion-img>\r\n            </ion-col>\r\n\r\n        <ion-col>\r\n            <ion-text>\r\n                <h3>Cat Neuter</h3>\r\n                <h2>RM100</h2>\r\n              <p>Male Cat</p>\r\n              </ion-text>\r\n        </ion-col>  \r\n        <ion-col size-sm=\"3\"><ion-button size=\"med\" [routerLink]=\"['/bookingservice']\" fill=\"solid\" expand=\"block\" color=\"dark\" >Book</ion-button></ion-col> \r\n        </ion-item>\r\n  </ion-card>\r\n</ion-content> -->\r\n");

/***/ }),

/***/ "./src/app/menuvaccine/menuvaccine-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/menuvaccine/menuvaccine-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MenuvaccinePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuvaccinePageRoutingModule", function() { return MenuvaccinePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menuvaccine_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuvaccine.page */ "./src/app/menuvaccine/menuvaccine.page.ts");




const routes = [
    {
        path: '',
        component: _menuvaccine_page__WEBPACK_IMPORTED_MODULE_3__["MenuvaccinePage"]
    }
];
let MenuvaccinePageRoutingModule = class MenuvaccinePageRoutingModule {
};
MenuvaccinePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuvaccinePageRoutingModule);



/***/ }),

/***/ "./src/app/menuvaccine/menuvaccine.module.ts":
/*!***************************************************!*\
  !*** ./src/app/menuvaccine/menuvaccine.module.ts ***!
  \***************************************************/
/*! exports provided: MenuvaccinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuvaccinePageModule", function() { return MenuvaccinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _menuvaccine_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuvaccine-routing.module */ "./src/app/menuvaccine/menuvaccine-routing.module.ts");
/* harmony import */ var _menuvaccine_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menuvaccine.page */ "./src/app/menuvaccine/menuvaccine.page.ts");







let MenuvaccinePageModule = class MenuvaccinePageModule {
};
MenuvaccinePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menuvaccine_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuvaccinePageRoutingModule"]
        ],
        declarations: [_menuvaccine_page__WEBPACK_IMPORTED_MODULE_6__["MenuvaccinePage"]]
    })
], MenuvaccinePageModule);



/***/ }),

/***/ "./src/app/menuvaccine/menuvaccine.page.scss":
/*!***************************************************!*\
  !*** ./src/app/menuvaccine/menuvaccine.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content.background {\n  --background: url('background.jpg') 0 0/100% 100% no-repeat;\n}\n\nion-img.img {\n  width: 300px;\n  height: 230px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudXZhY2NpbmUvQzpcXFVzZXJzXFxpcnN5YVxcRGVza3RvcFxcZnlwMi1tYXN0ZXIvc3JjXFxhcHBcXG1lbnV2YWNjaW5lXFxtZW51dmFjY2luZS5wYWdlLnNjc3MiLCJzcmMvYXBwL21lbnV2YWNjaW5lL21lbnV2YWNjaW5lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJEQUFBO0FDQ0o7O0FERUE7RUFFSSxZQUFBO0VBQ0EsYUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbWVudXZhY2NpbmUvbWVudXZhY2NpbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuaW9uLWltZy5pbWdcbntcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAyMzBweDtcbn0iLCJpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cbmlvbi1pbWcuaW1nIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDIzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/menuvaccine/menuvaccine.page.ts":
/*!*************************************************!*\
  !*** ./src/app/menuvaccine/menuvaccine.page.ts ***!
  \*************************************************/
/*! exports provided: MenuvaccinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuvaccinePage", function() { return MenuvaccinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");


//call the page that has crud operaions in firebase.service




let MenuvaccinePage = class MenuvaccinePage {
    constructor(fbService, afs, user, storage) {
        this.fbService = fbService;
        this.afs = afs;
        this.user = user;
        this.storage = storage;
        this.isAdmin = false;
        this.isCustomer = true;
        this.mainuser = afs.doc(`users/${user.getUID()}`);
        this.sub = this.mainuser.valueChanges().subscribe(event => {
            this.username = event.username;
            // this.profilePic = event.profilePic
            this.isAdmin = event.isAdmin;
            this.isCustomer = event.isCustomer;
        });
    }
    ngOnInit() {
        this.catVaccine = this.fbService.getVaccines();
        this.storage.setItem('username', this.username);
        this.storage.setItem('isAdmin', this.isAdmin);
        this.storage.setItem('isCustomer', this.isCustomer);
    }
};
MenuvaccinePage.ctorParameters = () => [
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] }
];
MenuvaccinePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menuvaccine',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menuvaccine.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menuvaccine/menuvaccine.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menuvaccine.page.scss */ "./src/app/menuvaccine/menuvaccine.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"]])
], MenuvaccinePage);



/***/ })

}]);
//# sourceMappingURL=menuvaccine-menuvaccine-module-es2015.js.map