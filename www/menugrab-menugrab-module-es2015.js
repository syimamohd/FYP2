(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menugrab-menugrab-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menugrab/menugrab.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menugrab/menugrab.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n      <ion-title> Cat Grab Menu</ion-title>\n      <ion-buttons slot=\"start\">\n          <!-- <ion-back-button icon=\"arrow-back-outline\"></ion-back-button> -->\n          <ion-menu-button autoHide=\"false\">\n          </ion-menu-button>\n          <!-- <ion-back-button></ion-back-button> -->\n        </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Grab</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let grab of (catGrab | async)\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\">\n      </ion-thumbnail>\n      <ion-label>\n        <h2>{{grab.grabName}}</h2>\n        <p>{{grab.grabDetails}}</p>\n        <p>{{grab.grabPrice}}</p>\n      </ion-label>\n      <ion-button *ngIf=\"isCustomer\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/bookinggrab'\">BOOK</ion-button>\n      <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-grab/'+grab.id\">View</ion-button>\n    </ion-item>\n  </ion-list>\n  <ion-fab *ngIf=\"isAdmin\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button [routerLink]=\"'/add-grab'\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n</ion-content>\n<!-- \n<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Cat Grab Menu</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n  <ion-row size-lg=\"10\" offset-md=\"3\">\n      <ion-col size-md=\"6\" >\n          <div>\n          \n              <ion-card>\n                  <ion-item>\n                        <ion-col>\n                            <ion-img class=\"img\" src=\"assets/img/car 1.png\"></ion-img>\n                        </ion-col>\n              \n                    <ion-col>\n                        <ion-text>\n                            <h3>Skudai Area</h3>\n                            <h2>RM5</h2>\n                          <p>Delivery for cat aroud Skudai area.</p>\n                          </ion-text>\n                    </ion-col>  \n                   \n                      <ion-button class=\"button\" size=\"med\" [routerLink]=\"['/bookingservice']\" fill=\"solid\" expand=\"block\" color=\"dark\" >Book</ion-button>\n                    </ion-item>\n              </ion-card>\n          </div>\n      </ion-col>\n\n            <ion-col  size-md=\"6\" >\n              <div>\n                  <ion-card>\n                      <ion-item>\n                            <ion-col>\n                                <ion-img class=\"img\" src=\"assets/img/car.png\"></ion-img>\n                            </ion-col>\n                  \n                        <ion-col>\n                            <ion-text>\n                                <h3>Outside Skudai</h3>\n                                <h2>RM10</h2>\n                              <p>Delivery for cat other than Skudai area.</p>\n                              </ion-text>\n                        </ion-col>  \n                        <ion-col size-sm=\"3\"><ion-button size=\"med\" [routerLink]=\"['/bookingservice']\" fill=\"solid\" expand=\"block\" color=\"dark\" >Book</ion-button></ion-col> \n                        </ion-item>\n                  </ion-card> \n              </div>     \n            </ion-col>\n  </ion-row>\n</ion-content> -->\n");

/***/ }),

/***/ "./src/app/menugrab/menugrab-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/menugrab/menugrab-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MenugrabPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenugrabPageRoutingModule", function() { return MenugrabPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menugrab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menugrab.page */ "./src/app/menugrab/menugrab.page.ts");




const routes = [
    {
        path: '',
        component: _menugrab_page__WEBPACK_IMPORTED_MODULE_3__["MenugrabPage"]
    }
];
let MenugrabPageRoutingModule = class MenugrabPageRoutingModule {
};
MenugrabPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenugrabPageRoutingModule);



/***/ }),

/***/ "./src/app/menugrab/menugrab.module.ts":
/*!*********************************************!*\
  !*** ./src/app/menugrab/menugrab.module.ts ***!
  \*********************************************/
/*! exports provided: MenugrabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenugrabPageModule", function() { return MenugrabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _menugrab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menugrab-routing.module */ "./src/app/menugrab/menugrab-routing.module.ts");
/* harmony import */ var _menugrab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menugrab.page */ "./src/app/menugrab/menugrab.page.ts");







let MenugrabPageModule = class MenugrabPageModule {
};
MenugrabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menugrab_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenugrabPageRoutingModule"]
        ],
        declarations: [_menugrab_page__WEBPACK_IMPORTED_MODULE_6__["MenugrabPage"]]
    })
], MenugrabPageModule);



/***/ }),

/***/ "./src/app/menugrab/menugrab.page.scss":
/*!*********************************************!*\
  !*** ./src/app/menugrab/menugrab.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content.background {\n  --background: url('background.jpg') 0 0/100% 100% no-repeat; }\n\nion-button.button {\n  position: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudWdyYWIvQzpcXFVzZXJzXFxpcnN5YVxcRGVza3RvcFxcRllQMi1tYXN0ZXIvc3JjXFxhcHBcXG1lbnVncmFiXFxtZW51Z3JhYi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwyREFBYSxFQUFBOztBQUVqQjtFQUVJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVudWdyYWIvbWVudWdyYWIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZFxue1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuaW9uLWJ1dHRvbi5idXR0b25cbntcbiAgICBwb3NpdGlvbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/menugrab/menugrab.page.ts":
/*!*******************************************!*\
  !*** ./src/app/menugrab/menugrab.page.ts ***!
  \*******************************************/
/*! exports provided: MenugrabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenugrabPage", function() { return MenugrabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");


//call the page that has crud operaions in firebase.service




let MenugrabPage = class MenugrabPage {
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
        this.catGrab = this.fbService.getGrabs();
        this.storage.setItem('username', this.username);
        this.storage.setItem('isAdmin', this.isAdmin);
        this.storage.setItem('isCustomer', this.isCustomer);
    }
};
MenugrabPage.ctorParameters = () => [
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] }
];
MenugrabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menugrab',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menugrab.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menugrab/menugrab.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menugrab.page.scss */ "./src/app/menugrab/menugrab.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"]])
], MenugrabPage);



/***/ })

}]);
//# sourceMappingURL=menugrab-menugrab-module-es2015.js.map