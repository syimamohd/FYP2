(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-grab-view-grab-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-grab/view-grab.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-grab/view-grab.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>{{grab.grabName}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card color=\"secondary\">\n    <ion-card-header>\n      <ion-card-subtitle>{{grab.createdAt | date: 'short'}}</ion-card-subtitle>\n      <ion-card-title>{{grab.grabName}}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <p align=\"justify\">{{grab.grabDetails}}</p>\n      <br>\n      <p align=\"justify\">{{grab.grabPrice}}</p>\n      <ion-button slot=\"start\" color=\"warning\" [routerLink]=\"'/update-grab/' + grab.id\">Edit</ion-button>\n      <ion-button slot=\"end\" color=\"danger\" (click)=\"deleteGrab()\">Delete</ion-button>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/view-grab/view-grab-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/view-grab/view-grab-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ViewGrabPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewGrabPageRoutingModule", function() { return ViewGrabPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_grab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-grab.page */ "./src/app/view-grab/view-grab.page.ts");




const routes = [
    {
        path: '',
        component: _view_grab_page__WEBPACK_IMPORTED_MODULE_3__["ViewGrabPage"]
    }
];
let ViewGrabPageRoutingModule = class ViewGrabPageRoutingModule {
};
ViewGrabPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewGrabPageRoutingModule);



/***/ }),

/***/ "./src/app/view-grab/view-grab.module.ts":
/*!***********************************************!*\
  !*** ./src/app/view-grab/view-grab.module.ts ***!
  \***********************************************/
/*! exports provided: ViewGrabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewGrabPageModule", function() { return ViewGrabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _view_grab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-grab-routing.module */ "./src/app/view-grab/view-grab-routing.module.ts");
/* harmony import */ var _view_grab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-grab.page */ "./src/app/view-grab/view-grab.page.ts");







let ViewGrabPageModule = class ViewGrabPageModule {
};
ViewGrabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_grab_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewGrabPageRoutingModule"]
        ],
        declarations: [_view_grab_page__WEBPACK_IMPORTED_MODULE_6__["ViewGrabPage"]]
    })
], ViewGrabPageModule);



/***/ }),

/***/ "./src/app/view-grab/view-grab.page.scss":
/*!***********************************************!*\
  !*** ./src/app/view-grab/view-grab.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctZ3JhYi92aWV3LWdyYWIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/view-grab/view-grab.page.ts":
/*!*********************************************!*\
  !*** ./src/app/view-grab/view-grab.page.ts ***!
  \*********************************************/
/*! exports provided: ViewGrabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewGrabPage", function() { return ViewGrabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");




let ViewGrabPage = class ViewGrabPage {
    constructor(activatedRoute, fbService, router) {
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router;
        //note properties
        this.grab = {
            grabName: '',
            grabDetails: '',
            grabPrice: ''
            // createdAt: ''
        };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.fbService.getGrab(id).subscribe(grabData => {
                this.grab = grabData;
            });
        }
    }
    deleteGrab() {
        this.fbService.deleteGrab(this.grab.id).then(() => {
            this.router.navigateByUrl('/');
        }, err => {
        });
    }
};
ViewGrabPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ViewGrabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-grab',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-grab.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-grab/view-grab.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-grab.page.scss */ "./src/app/view-grab/view-grab.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ViewGrabPage);



/***/ })

}]);
//# sourceMappingURL=view-grab-view-grab-module-es2015.js.map