(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-contact-view-contact-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-contact/view-contact.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-contact/view-contact.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <!-- <ion-title>{{content.title}}</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card color=\"secondary\">\n    <ion-card-header>\n      <!-- <ion-card-subtitle>{{content.createdAt | date: 'short'}}</ion-card-subtitle> -->\n      <!-- <ion-card-title>{{hotel.hotelName}}</ion-card-title> -->\n    </ion-card-header>\n\n    <ion-card-content>\n      <p align=\"justify\">{{content.contacttitle}}</p>\n      <br>\n      <p align=\"justify\">{{content.contactDetails}}</p>\n      <ion-button slot=\"start\" color=\"warning\" [routerLink]=\"'/update-contact/' + content.id\">Edit</ion-button>\n      <ion-button slot=\"end\" color=\"danger\" (click)=\"deleteContent()\">Delete</ion-button>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/view-contact/view-contact-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/view-contact/view-contact-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ViewContactPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewContactPageRoutingModule", function() { return ViewContactPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-contact.page */ "./src/app/view-contact/view-contact.page.ts");




const routes = [
    {
        path: '',
        component: _view_contact_page__WEBPACK_IMPORTED_MODULE_3__["ViewContactPage"]
    }
];
let ViewContactPageRoutingModule = class ViewContactPageRoutingModule {
};
ViewContactPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewContactPageRoutingModule);



/***/ }),

/***/ "./src/app/view-contact/view-contact.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/view-contact/view-contact.module.ts ***!
  \*****************************************************/
/*! exports provided: ViewContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewContactPageModule", function() { return ViewContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _view_contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-contact-routing.module */ "./src/app/view-contact/view-contact-routing.module.ts");
/* harmony import */ var _view_contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-contact.page */ "./src/app/view-contact/view-contact.page.ts");







let ViewContactPageModule = class ViewContactPageModule {
};
ViewContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewContactPageRoutingModule"]
        ],
        declarations: [_view_contact_page__WEBPACK_IMPORTED_MODULE_6__["ViewContactPage"]]
    })
], ViewContactPageModule);



/***/ }),

/***/ "./src/app/view-contact/view-contact.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/view-contact/view-contact.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctY29udGFjdC92aWV3LWNvbnRhY3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/view-contact/view-contact.page.ts":
/*!***************************************************!*\
  !*** ./src/app/view-contact/view-contact.page.ts ***!
  \***************************************************/
/*! exports provided: ViewContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewContactPage", function() { return ViewContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");




let ViewContactPage = class ViewContactPage {
    constructor(activatedRoute, fbService, router) {
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router;
        //note properties
        this.content = {
            contentDetails: '',
            title: '',
            contactDetails: '',
            contacttitle: '',
        };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.fbService.getContent(id).subscribe(contentData => {
                this.content = contentData;
            });
        }
    }
    deleteContent() {
        this.fbService.deleteContent(this.content.id).then(() => {
            this.router.navigateByUrl('/home');
        }, err => {
        });
    }
};
ViewContactPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ViewContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-contact.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-contact/view-contact.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-contact.page.scss */ "./src/app/view-contact/view-contact.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ViewContactPage);



/***/ })

}]);
//# sourceMappingURL=view-contact-view-contact-module-es2015.js.map