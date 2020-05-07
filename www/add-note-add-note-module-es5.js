function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-note-add-note-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-note/add-note.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-note/add-note.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddNoteAddNotePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>New Note</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n  <ion-item>\n    <ion-input placeholder=\"Enter Title\" [(ngModel)]=\"note.title\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-textarea rows=\"6\" [(ngModel)]=\"note.content\" placeholder=\"Enter more information here...\"></ion-textarea>\n  </ion-item>\n</ion-list>\n  <ion-button color=\"primary\" expand=\"full\" (click)=\"addNote()\">Create</ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/add-note/add-note-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/add-note/add-note-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: AddNotePageRoutingModule */

  /***/
  function srcAppAddNoteAddNoteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNotePageRoutingModule", function () {
      return AddNotePageRoutingModule;
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


    var _add_note_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-note.page */
    "./src/app/add-note/add-note.page.ts");

    var routes = [{
      path: '',
      component: _add_note_page__WEBPACK_IMPORTED_MODULE_3__["AddNotePage"]
    }];

    var AddNotePageRoutingModule = function AddNotePageRoutingModule() {
      _classCallCheck(this, AddNotePageRoutingModule);
    };

    AddNotePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddNotePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-note/add-note.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/add-note/add-note.module.ts ***!
    \*********************************************/

  /*! exports provided: AddNotePageModule */

  /***/
  function srcAppAddNoteAddNoteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNotePageModule", function () {
      return AddNotePageModule;
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


    var _add_note_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-note-routing.module */
    "./src/app/add-note/add-note-routing.module.ts");
    /* harmony import */


    var _add_note_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-note.page */
    "./src/app/add-note/add-note.page.ts");

    var AddNotePageModule = function AddNotePageModule() {
      _classCallCheck(this, AddNotePageModule);
    };

    AddNotePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_note_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddNotePageRoutingModule"]],
      declarations: [_add_note_page__WEBPACK_IMPORTED_MODULE_6__["AddNotePage"]]
    })], AddNotePageModule);
    /***/
  },

  /***/
  "./src/app/add-note/add-note.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/add-note/add-note.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddNoteAddNotePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1ub3RlL2FkZC1ub3RlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/add-note/add-note.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/add-note/add-note.page.ts ***!
    \*******************************************/

  /*! exports provided: AddNotePage */

  /***/
  function srcAppAddNoteAddNotePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNotePage", function () {
      return AddNotePage;
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

    var AddNotePage =
    /*#__PURE__*/
    function () {
      function AddNotePage(activatedRoute, fbService, toastCtrl, router) {
        _classCallCheck(this, AddNotePage);

        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.note = {
          title: '',
          content: '',
          createdAt: new Date().getTime()
        };
      }

      _createClass(AddNotePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addNote",
        value: function addNote() {
          var _this = this;

          this.fbService.addNote(this.note).then(function () {
            _this.router.navigateByUrl('/');
          }, function (err) {});
        }
      }]);

      return AddNotePage;
    }();

    AddNotePage.ctorParameters = function () {
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

    AddNotePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-note',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-note.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-note/add-note.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-note.page.scss */
      "./src/app/add-note/add-note.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AddNotePage);
    /***/
  }
}]);
//# sourceMappingURL=add-note-add-note-module-es5.js.map