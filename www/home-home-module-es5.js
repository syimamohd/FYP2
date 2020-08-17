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


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n    <ion-toolbar color=\"dark\">\r\n      <ion-title>Home</ion-title>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n<ion-content>\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col \r\n      size=\"12\" \r\n      size-xs=\"12\" \r\n      size-sm=\"6\" \r\n      size-md=\"4\" \r\n      size-lg=\"3\" \r\n      *ngFor=\"let content of (contentItem | async)\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>{{content.title}}</ion-card-title>\r\n             <ion-card-subtitle>{{content.contentDetails}}</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n             <ion-img *ngIf=\"!!content.image\" class=\"profile-pic\"  [src]=\"content.image\"></ion-img>\r\n          </ion-card-content>\r\n          <ion-item>\r\n              <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-content/'+content.id\">Edit</ion-button>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-fab *ngIf=\"isAdmin\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n       <ion-fab-button [routerLink]=\"'/add-content'\">\r\n         <ion-icon name=\"add\"></ion-icon>\r\n       </ion-fab-button>\r\n     </ion-fab>\r\n</ion-content>";
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


    __webpack_exports__["default"] = "ion-content.background {\n  color: grey;\n}\n\nion-card {\n  color: #DCDCDC;\n}\n\nion-item {\n  text-align: center;\n}\n\nion-text.first {\n  text-align: center;\n  position: absolute;\n}\n\ndiv.second {\n  text-align: center;\n  position: absolute;\n}\n\n#images {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.image {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.main-image, .user-image {\n  width: 200px;\n  height: 200px;\n}\n\n.center {\n  text-align: center;\n}\n\n.user-image {\n  align-items: center;\n}\n\nion-slides {\n  height: 100%;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n\n.profile-pic {\n  width: 150px;\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGlyc3lhXFxEZXNrdG9wXFxmeXAyLW1hc3Rlci9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSxXQUFBO0FDREY7O0FESUE7RUFFQyxjQUFBO0FDRkQ7O0FES0E7RUFFQyxrQkFBQTtBQ0hEOztBRE1BO0VBRUUsa0JBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBRUMsa0JBQUE7RUFDQyxrQkFBQTtBQ0xGOztBRFFBO0VBTUMsY0FBQTtFQUNHLGlCQUFBO0VBQ0Esa0JBQUE7QUNWSjs7QURhQTtFQUdDLGNBQUE7RUFDRyxpQkFBQTtFQUNBLGtCQUFBO0FDWko7O0FEZUE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQ1pEOztBRGVBO0VBQ0Msa0JBQUE7QUNaRDs7QURnQkE7RUFFQyxtQkFBQTtBQ2REOztBRGlCQTtFQUNDLFlBQUE7QUNkRDs7QURpQkU7RUFDRCxjQUFBO0FDZEQ7O0FEaUJFO0VBQ0Qsa0JBQUE7QUNkRDs7QURpQkU7RUFDRCxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNkRDs7QURpQkU7RUFDRCxnQkFBQTtBQ2REOztBRGlCRTtFQUNELGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQ2REOztBRGlCRTtFQUNELHFDQUFBO0FDZEQ7O0FEaUJBO0VBR0MsWUFBQTtFQUNBLGFBQUE7QUNoQkQiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZFxyXG57XHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbmlvbi1jYXJkXHJcbntcclxuXHRjb2xvcjogI0RDRENEQztcclxufVxyXG5cclxuaW9uLWl0ZW1cclxue1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLXRleHQuZmlyc3Rcclxue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbmRpdi5zZWNvbmQgXHJcbntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4jaW1hZ2VzIHtcclxuXHQvLyBkaXNwbGF5OiBmbGV4O1xyXG5cdC8vIGZsZXgtd3JhcDogd3JhcDtcclxuXHQvLyBtYXJnaW46IDAgYXV0bztcclxuXHQvLyBtYXgtd2lkdGg6IDEwMCU7XHJcblx0Ly8gd2lkdGg6IDYwNnB4O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcblx0Ly8gbWFyZ2luLWxlZnQ6IDFweDtcclxuXHQvLyBtYXJnaW4tcmlnaHQ6IDFweDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubWFpbi1pbWFnZSwgLnVzZXItaW1hZ2Uge1xyXG5cdHdpZHRoOiAyMDBweDtcclxuXHRoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHJcbn1cclxuXHJcbi51c2VyLWltYWdlXHJcbntcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuc3dpcGVyLXNsaWRlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5zd2lwZXItc2xpZGUgaDIge1xyXG5cdG1hcmdpbi10b3A6IDIuOHJlbTtcclxuICB9XHJcblxyXG4gIC5zd2lwZXItc2xpZGUgaW1nIHtcclxuXHRtYXgtaGVpZ2h0OiA1MCU7XHJcblx0bWF4LXdpZHRoOiA4MCU7XHJcblx0bWFyZ2luOiA2MHB4IDAgNDBweDtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcblxyXG4gIGIge1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuXHRwYWRkaW5nOiAwIDQwcHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjU7XHJcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XHJcbiAgfVxyXG5cclxuICBwIGIge1xyXG5cdGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XHJcbiAgfVxyXG5cclxuLnByb2ZpbGUtcGljXHJcbntcclxuXHRcclxuXHR3aWR0aDogMTUwcHg7XHJcblx0aGVpZ2h0OiAxNTBweDtcclxuXHQgXHJcbn1cclxuLy8gI2NvbnRhaW5lciB7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgbGVmdDogMDtcclxuLy8gICByaWdodDogMDtcclxuLy8gICB0b3A6IDUwJTtcclxuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbi8vIH1cclxuXHJcbi8vICNjb250YWluZXIgc3Ryb25nIHtcclxuLy8gICBmb250LXNpemU6IDIwcHg7XHJcbi8vICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbi8vIH1cclxuXHJcbi8vICNjb250YWluZXIgcCB7XHJcbi8vICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuLy8gICBjb2xvcjogIzhjOGM4YztcclxuXHJcbi8vICAgbWFyZ2luOiAwO1xyXG4vLyB9XHJcblxyXG4vLyAjY29udGFpbmVyIGEge1xyXG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xyXG4vLyAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC50aXRsZS1ibG9ja3tcclxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgbWFyZ2luOiAwO1xyXG4vLyAgIHBhZGRpbmc6IDA7XHJcbiBcclxuLy8gICBoZWlnaHQ6IDE2MHB4O1xyXG4vLyB9XHJcblxyXG4vLyAudGl0bGUtYmxvY2sgLmhlYWRpbmd7XHJcbi8vICAgZm9udC1zaXplOiAzNXB4O1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHRvcDogNTAlO1xyXG4vLyAgIGxlZnQ6IDUwJTtcclxuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuLy8gICBmb250LWZhbWlseTogXCJBcmlhbCBCbGFja1wiXHJcbi8vIH1cclxuXHJcbiIsImlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICBjb2xvcjogZ3JleTtcbn1cblxuaW9uLWNhcmQge1xuICBjb2xvcjogI0RDRENEQztcbn1cblxuaW9uLWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10ZXh0LmZpcnN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmRpdi5zZWNvbmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuI2ltYWdlcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uaW1hZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLm1haW4taW1hZ2UsIC51c2VyLWltYWdlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udXNlci1pbWFnZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN3aXBlci1zbGlkZSBoMiB7XG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1heC13aWR0aDogODAlO1xuICBtYXJnaW46IDYwcHggMCA0MHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnAge1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XG59XG5cbnAgYiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XG59XG5cbi5wcm9maWxlLXBpYyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn0iXX0= */";
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
        });
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