function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookingspa-bookingspa-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bookingspa/bookingspa.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookingspa/bookingspa.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookingspaBookingspaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Cat Service Booking</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n    <ion-content padding class=\"background\">\n        <ion-list>\n          <ion-item>\n            <!-- <ion-label position=\"floating\">NAME  </ion-label> -->\n            <ion-input placeholder=\" Name\" [(ngModel)]=\"bookingspa.customerName\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input placeholder=\"Contact Number\" [(ngModel)]=\"bookingspa.contactNumber\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input placeholder=\"Cat Name\" [(ngModel)]=\"bookingspa.catName\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input placeholder=\"Remark\" [(ngModel)]=\"bookingspa.remark\"></ion-input>\n          </ion-item>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                  <ion-label>DATE</ion-label>\n                  <ion-input>\n                      <ion-datetime displayFormat=\"D/MM/YYYY\" pickerFormat=\"DDDD MMMM YYYY\" placeholder=\"Select Date\"  [(ngModel)]=\"bookingspa.date\"></ion-datetime>\n                  </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>    \n              <ion-item>\n                  <ion-label>TIME</ion-label>\n                  <ion-input>\n                      <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" placeholder=\"Select Time\" [(ngModel)]=\"bookingspa.time\"></ion-datetime>\n                  </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- <ion-item>\n            <ion-checkbox slot=\"start\" ></ion-checkbox>\n            <ion-label>Add cat food in booking.</ion-label>\n          </ion-item> -->\n          </ion-list>\n          <ion-row>\n            <ion-col>\n                <ion-button (click)=\"submitBookingSpa()\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"primary\">Confirm</ion-button>\n            </ion-col>\n            <ion-col>\n              <ion-button [routerLink]=\"['/menuspa']\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"warning\" >Cancel</ion-button>\n            </ion-col>\n          </ion-row>\n      </ion-content>\n\n<!-- <ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Cat Service Booking</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"background\">\n\t<ion-list>\n\t\t<ion-item>\n\t\t  <ion-label position=\"floating\">NAME  </ion-label>\n\t\t  <ion-input type=\"text\" [(ngModel)]=\"username\"></ion-input>\n    </ion-item>\n    <ion-item>\n\t\t  <ion-label position=\"floating\">CONTACT NUMBER  </ion-label>\n\t\t  <ion-input type=\"text\" [(ngModel)]=\"username\"></ion-input>\n    </ion-item>\n    <ion-item>\n\t\t  <ion-label position=\"floating\">CAT NAME  </ion-label>\n\t\t  <ion-input type=\"text\" [(ngModel)]=\"username\"></ion-input>\n    </ion-item>\n    <ion-item>\n\t\t  <ion-label position=\"floating\">REMARK  </ion-label>\n\t\t  <ion-input type=\"text\" [(ngModel)]=\"username\"></ion-input>\n    </ion-item>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label> DATE</ion-label>\n          <ion-datetime value=\"19-02-1990\" placeholder=\"Select Date\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>TIME</ion-label>\n          <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-item>\n      <ion-checkbox slot=\"start\" ></ion-checkbox>\n      <ion-label>Add cat food in booking.</ion-label>\n    </ion-item>\n    </ion-list>\n    <ion-row>\n      <ion-col>\n        <ion-button [routerLink]=\"['/receiptservice']\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"primary\">Confirm</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button [routerLink]=\"['/booking']\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"warning\" >Cancel</ion-button>\n      </ion-col>\n    </ion-row>\n    \n    <ion-button fill=\"solid\" expand=\"block\" color=\"dark\" (click)=\"login()\">Continue</ion-button> \n</ion-content> -->";
    /***/
  },

  /***/
  "./src/app/bookingspa/bookingspa-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/bookingspa/bookingspa-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: BookingspaPageRoutingModule */

  /***/
  function srcAppBookingspaBookingspaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingspaPageRoutingModule", function () {
      return BookingspaPageRoutingModule;
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


    var _bookingspa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bookingspa.page */
    "./src/app/bookingspa/bookingspa.page.ts");

    var routes = [{
      path: '',
      component: _bookingspa_page__WEBPACK_IMPORTED_MODULE_3__["BookingspaPage"]
    }];

    var BookingspaPageRoutingModule = function BookingspaPageRoutingModule() {
      _classCallCheck(this, BookingspaPageRoutingModule);
    };

    BookingspaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BookingspaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/bookingspa/bookingspa.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/bookingspa/bookingspa.module.ts ***!
    \*************************************************/

  /*! exports provided: BookingspaPageModule */

  /***/
  function srcAppBookingspaBookingspaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingspaPageModule", function () {
      return BookingspaPageModule;
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


    var _bookingspa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bookingspa-routing.module */
    "./src/app/bookingspa/bookingspa-routing.module.ts");
    /* harmony import */


    var _bookingspa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bookingspa.page */
    "./src/app/bookingspa/bookingspa.page.ts");

    var BookingspaPageModule = function BookingspaPageModule() {
      _classCallCheck(this, BookingspaPageModule);
    };

    BookingspaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bookingspa_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingspaPageRoutingModule"]],
      declarations: [_bookingspa_page__WEBPACK_IMPORTED_MODULE_6__["BookingspaPage"]]
    })], BookingspaPageModule);
    /***/
  },

  /***/
  "./src/app/bookingspa/bookingspa.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/bookingspa/bookingspa.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookingspaBookingspaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmdzcGEvYm9va2luZ3NwYS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/bookingspa/bookingspa.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/bookingspa/bookingspa.page.ts ***!
    \***********************************************/

  /*! exports provided: BookingspaPage */

  /***/
  function srcAppBookingspaBookingspaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingspaPage", function () {
      return BookingspaPage;
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

    var BookingspaPage = /*#__PURE__*/function () {
      function BookingspaPage(activatedRoute, fbService, afs, user, storage, toastCtrl, router, alertController) {
        var _this = this;

        _classCallCheck(this, BookingspaPage);

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
        this.bookingspa = {
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

      _createClass(BookingspaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
        key: "submitBookingSpa",
        value: function submitBookingSpa() {
          var _this2 = this;

          this.fbService.submitBookingSpa(this.bookingspa).then(function () {
            _this2.presentAlert('Done!', 'Your booking was created!');

            _this2.router.navigateByUrl('/menuspa');
          }, function (err) {});
        }
      }]);

      return BookingspaPage;
    }();

    BookingspaPage.ctorParameters = function () {
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

    BookingspaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bookingspa',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bookingspa.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bookingspa/bookingspa.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bookingspa.page.scss */
      "./src/app/bookingspa/bookingspa.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], BookingspaPage);
    /***/
  }
}]);
//# sourceMappingURL=bookingspa-bookingspa-module-es5.js.map