function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-spa-update-spa-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/update-spa/update-spa.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-spa/update-spa.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUpdateSpaUpdateSpaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\r\n          </ion-buttons>\r\n      <ion-title>Update Spa</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-list>\r\n        <ion-item>\r\n            <input type=\"file\" #fileBtn class=\"filebtn\" (change)=\"uploadPic($event)\"/>\r\n              <div *ngIf=\"!spa.image\">\r\n                <ion-img class=\"profile-pic\" (click)=\"updateProfilePic()\" src=\"assets/defaultPic.png\"></ion-img>\r\n              </div>\r\n              <div *ngIf=\"spa.image\">\r\n              <ion-img class=\"profile-pic\" (click)=\"updateProfilePic()\" [src]=\"spa.image\"></ion-img>\r\n            </div>\r\n          </ion-item> \r\n        <ion-item>\r\n            <ion-input placeholder=\"Enter Spa Name\" [(ngModel)]=\"spa.spaName\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-textarea rows=\"6\" [(ngModel)]=\"spa.spaDetails\" placeholder=\"Enter spa details here...\"></ion-textarea>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-input placeholder=\"Enter Spa Price\" [(ngModel)]=\"spa.spaPrice\"></ion-input>\r\n          </ion-item>\r\n    </ion-list>\r\n    <ion-button color=\"primary\" expand=\"full\" (click)=\"updateSpa()\">Update</ion-button>\r\n  </ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/update-spa/update-spa-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/update-spa/update-spa-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: UpdateSpaPageRoutingModule */

  /***/
  function srcAppUpdateSpaUpdateSpaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateSpaPageRoutingModule", function () {
      return UpdateSpaPageRoutingModule;
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


    var _update_spa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./update-spa.page */
    "./src/app/update-spa/update-spa.page.ts");

    var routes = [{
      path: '',
      component: _update_spa_page__WEBPACK_IMPORTED_MODULE_3__["UpdateSpaPage"]
    }];

    var UpdateSpaPageRoutingModule = function UpdateSpaPageRoutingModule() {
      _classCallCheck(this, UpdateSpaPageRoutingModule);
    };

    UpdateSpaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UpdateSpaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/update-spa/update-spa.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/update-spa/update-spa.module.ts ***!
    \*************************************************/

  /*! exports provided: UpdateSpaPageModule */

  /***/
  function srcAppUpdateSpaUpdateSpaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateSpaPageModule", function () {
      return UpdateSpaPageModule;
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


    var _update_spa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./update-spa-routing.module */
    "./src/app/update-spa/update-spa-routing.module.ts");
    /* harmony import */


    var _update_spa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./update-spa.page */
    "./src/app/update-spa/update-spa.page.ts");

    var UpdateSpaPageModule = function UpdateSpaPageModule() {
      _classCallCheck(this, UpdateSpaPageModule);
    };

    UpdateSpaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _update_spa_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateSpaPageRoutingModule"]],
      declarations: [_update_spa_page__WEBPACK_IMPORTED_MODULE_6__["UpdateSpaPage"]]
    })], UpdateSpaPageModule);
    /***/
  },

  /***/
  "./src/app/update-spa/update-spa.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/update-spa/update-spa.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUpdateSpaUpdateSpaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1zcGEvdXBkYXRlLXNwYS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/update-spa/update-spa.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/update-spa/update-spa.page.ts ***!
    \***********************************************/

  /*! exports provided: UpdateSpaPage */

  /***/
  function srcAppUpdateSpaUpdateSpaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateSpaPage", function () {
      return UpdateSpaPage;
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
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");

    var UpdateSpaPage = /*#__PURE__*/function () {
      function UpdateSpaPage(activatedRoute, fbService, router, http) {
        _classCallCheck(this, UpdateSpaPage);

        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router;
        this.http = http;
        this.spa = {
          spaName: '',
          spaDetails: '',
          spaPrice: '',
          image: '' // createdAt: new Date().getTime()

        };
      }

      _createClass(UpdateSpaPage, [{
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
        key: "updateSpa",
        value: function updateSpa() {
          var _this2 = this;

          this.fbService.updateSpa(this.spa).then(function () {
            _this2.router.navigate(['/menuspa']);
          }, function (err) {});
        }
      }, {
        key: "updateProfilePic",
        value: function updateProfilePic() {
          this.fileBtn.nativeElement.click();
        }
      }, {
        key: "uploadPic",
        value: function uploadPic(event) {
          var _this3 = this;

          var files = event.target.files;
          var data = new FormData();
          data.append('file', files[0]);
          data.append('UPLOADCARE_STORE', '1');
          data.append('UPLOADCARE_PUB_KEY', '00f055ada25dcea69cac');
          this.http.post('https://upload.uploadcare.com/base/', data).subscribe(function (event) {
            var uuid = event.json().file;
            _this3.spa.image = "https://ucarecdn.com/".concat(uuid, "/-/scale_crop/150x150/center/"); // this.mainuser.update({
            // 	profilePic: uuid
            // })
          });
        }
      }]);

      return UpdateSpaPage;
    }();

    UpdateSpaPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileBtn', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], UpdateSpaPage.prototype, "fileBtn", void 0);
    UpdateSpaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-spa',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-spa.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/update-spa/update-spa.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-spa.page.scss */
      "./src/app/update-spa/update-spa.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])], UpdateSpaPage);
    /***/
  }
}]);
//# sourceMappingURL=update-spa-update-spa-module-es5.js.map