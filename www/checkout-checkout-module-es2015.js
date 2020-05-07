(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\n          </ion-buttons>\n      <ion-title>Customer Details</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding class=\"background\">\n    <ion-list>\n      <ion-item>\n        <!-- <ion-label position=\"floating\">NAME  </ion-label> -->\n        <ion-input placeholder=\" Name\" [(ngModel)]=\"item.customerName\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input placeholder=\"Contact Number\" [(ngModel)]=\"item.contactNumber\"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-input placeholder=\"Full Address\" [(ngModel)]=\"item.address\"></ion-input>\n        </ion-item>\n      <!-- <ion-item>\n        <ion-input placeholder=\"Remark\" [(ngModel)]=\"bookinghotel.remark\"></ion-input>\n      </ion-item> -->\n      <ion-item>\n          <ion-label>Payment Type</ion-label>\n          <ion-select placeholder=\"Select One\">\n            <ion-select-option value=\"c\">Cash On Delivery</ion-select-option>\n            <ion-select-option value=\"o\">Online Payment</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n      <ion-row>\n        <ion-col>\n          <ion-button (click)=\"submitPurchasedItem()\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"primary\">Confirm</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button [routerLink]=\"['/menuproduct']\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"warning\" >Cancel</ion-button>\n        </ion-col>\n      </ion-row>\n      \n  </ion-content>\n  \n  <!-- [routerLink]=\"'/receipthotel/'+bookinghotel.id\"  -->");

/***/ }),

/***/ "./src/app/checkout/checkout-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/checkout/checkout-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CheckoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function() { return CheckoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout.page */ "./src/app/checkout/checkout.page.ts");




const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"]
    }
];
let CheckoutPageRoutingModule = class CheckoutPageRoutingModule {
};
CheckoutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckoutPageRoutingModule);



/***/ }),

/***/ "./src/app/checkout/checkout.module.ts":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout-routing.module */ "./src/app/checkout/checkout-routing.module.ts");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "./src/app/checkout/checkout.page.ts");







let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageRoutingModule"]
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
    })
], CheckoutPageModule);



/***/ }),

/***/ "./src/app/checkout/checkout.page.scss":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab-button {\n  height: 70px;\n  width: 70px; }\n\n.cart-icon {\n  font-size: 50px; }\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvQzpcXFVzZXJzXFxpcnN5YVxcRGVza3RvcFxcRllQMi1tYXN0ZXIvc3JjXFxhcHBcXGNoZWNrb3V0XFxjaGVja291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGVja291dC9jaGVja291dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICB9XG4gICBcbiAgLmNhcnQtaWNvbiB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG4gICBcbiAgLmNhcnQtbGVuZ3RoIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE4cHg7XG4gICAgbGVmdDogMjVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1pbi13aWR0aDogMjVweDtcbiAgICB6LWluZGV4OiAxMDtcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/checkout/checkout.page.ts":
/*!*******************************************!*\
  !*** ./src/app/checkout/checkout.page.ts ***!
  \*******************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/cart.service */ "./src/app/services/cart.service.ts");










let CheckoutPage = class CheckoutPage {
    constructor(cartService, modalCtrl, activatedRoute, fbService, router, afs, user, storage, alertController) {
        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router;
        this.afs = afs;
        this.user = user;
        this.storage = storage;
        this.alertController = alertController;
        this.isAdmin = false;
        this.isCustomer = true;
        this.item = {
            customerName: '',
            contactNumber: '',
            address: ''
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
        //this.product = this.cartService.getProducts();
        this.storage.setItem('username', this.username);
        this.storage.setItem('isAdmin', this.isAdmin);
        this.storage.setItem('isCustomer', this.isCustomer);
    }
    presentAlert(title, content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: content,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    submitPurchasedItem() {
        this.fbService.submitPurchasedItem(this.item).then(() => {
            this.presentAlert('Done!', 'You have purchased item. We will deliver soon!');
            this.router.navigateByUrl('/menuproduct');
        }, err => {
        });
    }
};
CheckoutPage.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] }
];
CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkout.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkout.page.scss */ "./src/app/checkout/checkout.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
        _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]])
], CheckoutPage);



/***/ })

}]);
//# sourceMappingURL=checkout-checkout-module-es2015.js.map