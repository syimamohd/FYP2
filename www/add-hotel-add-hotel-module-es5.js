function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-hotel-add-hotel-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-hotel/add-hotel.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-hotel/add-hotel.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddHotelAddHotelPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>New Hotel</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n  <ion-item>\n    <ion-input placeholder=\"Enter Hotel Name\" [(ngModel)]=\"hotel.hotelName\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-textarea rows=\"6\" [(ngModel)]=\"hotel.hotelDetails\" placeholder=\"Enter hotel details here...\"></ion-textarea>\n  </ion-item>\n  <ion-item>\n    <ion-input placeholder=\"Enter Hotel Price\" [(ngModel)]=\"hotel.hotelPrice\"></ion-input>\n  </ion-item>\n</ion-list>\n  <ion-button color=\"primary\" expand=\"full\" (click)=\"addNote()\">Create</ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/add-hotel/add-hotel-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/add-hotel/add-hotel-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: AddHotelPageRoutingModule */

  /***/
  function srcAppAddHotelAddHotelRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddHotelPageRoutingModule", function () {
      return AddHotelPageRoutingModule;
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


    var _add_hotel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-hotel.page */
    "./src/app/add-hotel/add-hotel.page.ts");

    var routes = [{
      path: '',
      component: _add_hotel_page__WEBPACK_IMPORTED_MODULE_3__["AddHotelPage"]
    }];

    var AddHotelPageRoutingModule = function AddHotelPageRoutingModule() {
      _classCallCheck(this, AddHotelPageRoutingModule);
    };

    AddHotelPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddHotelPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-hotel/add-hotel.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/add-hotel/add-hotel.module.ts ***!
    \***********************************************/

  /*! exports provided: AddHotelPageModule */

  /***/
  function srcAppAddHotelAddHotelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddHotelPageModule", function () {
      return AddHotelPageModule;
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


    var _add_hotel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-hotel-routing.module */
    "./src/app/add-hotel/add-hotel-routing.module.ts");
    /* harmony import */


    var _add_hotel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-hotel.page */
    "./src/app/add-hotel/add-hotel.page.ts");

    var AddHotelPageModule = function AddHotelPageModule() {
      _classCallCheck(this, AddHotelPageModule);
    };

    AddHotelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_hotel_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddHotelPageRoutingModule"]],
      declarations: [_add_hotel_page__WEBPACK_IMPORTED_MODULE_6__["AddHotelPage"]]
    })], AddHotelPageModule);
    /***/
  },

  /***/
  "./src/app/add-hotel/add-hotel.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/add-hotel/add-hotel.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddHotelAddHotelPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1ob3RlbC9hZGQtaG90ZWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/add-hotel/add-hotel.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/add-hotel/add-hotel.page.ts ***!
    \*********************************************/

  /*! exports provided: AddHotelPage */

  /***/
  function srcAppAddHotelAddHotelPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddHotelPage", function () {
      return AddHotelPage;
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

    var AddHotelPage =
    /*#__PURE__*/
    function () {
      function AddHotelPage(activatedRoute, fbService, toastCtrl, router) {
        _classCallCheck(this, AddHotelPage);

        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.hotel = {
          hotelName: '',
          hotelDetails: '',
          hotelPrice: '' // createdAt: new Date().getTime()

        };
      }

      _createClass(AddHotelPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addNote",
        value: function addNote() {
          var _this = this;

          this.fbService.addHotel(this.hotel).then(function () {
            _this.router.navigateByUrl('/');
          }, function (err) {});
        }
      }]);

      return AddHotelPage;
    }();

    AddHotelPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AddHotelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-hotel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-hotel.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-hotel/add-hotel.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-hotel.page.scss */
      "./src/app/add-hotel/add-hotel.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AddHotelPage);
    /***/
  }
}]);
//# sourceMappingURL=add-hotel-add-hotel-module-es5.js.map