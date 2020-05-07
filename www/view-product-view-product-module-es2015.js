(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-product-view-product-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-product/view-product.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-product/view-product.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>{{product.productName}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card color=\"secondary\">\n    <ion-card-header>\n      <ion-col size=\"2\" class=\"user-image\">\n        <ion-img src=\"https://ucarecdn.com/{{ productPic }}/-/scale_crop/30x30/center/\"></ion-img>\n      </ion-col>\n      <ion-card-subtitle>{{product.createdAt | date: 'short'}}</ion-card-subtitle>\n      <ion-card-title>{{product.productName}}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <p align=\"justify\">{{product.productDetails}}</p>\n      <br>\n      <p align=\"justify\">RM{{product.productPrice}}</p>\n      <ion-button slot=\"start\" color=\"warning\" [routerLink]=\"'/update-product/' + product.id\">Edit</ion-button>\n      <ion-button slot=\"end\" color=\"danger\" (click)=\"deleteProduct()\">Delete</ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/view-product/view-product-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/view-product/view-product-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ViewProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductPageRoutingModule", function() { return ViewProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-product.page */ "./src/app/view-product/view-product.page.ts");




const routes = [
    {
        path: '',
        component: _view_product_page__WEBPACK_IMPORTED_MODULE_3__["ViewProductPage"]
    }
];
let ViewProductPageRoutingModule = class ViewProductPageRoutingModule {
};
ViewProductPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewProductPageRoutingModule);



/***/ }),

/***/ "./src/app/view-product/view-product.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/view-product/view-product.module.ts ***!
  \*****************************************************/
/*! exports provided: ViewProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductPageModule", function() { return ViewProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _view_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-product-routing.module */ "./src/app/view-product/view-product-routing.module.ts");
/* harmony import */ var _view_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-product.page */ "./src/app/view-product/view-product.page.ts");







let ViewProductPageModule = class ViewProductPageModule {
};
ViewProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewProductPageRoutingModule"]
        ],
        declarations: [_view_product_page__WEBPACK_IMPORTED_MODULE_6__["ViewProductPage"]]
    })
], ViewProductPageModule);



/***/ }),

/***/ "./src/app/view-product/view-product.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/view-product/view-product.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctcHJvZHVjdC92aWV3LXByb2R1Y3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/view-product/view-product.page.ts":
/*!***************************************************!*\
  !*** ./src/app/view-product/view-product.page.ts ***!
  \***************************************************/
/*! exports provided: ViewProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductPage", function() { return ViewProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");







let ViewProductPage = class ViewProductPage {
    constructor(activatedRoute, fbService, router, afs, user, storage) {
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router;
        this.afs = afs;
        this.user = user;
        this.storage = storage;
        this.isAdmin = false;
        this.isCustomer = true;
        this.product = {
            productName: '',
            productDetails: '',
            productPrice: null,
            amount: null
            // createdAt: ''
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
        this.storage.setItem('username', this.username);
        this.storage.setItem('isAdmin', this.isAdmin);
        this.storage.setItem('isCustomer', this.isCustomer);
    }
    ngAfterViewInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.fbService.getProduct(id).subscribe(productData => {
                this.product = productData;
            });
        }
    }
    deleteProduct() {
        this.fbService.deleteProduct(this.product.id).then(() => {
            this.router.navigateByUrl('/');
        }, err => {
        });
    }
};
ViewProductPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"] }
];
ViewProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-product.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-product/view-product.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-product.page.scss */ "./src/app/view-product/view-product.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
        _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"]])
], ViewProductPage);



/***/ })

}]);
//# sourceMappingURL=view-product-view-product-module-es2015.js.map