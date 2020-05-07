function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-booking-vacc-update-booking-vacc-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/update-booking-vacc/update-booking-vacc.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-booking-vacc/update-booking-vacc.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUpdateBookingVaccUpdateBookingVaccPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"dark\">\n      <ion-title>Update Vaccine & Neuter Booking</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n        <ion-item>\n            <ion-input placeholder=\"Enter Customer Name\" [(ngModel)]=\"bookingvacc.customerName\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input placeholder=\"Enter Contact Number\" [(ngModel)]=\"bookingvacc.contactNumber\"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-input placeholder=\"Enter Cat Name\" [(ngModel)]=\"bookingvacc.catName\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-textarea rows=\"6\" [(ngModel)]=\"bookingvacc.remark\" placeholder=\"Enter new remark here...\"></ion-textarea>\n          </ion-item>\n          <ion-item>\n            <ion-input>\n                <ion-datetime value=\"19-02-1990\" placeholder=\"Select Date\"  [(ngModel)]=\"bookingvacc.date\"></ion-datetime>\n            </ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-input>\n                  <ion-datetime display-format=\"h:mm A\" placeholder=\"Select Time\" picker-format=\"h:mm A\" [(ngModel)]=\"bookingvacc.time\"></ion-datetime>\n              </ion-input>\n          </ion-item>\n    </ion-list>\n    <ion-button color=\"primary\" expand=\"full\" (click)=\"updateBookingVacc()\">Update</ion-button>\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/update-booking-vacc/update-booking-vacc-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/update-booking-vacc/update-booking-vacc-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: UpdateBookingVaccPageRoutingModule */

  /***/
  function srcAppUpdateBookingVaccUpdateBookingVaccRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateBookingVaccPageRoutingModule", function () {
      return UpdateBookingVaccPageRoutingModule;
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


    var _update_booking_vacc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./update-booking-vacc.page */
    "./src/app/update-booking-vacc/update-booking-vacc.page.ts");

    var routes = [{
      path: '',
      component: _update_booking_vacc_page__WEBPACK_IMPORTED_MODULE_3__["UpdateBookingVaccPage"]
    }];

    var UpdateBookingVaccPageRoutingModule = function UpdateBookingVaccPageRoutingModule() {
      _classCallCheck(this, UpdateBookingVaccPageRoutingModule);
    };

    UpdateBookingVaccPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UpdateBookingVaccPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/update-booking-vacc/update-booking-vacc.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/update-booking-vacc/update-booking-vacc.module.ts ***!
    \*******************************************************************/

  /*! exports provided: UpdateBookingVaccPageModule */

  /***/
  function srcAppUpdateBookingVaccUpdateBookingVaccModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateBookingVaccPageModule", function () {
      return UpdateBookingVaccPageModule;
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


    var _update_booking_vacc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./update-booking-vacc-routing.module */
    "./src/app/update-booking-vacc/update-booking-vacc-routing.module.ts");
    /* harmony import */


    var _update_booking_vacc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./update-booking-vacc.page */
    "./src/app/update-booking-vacc/update-booking-vacc.page.ts");

    var UpdateBookingVaccPageModule = function UpdateBookingVaccPageModule() {
      _classCallCheck(this, UpdateBookingVaccPageModule);
    };

    UpdateBookingVaccPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _update_booking_vacc_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateBookingVaccPageRoutingModule"]],
      declarations: [_update_booking_vacc_page__WEBPACK_IMPORTED_MODULE_6__["UpdateBookingVaccPage"]]
    })], UpdateBookingVaccPageModule);
    /***/
  },

  /***/
  "./src/app/update-booking-vacc/update-booking-vacc.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/update-booking-vacc/update-booking-vacc.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUpdateBookingVaccUpdateBookingVaccPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1ib29raW5nLXZhY2MvdXBkYXRlLWJvb2tpbmctdmFjYy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/update-booking-vacc/update-booking-vacc.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/update-booking-vacc/update-booking-vacc.page.ts ***!
    \*****************************************************************/

  /*! exports provided: UpdateBookingVaccPage */

  /***/
  function srcAppUpdateBookingVaccUpdateBookingVaccPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateBookingVaccPage", function () {
      return UpdateBookingVaccPage;
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

    var UpdateBookingVaccPage =
    /*#__PURE__*/
    function () {
      function UpdateBookingVaccPage(activatedRoute, fbService, router, afs, user, storage) {
        var _this = this;

        _classCallCheck(this, UpdateBookingVaccPage);

        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router;
        this.afs = afs;
        this.user = user;
        this.storage = storage;
        this.isAdmin = false;
        this.isCustomer = true;
        this.bookingvacc = {
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

      _createClass(UpdateBookingVaccPage, [{
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
            this.fbService.getVaccBooking(id).subscribe(function (vaccBookingData) {
              _this2.bookingvacc = vaccBookingData;
            });
          }
        }
      }, {
        key: "updateBookingVacc",
        value: function updateBookingVacc() {
          var _this3 = this;

          this.fbService.updateBookingVacc(this.bookingvacc).then(function () {
            _this3.router.navigate(['/view-profile']);
          }, function (err) {});
        }
      }]);

      return UpdateBookingVaccPage;
    }();

    UpdateBookingVaccPage.ctorParameters = function () {
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

    UpdateBookingVaccPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-booking-vacc',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-booking-vacc.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/update-booking-vacc/update-booking-vacc.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-booking-vacc.page.scss */
      "./src/app/update-booking-vacc/update-booking-vacc.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"]])], UpdateBookingVaccPage);
    /***/
  }
}]);
//# sourceMappingURL=update-booking-vacc-update-booking-vacc-module-es5.js.map