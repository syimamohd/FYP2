(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menuspa-menuspa-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menuspa/menuspa.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menuspa/menuspa.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n      <ion-title> Cat Spa & Grooming Menu </ion-title>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button autoHide=\"false\">\n            </ion-menu-button>\n          <!-- <ion-back-button icon=\"arrow-back-outline\"></ion-back-button> -->\n        </ion-buttons>\n   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Spa & Grooming</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let spa of (catSpa | async)\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\">\n      </ion-thumbnail>\n      <ion-label>\n        <h2>{{spa.spaName}}</h2>\n        <p>{{spa.spaDetails}}</p>\n        <p>{{spa.spaPrice}}</p>\n      </ion-label>\n      <ion-button *ngIf=\"isCustomer\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/bookingspa'\">BOOK</ion-button>\n      <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-spa/'+spa.id\">View</ion-button>\n    </ion-item>\n  </ion-list>\n  <ion-fab *ngIf=\"isAdmin\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button [routerLink]=\"'/add-spa'\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n</ion-content>\n\n<!-- <ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Cat Spa & Grooming Menu</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n     <ion-item-divider color=\"dark\">\n        <ion-label>\n          Short Hair Breed\n        </ion-label>\n      </ion-item-divider> \n\n      <ion-item-divider>\n          <ion-label>\n              Short Hair Breed\n          </ion-label>\n        </ion-item-divider>\n\n      <ion-card>\n          <ion-item>\n              <ion-card-header>\n                  <ion-card-title>Normal Spa & Groom</ion-card-title>\n                  <ion-card-subtitle>RM25</ion-card-subtitle>\n                </ion-card-header>\n              <ion-label>\n                <p>Nail cut, remove lice, ear cleansing and cat shower for SHORT HAIR cat breed.</p>\n              </ion-label>\n              <ion-button size=\"med\" [routerLink]=\"['/bookingservice']\" fill=\"solid\" expand=\"block\" color=\"dark\">Book</ion-button>\n            </ion-item>\n      </ion-card>\n      <ion-card>\n          <ion-item>\n              <ion-card-header>\n                  <ion-card-title>Med Spa & Groom</ion-card-title>\n                  <ion-card-subtitle>RM28</ion-card-subtitle>\n                </ion-card-header>\n              <ion-label>\n                <p>Nail cut, remove lice, ear cleansing and cat shower for SHORT HAIR cat breed.</p>\n              </ion-label>\n              <ion-button size=\"med\" [routerLink]=\"['/bookingservice']\" fill=\"solid\" expand=\"block\" color=\"dark\">Book</ion-button>\n            </ion-item>\n      </ion-card>\n\n      <ion-item-divider>\n          <ion-label>\n            Long Hair Breed\n          </ion-label>\n        </ion-item-divider>\n      <ion-card>\n          <ion-item>\n              <ion-card-header>\n                  <ion-card-title>Normal Spa & Groom</ion-card-title>\n                  <ion-card-subtitle>RM35</ion-card-subtitle>\n                </ion-card-header>\n              <ion-label>\n                  <p>Nail cut, remove lice, ear cleansing and cat shower for LONG HAIR cat breed.</p>\n              </ion-label>\n              <ion-button size=\"med\" [routerLink]=\"['/bookingservice']\" fill=\"solid\" expand=\"block\" color=\"dark\">Book</ion-button>\n            </ion-item>\n      </ion-card>\n      <ion-card>\n          <ion-item>\n              <ion-card-header>\n                  <ion-card-title>Med Spa & Groom</ion-card-title>\n                  <ion-card-subtitle>RM38</ion-card-subtitle>\n                </ion-card-header>\n              <ion-label>\n                <p>Nail cut, remove lice, ear cleansing and cat shower for LONG HAIR cat breed.</p>\n              </ion-label>\n              <ion-button size=\"med\" [routerLink]=\"['/bookingservice']\" fill=\"solid\" expand=\"block\" color=\"dark\">Book</ion-button>\n            </ion-item>\n      </ion-card>\n\n</ion-content> -->\n");

/***/ }),

/***/ "./src/app/menuspa/menuspa-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/menuspa/menuspa-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MenuspaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuspaPageRoutingModule", function() { return MenuspaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menuspa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuspa.page */ "./src/app/menuspa/menuspa.page.ts");




const routes = [
    {
        path: '',
        component: _menuspa_page__WEBPACK_IMPORTED_MODULE_3__["MenuspaPage"]
    }
];
let MenuspaPageRoutingModule = class MenuspaPageRoutingModule {
};
MenuspaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuspaPageRoutingModule);



/***/ }),

/***/ "./src/app/menuspa/menuspa.module.ts":
/*!*******************************************!*\
  !*** ./src/app/menuspa/menuspa.module.ts ***!
  \*******************************************/
/*! exports provided: MenuspaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuspaPageModule", function() { return MenuspaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _menuspa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuspa-routing.module */ "./src/app/menuspa/menuspa-routing.module.ts");
/* harmony import */ var _menuspa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menuspa.page */ "./src/app/menuspa/menuspa.page.ts");







let MenuspaPageModule = class MenuspaPageModule {
};
MenuspaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menuspa_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuspaPageRoutingModule"]
        ],
        declarations: [_menuspa_page__WEBPACK_IMPORTED_MODULE_6__["MenuspaPage"]]
    })
], MenuspaPageModule);



/***/ }),

/***/ "./src/app/menuspa/menuspa.page.scss":
/*!*******************************************!*\
  !*** ./src/app/menuspa/menuspa.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content.background {\n  --background: url('background.jpg') 0 0/100% 100% no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudXNwYS9DOlxcVXNlcnNcXGlyc3lhXFxEZXNrdG9wXFxGWVAyLW1hc3Rlci9zcmNcXGFwcFxcbWVudXNwYVxcbWVudXNwYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwyREFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVudXNwYS9tZW51c3BhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmRcbntcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/menuspa/menuspa.page.ts":
/*!*****************************************!*\
  !*** ./src/app/menuspa/menuspa.page.ts ***!
  \*****************************************/
/*! exports provided: MenuspaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuspaPage", function() { return MenuspaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");


//call the page that has crud operaions in firebase.service




let MenuspaPage = class MenuspaPage {
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
        this.catSpa = this.fbService.getSpas();
        this.storage.setItem('username', this.username);
        this.storage.setItem('isAdmin', this.isAdmin);
        this.storage.setItem('isCustomer', this.isCustomer);
    }
};
MenuspaPage.ctorParameters = () => [
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] }
];
MenuspaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menuspa',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menuspa.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menuspa/menuspa.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menuspa.page.scss */ "./src/app/menuspa/menuspa.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"]])
], MenuspaPage);



/***/ })

}]);
//# sourceMappingURL=menuspa-menuspa-module-es2015.js.map