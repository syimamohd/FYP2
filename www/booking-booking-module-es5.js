function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-booking-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/booking/booking.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking/booking.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookingBookingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n      <ion-title>Cat Services</ion-title> \n      <ion-buttons slot=\"start\">\n          <!-- <ion-back-button icon=\"arrow-back-outline\"></ion-back-button> -->\n          <ion-menu-button autoHide=\"false\"></ion-menu-button>\n          <!-- <ion-back-button></ion-back-button> -->\n        </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n\n    <ion-content padding >\n      <div id=\"container\">\n          <ion-row>\n              <ion-col size-md=\"6\">\n                <ion-button [routerLink]=\"['/menuhotel']\" fill=\"solid\" size=\"med\" expand=\"block\" color=\"dark\" >Cat Hotel</ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button [routerLink]=\"['/menuspa']\" fill=\"solid\" size=\"med\"  expand=\"block\" color=\"dark\" >Cat Spa & Grooming</ion-button>\n              </ion-col>\n            </ion-row>\n            \n            <ion-row>\n              <ion-col size-md=\"6\">\n                <ion-button [routerLink]=\"['/menugrab']\" fill=\"solid\" size=\"med\"  expand=\"block\" color=\"dark\" >Cat Grab</ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button [routerLink]=\"['/menuvaccine']\" fill=\"solid\" size=\"med\"  expand=\"block\" color=\"dark\">Cat Vaccine & Neuter</ion-button>\n              </ion-col>\n            </ion-row>\n            <!-- <ion-row>\n                <ion-col size-md=\"6\">\n                    <ion-button [routerLink]=\"['/']\" fill=\"solid\" size=\"med\"  expand=\"block\" color=\"dark\" >Cat Product</ion-button>\n                  </ion-col>\n            </ion-row> -->\n      </div>\n       \n        </ion-content>\n\n\n";
    /***/
  },

  /***/
  "./src/app/booking/booking-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/booking/booking-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: BookingPageRoutingModule */

  /***/
  function srcAppBookingBookingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingPageRoutingModule", function () {
      return BookingPageRoutingModule;
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


    var _booking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./booking.page */
    "./src/app/booking/booking.page.ts");

    var routes = [{
      path: '',
      component: _booking_page__WEBPACK_IMPORTED_MODULE_3__["BookingPage"]
    }];

    var BookingPageRoutingModule = function BookingPageRoutingModule() {
      _classCallCheck(this, BookingPageRoutingModule);
    };

    BookingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BookingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/booking/booking.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/booking/booking.module.ts ***!
    \*******************************************/

  /*! exports provided: BookingPageModule */

  /***/
  function srcAppBookingBookingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingPageModule", function () {
      return BookingPageModule;
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


    var _booking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./booking-routing.module */
    "./src/app/booking/booking-routing.module.ts");
    /* harmony import */


    var _booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./booking.page */
    "./src/app/booking/booking.page.ts");

    var BookingPageModule = function BookingPageModule() {
      _classCallCheck(this, BookingPageModule);
    };

    BookingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _booking_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingPageRoutingModule"]],
      declarations: [_booking_page__WEBPACK_IMPORTED_MODULE_6__["BookingPage"]]
    })], BookingPageModule);
    /***/
  },

  /***/
  "./src/app/booking/booking.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/booking/booking.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookingBookingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va2luZy9DOlxcVXNlcnNcXGlyc3lhXFxEZXNrdG9wXFxGWVAyLW1hc3Rlci9zcmNcXGFwcFxcYm9va2luZ1xcYm9va2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBa0I7RUFFbEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsUUFBUTtFQUNSLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmcvYm9va2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIFxue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/booking/booking.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/booking/booking.page.ts ***!
    \*****************************************/

  /*! exports provided: BookingPage */

  /***/
  function srcAppBookingBookingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingPage", function () {
      return BookingPage;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js"); // import { NavController, App } from '@ionic/angular';


    var BookingPage =
    /*#__PURE__*/
    function () {
      function BookingPage(afs, user, storage) {
        var _this = this;

        _classCallCheck(this, BookingPage);

        this.afs = afs;
        this.user = user;
        this.storage = storage;
        this.isAdmin = false;
        this.isCustomer = true;
        this.mainuser = afs.doc("users/".concat(user.getUID()));
        this.sub = this.mainuser.valueChanges().subscribe(function (event) {
          _this.username = event.username; // this.profilePic = event.profilePic

          _this.isAdmin = event.isAdmin;
          _this.isCustomer = event.isCustomer;
        });
      }

      _createClass(BookingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.storage.setItem('username', this.username);
          this.storage.setItem('isAdmin', this.isAdmin);
          this.storage.setItem('isCustomer', this.isCustomer);
        }
      }]);

      return BookingPage;
    }();

    BookingPage.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"]
      }];
    };

    BookingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-booking',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./booking.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/booking/booking.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./booking.page.scss */
      "./src/app/booking/booking.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"]])], BookingPage);
    /***/
  }
}]);
//# sourceMappingURL=booking-booking-module-es5.js.map