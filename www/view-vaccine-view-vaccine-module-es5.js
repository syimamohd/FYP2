function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-vaccine-view-vaccine-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view-vaccine/view-vaccine.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-vaccine/view-vaccine.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewVaccineViewVaccinePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\r\n          </ion-buttons>\r\n      <ion-title>{{vaccine.vaccineName}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-card color=\"secondary\">\r\n      <ion-card-header>\r\n        <ion-card-subtitle>{{vaccine.createdAt | date: 'short'}}</ion-card-subtitle>\r\n        <ion-card-title>{{vaccine.vaccineName}}</ion-card-title>\r\n      </ion-card-header>\r\n  \r\n      <ion-card-content>\r\n        <!-- <ion-img *ngIf=\"!!vaccine.image\" class=\"profile-pic\"  [src]=\"vaccine.image\"></ion-img> -->\r\n        <p align=\"justify\">{{vaccine.vaccineDetails}}</p>\r\n        <br>\r\n        <p align=\"justify\">{{vaccine.vaccinePrice}}</p>\r\n        <ion-button slot=\"start\" color=\"warning\" [routerLink]=\"'/update-vaccine/' + vaccine.id\">Edit</ion-button>\r\n        <ion-button slot=\"end\" color=\"danger\" (click)=\"deleteVaccine()\">Delete</ion-button>\r\n      </ion-card-content>\r\n  \r\n    </ion-card>\r\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/view-vaccine/view-vaccine-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/view-vaccine/view-vaccine-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ViewVaccinePageRoutingModule */

  /***/
  function srcAppViewVaccineViewVaccineRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewVaccinePageRoutingModule", function () {
      return ViewVaccinePageRoutingModule;
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


    var _view_vaccine_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./view-vaccine.page */
    "./src/app/view-vaccine/view-vaccine.page.ts");

    var routes = [{
      path: '',
      component: _view_vaccine_page__WEBPACK_IMPORTED_MODULE_3__["ViewVaccinePage"]
    }];

    var ViewVaccinePageRoutingModule = function ViewVaccinePageRoutingModule() {
      _classCallCheck(this, ViewVaccinePageRoutingModule);
    };

    ViewVaccinePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ViewVaccinePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/view-vaccine/view-vaccine.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/view-vaccine/view-vaccine.module.ts ***!
    \*****************************************************/

  /*! exports provided: ViewVaccinePageModule */

  /***/
  function srcAppViewVaccineViewVaccineModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewVaccinePageModule", function () {
      return ViewVaccinePageModule;
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


    var _view_vaccine_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./view-vaccine-routing.module */
    "./src/app/view-vaccine/view-vaccine-routing.module.ts");
    /* harmony import */


    var _view_vaccine_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./view-vaccine.page */
    "./src/app/view-vaccine/view-vaccine.page.ts");

    var ViewVaccinePageModule = function ViewVaccinePageModule() {
      _classCallCheck(this, ViewVaccinePageModule);
    };

    ViewVaccinePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_vaccine_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewVaccinePageRoutingModule"]],
      declarations: [_view_vaccine_page__WEBPACK_IMPORTED_MODULE_6__["ViewVaccinePage"]]
    })], ViewVaccinePageModule);
    /***/
  },

  /***/
  "./src/app/view-vaccine/view-vaccine.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/view-vaccine/view-vaccine.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewVaccineViewVaccinePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctdmFjY2luZS92aWV3LXZhY2NpbmUucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/view-vaccine/view-vaccine.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/view-vaccine/view-vaccine.page.ts ***!
    \***************************************************/

  /*! exports provided: ViewVaccinePage */

  /***/
  function srcAppViewVaccineViewVaccinePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewVaccinePage", function () {
      return ViewVaccinePage;
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

    var ViewVaccinePage = /*#__PURE__*/function () {
      function ViewVaccinePage(activatedRoute, fbService, router) {
        _classCallCheck(this, ViewVaccinePage);

        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router; //note properties

        this.vaccine = {
          vaccineName: '',
          vaccineDetails: '',
          vaccinePrice: '',
          image: '' // createdAt: ''

        };
      }

      _createClass(ViewVaccinePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          var id = this.activatedRoute.snapshot.paramMap.get('id');

          if (id) {
            this.fbService.getVaccine(id).subscribe(function (vaccineData) {
              _this.vaccine = vaccineData;
            });
          }
        }
      }, {
        key: "deleteVaccine",
        value: function deleteVaccine() {
          var _this2 = this;

          this.fbService.deleteVaccine(this.vaccine.id).then(function () {
            _this2.router.navigateByUrl('/menuvaccine');
          }, function (err) {});
        }
      }]);

      return ViewVaccinePage;
    }();

    ViewVaccinePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ViewVaccinePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-vaccine',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-vaccine.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view-vaccine/view-vaccine.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-vaccine.page.scss */
      "./src/app/view-vaccine/view-vaccine.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ViewVaccinePage);
    /***/
  }
}]);
//# sourceMappingURL=view-vaccine-view-vaccine-module-es5.js.map