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


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\r\n          </ion-buttons>\r\n      <ion-title>Customer Details</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content padding class=\"background\">\r\n      <form class=\"form\" [formGroup]=\"validations_form\"  (ngSubmit)=\"submitPurchasedItem(validations_form.value)\">\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-input placeholder=\"Name\" formControlName=\"customerName\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input placeholder=\"Contact Number\" formControlName=\"contactNumber\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n          <ion-input placeholder=\"Full Address\" formControlName=\"address\"></ion-input>\r\n        </ion-item>\r\n      <ion-item>\r\n        <ion-input type=\"number\" placeholder=\"Enter Quantity\" formControlName=\"quantity\" ></ion-input>\r\n      </ion-item>  \r\n        \r\n      <!-- <ion-item>\r\n        <ion-input placeholder=\"Remark\" [(ngModel)]=\"bookinghotel.remark\"></ion-input>\r\n      </ion-item> -->\r\n      <ion-item>\r\n          <ion-label>Payment Type</ion-label>\r\n          <ion-select placeholder=\"Select One\" formControlName=\"paymenttype\">\r\n            <ion-select-option value=\"Cash on Delivery\">Cash On Delivery</ion-select-option>\r\n            <ion-select-option value=\"Online Payment\">Online Payment</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <h2>Total Price: RM{{item.totalPrice}}</h2>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button class=\"submit-btn\" type=\"submit\" [disabled]=\"!validations_form.valid\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"primary\">Confirm</ion-button>\r\n          <!-- <ion-button (click)=\"submitPurchasedItem()\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"primary\">Confirm</ion-button> -->\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button [routerLink]=\"['/menuproduct']\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"warning\" >Cancel</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      </form>\r\n  </ion-content>\r\n  \r\n  <!-- [routerLink]=\"'/receipthotel/'+bookinghotel.id\"  -->";
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
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageRoutingModule"]],
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


    __webpack_exports__["default"] = "ion-fab-button {\n  height: 70px;\n  width: 70px;\n}\n\n.cart-icon {\n  font-size: 50px;\n}\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvQzpcXFVzZXJzXFxpcnN5YVxcRGVza3RvcFxcZnlwMi1tYXN0ZXIvc3JjXFxhcHBcXGNoZWNrb3V0XFxjaGVja291dC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0FDQ0o7O0FERUU7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYi1idXR0b24ge1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogNzBweDtcbiAgfVxuICAgXG4gIC5jYXJ0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxuICAgXG4gIC5jYXJ0LWxlbmd0aCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxOHB4O1xuICAgIGxlZnQ6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtaW4td2lkdGg6IDI1cHg7XG4gICAgei1pbmRleDogMTA7XG4gIH0iLCJpb24tZmFiLWJ1dHRvbiB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDcwcHg7XG59XG5cbi5jYXJ0LWljb24ge1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5jYXJ0LWxlbmd0aCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOHB4O1xuICBsZWZ0OiAyNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDFlbTtcbiAgbWluLXdpZHRoOiAyNXB4O1xuICB6LWluZGV4OiAxMDtcbn0iXX0= */";
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var CheckoutPage = /*#__PURE__*/function () {
      function CheckoutPage(cartService, modalCtrl, activatedRoute, fbService, router, afs, user, storage, alertController, formBuilder) {
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
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.isAdmin = false;
        this.isCustomer = true;
        this.item = {
          customerName: '',
          contactNumber: '',
          address: '',
          quantity: 0,
          totalPrice: 0,
          paymenttype: ''
        };
        this.product = {
          productName: '',
          productDetails: '',
          productPrice: 0,
          quantity: 0,
          image: ''
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
          this.validations_form = this.formBuilder.group({
            customerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])),
            contactNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])),
            paymenttype: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]))
          });
          this.storage.setItem('username', this.username);
          this.storage.setItem('isAdmin', this.isAdmin);
          this.storage.setItem('isCustomer', this.isCustomer);
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(title, content) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          var id = this.activatedRoute.snapshot.paramMap.get('id');

          if (id) {
            this.fbService.getProduct(id).subscribe(function (productData) {
              _this2.product = productData;
            });
          }
        }
      }, {
        key: "submitPurchasedItem",
        value: function submitPurchasedItem(value) {
          var _this3 = this;

          this.item.customerName = value.customerName;
          this.item.contactNumber = value.contactNumber;
          this.item.address = value.address;
          this.item.quantity = value.quantity;
          this.item.totalPrice = value.totalPrice;
          this.item.paymenttype = value.paymenttype;
          this.item.totalPrice = this.item.quantity * this.product.productPrice; //console.log( this.item.totalPrice);

          this.fbService.submitPurchasedItem(this.item).then(function () {
            if (_this3.item.paymenttype == "Online Payment") {
              _this3.router.navigateByUrl('/paymentsuccess');
            } else {
              _this3.presentAlert('Done!', 'You have purchased item. We will deliver soon!');

              _this3.router.navigateByUrl('/menuproduct');
            }
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
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
      }];
    };

    CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-checkout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./checkout.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./checkout.page.scss */
      "./src/app/checkout/checkout.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]])], CheckoutPage);
    /***/
  }
}]);
//# sourceMappingURL=checkout-checkout-module-es5.js.map