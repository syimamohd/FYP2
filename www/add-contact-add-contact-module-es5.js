function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-contact-add-contact-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-contact/add-contact.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-contact/add-contact.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddContactAddContactPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>New Contactt</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<!-- <ion-list> -->\n    <div *ngIf=\"!busy\">\n    <!-- <input type=\"file\" #fileBtn class=\"filebtn\" (change)=\"uploadPic($event)\" data-multiple=\"true\" />\n\n    <div>\n      <ion-img class=\"content-pic\" src=\"https://ucarecdn.com/{{ contentPic }}/-/scale_crop/150x150/center/\"></ion-img>\n      <ion-button  (click)=\"updateContentPic()\">Change</ion-button>\n    </div> -->\n    <div class=\"content-info\">\n        <ion-item>\n            <ion-input placeholder=\"Enter Content Title\" [(ngModel)]=\"content.contacttitle\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-textarea rows=\"6\" [(ngModel)]=\"content.contactDetails\" placeholder=\"Enter content details here...\"></ion-textarea>\n          </ion-item>\n    </div>\n  </div>\n<!-- </ion-list> -->\n  <ion-button color=\"primary\" expand=\"full\" (click)=\"addContent()\">Add</ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/add-contact/add-contact-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/add-contact/add-contact-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: AddContactPageRoutingModule */

  /***/
  function srcAppAddContactAddContactRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddContactPageRoutingModule", function () {
      return AddContactPageRoutingModule;
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


    var _add_contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-contact.page */
    "./src/app/add-contact/add-contact.page.ts");

    var routes = [{
      path: '',
      component: _add_contact_page__WEBPACK_IMPORTED_MODULE_3__["AddContactPage"]
    }];

    var AddContactPageRoutingModule = function AddContactPageRoutingModule() {
      _classCallCheck(this, AddContactPageRoutingModule);
    };

    AddContactPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddContactPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-contact/add-contact.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/add-contact/add-contact.module.ts ***!
    \***************************************************/

  /*! exports provided: AddContactPageModule */

  /***/
  function srcAppAddContactAddContactModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddContactPageModule", function () {
      return AddContactPageModule;
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


    var _add_contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-contact-routing.module */
    "./src/app/add-contact/add-contact-routing.module.ts");
    /* harmony import */


    var _add_contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-contact.page */
    "./src/app/add-contact/add-contact.page.ts");

    var AddContactPageModule = function AddContactPageModule() {
      _classCallCheck(this, AddContactPageModule);
    };

    AddContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddContactPageRoutingModule"]],
      declarations: [_add_contact_page__WEBPACK_IMPORTED_MODULE_6__["AddContactPage"]]
    })], AddContactPageModule);
    /***/
  },

  /***/
  "./src/app/add-contact/add-contact.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/add-contact/add-contact.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddContactAddContactPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1jb250YWN0L2FkZC1jb250YWN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/add-contact/add-contact.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/add-contact/add-contact.page.ts ***!
    \*************************************************/

  /*! exports provided: AddContactPage */

  /***/
  function srcAppAddContactAddContactPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddContactPage", function () {
      return AddContactPage;
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
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");

    var AddContactPage =
    /*#__PURE__*/
    function () {
      function AddContactPage(http, afs, activatedRoute, fbService, toastCtrl, router, user) {
        var _this = this;

        _classCallCheck(this, AddContactPage);

        this.http = http;
        this.afs = afs;
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.user = user;
        this.busy = false;
        this.content = {
          contentDetails: '',
          title: '',
          contactDetails: '',
          contacttitle: ''
        };
        this.mainuser = afs.doc("users/".concat(user.getUID()));
        this.sub = this.mainuser.valueChanges().subscribe(function (event) {
          _this.username = event.username;
          _this.contentPic = event.contentPic; // this.contact = event.contact
          // this.address = event.address
        });
        this.mainuser = afs.doc("contentItem/".concat(user.getUID()));
        this.sub = this.mainuser.valueChanges().subscribe(function (event) {
          // this.username = event.username
          _this.contentPic = event.contentPic; // this.isAdmin= event.isAdmin
          // this.isCustomer= event.isCustomer
        });
      }

      _createClass(AddContactPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "updateContentPic",
        value: function updateContentPic() {
          this.fileBtn.nativeElement.click();
        }
      }, {
        key: "uploadPic",
        value: function uploadPic(event) {
          var _this2 = this;

          var files = event.target.files;
          var data = new FormData();
          data.append('file', files[0]);
          data.append('UPLOADCARE_STORE', '1');
          data.append('UPLOADCARE_PUB_KEY', '00f055ada25dcea69cac');
          this.http.post('https://upload.uploadcare.com/base/', data).subscribe(function (event) {
            var uuid = event.json().file;

            _this2.mainuser.update({
              contentPic: uuid
            });
          });
        }
      }, {
        key: "addContent",
        value: function addContent() {
          var _this3 = this;

          this.fbService.addContent(this.content).then(function () {
            _this3.router.navigateByUrl('/home');
          }, function (err) {});
        }
      }]);

      return AddContactPage;
    }();

    AddContactPage.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileBtn', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AddContactPage.prototype, "fileBtn", void 0);
    AddContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-contact.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-contact/add-contact.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-contact.page.scss */
      "./src/app/add-contact/add-contact.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])], AddContactPage);
    /***/
  }
}]);
//# sourceMappingURL=add-contact-add-contact-module-es5.js.map