function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-booking-hotel-update-booking-hotel-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/update-booking-hotel/update-booking-hotel.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-booking-hotel/update-booking-hotel.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUpdateBookingHotelUpdateBookingHotelPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\r\n          </ion-buttons>\r\n      <ion-title>Update Hotel Booking</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-list>\r\n        <ion-item>\r\n            <ion-input placeholder=\"Enter Customer Name\" [(ngModel)]=\"bookinghotel.customerName\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-input placeholder=\"Enter Contact Number\" [(ngModel)]=\"bookinghotel.contactNumber\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n              <ion-input placeholder=\"Enter Cat Name\" [(ngModel)]=\"bookinghotel.catName\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-textarea rows=\"6\" [(ngModel)]=\"bookinghotel.remark\" placeholder=\"Enter new remark here...\"></ion-textarea>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-input>\r\n                <ion-datetime value=\"19-02-1990\" placeholder=\"Select Date\"  [(ngModel)]=\"bookinghotel.checkInDate\"></ion-datetime>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n              <ion-input>\r\n                  <ion-datetime value=\"19-02-1990\" placeholder=\"Select Date\"  [(ngModel)]=\"bookinghotel.checkOutDate\"></ion-datetime>\r\n              </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n              <ion-input>\r\n                  <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" placeholder=\"Select Time\" [(ngModel)]=\"bookinghotel.timeIn\"></ion-datetime>\r\n              </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n              <ion-input>\r\n                  <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" placeholder=\"Select Time\" [(ngModel)]=\"bookinghotel.timeOut\"></ion-datetime>\r\n              </ion-input>\r\n          </ion-item>\r\n    </ion-list>\r\n    <ion-button color=\"primary\" expand=\"full\" (click)=\"updateBookingHotel()\">Update</ion-button>\r\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/update-booking-hotel/update-booking-hotel-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/update-booking-hotel/update-booking-hotel-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: UpdateBookingHotelPageRoutingModule */

  /***/
  function srcAppUpdateBookingHotelUpdateBookingHotelRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateBookingHotelPageRoutingModule", function () {
      return UpdateBookingHotelPageRoutingModule;
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


    var _update_booking_hotel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./update-booking-hotel.page */
    "./src/app/update-booking-hotel/update-booking-hotel.page.ts");

    var routes = [{
      path: '',
      component: _update_booking_hotel_page__WEBPACK_IMPORTED_MODULE_3__["UpdateBookingHotelPage"]
    }];

    var UpdateBookingHotelPageRoutingModule = function UpdateBookingHotelPageRoutingModule() {
      _classCallCheck(this, UpdateBookingHotelPageRoutingModule);
    };

    UpdateBookingHotelPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UpdateBookingHotelPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/update-booking-hotel/update-booking-hotel.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/update-booking-hotel/update-booking-hotel.module.ts ***!
    \*********************************************************************/

  /*! exports provided: UpdateBookingHotelPageModule */

  /***/
  function srcAppUpdateBookingHotelUpdateBookingHotelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateBookingHotelPageModule", function () {
      return UpdateBookingHotelPageModule;
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


    var _update_booking_hotel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./update-booking-hotel-routing.module */
    "./src/app/update-booking-hotel/update-booking-hotel-routing.module.ts");
    /* harmony import */


    var _update_booking_hotel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./update-booking-hotel.page */
    "./src/app/update-booking-hotel/update-booking-hotel.page.ts");

    var UpdateBookingHotelPageModule = function UpdateBookingHotelPageModule() {
      _classCallCheck(this, UpdateBookingHotelPageModule);
    };

    UpdateBookingHotelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _update_booking_hotel_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateBookingHotelPageRoutingModule"]],
      declarations: [_update_booking_hotel_page__WEBPACK_IMPORTED_MODULE_6__["UpdateBookingHotelPage"]]
    })], UpdateBookingHotelPageModule);
    /***/
  },

  /***/
  "./src/app/update-booking-hotel/update-booking-hotel.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/update-booking-hotel/update-booking-hotel.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUpdateBookingHotelUpdateBookingHotelPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1ib29raW5nLWhvdGVsL3VwZGF0ZS1ib29raW5nLWhvdGVsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/update-booking-hotel/update-booking-hotel.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/update-booking-hotel/update-booking-hotel.page.ts ***!
    \*******************************************************************/

  /*! exports provided: UpdateBookingHotelPage */

  /***/
  function srcAppUpdateBookingHotelUpdateBookingHotelPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateBookingHotelPage", function () {
      return UpdateBookingHotelPage;
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

    var UpdateBookingHotelPage = /*#__PURE__*/function () {
      function UpdateBookingHotelPage(activatedRoute, fbService, router, afs, user, storage) {
        var _this = this;

        _classCallCheck(this, UpdateBookingHotelPage);

        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router;
        this.afs = afs;
        this.user = user;
        this.storage = storage;
        this.isAdmin = false;
        this.isCustomer = true;
        this.bookinghotel = {
          hotelid: '',
          customerName: '',
          contactNumber: '',
          catName: '',
          remark: '',
          checkInDate: '',
          checkOutDate: '',
          timeIn: '',
          timeOut: ''
        };
        this.mainuser = afs.doc("users/".concat(user.getUID()));
        this.sub = this.mainuser.valueChanges().subscribe(function (event) {
          _this.username = event.username;
          _this.isAdmin = event.isAdmin;
          _this.isCustomer = event.isCustomer;
          _this.posts = event.posts;
          _this.profilePic = event.profilePic;
          _this.contact = event.contact;
          _this.address = event.address;
        });
      }

      _createClass(UpdateBookingHotelPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.storage.setItem('username', this.username);
          this.storage.setItem('isAdmin', this.isAdmin);
          this.storage.setItem('isCustomer', this.isCustomer);
          this.storage.setItem('contact', this.contact);
          this.storage.setItem('address', this.address);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          var id = this.activatedRoute.snapshot.paramMap.get('id');

          if (id) {
            this.fbService.getHotelBooking(id).subscribe(function (hotelBookingData) {
              _this2.bookinghotel = hotelBookingData;
            });
          }
        }
      }, {
        key: "updateBookingHotel",
        value: function updateBookingHotel() {
          var _this3 = this;

          this.fbService.updateBookingHotel(this.bookinghotel).then(function () {
            _this3.router.navigate(['/view-profile']);
          }, function (err) {});
        }
      }]);

      return UpdateBookingHotelPage;
    }();

    UpdateBookingHotelPage.ctorParameters = function () {
      return [{
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
      }];
    };

    UpdateBookingHotelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-booking-hotel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-booking-hotel.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/update-booking-hotel/update-booking-hotel.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-booking-hotel.page.scss */
      "./src/app/update-booking-hotel/update-booking-hotel.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"]])], UpdateBookingHotelPage);
    /***/
  }
}]);
//# sourceMappingURL=update-booking-hotel-update-booking-hotel-module-es5.js.map