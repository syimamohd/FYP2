(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-spa-update-spa-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-spa/update-spa.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-spa/update-spa.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>Update Spa</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n        <ion-item>\n            <ion-input placeholder=\"Enter Spa Name\" [(ngModel)]=\"spa.spaName\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-textarea rows=\"6\" [(ngModel)]=\"spa.spaDetails\" placeholder=\"Enter spa details here...\"></ion-textarea>\n          </ion-item>\n          <ion-item>\n            <ion-input placeholder=\"Enter Spa Price\" [(ngModel)]=\"spa.spaPrice\"></ion-input>\n          </ion-item>\n    </ion-list>\n    <ion-button color=\"primary\" expand=\"full\" (click)=\"updateSpa()\">Update</ion-button>\n  </ion-content>\n");

/***/ }),

/***/ "./src/app/update-spa/update-spa-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/update-spa/update-spa-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UpdateSpaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSpaPageRoutingModule", function() { return UpdateSpaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _update_spa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-spa.page */ "./src/app/update-spa/update-spa.page.ts");




const routes = [
    {
        path: '',
        component: _update_spa_page__WEBPACK_IMPORTED_MODULE_3__["UpdateSpaPage"]
    }
];
let UpdateSpaPageRoutingModule = class UpdateSpaPageRoutingModule {
};
UpdateSpaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UpdateSpaPageRoutingModule);



/***/ }),

/***/ "./src/app/update-spa/update-spa.module.ts":
/*!*************************************************!*\
  !*** ./src/app/update-spa/update-spa.module.ts ***!
  \*************************************************/
/*! exports provided: UpdateSpaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSpaPageModule", function() { return UpdateSpaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _update_spa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-spa-routing.module */ "./src/app/update-spa/update-spa-routing.module.ts");
/* harmony import */ var _update_spa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-spa.page */ "./src/app/update-spa/update-spa.page.ts");







let UpdateSpaPageModule = class UpdateSpaPageModule {
};
UpdateSpaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _update_spa_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateSpaPageRoutingModule"]
        ],
        declarations: [_update_spa_page__WEBPACK_IMPORTED_MODULE_6__["UpdateSpaPage"]]
    })
], UpdateSpaPageModule);



/***/ }),

/***/ "./src/app/update-spa/update-spa.page.scss":
/*!*************************************************!*\
  !*** ./src/app/update-spa/update-spa.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1zcGEvdXBkYXRlLXNwYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/update-spa/update-spa.page.ts":
/*!***********************************************!*\
  !*** ./src/app/update-spa/update-spa.page.ts ***!
  \***********************************************/
/*! exports provided: UpdateSpaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSpaPage", function() { return UpdateSpaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");




let UpdateSpaPage = class UpdateSpaPage {
    constructor(activatedRoute, fbService, router) {
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router;
        this.spa = {
            spaName: '',
            spaDetails: '',
            spaPrice: ''
            // createdAt: new Date().getTime()
        };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.fbService.getSpa(id).subscribe(spaData => {
                this.spa = spaData;
            });
        }
    }
    updateSpa() {
        this.fbService.updateSpa(this.spa).then(() => {
            this.router.navigate(['/menuspa']);
        }, err => {
        });
    }
};
UpdateSpaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UpdateSpaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-spa',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-spa.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-spa/update-spa.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-spa.page.scss */ "./src/app/update-spa/update-spa.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UpdateSpaPage);



/***/ })

}]);
//# sourceMappingURL=update-spa-update-spa-module-es2015.js.map