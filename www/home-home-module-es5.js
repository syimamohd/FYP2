function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-title>Home</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"background\">\r\n     <ion-list>\r\n        <ion-card>\r\n          <ion-item *ngFor=\"let content of (contentItem | async)\">\r\n            <ion-slides>\r\n              <ion-slide>\r\n                <div class=\"slide\">\r\n                  <img src=\"assets/img/logo.png\"/>\r\n                  <h2>{{content.title}}</h2>\r\n                  <p>{{content.contentDetails}}</p>\r\n                </div>\r\n              <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-content/'+content.id\">Edit</ion-button>\r\n              </ion-slide>\r\n            </ion-slides>\r\n          </ion-item>  \r\n        </ion-card>\r\n\r\n        <ion-card>\r\n            <ion-slide>\r\n                <div class=\"slide\">\r\n                  <img src=\"background.jpg\"/>\r\n                  <h2>We provide the best services</h2>\r\n                  <h2><a href=\"https://www.instagram.com/littlepawsstation/\">Visit our insta!</a></h2>\r\n                  <p><a [routerLink]=\"'/menuhotel/'\">Cat Boarding</a>,<a [routerLink]=\"'/menuspa/'\"> Cat Spa & Grooming</a>,<a [routerLink]=\"'/menuvaccine/'\">Cat Vaccine & Neuter</a>,<a [routerLink]=\"'/menugrab/'\"> Cat Grab (soon)</a></p>\r\n                </div>\r\n                <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-content/'\">Edit</ion-button>\r\n              </ion-slide>\r\n         </ion-card>\r\n        <ion-card>\r\n            <ion-slide>\r\n                <div class=\"slide\">\r\n                  <img size=\"med\" src=\"assets/img/vaccine.jpg\"/>\r\n                  <p>Vaccine and Neuter Service by our Certified Veterinarian every weekend.</p>\r\n                </div>\r\n                <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-content/'\">Edit</ion-button>\r\n              </ion-slide>\r\n         </ion-card>\r\n         <ion-card>\r\n           <ion-slides>\r\n              <ion-slide>\r\n                  <div class=\"slide\">\r\n                   \r\n                    <h2>Operating Hours:</h2>\r\n                      <p>Everyday</p>\r\n                      <p>10 AM to PM</p>\r\n                    <h2>Address:</h2>\r\n                      <p>Little Paws Station</p>\r\n                      <p>57 Jalan Pulai 21,</p>\r\n                      <p>Taman Pulai Utama,</p>\r\n                      <p>81300 Skudai,</p>\r\n                      <p>Johor Bharu</p>\r\n  \r\n                    <!-- <ion-col>\r\n                      <ion-row>\r\n                        <h2>Operating Hours:</h2>\r\n                        <p>Everyday</p>\r\n                        <p>10 AM to PM</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                          <h2>Address:</h2>\r\n                          <p>Little Paws Station</p>\r\n                          <p>57 Jalan Pulai 21,</p>\r\n                          <p>Taman Pulai Utama,</p>\r\n                          <p>81300 Skudai,</p>\r\n                          <p>Johor Bharu</p>\r\n                        </ion-row>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <img src=\"assets/img/map.png\"/>\r\n                    </ion-col> -->\r\n                  </div>\r\n                  <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-content/'\">Edit</ion-button>\r\n                </ion-slide>\r\n                <!-- <ion-slide>\r\n                        <div class=\"slide\">\r\n                            <img src=\"assets/img/map.png\"/>\r\n                            <h2>Location</h2>\r\n                        </div>    \r\n                </ion-slide> -->\r\n           </ion-slides>\r\n          </ion-card> \r\n         \r\n\r\n     </ion-list>\r\n\r\n     <ion-fab *ngIf=\"isAdmin\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button [routerLink]=\"'/add-content'\">\r\n          <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n</ion-content>\r\n\r\n  <!-- <ion-footer>\r\n    <ion-toolbar color=\"dark\">\r\n      <ion-title>Footer</ion-title>\r\n    </ion-toolbar>\r\n  </ion-footer> -->\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content.background {\n  color: grey;\n}\n\nion-text.first {\n  text-align: center;\n  position: absolute;\n}\n\ndiv.second {\n  text-align: center;\n  position: absolute;\n}\n\n#images {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  max-width: 100%;\n  width: 606px;\n}\n\n.image {\n  margin-left: 1px;\n  margin-right: 1px;\n}\n\n.main-image, .user-image {\n  width: 200px;\n  height: 200px;\n}\n\n.center {\n  text-align: center;\n}\n\n.user-image {\n  align-items: center;\n}\n\nion-slides {\n  height: 100%;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcQmFja3VwIENcXERlc2t0b3BcXFNFTSA4XFxQUk9KRUNUXFxmeXAyL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdFLFdBQUE7QUNERjs7QURJQTtFQUVFLGtCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUVDLGtCQUFBO0VBQ0Msa0JBQUE7QUNIRjs7QURNQTtFQUNDLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDSEQ7O0FETUE7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0FDSEQ7O0FETUE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQ0hEOztBRE1BO0VBQ0Msa0JBQUE7QUNIRDs7QURPQTtFQUVDLG1CQUFBO0FDTEQ7O0FEUUE7RUFDQyxZQUFBO0FDTEQ7O0FEUUU7RUFDRCxjQUFBO0FDTEQ7O0FEUUU7RUFDRCxrQkFBQTtBQ0xEOztBRFFFO0VBQ0QsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDTEQ7O0FEUUU7RUFDRCxnQkFBQTtBQ0xEOztBRFFFO0VBQ0QsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FDTEQ7O0FEUUU7RUFDRCxxQ0FBQTtBQ0xEIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmRcbntcbiAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gIGNvbG9yOiBncmV5O1xufVxuXG5pb24tdGV4dC5maXJzdFxue1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuZGl2LnNlY29uZCBcbntcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbiNpbWFnZXMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRtYXgtd2lkdGg6IDEwMCU7XG5cdHdpZHRoOiA2MDZweDtcbn1cblxuLmltYWdlIHtcblx0bWFyZ2luLWxlZnQ6IDFweDtcblx0bWFyZ2luLXJpZ2h0OiAxcHg7XG59XG5cbi5tYWluLWltYWdlLCAudXNlci1pbWFnZSB7XG5cdHdpZHRoOiAyMDBweDtcblx0aGVpZ2h0OiAyMDBweDtcbn1cblxuLmNlbnRlciB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XG59XG5cbi51c2VyLWltYWdlXG57XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1zbGlkZXMge1xuXHRoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuc3dpcGVyLXNsaWRlIHtcblx0ZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc3dpcGVyLXNsaWRlIGgyIHtcblx0bWFyZ2luLXRvcDogMi44cmVtO1xuICB9XG5cbiAgLnN3aXBlci1zbGlkZSBpbWcge1xuXHRtYXgtaGVpZ2h0OiA1MCU7XG5cdG1heC13aWR0aDogODAlO1xuXHRtYXJnaW46IDYwcHggMCA0MHB4O1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIGIge1xuXHRmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgcCB7XG5cdHBhZGRpbmc6IDAgNDBweDtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRsaW5lLWhlaWdodDogMS41O1xuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcbiAgfVxuXG4gIHAgYiB7XG5cdGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XG4gIH1cblxuLy8gI2NvbnRhaW5lciB7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIHJpZ2h0OiAwO1xuLy8gICB0b3A6IDUwJTtcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuLy8gfVxuXG4vLyAjY29udGFpbmVyIHN0cm9uZyB7XG4vLyAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4vLyB9XG5cbi8vICNjb250YWluZXIgcCB7XG4vLyAgIGZvbnQtc2l6ZTogMTZweDtcbi8vICAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbi8vICAgY29sb3I6ICM4YzhjOGM7XG5cbi8vICAgbWFyZ2luOiAwO1xuLy8gfVxuXG4vLyAjY29udGFpbmVyIGEge1xuLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyB9XG5cbi8vIGlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbi8vICAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbi8vIH1cblxuLy8gLnRpdGxlLWJsb2Nre1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIG1hcmdpbjogMDtcbi8vICAgcGFkZGluZzogMDtcbiBcbi8vICAgaGVpZ2h0OiAxNjBweDtcbi8vIH1cblxuLy8gLnRpdGxlLWJsb2NrIC5oZWFkaW5ne1xuLy8gICBmb250LXNpemU6IDM1cHg7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIHRvcDogNTAlO1xuLy8gICBsZWZ0OiA1MCU7XG4vLyAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuLy8gICBmb250LWZhbWlseTogXCJBcmlhbCBCbGFja1wiXG4vLyB9XG5cbiIsImlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICBjb2xvcjogZ3JleTtcbn1cblxuaW9uLXRleHQuZmlyc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuZGl2LnNlY29uZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jaW1hZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogNjA2cHg7XG59XG5cbi5pbWFnZSB7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG4gIG1hcmdpbi1yaWdodDogMXB4O1xufVxuXG4ubWFpbi1pbWFnZSwgLnVzZXItaW1hZ2Uge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51c2VyLWltYWdlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3dpcGVyLXNsaWRlIGgyIHtcbiAgbWFyZ2luLXRvcDogMi44cmVtO1xufVxuXG4uc3dpcGVyLXNsaWRlIGltZyB7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIG1hcmdpbjogNjBweCAwIDQwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5iIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcbn1cblxucCBiIHtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwMDAwKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/firebase.service */
    "./src/app/services/firebase.service.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(http, activatedRoute, fbService, afs, user, storage, router) {
        var _this = this;

        _classCallCheck(this, HomePage);

        this.http = http;
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.afs = afs;
        this.user = user;
        this.storage = storage;
        this.router = router;
        this.isAdmin = false;
        this.isCustomer = true;
        this.mainuser = afs.doc("users/".concat(user.getUID()));
        this.sub = this.mainuser.valueChanges().subscribe(function (event) {
          _this.username = event.username; //this.contentPic = event.contentPic

          _this.isAdmin = event.isAdmin;
          _this.isCustomer = event.isCustomer;
        }); // this.mainuser = afs.doc(`contentItem/${user.getUID()}`)
        // this.sub = this.mainuser.valueChanges().subscribe(event => 
        //   {
        //     // this.username = event.username
        //     //this.contentPic = event.contentPic
        //     // this.isAdmin= event.isAdmin
        //     // this.isCustomer= event.isCustomer
        //   })
      }

      _createClass(HomePage, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.contentItem = this.fbService.getContents();
          this.storage.setItem('username', this.username);
          this.storage.setItem('isAdmin', this.isAdmin);
          this.storage.setItem('isCustomer', this.isCustomer);
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map