(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["banklist-banklist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/banklist/banklist.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/banklist/banklist.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>banklist</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/banklist/banklist-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/banklist/banklist-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BanklistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanklistPageRoutingModule", function() { return BanklistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _banklist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banklist.page */ "./src/app/banklist/banklist.page.ts");




const routes = [
    {
        path: '',
        component: _banklist_page__WEBPACK_IMPORTED_MODULE_3__["BanklistPage"]
    }
];
let BanklistPageRoutingModule = class BanklistPageRoutingModule {
};
BanklistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BanklistPageRoutingModule);



/***/ }),

/***/ "./src/app/banklist/banklist.module.ts":
/*!*********************************************!*\
  !*** ./src/app/banklist/banklist.module.ts ***!
  \*********************************************/
/*! exports provided: BanklistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanklistPageModule", function() { return BanklistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _banklist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./banklist-routing.module */ "./src/app/banklist/banklist-routing.module.ts");
/* harmony import */ var _banklist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./banklist.page */ "./src/app/banklist/banklist.page.ts");







let BanklistPageModule = class BanklistPageModule {
};
BanklistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _banklist_routing_module__WEBPACK_IMPORTED_MODULE_5__["BanklistPageRoutingModule"]
        ],
        declarations: [_banklist_page__WEBPACK_IMPORTED_MODULE_6__["BanklistPage"]]
    })
], BanklistPageModule);



/***/ }),

/***/ "./src/app/banklist/banklist.page.scss":
/*!*********************************************!*\
  !*** ./src/app/banklist/banklist.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhbmtsaXN0L2JhbmtsaXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/banklist/banklist.page.ts":
/*!*******************************************!*\
  !*** ./src/app/banklist/banklist.page.ts ***!
  \*******************************************/
/*! exports provided: BanklistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanklistPage", function() { return BanklistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BanklistPage = class BanklistPage {
    constructor() { }
    ngOnInit() {
    }
};
BanklistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banklist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./banklist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/banklist/banklist.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./banklist.page.scss */ "./src/app/banklist/banklist.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BanklistPage);



/***/ })

}]);
//# sourceMappingURL=banklist-banklist-module-es2015.js.map