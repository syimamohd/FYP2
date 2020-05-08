function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-profile-view-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view-profile/view-profile.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-profile/view-profile.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewProfileViewProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar  color=\"dark\">\r\n    <ion-title >My Profile</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n        <ion-menu-button autoHide=\"false\">\r\n          </ion-menu-button>\r\n        <!-- <ion-back-button icon=\"arrow-back-outline\"></ion-back-button> -->\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n<<<<<<< HEAD\r\n      <!-- <app-loading *ngIf=\"!posts\"></app-loading> -->\r\n=======\r\n>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3\r\n      <ion-grid>\r\n        <ion-row>\r\n            <div class=\"center\" id=\"profile-info\" *ngIf=\"username\">\r\n                <!-- <ion-grid> -->\r\n                  <ion-row>\r\n                    <ion-col size=\"4\" class=\"user-image\">\r\n                      <ion-img src=\"https://ucarecdn.com/{{ profilePic }}/-/scale_crop/200x200/center/\"></ion-img>\r\n                    </ion-col>\r\n                    <ion-col size=\"8\">\r\n                      <h1>Welcome, {{ username }} !</h1>\r\n                      <!-- <p>Contact Number: {{ contact }}</p>\r\n                      <p>Address: {{ address }}</p> -->\r\n                      <ion-button shape=\"round\" color=\"primary\" routerLink=\"/edit-profile\">Edit Profile</ion-button>\r\n                    </ion-col>\r\n                  </ion-row>\r\n              </div>\r\n        </ion-row>\r\n      \r\n      <div>  \r\n        <ion-card>\r\n            <ion-title>Your Hotel Booking:</ion-title>\r\n            <ion-item *ngFor=\"let bookinghotel of (hotelBooking | async)\">\r\n              <ion-label>\r\n                  <ion-row>\r\n                      <ion-col>\r\n                          <p>Name: {{bookinghotel.customerName}}</p>\r\n                      </ion-col>\r\n                      <ion-col>\r\n                          <p>Cat Name: {{bookinghotel.catName}}</p>\r\n                      </ion-col>\r\n                    </ion-row> \r\n                  <ion-row>\r\n                    <ion-col>\r\n                        <p>Check In : {{bookinghotel.checkInDate | date: \"dd/MM/yyyy\"}}</p>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <p>Check Out : {{bookinghotel.checkOutDate | date: \"dd/MM/yyyy\"}}</p>\r\n                    </ion-col>\r\n                  </ion-row>  \r\n                  <ion-row>\r\n                    <ion-col>\r\n                        <p>Time In : {{bookinghotel.timeIn | date: \"shortTime\" }}</p>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <p>Time Out : {{bookinghotel.timeOut | date: \"shortTime\" }}</p>\r\n                    </ion-col>\r\n                  </ion-row>\r\n              </ion-label>\r\n                <ion-button *ngIf=\"isCustomer\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-booking-hotel/'+bookinghotel.id\">View</ion-button>\r\n<<<<<<< HEAD\r\n              </ion-item>\r\n        </ion-card>     \r\n      </div>\r\n=======\r\n              </ion-item> \r\n              <ion-button *ngIf=\"isCustomer\" [routerLink]=\"['/menuhotel']\" fill=\"solid\" size=\"med\" color=\"secondary\" >Book More Hotel</ion-button>\r\n     \r\n        </ion-card>\r\n        <!-- <ion-fab *ngIf=\"isCustomer\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n            <ion-fab-button [routerLink]=\"'/menuhotel'\">\r\n              <ion-icon name=\"add\"></ion-icon>\r\n            </ion-fab-button>\r\n        </ion-fab> -->\r\n      </div>\r\n      \r\n>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3\r\n\r\n      <div>  \r\n        <ion-card>\r\n            <ion-title>Your Spa & Grooming Booking:</ion-title>\r\n            <ion-item *ngFor=\"let bookingspa of (spaBooking | async)\">\r\n              <ion-label>\r\n                  <ion-row>\r\n                      <ion-col>\r\n                          <p>Name: {{bookingspa.customerName}}</p>\r\n                      </ion-col>\r\n                      <ion-col>\r\n                          <p>Cat Name: {{bookingspa.catName}}</p>\r\n                      </ion-col>\r\n                    </ion-row> \r\n                  <ion-row>\r\n                    <ion-col>\r\n                        <p>Date : {{bookingspa.date | date: \"dd/MM/yyyy\"}}</p>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <p>Time : {{bookingspa.time | date: \"shortTime\" }}</p>\r\n                    </ion-col>\r\n                  </ion-row>\r\n              </ion-label>\r\n                <ion-button *ngIf=\"isCustomer\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-booking-spa/'+bookingspa.id\">View</ion-button>\r\n              </ion-item>\r\n<<<<<<< HEAD\r\n        </ion-card>     \r\n      </div>\r\n=======\r\n        </ion-card>    \r\n      </div>\r\n      <ion-button  *ngIf=\"isCustomer\" [routerLink]=\"['/menuspa']\" fill=\"solid\" size=\"med\"  color=\"secondary\" >Book More Spa</ion-button>\r\n>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3\r\n\r\n      <div>  \r\n          <ion-card>\r\n              <ion-title>Your Vaccine & Neuter Booking:</ion-title>\r\n              <ion-item *ngFor=\"let bookingvacc of (vaccBooking | async)\">\r\n                <ion-label>\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <p>Name: {{bookingvacc.customerName}}</p>\r\n                        </ion-col>\r\n                        <ion-col>\r\n                            <p>Cat Name: {{bookingvacc.catName}}</p>\r\n                        </ion-col>\r\n                      </ion-row> \r\n                    <ion-row>\r\n                      <ion-col>\r\n                          <p>Date : {{bookingvacc.date | date: \"dd/MM/yyyy\"}}</p>\r\n                      </ion-col>\r\n                      <ion-col>\r\n                          <p>Time : {{bookingvacc.time | date: \"shortTime\" }}</p>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                </ion-label>\r\n                  <ion-button *ngIf=\"isCustomer\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-booking-vaccine/'+bookingvacc.id\">View</ion-button>\r\n                </ion-item>\r\n<<<<<<< HEAD\r\n          </ion-card>     \r\n        </div>\r\n=======\r\n          </ion-card>    \r\n        </div>\r\n        <ion-button  *ngIf=\"isCustomer\" [routerLink]=\"['/menuvaccine']\" fill=\"solid\" size=\"med\"  color=\"secondary\" >Book More Vacc</ion-button>\r\n>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3\r\n\r\n        <div>  \r\n            <ion-card>\r\n                <ion-title>Your Grab Booking:</ion-title>\r\n                <ion-item *ngFor=\"let bookinggrab of (grabBooking | async)\">\r\n                  <ion-label>\r\n                      <ion-row>\r\n                          <ion-col>\r\n                              <p>Name: {{bookinggrab.customerName}}</p>\r\n                          </ion-col>\r\n                          <ion-col>\r\n                              <p>Cat Name: {{bookinggrab.catName}}</p>\r\n                          </ion-col>\r\n                        </ion-row> \r\n                      <ion-row>\r\n                        <ion-col>\r\n                            <p>Date : {{bookinggrab.date | date: \"dd/MM/yyyy\"}}</p>\r\n                        </ion-col>\r\n                        <ion-col>\r\n                            <p>Time : {{bookinggrab.time | date: \"shortTime\" }}</p>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                  </ion-label>\r\n                    <ion-button *ngIf=\"isCustomer\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-booking-grab/'+bookinggrab.id\">View</ion-button>\r\n                  </ion-item>\r\n<<<<<<< HEAD\r\n            </ion-card>     \r\n          </div>\r\n\r\n=======\r\n            </ion-card>    \r\n          </div>\r\n          <ion-button  *ngIf=\"isCustomer\" [routerLink]=\"['/menugrab']\" fill=\"solid\" size=\"med\"  color=\"secondary\" >Book More Grab</ion-button>\r\n      \r\n>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3\r\n          <div>  \r\n              <ion-card>\r\n                  <ion-title>Your Purchased Item:</ion-title>\r\n                  <ion-item *ngFor=\"let item of (purchasedItem | async)\">\r\n                    <ion-label>\r\n                        <ion-row>\r\n                            <ion-col>\r\n                                <p>Name: {{item.customerName}}</p>\r\n                            </ion-col>\r\n                            <ion-col>\r\n                                <p>Contact Number: {{item.contactNumber}}</p>\r\n                            </ion-col>\r\n                          </ion-row> \r\n                          <ion-row>\r\n                              <ion-col>\r\n                                  <p>Address: {{item.address}}</p>\r\n                              </ion-col>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                              <ion-col>\r\n                                  <p>Total: RM52.50</p>\r\n                              </ion-col>\r\n                              <ion-col>\r\n                                  <p>Payment: Cash On Delivery</p>\r\n                              </ion-col>\r\n                          </ion-row>\r\n                    </ion-label>\r\n                      <!-- <ion-button *ngIf=\"isCustomer\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-booking-grab/'+bookinggrab.id\">View</ion-button> -->\r\n                    </ion-item>\r\n<<<<<<< HEAD\r\n              </ion-card>     \r\n            </div>\r\n\r\n=======\r\n              </ion-card>    \r\n            </div>\r\n            <ion-button  *ngIf=\"isCustomer\" [routerLink]=\"['/menuproduct']\" fill=\"solid\" size=\"med\"  color=\"secondary\" >Add More Product</ion-button>\r\n>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3\r\n      <!-- </div> -->\r\n  </ion-grid>\r\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/view-profile/view-profile-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/view-profile/view-profile-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ViewProfilePageRoutingModule */

  /***/
  function srcAppViewProfileViewProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewProfilePageRoutingModule", function () {
      return ViewProfilePageRoutingModule;
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


    var _view_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./view-profile.page */
    "./src/app/view-profile/view-profile.page.ts");

    var routes = [{
      path: '',
      component: _view_profile_page__WEBPACK_IMPORTED_MODULE_3__["ViewProfilePage"]
    }];

    var ViewProfilePageRoutingModule = function ViewProfilePageRoutingModule() {
      _classCallCheck(this, ViewProfilePageRoutingModule);
    };

    ViewProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ViewProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/view-profile/view-profile.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/view-profile/view-profile.module.ts ***!
    \*****************************************************/

  /*! exports provided: ViewProfilePageModule */

  /***/
  function srcAppViewProfileViewProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewProfilePageModule", function () {
      return ViewProfilePageModule;
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


    var _view_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./view-profile-routing.module */
    "./src/app/view-profile/view-profile-routing.module.ts");
    /* harmony import */


    var _view_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./view-profile.page */
    "./src/app/view-profile/view-profile.page.ts");

    var ViewProfilePageModule = function ViewProfilePageModule() {
      _classCallCheck(this, ViewProfilePageModule);
    };

    ViewProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewProfilePageRoutingModule"]],
      declarations: [_view_profile_page__WEBPACK_IMPORTED_MODULE_6__["ViewProfilePage"]]
    })], ViewProfilePageModule);
    /***/
  },

  /***/
  "./src/app/view-profile/view-profile.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/view-profile/view-profile.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewProfileViewProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#images {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  max-width: 100%;\n  width: 606px;\n}\n\n.image {\n  margin-left: 1px;\n  margin-right: 1px;\n}\n\n.main-image, .user-image {\n  width: 200px;\n  height: 200px;\n}\n\n.center {\n  text-align: center;\n}\n\n.user-image {\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1wcm9maWxlL0Q6XFxCYWNrdXAgQ1xcRGVza3RvcFxcU0VNIDhcXFBST0pFQ1RcXGZ5cDIvc3JjXFxhcHBcXHZpZXctcHJvZmlsZVxcdmlldy1wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlldy1wcm9maWxlL3ZpZXctcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7QUNDRDs7QURHQTtFQUVDLHlCQUFBO1VBQUEsbUJBQUE7QUNERCIsImZpbGUiOiJzcmMvYXBwL3ZpZXctcHJvZmlsZS92aWV3LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ltYWdlcyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdHdpZHRoOiA2MDZweDtcclxufVxyXG5cclxuLmltYWdlIHtcclxuXHRtYXJnaW4tbGVmdDogMXB4O1xyXG5cdG1hcmdpbi1yaWdodDogMXB4O1xyXG59XHJcblxyXG4ubWFpbi1pbWFnZSwgLnVzZXItaW1hZ2Uge1xyXG5cdHdpZHRoOiAyMDBweDtcclxuXHRoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHJcbn1cclxuXHJcbi51c2VyLWltYWdlXHJcbntcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59IiwiI2ltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDYwNnB4O1xufVxuXG4uaW1hZ2Uge1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbn1cblxuLm1haW4taW1hZ2UsIC51c2VyLWltYWdlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udXNlci1pbWFnZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/view-profile/view-profile.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/view-profile/view-profile.page.ts ***!
    \***************************************************/

  /*! exports provided: ViewProfilePage */

  /***/
  function srcAppViewProfileViewProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewProfilePage", function () {
      return ViewProfilePage;
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


    var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/firebase.service */
    "./src/app/services/firebase.service.ts");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ViewProfilePage =
    /*#__PURE__*/
    function () {
      function ViewProfilePage(http, activatedRoute, fbService, afs, user, storage, router, alertController) {
        var _this = this;

        _classCallCheck(this, ViewProfilePage);

        this.http = http;
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.afs = afs;
        this.user = user;
        this.storage = storage;
        this.router = router;
        this.alertController = alertController;
        this.isAdmin = false;
        this.isCustomer = true;
        this.bookinghotel = {
          customerName: '',
          contactNumber: '',
          catName: '',
          remark: '',
          checkInDate: '',
          checkOutDate: '',
          timeIn: '',
          timeOut: ''
        };
        this.bookingspa = {
          customerName: '',
          contactNumber: '',
          catName: '',
          remark: '',
          date: '',
          time: ''
        };
        this.bookingvacc = {
          customerName: '',
          contactNumber: '',
          catName: '',
          remark: '',
          date: '',
          time: ''
        };
        this.bookinggrab = {
          customerName: '',
          contactNumber: '',
          catName: '',
          remark: '',
          date: '',
          time: ''
        };
        this.item = {
          customerName: '',
          contactNumber: '',
          address: ''
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

      _createClass(ViewProfilePage, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.hotelBooking = this.fbService.getHotelBookings();
          this.spaBooking = this.fbService.getSpaBookings();
          this.vaccBooking = this.fbService.getVaccBookings();
          this.grabBooking = this.fbService.getGrabBookings();
          this.purchasedItem = this.fbService.getPurchasedItems();
          this.storage.setItem('username', this.username);
          this.storage.setItem('isAdmin', this.isAdmin);
          this.storage.setItem('isCustomer', this.isCustomer);
          this.storage.setItem('contact', this.contact);
          this.storage.setItem('address', this.address);
        }
      }]);

      return ViewProfilePage;
    }();

    ViewProfilePage.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
      }];
    };

    ViewProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view-profile/view-profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-profile.page.scss */
      "./src/app/view-profile/view-profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]])], ViewProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=view-profile-view-profile-module-es5.js.map