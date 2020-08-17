function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookinggrab-bookinggrab-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bookinggrab/bookinggrab.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookinggrab/bookinggrab.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookinggrabBookinggrabPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title>Cat Grab Booking</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"background\">\r\n  <form class=\"form\" [formGroup]=\"validations_form\"  (ngSubmit)=\"submitBookingGrab(validations_form.value)\">\r\n\t<ion-list>\r\n      <ion-row>\r\n          <ion-col>\r\n              <ion-item>Type: {{grab.grabName}}</ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n              <ion-item>Price: RM{{grab.grabPrice}}</ion-item>\r\n          </ion-col>\r\n          </ion-row>\r\n\t\t<ion-item>\r\n      <ion-input placeholder=\"Name\" formControlName=\"customerName\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input placeholder=\"Contact Number\" formControlName=\"contactNumber\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input placeholder=\"Cat Name\" formControlName=\"catName\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input placeholder=\"Remark\" formControlName=\"remark\"></ion-input>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n            <ion-label> DATE</ion-label>\r\n            <ion-input>\r\n                <ion-datetime value=\"19-02-1990\" placeholder=\"Select Date\"  formControlName=\"date\"></ion-datetime>\r\n            </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label>TIME </ion-label>\r\n            <ion-input>\r\n                <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\" placeholder=\"Select Time\" formControlName=\"time\"></ion-datetime>\r\n            </ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    </ion-list>\r\n    <ion-row>\r\n      <ion-col>\r\n          <ion-button class=\"submit-btn\" type=\"submit\" [disabled]=\"!validations_form.valid\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"primary\">Confirm</ion-button>\r\n        <!-- <ion-button color=\"primary\" expand=\"full\"  (click)=\"submitBookingGrab()\">Confirm</ion-button> -->\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button [routerLink]=\"['/menugrab']\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"warning\" >Cancel</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    </form>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/bookinggrab/bookinggrab-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/bookinggrab/bookinggrab-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: BookinggrabPageRoutingModule */

  /***/
  function srcAppBookinggrabBookinggrabRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookinggrabPageRoutingModule", function () {
      return BookinggrabPageRoutingModule;
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


    var _bookinggrab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bookinggrab.page */
    "./src/app/bookinggrab/bookinggrab.page.ts");

    var routes = [{
      path: '',
      component: _bookinggrab_page__WEBPACK_IMPORTED_MODULE_3__["BookinggrabPage"]
    }];

    var BookinggrabPageRoutingModule = function BookinggrabPageRoutingModule() {
      _classCallCheck(this, BookinggrabPageRoutingModule);
    };

    BookinggrabPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BookinggrabPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/bookinggrab/bookinggrab.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/bookinggrab/bookinggrab.module.ts ***!
    \***************************************************/

  /*! exports provided: BookinggrabPageModule */

  /***/
  function srcAppBookinggrabBookinggrabModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookinggrabPageModule", function () {
      return BookinggrabPageModule;
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


    var _bookinggrab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bookinggrab-routing.module */
    "./src/app/bookinggrab/bookinggrab-routing.module.ts");
    /* harmony import */


    var _bookinggrab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bookinggrab.page */
    "./src/app/bookinggrab/bookinggrab.page.ts");

    var BookinggrabPageModule = function BookinggrabPageModule() {
      _classCallCheck(this, BookinggrabPageModule);
    };

    BookinggrabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _bookinggrab_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookinggrabPageRoutingModule"]],
      declarations: [_bookinggrab_page__WEBPACK_IMPORTED_MODULE_6__["BookinggrabPage"]]
    })], BookinggrabPageModule);
    /***/
  },

  /***/
  "./src/app/bookinggrab/bookinggrab.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/bookinggrab/bookinggrab.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookinggrabBookinggrabPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmdncmFiL2Jvb2tpbmdncmFiLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/bookinggrab/bookinggrab.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/bookinggrab/bookinggrab.page.ts ***!
    \*************************************************/

  /*! exports provided: BookinggrabPage */

  /***/
  function srcAppBookinggrabBookinggrabPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookinggrabPage", function () {
      return BookinggrabPage;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var BookinggrabPage = /*#__PURE__*/function () {
      function BookinggrabPage(activatedRoute, fbService, afs, user, storage, toastCtrl, router, alertController, formBuilder) {
        var _this = this;

        _classCallCheck(this, BookinggrabPage);

        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.afs = afs;
        this.user = user;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.isAdmin = false;
        this.isCustomer = true;
        this.bookinggrab = {
          customerName: '',
          contactNumber: '',
          catName: '',
          remark: '',
          date: '',
          time: '' // catFood: Selection;
          // createdAt: new Date().getTime()

        };
        this.grab = {
          grabName: '',
          grabDetails: '',
          grabPrice: '',
          image: '' // createdAt: ''

        };
        this.mainuser = afs.doc("users/".concat(user.getUID()));
        this.sub = this.mainuser.valueChanges().subscribe(function (event) {
          _this.username = event.username; // this.profilePic = event.profilePic

          _this.isAdmin = event.isAdmin;
          _this.isCustomer = event.isCustomer;
        });
      }

      _createClass(BookinggrabPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validations_form = this.formBuilder.group({
            customerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])),
            contactNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])),
            catName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])),
            remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]))
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
        key: "submitBookingGrab",
        value: function submitBookingGrab(value) {
          var _this2 = this;

          this.bookinggrab.customerName = value.customerName;
          this.bookinggrab.catName = value.catName;
          this.bookinggrab.contactNumber = value.contactNumber;
          this.bookinggrab.remark = value.remark;
          this.bookinggrab.date = value.date;
          this.bookinggrab.time = value.time;
          this.fbService.submitBookingGrab(this.bookinggrab).then(function () {
            _this2.presentAlert('Done!', 'Your booking was created!');

            _this2.router.navigateByUrl('/menugrab');
          }, function (err) {});
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this3 = this;

          var id = this.activatedRoute.snapshot.paramMap.get('id');

          if (id) {
            this.fbService.getGrab(id).subscribe(function (grabData) {
              _this3.grab = grabData;
            });
          }
        }
      }]);

      return BookinggrabPage;
    }();

    BookinggrabPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
      }];
    };

    BookinggrabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bookinggrab',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bookinggrab.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bookinggrab/bookinggrab.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bookinggrab.page.scss */
      "./src/app/bookinggrab/bookinggrab.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])], BookinggrabPage);
    /***/
  }
}]);
//# sourceMappingURL=bookinggrab-bookinggrab-module-es5.js.map