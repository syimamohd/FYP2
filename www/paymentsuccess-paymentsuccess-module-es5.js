function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paymentsuccess-paymentsuccess-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paymentsuccess/paymentsuccess.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paymentsuccess/paymentsuccess.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaymentsuccessPaymentsuccessPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Payment Succesful</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n      <ion-card>\r\n          <ion-img src=\"assets/img/payment_successful.png\"></ion-img>\r\n      </ion-card>\r\n      <ion-button [routerLink]=\"'/home'\">Back to Home</ion-button>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/paymentsuccess/paymentsuccess-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/paymentsuccess/paymentsuccess-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: PaymentsuccessPageRoutingModule */

  /***/
  function srcAppPaymentsuccessPaymentsuccessRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentsuccessPageRoutingModule", function () {
      return PaymentsuccessPageRoutingModule;
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


    var _paymentsuccess_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./paymentsuccess.page */
    "./src/app/paymentsuccess/paymentsuccess.page.ts");

    var routes = [{
      path: '',
      component: _paymentsuccess_page__WEBPACK_IMPORTED_MODULE_3__["PaymentsuccessPage"]
    }];

    var PaymentsuccessPageRoutingModule = function PaymentsuccessPageRoutingModule() {
      _classCallCheck(this, PaymentsuccessPageRoutingModule);
    };

    PaymentsuccessPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PaymentsuccessPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/paymentsuccess/paymentsuccess.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/paymentsuccess/paymentsuccess.module.ts ***!
    \*********************************************************/

  /*! exports provided: PaymentsuccessPageModule */

  /***/
  function srcAppPaymentsuccessPaymentsuccessModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentsuccessPageModule", function () {
      return PaymentsuccessPageModule;
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


    var _paymentsuccess_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./paymentsuccess-routing.module */
    "./src/app/paymentsuccess/paymentsuccess-routing.module.ts");
    /* harmony import */


    var _paymentsuccess_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./paymentsuccess.page */
    "./src/app/paymentsuccess/paymentsuccess.page.ts");

    var PaymentsuccessPageModule = function PaymentsuccessPageModule() {
      _classCallCheck(this, PaymentsuccessPageModule);
    };

    PaymentsuccessPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _paymentsuccess_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentsuccessPageRoutingModule"]],
      declarations: [_paymentsuccess_page__WEBPACK_IMPORTED_MODULE_6__["PaymentsuccessPage"]]
    })], PaymentsuccessPageModule);
    /***/
  },

  /***/
  "./src/app/paymentsuccess/paymentsuccess.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/paymentsuccess/paymentsuccess.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaymentsuccessPaymentsuccessPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnRzdWNjZXNzL3BheW1lbnRzdWNjZXNzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/paymentsuccess/paymentsuccess.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/paymentsuccess/paymentsuccess.page.ts ***!
    \*******************************************************/

  /*! exports provided: PaymentsuccessPage */

  /***/
  function srcAppPaymentsuccessPaymentsuccessPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentsuccessPage", function () {
      return PaymentsuccessPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PaymentsuccessPage = /*#__PURE__*/function () {
      function PaymentsuccessPage() {
        _classCallCheck(this, PaymentsuccessPage);
      }

      _createClass(PaymentsuccessPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PaymentsuccessPage;
    }();

    PaymentsuccessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-paymentsuccess',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./paymentsuccess.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paymentsuccess/paymentsuccess.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./paymentsuccess.page.scss */
      "./src/app/paymentsuccess/paymentsuccess.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PaymentsuccessPage);
    /***/
  }
}]);
//# sourceMappingURL=paymentsuccess-paymentsuccess-module-es5.js.map