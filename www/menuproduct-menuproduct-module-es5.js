function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menuproduct-menuproduct-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menuproduct/menuproduct.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menuproduct/menuproduct.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuproductMenuproductPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>\n      Cat Products \n    </ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"openCart()\" #cart>\n      <div class=\"cart-length\">{{ cartItemCount | async }}</div>\n      <ion-icon name=\"cart\" class=\"cart-icon\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-list>\n    <ion-card *ngFor=\"let product of (catProduct | async)\">\n      <ion-card-header>\n        <ion-card-title>{{product.productName}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col size=\"8\">\n            <ion-label color=\"secondary\">\n              <b>{{ product.productPrice | currency:'MYR' }}</b>\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"2\" class=\"ion-text-right\">\n            <ion-button fill=\"clear\" (click)=\"minusToCart(product)\">\n              <ion-icon name=\"remove\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"2\" class=\"ion-text-right\">\n            <ion-button fill=\"clear\" (click)=\"addToCart(product)\">\n              <ion-icon name=\"add\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/menuproduct/menuproduct-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/menuproduct/menuproduct-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: MenuproductPageRoutingModule */

  /***/
  function srcAppMenuproductMenuproductRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuproductPageRoutingModule", function () {
      return MenuproductPageRoutingModule;
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


    var _menuproduct_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menuproduct.page */
    "./src/app/menuproduct/menuproduct.page.ts");

    var routes = [{
      path: '',
      component: _menuproduct_page__WEBPACK_IMPORTED_MODULE_3__["MenuproductPage"]
    }];

    var MenuproductPageRoutingModule = function MenuproductPageRoutingModule() {
      _classCallCheck(this, MenuproductPageRoutingModule);
    };

    MenuproductPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MenuproductPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/menuproduct/menuproduct.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/menuproduct/menuproduct.module.ts ***!
    \***************************************************/

  /*! exports provided: MenuproductPageModule */

  /***/
  function srcAppMenuproductMenuproductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuproductPageModule", function () {
      return MenuproductPageModule;
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


    var _menuproduct_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./menuproduct-routing.module */
    "./src/app/menuproduct/menuproduct-routing.module.ts");
    /* harmony import */


    var _menuproduct_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menuproduct.page */
    "./src/app/menuproduct/menuproduct.page.ts");

    var MenuproductPageModule = function MenuproductPageModule() {
      _classCallCheck(this, MenuproductPageModule);
    };

    MenuproductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menuproduct_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuproductPageRoutingModule"]],
      declarations: [_menuproduct_page__WEBPACK_IMPORTED_MODULE_6__["MenuproductPage"]]
    })], MenuproductPageModule);
    /***/
  },

  /***/
  "./src/app/menuproduct/menuproduct.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/menuproduct/menuproduct.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuproductMenuproductPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnVwcm9kdWN0L21lbnVwcm9kdWN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/menuproduct/menuproduct.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/menuproduct/menuproduct.page.ts ***!
    \*************************************************/

  /*! exports provided: MenuproductPage */

  /***/
  function srcAppMenuproductMenuproductPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuproductPage", function () {
      return MenuproductPage;
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


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../cart-modal/cart-modal.page */
    "./src/app/cart-modal/cart-modal.page.ts");

    var MenuproductPage =
    /*#__PURE__*/
    function () {
      function MenuproductPage(cartService, modalCtrl, activatedRoute, router, fbService, afs, user, storage) {
        var _this = this;

        _classCallCheck(this, MenuproductPage);

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
          productPrice: null,
          amount: null // length
          // createdAt: ''

        };
        this.cart = [];
        this.products = [];
        this.mainuser = afs.doc("users/".concat(user.getUID()));
        this.sub = this.mainuser.valueChanges().subscribe(function (event) {
          _this.username = event.username; // this.profilePic = event.profilePic

          _this.isAdmin = event.isAdmin;
          _this.isCustomer = event.isCustomer;
        });
      }

      _createClass(MenuproductPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.catProduct = this.fbService.getProducts();
          this.cart = this.cartService.getCart();
          this.cartItemCount = this.cartService.getCartItemCount();
          this.storage.setItem('username', this.username);
          this.storage.setItem('isAdmin', this.isAdmin);
          this.storage.setItem('isCustomer', this.isCustomer);
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
        key: "addToCart",
        value: function addToCart(product) {
          this.cartService.addProduct(product);
          this.animateCSS('tada');
        }
      }, {
        key: "minusToCart",
        value: function minusToCart(product) {
          this.cartService.minusProduct(product);
          this.animateCSS('tada');
        }
      }, {
        key: "openCart",
        value: function openCart() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.animateCSS('bounceOutLeft', true);
                    _context.next = 3;
                    return this.modalCtrl.create({
                      component: _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_9__["CartModalPage"],
                      cssClass: 'cart-modal'
                    });

                  case 3:
                    modal = _context.sent;
                    modal.onWillDismiss().then(function () {
                      _this3.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');

                      _this3.animateCSS('bounceInLeft');
                    });
                    modal.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "animateCSS",
        value: function animateCSS(animationName) {
          var keepAnimated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var node = this.fab.nativeElement;
          node.classList.add('animated', animationName); //https://github.com/daneden/animate.css

          function handleAnimationEnd() {
            if (!keepAnimated) {
              node.classList.remove('animated', animationName);
            }

            node.removeEventListener('animationend', handleAnimationEnd);
          }

          node.addEventListener('animationend', handleAnimationEnd);
        }
      }]);

      return MenuproductPage;
    }();

    MenuproductPage.ctorParameters = function () {
      return [{
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cart', {
      static: false,
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], MenuproductPage.prototype, "fab", void 0);
    MenuproductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menuproduct',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menuproduct.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menuproduct/menuproduct.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menuproduct.page.scss */
      "./src/app/menuproduct/menuproduct.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"]])], MenuproductPage);
    /***/
  }
}]);
//# sourceMappingURL=menuproduct-menuproduct-module-es5.js.map