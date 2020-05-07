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


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-title>Home</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"background\">\n     <ion-list>\n        <ion-card>\n          <ion-item *ngFor=\"let content of (contentItem | async)\">\n            <ion-slides>\n              <ion-slide>\n                <div class=\"slide\">\n                  <img src=\"assets/img/logo.png\"/>\n                  <h2>{{content.title}}</h2>\n                  <p>{{content.contentDetails}}</p>\n                </div>\n              <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-content/'+content.id\">Edit</ion-button>\n              </ion-slide>\n              <!-- <ion-slide>\n                <img src=\"assets/img/logo.png\"/>\n                <h2>What is Ionic?</h2>\n                <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>\n              </ion-slide> -->\n            </ion-slides>\n          </ion-item>  \n        </ion-card>\n\n        <ion-card>\n            <ion-slide>\n                <div class=\"slide\">\n                  <img src=\"background.jpg\"/>\n                  <h2>We provide the best services</h2>\n                  <h2><a href=\"https://www.instagram.com/littlepawsstation/\">Visit our insta!</a></h2>\n                  <p><a [routerLink]=\"'/menuhotel/'\">Cat Boarding</a>,<a [routerLink]=\"'/menuspa/'\"> Cat Spa & Grooming</a>,<a [routerLink]=\"'/menuvaccine/'\">Cat Vaccine & Neuter</a>,<a [routerLink]=\"'/menugrab/'\"> Cat Grab (soon)</a></p>\n                </div>\n                <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-content/'\">Edit</ion-button>\n              </ion-slide>\n         </ion-card>\n        <ion-card>\n            <ion-slide>\n                <div class=\"slide\">\n                  <img size=\"med\" src=\"assets/img/vaccine.jpg\"/>\n                  <!-- <h2>We provide the best services</h2> -->\n                  <!-- <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p> -->\n                  <p>Vaccine and Neuter Service by our Certified Veterinarian every weekend.</p>\n                </div>\n                <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-content/'\">Edit</ion-button>\n              </ion-slide>\n         </ion-card>\n         <ion-card>\n           <ion-slides>\n              <ion-slide>\n                  <div class=\"slide\">\n                    <!-- <img src=\"vaccine.jpg\"/> -->\n                    <h2>Operating Hours:</h2>\n                      <p>Everyday</p>\n                      <p>10 AM to PM</p>\n                    <h2>Address:</h2>\n                      <p>Little Paws Station</p>\n                      <p>57 Jalan Pulai 21,</p>\n                      <p>Taman Pulai Utama,</p>\n                      <p>81300 Skudai,</p>\n                      <p>Johor Bharu</p>\n  \n                    <!-- <ion-col>\n                      <ion-row>\n                        <h2>Operating Hours:</h2>\n                        <p>Everyday</p>\n                        <p>10 AM to PM</p>\n                      </ion-row>\n                      <ion-row>\n                          <h2>Address:</h2>\n                          <p>Little Paws Station</p>\n                          <p>57 Jalan Pulai 21,</p>\n                          <p>Taman Pulai Utama,</p>\n                          <p>81300 Skudai,</p>\n                          <p>Johor Bharu</p>\n                        </ion-row>\n                    </ion-col>\n                    <ion-col>\n                        <img src=\"assets/img/map.png\"/>\n                    </ion-col> -->\n                  </div>\n                  <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-content/'\">Edit</ion-button>\n                </ion-slide>\n                <ion-slide>\n                  \n                        <div class=\"slide\">\n                            <img src=\"assets/img/map.png\"/>\n                            <h2>Location</h2>\n                        </div>    \n                    \n                </ion-slide>\n           </ion-slides>\n          </ion-card> \n         \n\n     </ion-list>\n\n     <ion-fab *ngIf=\"isAdmin\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button [routerLink]=\"'/add-content'\">\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n</ion-content>\n\n  <!-- <ion-footer>\n    <ion-toolbar color=\"dark\">\n      <ion-title>Footer</ion-title>\n    </ion-toolbar>\n  </ion-footer> -->\n\n\n\n";
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


    __webpack_exports__["default"] = "ion-content.background {\n  color: grey; }\n\nion-text.first {\n  text-align: center;\n  position: absolute; }\n\ndiv.second {\n  text-align: center;\n  position: absolute; }\n\n#images {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  max-width: 100%;\n  width: 606px; }\n\n.image {\n  margin-left: 1px;\n  margin-right: 1px; }\n\n.main-image, .user-image {\n  width: 200px;\n  height: 200px; }\n\n.center {\n  text-align: center; }\n\n.user-image {\n  -webkit-box-align: center;\n          align-items: center; }\n\nion-slides {\n  height: 100%; }\n\n.swiper-slide {\n  display: block; }\n\n.swiper-slide h2 {\n  margin-top: 2.8rem; }\n\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none; }\n\nb {\n  font-weight: 500; }\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b); }\n\np b {\n  color: var(--ion-text-color, #000000); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGlyc3lhXFxEZXNrdG9wXFxGWVAyLW1hc3Rlci9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSxXQUFXLEVBQUE7O0FBR2I7RUFFRSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBRUMsa0JBQWtCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNDLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFHYjtFQUNDLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbEI7RUFDQyxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUdkO0VBQ0Msa0JBQWtCLEVBQUE7O0FBSW5CO0VBRUMseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLFlBQVksRUFBQTs7QUFHWDtFQUNELGNBQWMsRUFBQTs7QUFHYjtFQUNELGtCQUFrQixFQUFBOztBQUdqQjtFQUNELGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG9CQUFvQixFQUFBOztBQUduQjtFQUNELGdCQUFnQixFQUFBOztBQUdmO0VBQ0QsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUNBQXlDLEVBQUE7O0FBR3hDO0VBQ0QscUNBQXFDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZFxue1xuICAvLyAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgY29sb3I6IGdyZXk7XG59XG5cbmlvbi10ZXh0LmZpcnN0XG57XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5kaXYuc2Vjb25kIFxue1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuI2ltYWdlcyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdG1heC13aWR0aDogMTAwJTtcblx0d2lkdGg6IDYwNnB4O1xufVxuXG4uaW1hZ2Uge1xuXHRtYXJnaW4tbGVmdDogMXB4O1xuXHRtYXJnaW4tcmlnaHQ6IDFweDtcbn1cblxuLm1haW4taW1hZ2UsIC51c2VyLWltYWdlIHtcblx0d2lkdGg6IDIwMHB4O1xuXHRoZWlnaHQ6IDIwMHB4O1xufVxuXG4uY2VudGVyIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcbn1cblxuLnVzZXItaW1hZ2Vcbntcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW9uLXNsaWRlcyB7XG5cdGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5zd2lwZXItc2xpZGUge1xuXHRkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5zd2lwZXItc2xpZGUgaDIge1xuXHRtYXJnaW4tdG9wOiAyLjhyZW07XG4gIH1cblxuICAuc3dpcGVyLXNsaWRlIGltZyB7XG5cdG1heC1oZWlnaHQ6IDUwJTtcblx0bWF4LXdpZHRoOiA4MCU7XG5cdG1hcmdpbjogNjBweCAwIDQwcHg7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgYiB7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICBwIHtcblx0cGFkZGluZzogMCA0MHB4O1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGxpbmUtaGVpZ2h0OiAxLjU7XG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xuICB9XG5cbiAgcCBiIHtcblx0Y29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwMDAwKTtcbiAgfVxuXG4vLyAjY29udGFpbmVyIHtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgbGVmdDogMDtcbi8vICAgcmlnaHQ6IDA7XG4vLyAgIHRvcDogNTAlO1xuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4vLyB9XG5cbi8vICNjb250YWluZXIgc3Ryb25nIHtcbi8vICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICBsaW5lLWhlaWdodDogMjZweDtcbi8vIH1cblxuLy8gI2NvbnRhaW5lciBwIHtcbi8vICAgZm9udC1zaXplOiAxNnB4O1xuLy8gICBsaW5lLWhlaWdodDogMjJweDtcblxuLy8gICBjb2xvcjogIzhjOGM4YztcblxuLy8gICBtYXJnaW46IDA7XG4vLyB9XG5cbi8vICNjb250YWluZXIgYSB7XG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vIH1cblxuLy8gaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuLy8gICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xuLy8gfVxuXG4vLyAudGl0bGUtYmxvY2t7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgbWFyZ2luOiAwO1xuLy8gICBwYWRkaW5nOiAwO1xuIFxuLy8gICBoZWlnaHQ6IDE2MHB4O1xuLy8gfVxuXG4vLyAudGl0bGUtYmxvY2sgLmhlYWRpbmd7XG4vLyAgIGZvbnQtc2l6ZTogMzVweDtcbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgdG9wOiA1MCU7XG4vLyAgIGxlZnQ6IDUwJTtcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4vLyAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsIEJsYWNrXCJcbi8vIH1cblxuIl19 */";
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

    var HomePage =
    /*#__PURE__*/
    function () {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map