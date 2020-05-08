function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCheckoutCheckoutPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\n          </ion-buttons>\n      <ion-title>Customer Details</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding class=\"background\">\n    <ion-list>\n      <ion-item>\n        <!-- <ion-label position=\"floating\">NAME  </ion-label> -->\n        <ion-input placeholder=\" Name\" [(ngModel)]=\"item.customerName\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input placeholder=\"Contact Number\" [(ngModel)]=\"item.contactNumber\"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-input placeholder=\"Full Address\" [(ngModel)]=\"item.address\"></ion-input>\n        </ion-item>\n      <!-- <ion-item>\n        <ion-input placeholder=\"Remark\" [(ngModel)]=\"bookinghotel.remark\"></ion-input>\n      </ion-item> -->\n      <ion-item>\n          <ion-label>Payment Type</ion-label>\n          <ion-select placeholder=\"Select One\">\n            <ion-select-option value=\"c\">Cash On Delivery</ion-select-option>\n            <ion-select-option value=\"o\">Online Payment</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n      <ion-row>\n        <ion-col>\n          <ion-button (click)=\"submitPurchasedItem()\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"primary\">Confirm</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button [routerLink]=\"['/menuproduct']\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"warning\" >Cancel</ion-button>\n        </ion-col>\n      </ion-row>\n      \n  </ion-content>\n  \n  <!-- [routerLink]=\"'/receipthotel/'+bookinghotel.id\"  -->";
    /***/
  },

  /***/
  "./src/app/checkout/checkout-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/checkout/checkout-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: CheckoutPageRoutingModule */

  /***/
  function srcAppCheckoutCheckoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function () {
      return CheckoutPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./checkout.page */
    "./src/app/checkout/checkout.page.ts");

    var routes = [{
      path: '',
      component: _checkout_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"]
    }];

    var CheckoutPageRoutingModule = function CheckoutPageRoutingModule() {
      _classCallCheck(this, CheckoutPageRoutingModule);
    };

    CheckoutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CheckoutPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/checkout/checkout.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/checkout/checkout.module.ts ***!
    \*********************************************/

  /*! exports provided: CheckoutPageModule */

  /***/
  function srcAppCheckoutCheckoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function () {
      return CheckoutPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./checkout-routing.module */
    "./src/app/checkout/checkout-routing.module.ts");
    /* harmony import */


    var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./checkout.page */
    "./src/app/checkout/checkout.page.ts");

    var CheckoutPageModule = function CheckoutPageModule() {
      _classCallCheck(this, CheckoutPageModule);
    };

    CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageRoutingModule"]],
      declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
    })], CheckoutPageModule);
    /***/
  },

  /***/
  "./src/app/checkout/checkout.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/checkout/checkout.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCheckoutCheckoutPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-fab-button {\n  height: 70px;\n  width: 70px;\n}\n\n.cart-icon {\n  font-size: 50px;\n}\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvRDpcXEJhY2t1cCBDXFxEZXNrdG9wXFxTRU0gOFxcUFJPSkVDVFxcZnlwMi9zcmNcXGFwcFxcY2hlY2tvdXRcXGNoZWNrb3V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7QUNDSjs7QURFRTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jaGVja291dC9jaGVja291dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICB9XHJcbiAgIFxyXG4gIC5jYXJ0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxuICAgXHJcbiAgLmNhcnQtbGVuZ3RoIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE4cHg7XHJcbiAgICBsZWZ0OiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgbWluLXdpZHRoOiAyNXB4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgfSIsImlvbi1mYWItYnV0dG9uIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogNzBweDtcbn1cblxuLmNhcnQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLmNhcnQtbGVuZ3RoIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4cHg7XG4gIGxlZnQ6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtaW4td2lkdGg6IDI1cHg7XG4gIHotaW5kZXg6IDEwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/checkout/checkout.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/checkout/checkout.page.ts ***!
    \*******************************************/

  /*! exports provided: CheckoutPage */

  /***/
  function srcAppCheckoutCheckoutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPage", function () {
      return CheckoutPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/firebase.service */
    "./src/app/services/firebase.service.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../services/cart.service */
    "./src/app/services/cart.service.ts");

    var CheckoutPage =
    /*#__PURE__*/
    function () {
      function CheckoutPage(cartService, modalCtrl, activatedRoute, fbService, router, afs, user, storage, alertController) {
        var _this = this;

        _classCallCheck(this, CheckoutPage);

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
        this.mainuser = afs.doc("users/".concat(user.getUID()));
        this.sub = this.mainuser.valueChanges().subscribe(function (event) {
          _this.username = event.username; // this.profilePic = event.profilePic

          _this.isAdmin = event.isAdmin;
          _this.isCustomer = event.isCustomer;
        });
      }

      _createClass(CheckoutPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //this.product = this.cartService.getProducts();
          this.storage.setItem('username', this.username);
          this.storage.setItem('isAdmin', this.isAdmin);
          this.storage.setItem('isCustomer', this.isCustomer);
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(title, content) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: content,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "submitPurchasedItem",
        value: function submitPurchasedItem() {
          var _this2 = this;

          this.fbService.submitPurchasedItem(this.item).then(function () {
            _this2.presentAlert('Done!', 'You have purchased item. We will deliver soon!');

            _this2.router.navigateByUrl('/menuproduct');
          }, function (err) {});
        }
      }]);

      return CheckoutPage;
    }();

    CheckoutPage.ctorParameters = function () {
      return [{
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
      }];
    };

    CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-checkout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./checkout.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./checkout.page.scss */
      "./src/app/checkout/checkout.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]])], CheckoutPage);
    /***/
  }
}]);
//# sourceMappingURL=checkout-checkout-module-es5.js.map