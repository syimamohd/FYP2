function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-content-view-content-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view-content/view-content.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-content/view-content.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewContentViewContentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\r\n          </ion-buttons>\r\n      <!-- <ion-title>{{content.title}}</ion-title> -->\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-card color=\"secondary\">\r\n      <ion-card-header>\r\n        <!-- <ion-card-subtitle>{{content.createdAt | date: 'short'}}</ion-card-subtitle> -->\r\n        <!-- <ion-card-title>{{hotel.hotelName}}</ion-card-title> -->\r\n      </ion-card-header>\r\n  \r\n      <ion-card-content>\r\n          <!-- <ion-img *ngIf=\"!!content.image\" class=\"profile-pic\"  [src]=\"content.image\"></ion-img> -->\r\n        <p align=\"justify\">{{content.title}}</p>\r\n        <br>\r\n        <p align=\"justify\">{{content.contentDetails}}</p>\r\n        <ion-button slot=\"start\" color=\"warning\" [routerLink]=\"'/update-content/' + content.id\">Edit</ion-button>\r\n        <ion-button slot=\"end\" color=\"danger\" (click)=\"deleteContent()\">Delete</ion-button>\r\n      </ion-card-content>\r\n  \r\n    </ion-card>\r\n  </ion-content>\r\n  ";
    /***/
  },

  /***/
  "./src/app/view-content/view-content-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/view-content/view-content-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ViewContentPageRoutingModule */

  /***/
  function srcAppViewContentViewContentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewContentPageRoutingModule", function () {
      return ViewContentPageRoutingModule;
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


    var _view_content_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./view-content.page */
    "./src/app/view-content/view-content.page.ts");

    var routes = [{
      path: '',
      component: _view_content_page__WEBPACK_IMPORTED_MODULE_3__["ViewContentPage"]
    }];

    var ViewContentPageRoutingModule = function ViewContentPageRoutingModule() {
      _classCallCheck(this, ViewContentPageRoutingModule);
    };

    ViewContentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ViewContentPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/view-content/view-content.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/view-content/view-content.module.ts ***!
    \*****************************************************/

  /*! exports provided: ViewContentPageModule */

  /***/
  function srcAppViewContentViewContentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewContentPageModule", function () {
      return ViewContentPageModule;
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


    var _view_content_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./view-content-routing.module */
    "./src/app/view-content/view-content-routing.module.ts");
    /* harmony import */


    var _view_content_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./view-content.page */
    "./src/app/view-content/view-content.page.ts");

    var ViewContentPageModule = function ViewContentPageModule() {
      _classCallCheck(this, ViewContentPageModule);
    };

    ViewContentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_content_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewContentPageRoutingModule"]],
      declarations: [_view_content_page__WEBPACK_IMPORTED_MODULE_6__["ViewContentPage"]]
    })], ViewContentPageModule);
    /***/
  },

  /***/
  "./src/app/view-content/view-content.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/view-content/view-content.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewContentViewContentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctY29udGVudC92aWV3LWNvbnRlbnQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/view-content/view-content.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/view-content/view-content.page.ts ***!
    \***************************************************/

  /*! exports provided: ViewContentPage */

  /***/
  function srcAppViewContentViewContentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewContentPage", function () {
      return ViewContentPage;
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

    var ViewContentPage = /*#__PURE__*/function () {
      function ViewContentPage(activatedRoute, fbService, router) {
        _classCallCheck(this, ViewContentPage);

        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router; //note properties

        this.content = {
          contentDetails: '',
          title: '',
          contactDetails: '',
          contacttitle: '',
          image: '' // createdAt: ''

        };
      }

      _createClass(ViewContentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          var id = this.activatedRoute.snapshot.paramMap.get('id');

          if (id) {
            this.fbService.getContent(id).subscribe(function (contentData) {
              _this.content = contentData;
            });
          }
        }
      }, {
        key: "deleteContent",
        value: function deleteContent() {
          var _this2 = this;

          this.fbService.deleteContent(this.content.id).then(function () {
            _this2.router.navigateByUrl('/home');
          }, function (err) {});
        }
      }]);

      return ViewContentPage;
    }();

    ViewContentPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ViewContentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-content',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-content.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view-content/view-content.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-content.page.scss */
      "./src/app/view-content/view-content.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ViewContentPage);
    /***/
  }
}]);
//# sourceMappingURL=view-content-view-content-module-es5.js.map