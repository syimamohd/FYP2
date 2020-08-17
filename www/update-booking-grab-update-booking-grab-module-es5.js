function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-booking-grab-update-booking-grab-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/update-booking-grab/update-booking-grab.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-booking-grab/update-booking-grab.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUpdateBookingGrabUpdateBookingGrabPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\r\n          </ion-buttons>\r\n      <ion-title>Update Grab Booking</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-list>\r\n        <ion-item>\r\n            <ion-input placeholder=\"Enter Customer Name\" [(ngModel)]=\"bookinggrab.customerName\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-input placeholder=\"Enter Contact Number\" [(ngModel)]=\"bookinggrab.contactNumber\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n              <ion-input placeholder=\"Enter Cat Name\" [(ngModel)]=\"bookinggrab.catName\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-textarea rows=\"6\" [(ngModel)]=\"bookinggrab.remark\" placeholder=\"Enter new remark here...\"></ion-textarea>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-input>\r\n                <ion-datetime value=\"19-02-1990\" placeholder=\"Select Date\"  [(ngModel)]=\"bookinggrab.date\"></ion-datetime>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n              <ion-input>\r\n                  <ion-datetime display-format=\"h:mm A\" placeholder=\"Select Time\" picker-format=\"h:mm A\" [(ngModel)]=\"bookinggrab.time\"></ion-datetime>\r\n              </ion-input>\r\n          </ion-item>\r\n    </ion-list>\r\n    <ion-button color=\"primary\" expand=\"full\" (click)=\"updateBookingGrab()\">Update</ion-button>\r\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/update-booking-grab/update-booking-grab-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/update-booking-grab/update-booking-grab-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: UpdateBookingGrabPageRoutingModule */

  /***/
  function srcAppUpdateBookingGrabUpdateBookingGrabRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateBookingGrabPageRoutingModule", function () {
      return UpdateBookingGrabPageRoutingModule;
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


    var _update_booking_grab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./update-booking-grab.page */
    "./src/app/update-booking-grab/update-booking-grab.page.ts");

    var routes = [{
      path: '',
      component: _update_booking_grab_page__WEBPACK_IMPORTED_MODULE_3__["UpdateBookingGrabPage"]
    }];

    var UpdateBookingGrabPageRoutingModule = function UpdateBookingGrabPageRoutingModule() {
      _classCallCheck(this, UpdateBookingGrabPageRoutingModule);
    };

    UpdateBookingGrabPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UpdateBookingGrabPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/update-booking-grab/update-booking-grab.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/update-booking-grab/update-booking-grab.module.ts ***!
    \*******************************************************************/

  /*! exports provided: UpdateBookingGrabPageModule */

  /***/
  function srcAppUpdateBookingGrabUpdateBookingGrabModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateBookingGrabPageModule", function () {
      return UpdateBookingGrabPageModule;
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


    var _update_booking_grab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./update-booking-grab-routing.module */
    "./src/app/update-booking-grab/update-booking-grab-routing.module.ts");
    /* harmony import */


    var _update_booking_grab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./update-booking-grab.page */
    "./src/app/update-booking-grab/update-booking-grab.page.ts");

    var UpdateBookingGrabPageModule = function UpdateBookingGrabPageModule() {
      _classCallCheck(this, UpdateBookingGrabPageModule);
    };

    UpdateBookingGrabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _update_booking_grab_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateBookingGrabPageRoutingModule"]],
      declarations: [_update_booking_grab_page__WEBPACK_IMPORTED_MODULE_6__["UpdateBookingGrabPage"]]
    })], UpdateBookingGrabPageModule);
    /***/
  },

  /***/
  "./src/app/update-booking-grab/update-booking-grab.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/update-booking-grab/update-booking-grab.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUpdateBookingGrabUpdateBookingGrabPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1ib29raW5nLWdyYWIvdXBkYXRlLWJvb2tpbmctZ3JhYi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/update-booking-grab/update-booking-grab.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/update-booking-grab/update-booking-grab.page.ts ***!
    \*****************************************************************/

  /*! exports provided: UpdateBookingGrabPage */

  /***/
  function srcAppUpdateBookingGrabUpdateBookingGrabPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateBookingGrabPage", function () {
      return UpdateBookingGrabPage;
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

    var UpdateBookingGrabPage = /*#__PURE__*/function () {
      function UpdateBookingGrabPage(activatedRoute, fbService, router, afs, user, storage) {
        var _this = this;

        _classCallCheck(this, UpdateBookingGrabPage);

        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router;
        this.afs = afs;
        this.user = user;
        this.storage = storage;
        this.isAdmin = false;
        this.isCustomer = true;
        this.bookinggrab = {
          customerName: '',
          contactNumber: '',
          catName: '',
          remark: '',
          date: '',
          time: ''
        };
        this.mainuser = afs.doc("users/".concat(user.getUID()));
        this.sub = this.mainuser.valueChanges().subscribe(function (event) {
          _this.username = event.username;
          _this.isAdmin = event.isAdmin;
          _this.isCustomer = event.isCustomer; // this.posts = event.posts

          _this.profilePic = event.profilePic;
          _this.contact = event.contact;
          _this.address = event.address;
        });
      }

      _createClass(UpdateBookingGrabPage, [{
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
            this.fbService.getGrabBooking(id).subscribe(function (grabBookingData) {
              _this2.bookinggrab = grabBookingData;
            });
          }
        }
      }, {
        key: "updateBookingGrab",
        value: function updateBookingGrab() {
          var _this3 = this;

          this.fbService.updateBookingGrab(this.bookinggrab).then(function () {
            _this3.router.navigate(['/view-profile']);
          }, function (err) {});
        }
      }]);

      return UpdateBookingGrabPage;
    }();

    UpdateBookingGrabPage.ctorParameters = function () {
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

    UpdateBookingGrabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-booking-grab',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-booking-grab.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/update-booking-grab/update-booking-grab.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-booking-grab.page.scss */
      "./src/app/update-booking-grab/update-booking-grab.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"]])], UpdateBookingGrabPage);
    /***/
  }
}]);
//# sourceMappingURL=update-booking-grab-update-booking-grab-module-es5.js.map