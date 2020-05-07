function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-vaccine-update-vaccine-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/update-vaccine/update-vaccine.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-vaccine/update-vaccine.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUpdateVaccineUpdateVaccinePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>Update Vaccine</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n        <ion-item>\n            <ion-input placeholder=\"Enter Vaccine Name\" [(ngModel)]=\"vaccine.vaccineName\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-textarea rows=\"6\" [(ngModel)]=\"vaccine.vaccineDetails\" placeholder=\"Enter vaccine details here...\"></ion-textarea>\n          </ion-item>\n          <ion-item>\n            <ion-input placeholder=\"Enter Vaccine Price\" [(ngModel)]=\"vaccine.vaccinePrice\"></ion-input>\n          </ion-item>\n    </ion-list>\n    <ion-button color=\"primary\" expand=\"full\" (click)=\"updateVaccine()\">Update</ion-button>\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/update-vaccine/update-vaccine-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/update-vaccine/update-vaccine-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: UpdateVaccinePageRoutingModule */

  /***/
  function srcAppUpdateVaccineUpdateVaccineRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateVaccinePageRoutingModule", function () {
      return UpdateVaccinePageRoutingModule;
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


    var _update_vaccine_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./update-vaccine.page */
    "./src/app/update-vaccine/update-vaccine.page.ts");

    var routes = [{
      path: '',
      component: _update_vaccine_page__WEBPACK_IMPORTED_MODULE_3__["UpdateVaccinePage"]
    }];

    var UpdateVaccinePageRoutingModule = function UpdateVaccinePageRoutingModule() {
      _classCallCheck(this, UpdateVaccinePageRoutingModule);
    };

    UpdateVaccinePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UpdateVaccinePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/update-vaccine/update-vaccine.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/update-vaccine/update-vaccine.module.ts ***!
    \*********************************************************/

  /*! exports provided: UpdateVaccinePageModule */

  /***/
  function srcAppUpdateVaccineUpdateVaccineModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateVaccinePageModule", function () {
      return UpdateVaccinePageModule;
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


    var _update_vaccine_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./update-vaccine-routing.module */
    "./src/app/update-vaccine/update-vaccine-routing.module.ts");
    /* harmony import */


    var _update_vaccine_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./update-vaccine.page */
    "./src/app/update-vaccine/update-vaccine.page.ts");

    var UpdateVaccinePageModule = function UpdateVaccinePageModule() {
      _classCallCheck(this, UpdateVaccinePageModule);
    };

    UpdateVaccinePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _update_vaccine_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateVaccinePageRoutingModule"]],
      declarations: [_update_vaccine_page__WEBPACK_IMPORTED_MODULE_6__["UpdateVaccinePage"]]
    })], UpdateVaccinePageModule);
    /***/
  },

  /***/
  "./src/app/update-vaccine/update-vaccine.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/update-vaccine/update-vaccine.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUpdateVaccineUpdateVaccinePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS12YWNjaW5lL3VwZGF0ZS12YWNjaW5lLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/update-vaccine/update-vaccine.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/update-vaccine/update-vaccine.page.ts ***!
    \*******************************************************/

  /*! exports provided: UpdateVaccinePage */

  /***/
  function srcAppUpdateVaccineUpdateVaccinePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateVaccinePage", function () {
      return UpdateVaccinePage;
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

    var UpdateVaccinePage =
    /*#__PURE__*/
    function () {
      function UpdateVaccinePage(activatedRoute, fbService, router) {
        _classCallCheck(this, UpdateVaccinePage);

        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router;
        this.vaccine = {
          vaccineName: '',
          vaccineDetails: '',
          vaccinePrice: '' // createdAt: new Date().getTime()

        };
      }

      _createClass(UpdateVaccinePage, [{
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
        key: "updateVaccine",
        value: function updateVaccine() {
          var _this2 = this;

          this.fbService.updateVaccine(this.vaccine).then(function () {
            _this2.router.navigate(['/menuvaccine']);
          }, function (err) {});
        }
      }]);

      return UpdateVaccinePage;
    }();

    UpdateVaccinePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    UpdateVaccinePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-vaccine',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-vaccine.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/update-vaccine/update-vaccine.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-vaccine.page.scss */
      "./src/app/update-vaccine/update-vaccine.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], UpdateVaccinePage);
    /***/
  }
}]);
//# sourceMappingURL=update-vaccine-update-vaccine-module-es5.js.map