(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-spa-add-spa-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-spa/add-spa.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-spa/add-spa.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>New Spa</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-input placeholder=\"Enter Spa Name\" [(ngModel)]=\"spa.spaName\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-textarea rows=\"6\" [(ngModel)]=\"spa.spaDetails\" placeholder=\"Enter spa details here...\"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder=\"Enter Spa Price\" [(ngModel)]=\"spa.spaPrice\"></ion-input>\n    </ion-item>\n  </ion-list>\n    <ion-button color=\"primary\" expand=\"full\" (click)=\"addSpa()\">Create</ion-button>\n  </ion-content>");

/***/ }),

/***/ "./src/app/add-spa/add-spa-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/add-spa/add-spa-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AddSpaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSpaPageRoutingModule", function() { return AddSpaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_spa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-spa.page */ "./src/app/add-spa/add-spa.page.ts");




const routes = [
    {
        path: '',
        component: _add_spa_page__WEBPACK_IMPORTED_MODULE_3__["AddSpaPage"]
    }
];
let AddSpaPageRoutingModule = class AddSpaPageRoutingModule {
};
AddSpaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddSpaPageRoutingModule);



/***/ }),

/***/ "./src/app/add-spa/add-spa.module.ts":
/*!*******************************************!*\
  !*** ./src/app/add-spa/add-spa.module.ts ***!
  \*******************************************/
/*! exports provided: AddSpaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSpaPageModule", function() { return AddSpaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_spa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-spa-routing.module */ "./src/app/add-spa/add-spa-routing.module.ts");
/* harmony import */ var _add_spa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-spa.page */ "./src/app/add-spa/add-spa.page.ts");







let AddSpaPageModule = class AddSpaPageModule {
};
AddSpaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_spa_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddSpaPageRoutingModule"]
        ],
        declarations: [_add_spa_page__WEBPACK_IMPORTED_MODULE_6__["AddSpaPage"]]
    })
], AddSpaPageModule);



/***/ }),

/***/ "./src/app/add-spa/add-spa.page.scss":
/*!*******************************************!*\
  !*** ./src/app/add-spa/add-spa.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zcGEvYWRkLXNwYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/add-spa/add-spa.page.ts":
/*!*****************************************!*\
  !*** ./src/app/add-spa/add-spa.page.ts ***!
  \*****************************************/
/*! exports provided: AddSpaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSpaPage", function() { return AddSpaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let AddSpaPage = class AddSpaPage {
    constructor(activatedRoute, fbService, toastCtrl, router) {
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.spa = {
            spaName: '',
            spaDetails: '',
            spaPrice: ''
            // createdAt: new Date().getTime()
        };
    }
    ngOnInit() {
    }
    addSpa() {
        this.fbService.addSpa(this.spa).then(() => {
            this.router.navigateByUrl('/');
        }, err => {
        });
    }
};
AddSpaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddSpaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-spa',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-spa.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-spa/add-spa.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-spa.page.scss */ "./src/app/add-spa/add-spa.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AddSpaPage);



/***/ })

}]);
//# sourceMappingURL=add-spa-add-spa-module-es2015.js.map