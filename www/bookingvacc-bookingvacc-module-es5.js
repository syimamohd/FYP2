function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookingvacc-bookingvacc-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bookingvacc/bookingvacc.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookingvacc/bookingvacc.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookingvaccBookingvaccPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Cat Vaccine Booking</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"background\">\n\t<ion-list>\n\t\t<ion-item>\n      <ion-input placeholder=\" Name\" [(ngModel)]=\"bookingvacc.customerName\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder=\"Contact Number\" [(ngModel)]=\"bookingvacc.contactNumber\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder=\"Cat Name\" [(ngModel)]=\"bookingvacc.catName\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder=\"Remark\" [(ngModel)]=\"bookingvacc.remark\"></ion-input>\n    </ion-item>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n            <ion-label> DATE</ion-label>\n            <ion-input>\n                <ion-datetime value=\"19-02-1990\" placeholder=\"Select Date\"  [(ngModel)]=\"bookingvacc.date\"></ion-datetime>\n            </ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>TIME </ion-label>\n            <ion-input>\n                <ion-datetime display-format=\"h:mm A\" placeholder=\"Select Time\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"  [(ngModel)]=\"bookingvacc.time\"></ion-datetime>\n            </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-item>\n      <ion-checkbox slot=\"start\" ></ion-checkbox>\n      <ion-label>Add cat food in booking.</ion-label>\n    </ion-item> -->\n    </ion-list>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"primary\" expand=\"full\"  (click)=\"submitBookingVacc()\">Confirm</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button [routerLink]=\"['/menuhotel']\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"warning\" >Cancel</ion-button>\n      </ion-col>\n    </ion-row>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/bookingvacc/bookingvacc-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/bookingvacc/bookingvacc-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: BookingvaccPageRoutingModule */

  /***/
  function srcAppBookingvaccBookingvaccRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingvaccPageRoutingModule", function () {
      return BookingvaccPageRoutingModule;
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


    var _bookingvacc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bookingvacc.page */
    "./src/app/bookingvacc/bookingvacc.page.ts");

    var routes = [{
      path: '',
      component: _bookingvacc_page__WEBPACK_IMPORTED_MODULE_3__["BookingvaccPage"]
    }];

    var BookingvaccPageRoutingModule = function BookingvaccPageRoutingModule() {
      _classCallCheck(this, BookingvaccPageRoutingModule);
    };

    BookingvaccPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BookingvaccPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/bookingvacc/bookingvacc.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/bookingvacc/bookingvacc.module.ts ***!
    \***************************************************/

  /*! exports provided: BookingvaccPageModule */

  /***/
  function srcAppBookingvaccBookingvaccModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingvaccPageModule", function () {
      return BookingvaccPageModule;
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


    var _bookingvacc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bookingvacc-routing.module */
    "./src/app/bookingvacc/bookingvacc-routing.module.ts");
    /* harmony import */


    var _bookingvacc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bookingvacc.page */
    "./src/app/bookingvacc/bookingvacc.page.ts");

    var BookingvaccPageModule = function BookingvaccPageModule() {
      _classCallCheck(this, BookingvaccPageModule);
    };

    BookingvaccPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bookingvacc_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingvaccPageRoutingModule"]],
      declarations: [_bookingvacc_page__WEBPACK_IMPORTED_MODULE_6__["BookingvaccPage"]]
    })], BookingvaccPageModule);
    /***/
  },

  /***/
  "./src/app/bookingvacc/bookingvacc.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/bookingvacc/bookingvacc.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookingvaccBookingvaccPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmd2YWNjL2Jvb2tpbmd2YWNjLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/bookingvacc/bookingvacc.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/bookingvacc/bookingvacc.page.ts ***!
    \*************************************************/

  /*! exports provided: BookingvaccPage */

  /***/
  function srcAppBookingvaccBookingvaccPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingvaccPage", function () {
      return BookingvaccPage;
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

    var BookingvaccPage =
    /*#__PURE__*/
    function () {
      function BookingvaccPage(activatedRoute, fbService, afs, user, storage, toastCtrl, router, alertController) {
        var _this = this;

        _classCallCheck(this, BookingvaccPage);

        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.afs = afs;
        this.user = user;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.alertController = alertController;
        this.isAdmin = false;
        this.isCustomer = true;
        this.bookingvacc = {
          customerName: '',
          contactNumber: '',
          catName: '',
          remark: '',
          date: '',
          time: '' // catFood: Selection;
          // createdAt: new Date().getTime()

        };
        this.mainuser = afs.doc("users/".concat(user.getUID()));
        this.sub = this.mainuser.valueChanges().subscribe(function (event) {
          _this.username = event.username; // this.profilePic = event.profilePic

          _this.isAdmin = event.isAdmin;
          _this.isCustomer = event.isCustomer;
        });
      }

      _createClass(BookingvaccPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
        key: "submitBookingVacc",
        value: function submitBookingVacc() {
          var _this2 = this;

          this.fbService.submitBookingVacc(this.bookingvacc).then(function () {
            _this2.presentAlert('Done!', 'Your booking was created!');

            _this2.router.navigateByUrl('/menuvaccine');
          }, function (err) {});
        }
      }]);

      return BookingvaccPage;
    }();

    BookingvaccPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    BookingvaccPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bookingvacc',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bookingvacc.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bookingvacc/bookingvacc.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bookingvacc.page.scss */
      "./src/app/bookingvacc/bookingvacc.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], BookingvaccPage);
    /***/
  }
}]);
//# sourceMappingURL=bookingvacc-bookingvacc-module-es5.js.map