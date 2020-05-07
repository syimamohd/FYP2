function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"dark\">\n      <ion-title>Contact</ion-title>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button autoHide=\"false\"></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\" class=\"background\">\n       <ion-list>\n          <ion-card>\n            <ion-item *ngFor=\"let content of (contentItem | async)\">\n              <ion-slides>\n                <ion-slide>\n                  <div class=\"slide\">\n                    <!-- <img src=\"assets/img/logo.png\"/> -->\n                    <!-- <ion-icon name=\"call\" slot=\"start\"></ion-icon> -->\n                    <h2>{{content.contacttitle}}</h2>\n                    <p>{{content.contactDetails}}</p>\n                    <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-contact/'+content.id\">Edit</ion-button>\n                  </div>\n                \n                </ion-slide>\n              </ion-slides>\n            </ion-item>  \n          </ion-card>\n   \n       </ion-list>\n  \n       <ion-fab *ngIf=\"isAdmin\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n          <ion-fab-button [routerLink]=\"'/add-contact'\">\n            <ion-icon name=\"add\"></ion-icon>\n          </ion-fab-button>\n        </ion-fab>\n  </ion-content>\n  \n    <!-- <ion-footer>\n      <ion-toolbar color=\"dark\">\n        <ion-title>Footer</ion-title>\n      </ion-toolbar>\n    </ion-footer> -->\n  \n  \n  \n  ";
    /***/
  },

  /***/
  "./src/app/contact/contact-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/contact/contact-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ContactPageRoutingModule */

  /***/
  function srcAppContactContactRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPageRoutingModule", function () {
      return ContactPageRoutingModule;
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


    var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contact.page */
    "./src/app/contact/contact.page.ts");

    var routes = [{
      path: '',
      component: _contact_page__WEBPACK_IMPORTED_MODULE_3__["ContactPage"]
    }];

    var ContactPageRoutingModule = function ContactPageRoutingModule() {
      _classCallCheck(this, ContactPageRoutingModule);
    };

    ContactPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/contact/contact.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/contact/contact.module.ts ***!
    \*******************************************/

  /*! exports provided: ContactPageModule */

  /***/
  function srcAppContactContactModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPageModule", function () {
      return ContactPageModule;
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


    var _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact-routing.module */
    "./src/app/contact/contact-routing.module.ts");
    /* harmony import */


    var _contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact.page */
    "./src/app/contact/contact.page.ts");

    var ContactPageModule = function ContactPageModule() {
      _classCallCheck(this, ContactPageModule);
    };

    ContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactPageRoutingModule"]],
      declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]]
    })], ContactPageModule);
    /***/
  },

  /***/
  "./src/app/contact/contact.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/contact/contact.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/contact/contact.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/contact/contact.page.ts ***!
    \*****************************************/

  /*! exports provided: ContactPage */

  /***/
  function srcAppContactContactPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPage", function () {
      return ContactPage;
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

    var ContactPage =
    /*#__PURE__*/
    function () {
      function ContactPage(http, activatedRoute, fbService, afs, user, storage, router) {
        var _this = this;

        _classCallCheck(this, ContactPage);

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

      _createClass(ContactPage, [{
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

      return ContactPage;
    }();

    ContactPage.ctorParameters = function () {
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

    ContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.page.scss */
      "./src/app/contact/contact.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ContactPage);
    /***/
  }
}]);
//# sourceMappingURL=contact-contact-module-es5.js.map