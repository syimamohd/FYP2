function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-product-update-product-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/update-product/update-product.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-product/update-product.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUpdateProductUpdateProductPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>Update Product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n      <div *ngIf=\"!busy\">\n        <ion-item>\n            <input type=\"file\" #fileBtn class=\"filebtn\" (change)=\"uploadPic($event)\" />\n            <div>\n              <ion-img class=\"profile-pic\" src=\"https://ucarecdn.com/{{ productPic }}/-/scale_crop/150x150/center/\"></ion-img>\n              <ion-button  (click)=\"updateProductPic()\">Change</ion-button>\n            </div>\n        </ion-item>\n        <ion-item>\n          <ion-input placeholder=\"Enter Product Name\" [(ngModel)]=\"product.productName\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-textarea rows=\"6\" [(ngModel)]=\"product.productDetails\" placeholder=\"Enter product details here...\"></ion-textarea>\n        </ion-item>\n        <ion-item>\n          <ion-input placeholder=\"Enter Product Pricein RM\" [(ngModel)]=\"product.productPrice\"></ion-input>\n        </ion-item>\n      </div> \n  </ion-list>\n  <ion-button color=\"primary\" expand=\"full\" (click)=\"updateProduct()\">Update</ion-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/update-product/update-product-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/update-product/update-product-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: UpdateProductPageRoutingModule */

  /***/
  function srcAppUpdateProductUpdateProductRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateProductPageRoutingModule", function () {
      return UpdateProductPageRoutingModule;
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


    var _update_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./update-product.page */
    "./src/app/update-product/update-product.page.ts");

    var routes = [{
      path: '',
      component: _update_product_page__WEBPACK_IMPORTED_MODULE_3__["UpdateProductPage"]
    }];

    var UpdateProductPageRoutingModule = function UpdateProductPageRoutingModule() {
      _classCallCheck(this, UpdateProductPageRoutingModule);
    };

    UpdateProductPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UpdateProductPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/update-product/update-product.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/update-product/update-product.module.ts ***!
    \*********************************************************/

  /*! exports provided: UpdateProductPageModule */

  /***/
  function srcAppUpdateProductUpdateProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateProductPageModule", function () {
      return UpdateProductPageModule;
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


    var _update_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./update-product-routing.module */
    "./src/app/update-product/update-product-routing.module.ts");
    /* harmony import */


    var _update_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./update-product.page */
    "./src/app/update-product/update-product.page.ts");

    var UpdateProductPageModule = function UpdateProductPageModule() {
      _classCallCheck(this, UpdateProductPageModule);
    };

    UpdateProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _update_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateProductPageRoutingModule"]],
      declarations: [_update_product_page__WEBPACK_IMPORTED_MODULE_6__["UpdateProductPage"]]
    })], UpdateProductPageModule);
    /***/
  },

  /***/
  "./src/app/update-product/update-product.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/update-product/update-product.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUpdateProductUpdateProductPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".filebtn {\n  opacity: 0;\n  position: absolute;\n  top: -100em;\n  left: -100em;\n}\n\n.profile-pic {\n  width: 200px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLXByb2R1Y3QvRDpcXEJhY2t1cCBDXFxEZXNrdG9wXFxTRU0gOFxcUFJPSkVDVFxcZnlwMi9zcmNcXGFwcFxcdXBkYXRlLXByb2R1Y3RcXHVwZGF0ZS1wcm9kdWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdXBkYXRlLXByb2R1Y3QvdXBkYXRlLXByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC91cGRhdGUtcHJvZHVjdC91cGRhdGUtcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZWJ0biB7XHJcblx0b3BhY2l0eTogMDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtMTAwZW07XHJcblx0bGVmdDogLTEwMGVtO1xyXG59XHJcblxyXG4ucHJvZmlsZS1waWMge1xyXG5cdHdpZHRoOiAyMDBweDtcclxuXHRoZWlnaHQ6IDIwMHB4O1xyXG59IiwiLmZpbGVidG4ge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwMGVtO1xuICBsZWZ0OiAtMTAwZW07XG59XG5cbi5wcm9maWxlLXBpYyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/update-product/update-product.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/update-product/update-product.page.ts ***!
    \*******************************************************/

  /*! exports provided: UpdateProductPage */

  /***/
  function srcAppUpdateProductUpdateProductPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateProductPage", function () {
      return UpdateProductPage;
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


    var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var UpdateProductPage =
    /*#__PURE__*/
    function () {
      function UpdateProductPage(http, activatedRoute, fbService, router, afs, user, storage, alertController) {
        var _this = this;

        _classCallCheck(this, UpdateProductPage);

        this.http = http;
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router;
        this.afs = afs;
        this.user = user;
        this.storage = storage;
        this.alertController = alertController;
        this.isAdmin = false;
        this.isCustomer = true;
        this.busy = false;
        this.product = {
          productName: '',
          productDetails: '',
          productPrice: null,
          amount: null // createdAt: new Date().getTime()

        };
        this.mainuser = afs.doc("users/".concat(user.getUID()));
        this.sub = this.mainuser.valueChanges().subscribe(function (event) {
          _this.username = event.username; //this.profilePic = event.profilePic

          _this.isAdmin = event.isAdmin;
          _this.isCustomer = event.isCustomer;
        });
      }

      _createClass(UpdateProductPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
        key: "updateProduct",
        value: function updateProduct() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.fbService.updateProduct(this.product).then(function () {
                      _this3.router.navigate(['/menuproduct']);
                    }, function (err) {});
                    _context.next = 3;
                    return this.presentAlert('Done!', 'Details was updated!');

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "updateProductPic",
        value: function updateProductPic() {
          this.fileBtn.nativeElement.click();
        }
      }, {
        key: "uploadPic",
        value: function uploadPic(event) {
          var _this4 = this;

          var files = event.target.files;
          var data = new FormData();
          data.append('file', files[0]);
          data.append('UPLOADCARE_STORE', '1');
          data.append('UPLOADCARE_PUB_KEY', '00f055ada25dcea69cac');
          this.http.post('https://upload.uploadcare.com/base/', data).subscribe(function (event) {
            var uuid = event.json().file;

            _this4.mainuser.update({
              productPic: uuid
            });
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(title, content) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: content,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return UpdateProductPage;
    }();

    UpdateProductPage.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_7__["Http"]
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
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileBtn', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], UpdateProductPage.prototype, "fileBtn", void 0);
    UpdateProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-product.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/update-product/update-product.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-product.page.scss */
      "./src/app/update-product/update-product.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_7__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]])], UpdateProductPage);
    /***/
  }
}]);
//# sourceMappingURL=update-product-update-product-module-es5.js.map