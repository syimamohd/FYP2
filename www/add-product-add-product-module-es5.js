function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-product-add-product-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddProductAddProductPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title>New Product</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <form class=\"form\" [formGroup]=\"validations_form\"  (ngSubmit)=\"addProduct(validations_form.value)\">\r\n<ion-list>\r\n    <ion-item>\r\n        <input type=\"file\" #fileBtn class=\"filebtn\" (change)=\"uploadPic($event)\"/>\r\n          <div *ngIf=\"!product.image\">\r\n            <ion-img class=\"profile-pic\" (click)=\"updateProfilePic()\" src=\"assets/defaultPic.png\"></ion-img>\r\n          </div>\r\n          <div *ngIf=\"product.image\">\r\n          <ion-img class=\"profile-pic\" (click)=\"updateProfilePic()\" [src]=\"product.image\"></ion-img>\r\n        </div>\r\n      </ion-item> \r\n  <ion-item>\r\n    <ion-input placeholder=\"Enter Product Name\" formControlName=\"productName\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-textarea rows=\"6\" formControlName=\"productDetails\" placeholder=\"Enter product details here...\"></ion-textarea>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-input placeholder=\"Enter Product Price\" formControlName=\"productPrice\"></ion-input>\r\n  </ion-item>\r\n</ion-list>\r\n  <ion-button class=\"submit-btn\" type=\"submit\" [disabled]=\"!validations_form.valid\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"primary\">Create</ion-button>  \r\n  <!-- <ion-button color=\"primary\" expand=\"full\" (click)=\"addProduct()\">Create</ion-button> -->\r\n  </form>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/add-product/add-product-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/add-product/add-product-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: AddProductPageRoutingModule */

  /***/
  function srcAppAddProductAddProductRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductPageRoutingModule", function () {
      return AddProductPageRoutingModule;
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


    var _add_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-product.page */
    "./src/app/add-product/add-product.page.ts");

    var routes = [{
      path: '',
      component: _add_product_page__WEBPACK_IMPORTED_MODULE_3__["AddProductPage"]
    }];

    var AddProductPageRoutingModule = function AddProductPageRoutingModule() {
      _classCallCheck(this, AddProductPageRoutingModule);
    };

    AddProductPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddProductPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-product/add-product.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/add-product/add-product.module.ts ***!
    \***************************************************/

  /*! exports provided: AddProductPageModule */

  /***/
  function srcAppAddProductAddProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductPageModule", function () {
      return AddProductPageModule;
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


    var _add_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-product-routing.module */
    "./src/app/add-product/add-product-routing.module.ts");
    /* harmony import */


    var _add_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-product.page */
    "./src/app/add-product/add-product.page.ts");

    var AddProductPageModule = function AddProductPageModule() {
      _classCallCheck(this, AddProductPageModule);
    };

    AddProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _add_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddProductPageRoutingModule"]],
      declarations: [_add_product_page__WEBPACK_IMPORTED_MODULE_6__["AddProductPage"]]
    })], AddProductPageModule);
    /***/
  },

  /***/
  "./src/app/add-product/add-product.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/add-product/add-product.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddProductAddProductPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/add-product/add-product.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/add-product/add-product.page.ts ***!
    \*************************************************/

  /*! exports provided: AddProductPage */

  /***/
  function srcAppAddProductAddProductPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductPage", function () {
      return AddProductPage;
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


    var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/firebase.service */
    "./src/app/services/firebase.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AddProductPage = /*#__PURE__*/function () {
      function AddProductPage(activatedRoute, fbService, toastCtrl, alertController, router, afs, user, storage, http, formBuilder) {
        var _this = this;

        _classCallCheck(this, AddProductPage);

        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.router = router;
        this.afs = afs;
        this.user = user;
        this.storage = storage;
        this.http = http;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.isAdmin = false;
        this.isCustomer = true;
        this.product = {
          productName: '',
          productDetails: '',
          productPrice: null,
          quantity: null // createdAt: new Date().getTime()

        };
        this.mainuser = afs.doc("users/".concat(user.getUID()));
        this.sub = this.mainuser.valueChanges().subscribe(function (event) {
          _this.username = event.username; // this.profilePic = event.profilePic

          _this.isAdmin = event.isAdmin;
          _this.isCustomer = event.isCustomer;
        });
      }

      _createClass(AddProductPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validations_form = this.formBuilder.group({
            productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])),
            productDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])),
            productPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]))
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
        key: "addProduct",
        value: function addProduct(value) {
          var _this2 = this;

          this.product.productName = value.productName;
          this.product.productDetails = value.productDetails;
          this.product.productPrice = value.productPrice;
          this.fbService.addProduct(this.product).then(function () {
            _this2.router.navigateByUrl('/menuproduct');
          }, function (err) {});
        }
      }, {
        key: "updateProfilePic",
        value: function updateProfilePic() {
          this.fileBtn.nativeElement.click();
        }
      }, {
        key: "uploadPic",
        value: function uploadPic(event) {
          var _this3 = this;

          var files = event.target.files;
          var data = new FormData();
          data.append('file', files[0]);
          data.append('UPLOADCARE_STORE', '1');
          data.append('UPLOADCARE_PUB_KEY', '00f055ada25dcea69cac');
          this.http.post('https://upload.uploadcare.com/base/', data).subscribe(function (event) {
            var uuid = event.json().file;
            _this3.product.image = "https://ucarecdn.com/".concat(uuid, "/-/scale_crop/150x150/center/"); // this.mainuser.update({
            // 	profilePic: uuid
            // })
          });
        }
      }]);

      return AddProductPage;
    }();

    AddProductPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"]
      }, {
        type: _angular_http__WEBPACK_IMPORTED_MODULE_8__["Http"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileBtn', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AddProductPage.prototype, "fileBtn", void 0);
    AddProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-product.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-product.page.scss */
      "./src/app/add-product/add-product.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"], _angular_http__WEBPACK_IMPORTED_MODULE_8__["Http"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]])], AddProductPage);
    /***/
  }
}]);
//# sourceMappingURL=add-product-add-product-module-es5.js.map