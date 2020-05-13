(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menuproduct-menuproduct-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menuproduct/menuproduct.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menuproduct/menuproduct.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-title>\r\n      Cat Products \r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-list-header>\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let product of (catProduct | async)\">\r\n      <ion-col>\r\n          <ion-img *ngIf=\"!!product.image\" class=\"profile-pic\"  [src]=\"product.image\"></ion-img>\r\n      </ion-col>\r\n    \r\n      <ion-label>\r\n        <h2>{{product.productName}}</h2>\r\n        <p>RM{{product.productPrice}}</p>\r\n      </ion-label>\r\n      <ion-button *ngIf=\"isCustomer\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/checkout/'+product.id\">PURCHASE</ion-button>\r\n      <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-product/'+product.id\">View</ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-fab *ngIf=\"isAdmin\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n      <ion-fab-button [routerLink]=\"'/add-product'\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>\r\n\r\n\r\n<!--contain cart-->\r\n<!-- <ion-content>\r\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"openCart()\" #cart>\r\n      <div class=\"cart-length\">{{ cartItemCount | async }}</div>\r\n      <ion-icon name=\"cart\" class=\"cart-icon\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <ion-list>\r\n    <ion-card *ngFor=\"let product of (catProduct | async)\">\r\n      <ion-card-header>\r\n        <ion-card-title>{{product.productName}}</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"8\">\r\n            <ion-label color=\"secondary\">\r\n              <b>{{ product.productPrice | currency:'MYR' }}</b>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" class=\"ion-text-right\">\r\n            <ion-button fill=\"clear\" (click)=\"minusToCart(product)\">\r\n              <ion-icon name=\"remove\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"2\" class=\"ion-text-right\">\r\n            <ion-button fill=\"clear\" (click)=\"addToCart(product)\">\r\n              <ion-icon name=\"add\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content> -->");

/***/ }),

/***/ "./src/app/menuproduct/menuproduct-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/menuproduct/menuproduct-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MenuproductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuproductPageRoutingModule", function() { return MenuproductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menuproduct_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuproduct.page */ "./src/app/menuproduct/menuproduct.page.ts");




const routes = [
    {
        path: '',
        component: _menuproduct_page__WEBPACK_IMPORTED_MODULE_3__["MenuproductPage"]
    }
];
let MenuproductPageRoutingModule = class MenuproductPageRoutingModule {
};
MenuproductPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuproductPageRoutingModule);



/***/ }),

/***/ "./src/app/menuproduct/menuproduct.module.ts":
/*!***************************************************!*\
  !*** ./src/app/menuproduct/menuproduct.module.ts ***!
  \***************************************************/
/*! exports provided: MenuproductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuproductPageModule", function() { return MenuproductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _menuproduct_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuproduct-routing.module */ "./src/app/menuproduct/menuproduct-routing.module.ts");
/* harmony import */ var _menuproduct_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menuproduct.page */ "./src/app/menuproduct/menuproduct.page.ts");







let MenuproductPageModule = class MenuproductPageModule {
};
MenuproductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menuproduct_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuproductPageRoutingModule"]
        ],
        declarations: [_menuproduct_page__WEBPACK_IMPORTED_MODULE_6__["MenuproductPage"]]
    })
], MenuproductPageModule);



/***/ }),

/***/ "./src/app/menuproduct/menuproduct.page.scss":
/*!***************************************************!*\
  !*** ./src/app/menuproduct/menuproduct.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnVwcm9kdWN0L21lbnVwcm9kdWN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/menuproduct/menuproduct.page.ts":
/*!*************************************************!*\
  !*** ./src/app/menuproduct/menuproduct.page.ts ***!
  \*************************************************/
/*! exports provided: MenuproductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuproductPage", function() { return MenuproductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");










let MenuproductPage = class MenuproductPage {
    constructor(cartService, modalCtrl, activatedRoute, router, fbService, afs, user, storage) {
        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.fbService = fbService;
        this.afs = afs;
        this.user = user;
        this.storage = storage;
        this.isAdmin = false;
        this.isCustomer = true;
        this.product = {
            productName: '',
            productDetails: '',
            productPrice: 0,
            quantity: 0
        };
        this.cart = [];
        this.products = [];
        this.mainuser = afs.doc(`users/${user.getUID()}`);
        this.sub = this.mainuser.valueChanges().subscribe(event => {
            this.username = event.username;
            // this.profilePic = event.profilePic
            this.isAdmin = event.isAdmin;
            this.isCustomer = event.isCustomer;
        });
    }
    ngOnInit() {
        this.catProduct = this.fbService.getProducts();
        // this.cart = this.cartService.getCart();
        // this.cartItemCount = this.cartService.getCartItemCount();
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
};
MenuproductPage.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cart', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MenuproductPage.prototype, "fab", void 0);
MenuproductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menuproduct',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menuproduct.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menuproduct/menuproduct.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menuproduct.page.scss */ "./src/app/menuproduct/menuproduct.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
        _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"]])
], MenuproductPage);



/***/ })

}]);
//# sourceMappingURL=menuproduct-menuproduct-module-es2015.js.map