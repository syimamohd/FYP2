function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-spa-view-spa-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view-spa/view-spa.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-spa/view-spa.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewSpaViewSpaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>{{spa.spaName}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-card color=\"secondary\">\n      <ion-card-header>\n        <ion-card-subtitle>{{spa.createdAt | date: 'short'}}</ion-card-subtitle>\n        <ion-card-title>{{spa.spaName}}</ion-card-title>\n      </ion-card-header>\n  \n      <ion-card-content>\n        <p align=\"justify\">{{spa.spaDetails}}</p>\n        <br>\n        <p align=\"justify\">{{spa.spaPrice}}</p>\n        <ion-button slot=\"start\" color=\"warning\" [routerLink]=\"'/update-spa/' + spa.id\">Edit</ion-button>\n        <ion-button slot=\"end\" color=\"danger\" (click)=\"deleteSpa()\">Delete</ion-button>\n      </ion-card-content>\n  \n    </ion-card>\n  </ion-content>\n  ";
    /***/
  },

  /***/
  "./src/app/view-spa/view-spa-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/view-spa/view-spa-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ViewSpaPageRoutingModule */

  /***/
  function srcAppViewSpaViewSpaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewSpaPageRoutingModule", function () {
      return ViewSpaPageRoutingModule;
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


    var _view_spa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./view-spa.page */
    "./src/app/view-spa/view-spa.page.ts");

    var routes = [{
      path: '',
      component: _view_spa_page__WEBPACK_IMPORTED_MODULE_3__["ViewSpaPage"]
    }];

    var ViewSpaPageRoutingModule = function ViewSpaPageRoutingModule() {
      _classCallCheck(this, ViewSpaPageRoutingModule);
    };

    ViewSpaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ViewSpaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/view-spa/view-spa.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/view-spa/view-spa.module.ts ***!
    \*********************************************/

  /*! exports provided: ViewSpaPageModule */

  /***/
  function srcAppViewSpaViewSpaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewSpaPageModule", function () {
      return ViewSpaPageModule;
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


    var _view_spa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./view-spa-routing.module */
    "./src/app/view-spa/view-spa-routing.module.ts");
    /* harmony import */


    var _view_spa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./view-spa.page */
    "./src/app/view-spa/view-spa.page.ts");

    var ViewSpaPageModule = function ViewSpaPageModule() {
      _classCallCheck(this, ViewSpaPageModule);
    };

    ViewSpaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_spa_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewSpaPageRoutingModule"]],
      declarations: [_view_spa_page__WEBPACK_IMPORTED_MODULE_6__["ViewSpaPage"]]
    })], ViewSpaPageModule);
    /***/
  },

  /***/
  "./src/app/view-spa/view-spa.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/view-spa/view-spa.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewSpaViewSpaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctc3BhL3ZpZXctc3BhLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/view-spa/view-spa.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/view-spa/view-spa.page.ts ***!
    \*******************************************/

  /*! exports provided: ViewSpaPage */

  /***/
  function srcAppViewSpaViewSpaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewSpaPage", function () {
      return ViewSpaPage;
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

    var ViewSpaPage = /*#__PURE__*/function () {
      function ViewSpaPage(activatedRoute, fbService, router) {
        _classCallCheck(this, ViewSpaPage);

        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router; //note properties

        this.spa = {
          spaName: '',
          spaDetails: '',
          spaPrice: '' // createdAt: ''

        };
      }

      _createClass(ViewSpaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          var id = this.activatedRoute.snapshot.paramMap.get('id');

          if (id) {
            this.fbService.getSpa(id).subscribe(function (spaData) {
              _this.spa = spaData;
            });
          }
        }
      }, {
        key: "deleteSpa",
        value: function deleteSpa() {
          var _this2 = this;

          this.fbService.deleteSpa(this.spa.id).then(function () {
            _this2.router.navigateByUrl('/');
          }, function (err) {});
        }
      }]);

      return ViewSpaPage;
    }();

    ViewSpaPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ViewSpaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-spa',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-spa.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view-spa/view-spa.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-spa.page.scss */
      "./src/app/view-spa/view-spa.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ViewSpaPage);
    /***/
  }
}]);
//# sourceMappingURL=view-spa-view-spa-module-es5.js.map