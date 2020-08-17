function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookinghotel-bookinghotel-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bookinghotel/bookinghotel.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookinghotel/bookinghotel.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookinghotelBookinghotelPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title>Cat Hotel Booking</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"background\">\r\n<form class=\"form\" [formGroup]=\"validations_form\"  (ngSubmit)=\"submitBookingHotel(validations_form.value)\">\r\n\t<ion-list>\r\n    <ion-row>\r\n      <ion-col>\r\n          <ion-item>Type: {{hotel.hotelName}}</ion-item>\r\n      </ion-col>\r\n      <ion-col>\r\n          <ion-item>Price: RM{{hotel.hotelPrice}}</ion-item>\r\n      </ion-col>\r\n      </ion-row>\r\n\t\t<ion-item>\r\n      <ion-input formControlName=\"customerName\" placeholder=\" Name\" ></ion-input>\r\n      <!-- <ion-input  placeholder=\"Name\" [(ngModel)]=\"bookinghotel.customerName\" ></ion-input> -->\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input formControlName=\"contactNumber\" placeholder=\"Contact Number\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input formControlName=\"catName\" placeholder=\"Cat Name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input formControlName=\"remark\" placeholder=\"Remark\" ></ion-input>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n            <ion-label>CHECK IN DATE</ion-label>\r\n            <ion-input>\r\n                <ion-datetime formControlName=\"checkInDate\" displayFormat=\"MMM DD, YYYY\" pickerFormat=\"DDDD MMMM YYYY\" placeholder=\"Select Date\" value=(DateTime.Now) [(ngModel)]=\"todate\" min = {{todate}} max=\"2025\" ></ion-datetime>\r\n            </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label>TIME IN</ion-label>\r\n            <ion-input>\r\n                <ion-datetime formControlName=\"timeIn\"  display-format=\"h:mm A\" picker-format=\"h:mm A\" placeholder=\"Select Time\" ></ion-datetime>\r\n            </ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      \r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label>CHECK OUT DATE</ion-label>\r\n          <ion-input>\r\n              <ion-datetime formControlName=\"checkOutDate\" displayFormat=\"D/MM/YYYY\" pickerFormat=\"DDDD MMMM YYYY\" placeholder=\"Select Date\"  min = {{todate}} max=\"2025\" ></ion-datetime>\r\n          </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>TIME OUT</ion-label>\r\n          <ion-input>\r\n              <ion-datetime formControlName=\"timeOut\" display-format=\"h:mm A\" picker-format=\"h:mm A\" placeholder=\"Select Time\" ></ion-datetime>\r\n          </ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n \r\n    </ion-list>\r\n    <ion-row>\r\n      <ion-col>\r\n        <!-- <ngx-qrcode [value]=\"createdCode\"></ngx-qrcode> -->\r\n        <ion-button class=\"submit-btn\" type=\"submit\" [disabled]=\"!validations_form.valid\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"primary\">Confirm</ion-button>\r\n        <!-- <ion-button class=\"submit-btn\" type=\"submit\" (click)=\"submitBookingHotel()\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"primary\">Confirm</ion-button> -->\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button [routerLink]=\"['/menuhotel']\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"warning\" >Cancel</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>  \r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/bookinghotel/bookinghotel-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/bookinghotel/bookinghotel-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: BookinghotelPageRoutingModule */

  /***/
  function srcAppBookinghotelBookinghotelRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookinghotelPageRoutingModule", function () {
      return BookinghotelPageRoutingModule;
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


    var _bookinghotel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bookinghotel.page */
    "./src/app/bookinghotel/bookinghotel.page.ts");

    var routes = [{
      path: '',
      component: _bookinghotel_page__WEBPACK_IMPORTED_MODULE_3__["BookinghotelPage"]
    }];

    var BookinghotelPageRoutingModule = function BookinghotelPageRoutingModule() {
      _classCallCheck(this, BookinghotelPageRoutingModule);
    };

    BookinghotelPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BookinghotelPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/bookinghotel/bookinghotel.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/bookinghotel/bookinghotel.module.ts ***!
    \*****************************************************/

  /*! exports provided: BookinghotelPageModule */

  /***/
  function srcAppBookinghotelBookinghotelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookinghotelPageModule", function () {
      return BookinghotelPageModule;
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


    var _bookinghotel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bookinghotel-routing.module */
    "./src/app/bookinghotel/bookinghotel-routing.module.ts");
    /* harmony import */


    var _bookinghotel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bookinghotel.page */
    "./src/app/bookinghotel/bookinghotel.page.ts");

    var BookinghotelPageModule = function BookinghotelPageModule() {
      _classCallCheck(this, BookinghotelPageModule);
    };

    BookinghotelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _bookinghotel_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookinghotelPageRoutingModule"]],
      declarations: [_bookinghotel_page__WEBPACK_IMPORTED_MODULE_6__["BookinghotelPage"]]
    })], BookinghotelPageModule);
    /***/
  },

  /***/
  "./src/app/bookinghotel/bookinghotel.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/bookinghotel/bookinghotel.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookinghotelBookinghotelPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content.background {\n  --background: url('background.jpg') 0 0/100% 100% no-repeat, transparent;\n}\n\n#button {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va2luZ2hvdGVsL0M6XFxVc2Vyc1xcaXJzeWFcXERlc2t0b3BcXGZ5cDItbWFzdGVyL3NyY1xcYXBwXFxib29raW5naG90ZWxcXGJvb2tpbmdob3RlbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2Jvb2tpbmdob3RlbC9ib29raW5naG90ZWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksd0VBQUE7QUNBSjs7QURHQTtFQUVJLGlCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9ib29raW5naG90ZWwvYm9va2luZ2hvdGVsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmRcbntcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCwgdHJhbnNwYXJlbnQ7XG59XG5cbiNidXR0b25cbntcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiIsImlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCwgdHJhbnNwYXJlbnQ7XG59XG5cbiNidXR0b24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/bookinghotel/bookinghotel.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/bookinghotel/bookinghotel.page.ts ***!
    \***************************************************/

  /*! exports provided: BookinghotelPage */

  /***/
  function srcAppBookinghotelBookinghotelPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookinghotelPage", function () {
      return BookinghotelPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var BookinghotelPage = /*#__PURE__*/function () {
      function BookinghotelPage(activatedRoute, fbService, afs, user, auth, storage, toastCtrl, router, alertController, formBuilder) {
        var _this = this;

        _classCallCheck(this, BookinghotelPage);

        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.afs = afs;
        this.user = user;
        this.auth = auth;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.isAdmin = false;
        this.isCustomer = true;
        this.today = new Date();
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
        this.hotel = {
          hotelName: '',
          hotelDetails: '',
          hotelPrice: '',
          image: '' // createdAt: ''

        };
        this.mainuser = afs.doc("users/".concat(user.getUID()));
        this.sub = this.mainuser.valueChanges().subscribe(function (event) {
          _this.username = event.username;
          _this.isAdmin = event.isAdmin;
          _this.isCustomer = event.isCustomer;
        });
      }

      _createClass(BookinghotelPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //this.bookinghotel.hotelid = this.activatedRoute.snapshot.paramMap.get('hotelid');
          //console.log(this.activatedRoute.snapshot.paramMap.get('id'));
          //console.log(this.activatedRoute.snapshot.params.id);
          // this.activatedRoute.params.subscribe((params) => {
          //   let id = params.get('id');
          //     this.activatedRoute.params.subscribe((params) => {
          //       const id: string =  params.id;
          //     console.log(id);
          // });
          this.validations_form = this.formBuilder.group({
            customerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])),
            contactNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])),
            catName: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])),
            remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])),
            checkInDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])),
            checkOutDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])),
            timeIn: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])),
            timeOut: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]))
          });
          this.today.setDate(this.today.getDate() + 3);
          this.todate = this.today.toISOString().substr(0, 10);
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
        key: "submitBookingHotel",
        value: function submitBookingHotel(value) {
          var _this2 = this;

          //console.log(this.bookinghotel.hotelid);
          this.bookinghotel.customerName = value.customerName;
          this.bookinghotel.catName = value.catName;
          this.bookinghotel.contactNumber = value.contactNumber;
          this.bookinghotel.remark = value.remark;
          this.bookinghotel.checkInDate = value.checkInDate;
          this.bookinghotel.checkOutDate = value.checkOutDate;
          this.bookinghotel.timeIn = value.timeIn;
          this.bookinghotel.timeOut = value.timeOut; //this.bookinghotel.hoteltype==this.hotel.hotelName;

          this.fbService.submitBookingHotel(this.bookinghotel).then(function () {
            _this2.presentAlert('Done!', 'Your booking was created!');

            _this2.router.navigateByUrl('/menuhotel');
          }, function (err) {});
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this3 = this;

          var id = this.activatedRoute.snapshot.paramMap.get('id');

          if (id) {
            this.fbService.getHotel(id).subscribe(function (hotelData) {
              _this3.hotel = hotelData;
            });
          }
        }
      }]);

      return BookinghotelPage;
    }();

    BookinghotelPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
      }];
    };

    BookinghotelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bookinghotel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bookinghotel.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bookinghotel/bookinghotel.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bookinghotel.page.scss */
      "./src/app/bookinghotel/bookinghotel.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]])], BookinghotelPage);
    /***/
  }
}]);
//# sourceMappingURL=bookinghotel-bookinghotel-module-es5.js.map