(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-vaccine-add-vaccine-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-vaccine/add-vaccine.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-vaccine/add-vaccine.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>New Vaccine</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-input placeholder=\"Enter Vaccine Name\" [(ngModel)]=\"vaccine.vaccineName\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-textarea rows=\"6\" [(ngModel)]=\"vaccine.vaccineDetails\" placeholder=\"Enter vaccine details here...\"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder=\"Enter Vaccine Price\" [(ngModel)]=\"vaccine.vaccinePrice\"></ion-input>\n    </ion-item>\n  </ion-list>\n    <ion-button color=\"primary\" expand=\"full\" (click)=\"addVaccine()\">Create</ion-button>\n  </ion-content>\n");

/***/ }),

/***/ "./src/app/add-vaccine/add-vaccine-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/add-vaccine/add-vaccine-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddVaccinePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVaccinePageRoutingModule", function() { return AddVaccinePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_vaccine_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-vaccine.page */ "./src/app/add-vaccine/add-vaccine.page.ts");




const routes = [
    {
        path: '',
        component: _add_vaccine_page__WEBPACK_IMPORTED_MODULE_3__["AddVaccinePage"]
    }
];
let AddVaccinePageRoutingModule = class AddVaccinePageRoutingModule {
};
AddVaccinePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddVaccinePageRoutingModule);



/***/ }),

/***/ "./src/app/add-vaccine/add-vaccine.module.ts":
/*!***************************************************!*\
  !*** ./src/app/add-vaccine/add-vaccine.module.ts ***!
  \***************************************************/
/*! exports provided: AddVaccinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVaccinePageModule", function() { return AddVaccinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_vaccine_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-vaccine-routing.module */ "./src/app/add-vaccine/add-vaccine-routing.module.ts");
/* harmony import */ var _add_vaccine_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-vaccine.page */ "./src/app/add-vaccine/add-vaccine.page.ts");







let AddVaccinePageModule = class AddVaccinePageModule {
};
AddVaccinePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_vaccine_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddVaccinePageRoutingModule"]
        ],
        declarations: [_add_vaccine_page__WEBPACK_IMPORTED_MODULE_6__["AddVaccinePage"]]
    })
], AddVaccinePageModule);



/***/ }),

/***/ "./src/app/add-vaccine/add-vaccine.page.scss":
/*!***************************************************!*\
  !*** ./src/app/add-vaccine/add-vaccine.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC12YWNjaW5lL2FkZC12YWNjaW5lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/add-vaccine/add-vaccine.page.ts":
/*!*************************************************!*\
  !*** ./src/app/add-vaccine/add-vaccine.page.ts ***!
  \*************************************************/
/*! exports provided: AddVaccinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVaccinePage", function() { return AddVaccinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let AddVaccinePage = class AddVaccinePage {
    constructor(activatedRoute, fbService, toastCtrl, router) {
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.vaccine = {
            vaccineName: '',
            vaccineDetails: '',
            vaccinePrice: ''
            // createdAt: new Date().getTime()
        };
    }
    ngOnInit() {
    }
    addVaccine() {
        this.fbService.addVaccine(this.vaccine).then(() => {
            this.router.navigateByUrl('/');
        }, err => {
        });
    }
};
AddVaccinePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddVaccinePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-vaccine',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-vaccine.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-vaccine/add-vaccine.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-vaccine.page.scss */ "./src/app/add-vaccine/add-vaccine.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AddVaccinePage);



/***/ })

}]);
//# sourceMappingURL=add-vaccine-add-vaccine-module-es2015.js.map