function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-spa-add-spa-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-spa/add-spa.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-spa/add-spa.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddSpaAddSpaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\r\n          </ion-buttons>\r\n      <ion-title>New Spa</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n      <form class=\"form\" [formGroup]=\"validations_form\"  (ngSubmit)=\"addSpa(validations_form.value)\">\r\n  <ion-list>\r\n      <ion-item>\r\n          <input type=\"file\" #fileBtn class=\"filebtn\" (change)=\"uploadPic($event)\"/>\r\n            <div *ngIf=\"!spa.image\">\r\n              <ion-img class=\"profile-pic\" (click)=\"updateProfilePic()\" src=\"assets/defaultPic.png\"></ion-img>\r\n            </div>\r\n            <div *ngIf=\"spa.image\">\r\n            <ion-img class=\"profile-pic\" (click)=\"updateProfilePic()\" [src]=\"spa.image\"></ion-img>\r\n          </div>\r\n        </ion-item>\r\n    <ion-item>\r\n      <ion-input placeholder=\"Enter Spa Name\" formControlName=\"spaName\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-textarea rows=\"6\" formControlName=\"spaDetails\" placeholder=\"Enter spa details here...\"></ion-textarea>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input placeholder=\"Enter Spa Price\" formControlName=\"spaPrice\"></ion-input>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-button class=\"submit-btn\" type=\"submit\" [disabled]=\"!validations_form.valid\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"primary\">Create</ion-button>\r\n    <!-- <ion-button color=\"primary\" expand=\"full\" (click)=\"addSpa()\">Create</ion-button> -->\r\n    </form>\r\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/add-spa/add-spa-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/add-spa/add-spa-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: AddSpaPageRoutingModule */

  /***/
  function srcAppAddSpaAddSpaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSpaPageRoutingModule", function () {
      return AddSpaPageRoutingModule;
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


    var _add_spa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-spa.page */
    "./src/app/add-spa/add-spa.page.ts");

    var routes = [{
      path: '',
      component: _add_spa_page__WEBPACK_IMPORTED_MODULE_3__["AddSpaPage"]
    }];

    var AddSpaPageRoutingModule = function AddSpaPageRoutingModule() {
      _classCallCheck(this, AddSpaPageRoutingModule);
    };

    AddSpaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddSpaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-spa/add-spa.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/add-spa/add-spa.module.ts ***!
    \*******************************************/

  /*! exports provided: AddSpaPageModule */

  /***/
  function srcAppAddSpaAddSpaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSpaPageModule", function () {
      return AddSpaPageModule;
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


    var _add_spa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-spa-routing.module */
    "./src/app/add-spa/add-spa-routing.module.ts");
    /* harmony import */


    var _add_spa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-spa.page */
    "./src/app/add-spa/add-spa.page.ts");

    var AddSpaPageModule = function AddSpaPageModule() {
      _classCallCheck(this, AddSpaPageModule);
    };

    AddSpaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _add_spa_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddSpaPageRoutingModule"]],
      declarations: [_add_spa_page__WEBPACK_IMPORTED_MODULE_6__["AddSpaPage"]]
    })], AddSpaPageModule);
    /***/
  },

  /***/
  "./src/app/add-spa/add-spa.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/add-spa/add-spa.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddSpaAddSpaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zcGEvYWRkLXNwYS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/add-spa/add-spa.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/add-spa/add-spa.page.ts ***!
    \*****************************************/

  /*! exports provided: AddSpaPage */

  /***/
  function srcAppAddSpaAddSpaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSpaPage", function () {
      return AddSpaPage;
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


    var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AddSpaPage = /*#__PURE__*/function () {
      function AddSpaPage(activatedRoute, fbService, toastCtrl, alertController, router, http, formBuilder) {
        _classCallCheck(this, AddSpaPage);

        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.spa = {
          spaName: '',
          spaDetails: '',
          spaPrice: '',
          image: '' // createdAt: new Date().getTime()

        };
      }

      _createClass(AddSpaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validations_form = this.formBuilder.group({
            spaName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            spaDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            spaPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]))
          });
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
        key: "addSpa",
        value: function addSpa(value) {
          var _this = this;

          this.spa.spaName = value.spaName;
          this.spa.spaDetails = value.spaDetails;
          this.spa.spaPrice = value.spaPrice;
          this.fbService.addSpa(this.spa).then(function () {
            _this.router.navigateByUrl('/menuspa');
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
          var _this2 = this;

          var files = event.target.files;
          var data = new FormData();
          data.append('file', files[0]);
          data.append('UPLOADCARE_STORE', '1');
          data.append('UPLOADCARE_PUB_KEY', '00f055ada25dcea69cac');
          this.http.post('https://upload.uploadcare.com/base/', data).subscribe(function (event) {
            var uuid = event.json().file;
            _this2.spa.image = "https://ucarecdn.com/".concat(uuid, "/-/scale_crop/150x150/center/"); // this.mainuser.update({
            // 	profilePic: uuid
            // })
          });
        }
      }]);

      return AddSpaPage;
    }();

    AddSpaPage.ctorParameters = function () {
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
        type: _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileBtn', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AddSpaPage.prototype, "fileBtn", void 0);
    AddSpaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-spa',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-spa.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-spa/add-spa.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-spa.page.scss */
      "./src/app/add-spa/add-spa.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], AddSpaPage);
    /***/
  }
}]);
//# sourceMappingURL=add-spa-add-spa-module-es5.js.map