function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-hotel-view-hotel-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view-hotel/view-hotel.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-hotel/view-hotel.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewHotelViewHotelPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>{{hotel.hotelName}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card color=\"secondary\">\n    <ion-card-header>\n      <ion-card-subtitle>{{hotel.createdAt | date: 'short'}}</ion-card-subtitle>\n      <ion-card-title>{{hotel.hotelName}}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <p align=\"justify\">{{hotel.hotelDetails}}</p>\n      <br>\n      <p align=\"justify\">{{hotel.hotelPrice}}</p>\n      <ion-button slot=\"start\" color=\"warning\" [routerLink]=\"'/update-hotel/' + hotel.id\">Edit</ion-button>\n      <ion-button slot=\"end\" color=\"danger\" (click)=\"deleteHotel()\">Delete</ion-button>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/view-hotel/view-hotel-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/view-hotel/view-hotel-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ViewHotelPageRoutingModule */

  /***/
  function srcAppViewHotelViewHotelRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewHotelPageRoutingModule", function () {
      return ViewHotelPageRoutingModule;
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


    var _view_hotel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./view-hotel.page */
    "./src/app/view-hotel/view-hotel.page.ts");

    var routes = [{
      path: '',
      component: _view_hotel_page__WEBPACK_IMPORTED_MODULE_3__["ViewHotelPage"]
    }];

    var ViewHotelPageRoutingModule = function ViewHotelPageRoutingModule() {
      _classCallCheck(this, ViewHotelPageRoutingModule);
    };

    ViewHotelPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ViewHotelPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/view-hotel/view-hotel.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/view-hotel/view-hotel.module.ts ***!
    \*************************************************/

  /*! exports provided: ViewHotelPageModule */

  /***/
  function srcAppViewHotelViewHotelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewHotelPageModule", function () {
      return ViewHotelPageModule;
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


    var _view_hotel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./view-hotel-routing.module */
    "./src/app/view-hotel/view-hotel-routing.module.ts");
    /* harmony import */


    var _view_hotel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./view-hotel.page */
    "./src/app/view-hotel/view-hotel.page.ts");

    var ViewHotelPageModule = function ViewHotelPageModule() {
      _classCallCheck(this, ViewHotelPageModule);
    };

    ViewHotelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_hotel_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewHotelPageRoutingModule"]],
      declarations: [_view_hotel_page__WEBPACK_IMPORTED_MODULE_6__["ViewHotelPage"]]
    })], ViewHotelPageModule);
    /***/
  },

  /***/
  "./src/app/view-hotel/view-hotel.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/view-hotel/view-hotel.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewHotelViewHotelPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctaG90ZWwvdmlldy1ob3RlbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/view-hotel/view-hotel.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/view-hotel/view-hotel.page.ts ***!
    \***********************************************/

  /*! exports provided: ViewHotelPage */

  /***/
  function srcAppViewHotelViewHotelPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewHotelPage", function () {
      return ViewHotelPage;
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

    var ViewHotelPage =
    /*#__PURE__*/
    function () {
      function ViewHotelPage(activatedRoute, fbService, router) {
        _classCallCheck(this, ViewHotelPage);

        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router; //note properties

        this.hotel = {
          hotelName: '',
          hotelDetails: '',
          hotelPrice: '' // createdAt: ''

        };
      }

      _createClass(ViewHotelPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          var id = this.activatedRoute.snapshot.paramMap.get('id');

          if (id) {
            this.fbService.getHotel(id).subscribe(function (hotelData) {
              _this.hotel = hotelData;
            });
          }
        }
      }, {
        key: "deleteHotel",
        value: function deleteHotel() {
          var _this2 = this;

          this.fbService.deleteHotel(this.hotel.id).then(function () {
            _this2.router.navigateByUrl('/');
          }, function (err) {});
        }
      }]);

      return ViewHotelPage;
    }();

    ViewHotelPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ViewHotelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-hotel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-hotel.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view-hotel/view-hotel.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-hotel.page.scss */
      "./src/app/view-hotel/view-hotel.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ViewHotelPage);
    /***/
  }
}]);
//# sourceMappingURL=view-hotel-view-hotel-module-es5.js.map