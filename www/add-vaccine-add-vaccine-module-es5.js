function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-vaccine-add-vaccine-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-vaccine/add-vaccine.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-vaccine/add-vaccine.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddVaccineAddVaccinePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>New Vaccine</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-input placeholder=\"Enter Vaccine Name\" [(ngModel)]=\"vaccine.vaccineName\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-textarea rows=\"6\" [(ngModel)]=\"vaccine.vaccineDetails\" placeholder=\"Enter vaccine details here...\"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder=\"Enter Vaccine Price\" [(ngModel)]=\"vaccine.vaccinePrice\"></ion-input>\n    </ion-item>\n  </ion-list>\n    <ion-button color=\"primary\" expand=\"full\" (click)=\"addVaccine()\">Create</ion-button>\n  </ion-content>\n";
    /***/
  },

  /***/
  "./src/app/add-vaccine/add-vaccine-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/add-vaccine/add-vaccine-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: AddVaccinePageRoutingModule */

  /***/
  function srcAppAddVaccineAddVaccineRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddVaccinePageRoutingModule", function () {
      return AddVaccinePageRoutingModule;
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


    var _add_vaccine_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-vaccine.page */
    "./src/app/add-vaccine/add-vaccine.page.ts");

    var routes = [{
      path: '',
      component: _add_vaccine_page__WEBPACK_IMPORTED_MODULE_3__["AddVaccinePage"]
    }];

    var AddVaccinePageRoutingModule = function AddVaccinePageRoutingModule() {
      _classCallCheck(this, AddVaccinePageRoutingModule);
    };

    AddVaccinePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddVaccinePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-vaccine/add-vaccine.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/add-vaccine/add-vaccine.module.ts ***!
    \***************************************************/

  /*! exports provided: AddVaccinePageModule */

  /***/
  function srcAppAddVaccineAddVaccineModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddVaccinePageModule", function () {
      return AddVaccinePageModule;
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


    var _add_vaccine_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-vaccine-routing.module */
    "./src/app/add-vaccine/add-vaccine-routing.module.ts");
    /* harmony import */


    var _add_vaccine_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-vaccine.page */
    "./src/app/add-vaccine/add-vaccine.page.ts");

    var AddVaccinePageModule = function AddVaccinePageModule() {
      _classCallCheck(this, AddVaccinePageModule);
    };

    AddVaccinePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_vaccine_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddVaccinePageRoutingModule"]],
      declarations: [_add_vaccine_page__WEBPACK_IMPORTED_MODULE_6__["AddVaccinePage"]]
    })], AddVaccinePageModule);
    /***/
  },

  /***/
  "./src/app/add-vaccine/add-vaccine.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/add-vaccine/add-vaccine.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddVaccineAddVaccinePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC12YWNjaW5lL2FkZC12YWNjaW5lLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/add-vaccine/add-vaccine.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/add-vaccine/add-vaccine.page.ts ***!
    \*************************************************/

  /*! exports provided: AddVaccinePage */

  /***/
  function srcAppAddVaccineAddVaccinePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddVaccinePage", function () {
      return AddVaccinePage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var AddVaccinePage =
    /*#__PURE__*/
    function () {
      function AddVaccinePage(activatedRoute, fbService, toastCtrl, router) {
        _classCallCheck(this, AddVaccinePage);

        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.vaccine = {
          vaccineName: '',
          vaccineDetails: '',
          vaccinePrice: '' // createdAt: new Date().getTime()

        };
      }

      _createClass(AddVaccinePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addVaccine",
        value: function addVaccine() {
          var _this = this;

          this.fbService.addVaccine(this.vaccine).then(function () {
            _this.router.navigateByUrl('/');
          }, function (err) {});
        }
      }]);

      return AddVaccinePage;
    }();

    AddVaccinePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AddVaccinePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-vaccine',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-vaccine.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-vaccine/add-vaccine.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-vaccine.page.scss */
      "./src/app/add-vaccine/add-vaccine.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AddVaccinePage);
    /***/
  }
}]);
//# sourceMappingURL=add-vaccine-add-vaccine-module-es5.js.map