function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menuhotel-menuhotel-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menuhotel/menuhotel.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menuhotel/menuhotel.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuhotelMenuhotelPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n      <ion-title>Cat Hotel Menu</ion-title>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-menu-button autoHide=\"false\">\r\n            </ion-menu-button>\r\n          <!-- <ion-back-button icon=\"arrow-back-outline\"></ion-back-button> -->\r\n        </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <!-- <ion-label>Hotel</ion-label> -->\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let hotel of (catHotel | async)\">\r\n      <ion-col>\r\n          <ion-img *ngIf=\"!!hotel.image\" class=\"profile-pic\"  [src]=\"hotel.image\"></ion-img>\r\n      </ion-col>\r\n    \r\n      <ion-label>\r\n        <h2>{{hotel.hotelName}}</h2>\r\n        <p>{{hotel.hotelDetails}}</p>\r\n        <p>{{hotel.hotelPrice}}</p>\r\n      </ion-label>\r\n      <ion-button *ngIf=\"isCustomer\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/bookinghotel'\">BOOK</ion-button>\r\n      <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-hotel/'+hotel.id\">View</ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-fab *ngIf=\"isAdmin\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n      <ion-fab-button [routerLink]=\"'/add-hotel'\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>\r\n\r\n<!-- <ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title>Cat Hotel Menu</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n  <ion-card>\r\n      <ion-item>\r\n            <ion-col>\r\n                <ion-img class=\"img\" src=\"assets/img/cat_tube.png\"></ion-img>\r\n            </ion-col>\r\n  \r\n        <ion-col>\r\n            <ion-text>\r\n                <h3>Cat Tube</h3>\r\n                <h2>RM15</h2>\r\n              <p>Tube Style Accomodation</p>\r\n              </ion-text>\r\n        </ion-col>  \r\n        <ion-col size-sm=\"3\"><ion-button size=\"med\" [routerLink]=\"['/bookinghotel']\" fill=\"solid\" expand=\"block\" color=\"dark\" >Book</ion-button></ion-col> \r\n        </ion-item>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n      <ion-item>\r\n            <ion-col>\r\n                <ion-img class=\"img\" src=\"assets/img/cat_villa.png\"></ion-img>\r\n            </ion-col>\r\n\r\n        <ion-col>\r\n            <ion-text>\r\n                <h3>Cat Villa</h3>\r\n                <h2>RM25</h2>\r\n              <p>Exclusive Style Accomodation</p>\r\n              </ion-text>\r\n        </ion-col>  \r\n        <ion-col size-sm=\"3\"><ion-button size=\"med\" [routerLink]=\"['/bookinghotel']\" fill=\"solid\" expand=\"block\" color=\"dark\" >Book</ion-button></ion-col> \r\n        </ion-item>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n      <ion-item>\r\n            <ion-col>\r\n                <ion-img class=\"img\" src=\"assets/img/cat_cage.png\"></ion-img>\r\n            </ion-col>\r\n\r\n        <ion-col>\r\n            <ion-text>\r\n                <h3>Cat Cage</h3>\r\n                <h2>RM10</h2>\r\n              <p>Cage Style Accomodation</p>\r\n              </ion-text>\r\n        </ion-col>  \r\n        <ion-col size-sm=\"3\"><ion-button size=\"med\" [routerLink]=\"['/bookinghotel']\" fill=\"solid\" expand=\"block\" color=\"dark\" >Book</ion-button></ion-col> \r\n        </ion-item>\r\n  </ion-card>\r\n</ion-content>..>\r\n\r\n<--Other design\r\n <ion-card>\r\n    <ion-card-header>\r\n        <img src=\"assets/img/cat_cage.png\" width=\"20%\" height=\"15%\" position=\"centre\">\r\n      <ion-card-title>Cat Tube</ion-card-title>\r\n      <ion-card-subtitle>RM10</ion-card-subtitle>\r\n    </ion-card-header>\r\n  \r\n    <ion-card-content>\r\n      Keep close to Nature's heart... and break clear away, once in awhile,\r\n      and climb a mountain or spend a week in the woods. Wash your spirit clean.\r\n    </ion-card-content>\r\n    <ion-button [routerLink]=\"['/bookinghotel']\" fill=\"solid\" expand=\"block\" color=\"dark\" (click)=\"hotelbooking()\">Book</ion-button>\r\n  </ion-card>--> ";
    /***/
  },

  /***/
  "./src/app/menuhotel/menuhotel-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/menuhotel/menuhotel-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: MenuhotelPageRoutingModule */

  /***/
  function srcAppMenuhotelMenuhotelRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuhotelPageRoutingModule", function () {
      return MenuhotelPageRoutingModule;
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


    var _menuhotel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menuhotel.page */
    "./src/app/menuhotel/menuhotel.page.ts");

    var routes = [{
      path: '',
      component: _menuhotel_page__WEBPACK_IMPORTED_MODULE_3__["MenuhotelPage"]
    }];

    var MenuhotelPageRoutingModule = function MenuhotelPageRoutingModule() {
      _classCallCheck(this, MenuhotelPageRoutingModule);
    };

    MenuhotelPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MenuhotelPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/menuhotel/menuhotel.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/menuhotel/menuhotel.module.ts ***!
    \***********************************************/

  /*! exports provided: MenuhotelPageModule */

  /***/
  function srcAppMenuhotelMenuhotelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuhotelPageModule", function () {
      return MenuhotelPageModule;
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


    var _menuhotel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./menuhotel-routing.module */
    "./src/app/menuhotel/menuhotel-routing.module.ts");
    /* harmony import */


    var _menuhotel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menuhotel.page */
    "./src/app/menuhotel/menuhotel.page.ts");

    var MenuhotelPageModule = function MenuhotelPageModule() {
      _classCallCheck(this, MenuhotelPageModule);
    };

    MenuhotelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menuhotel_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuhotelPageRoutingModule"]],
      declarations: [_menuhotel_page__WEBPACK_IMPORTED_MODULE_6__["MenuhotelPage"]]
    })], MenuhotelPageModule);
    /***/
  },

  /***/
  "./src/app/menuhotel/menuhotel.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/menuhotel/menuhotel.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuhotelMenuhotelPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content.background {\n  --background: url('background.jpg') 0 0/100% 100% no-repeat;\n}\n\nion-img.img {\n  width: 300px;\n  height: 230px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudWhvdGVsL0M6XFxVc2Vyc1xcaXJzeWFcXERlc2t0b3BcXEZZUDItbWFzdGVyL3NyY1xcYXBwXFxtZW51aG90ZWxcXG1lbnVob3RlbC5wYWdlLnNjc3MiLCJzcmMvYXBwL21lbnVob3RlbC9tZW51aG90ZWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksMkRBQUE7QUNBSjs7QURHQTtFQUVJLFlBQUE7RUFDQSxhQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9tZW51aG90ZWwvbWVudWhvdGVsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmRcbntcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuaW9uLWltZy5pbWdcbntcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAyMzBweDtcbn1cbiIsImlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuaW9uLWltZy5pbWcge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjMwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/menuhotel/menuhotel.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/menuhotel/menuhotel.page.ts ***!
    \*********************************************/

  /*! exports provided: MenuhotelPage */

  /***/
  function srcAppMenuhotelMenuhotelPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuhotelPage", function () {
      return MenuhotelPage;
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


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js"); //call the page that has crud operations in firebase.service;


    var MenuhotelPage = /*#__PURE__*/function () {
      function MenuhotelPage(fbService, afs, user, storage) {
        var _this = this;

        _classCallCheck(this, MenuhotelPage);

        this.fbService = fbService;
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

      _createClass(MenuhotelPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.catHotel = this.fbService.getHotels();
          this.storage.setItem('username', this.username);
          this.storage.setItem('isAdmin', this.isAdmin);
          this.storage.setItem('isCustomer', this.isCustomer);
        }
      }]);

      return MenuhotelPage;
    }();

    MenuhotelPage.ctorParameters = function () {
      return [{
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"]
      }];
    };

    MenuhotelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menuhotel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menuhotel.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menuhotel/menuhotel.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menuhotel.page.scss */
      "./src/app/menuhotel/menuhotel.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"]])], MenuhotelPage);
    /***/
  }
}]);
//# sourceMappingURL=menuhotel-menuhotel-module-es5.js.map