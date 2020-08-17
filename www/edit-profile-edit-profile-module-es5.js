function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-profile-edit-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-profile/edit-profile.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-profile/edit-profile.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditProfileEditProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\r\n          </ion-buttons>\r\n      <ion-title>Edit Profile</ion-title>\r\n        \r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content padding>\r\n  \r\n    <!-- <app-loading *ngIf=\"busy\"></app-loading> --> \r\n    <ion-grid>\r\n  \r\n    <div *ngIf=\"!busy\">\r\n  \r\n      <input type=\"file\" #fileBtn class=\"filebtn\" (change)=\"uploadPic($event)\" />\r\n  \r\n      <div>\r\n        <ion-img class=\"profile-pic\" src=\"https://ucarecdn.com/{{ profilePic }}/-/scale_crop/150x150/center/\"></ion-img>\r\n        <ion-button  (click)=\"updateProfilePic()\">Change</ion-button>\r\n      </div>\r\n  \r\n      <div class=\"profile-info\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Username</ion-label>\r\n          <ion-input [(ngModel)]=\"username\"></ion-input>\r\n        </ion-item>\r\n  \r\n        <ion-item>\r\n          <ion-label position=\"floating\">New Password?</ion-label>\r\n          <ion-input [(ngModel)]=\"newpassword\"></ion-input>\r\n        </ion-item>\r\n  \r\n        <ion-item>\r\n          <ion-label position=\"floating\">Enter old password</ion-label>\r\n          <ion-input [(ngModel)]=\"password\"></ion-input>\r\n        </ion-item>\r\n\r\n        <!-- <ion-item>\r\n            <ion-label position=\"floating\">Enter Contact Number</ion-label>\r\n            <ion-input [(ngModel)]=\"contact\"></ion-input>\r\n        </ion-item>\r\n\r\n          <ion-item>\r\n              <ion-label position=\"floating\">Enter New Address</ion-label>\r\n              <ion-input [(ngModel)]=\"address\"></ion-input>\r\n            </ion-item> -->\r\n  \r\n        <ion-button fill=\"solid\" expand=\"block\" color=\"dark\" (click)=\"updateDetails()\">Save</ion-button>\r\n      </div>\r\n    </div>\r\n  </ion-grid>\r\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/edit-profile/edit-profile-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/edit-profile/edit-profile-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: EditProfilePageRoutingModule */

  /***/
  function srcAppEditProfileEditProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfilePageRoutingModule", function () {
      return EditProfilePageRoutingModule;
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


    var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-profile.page */
    "./src/app/edit-profile/edit-profile.page.ts");

    var routes = [{
      path: '',
      component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
    }];

    var EditProfilePageRoutingModule = function EditProfilePageRoutingModule() {
      _classCallCheck(this, EditProfilePageRoutingModule);
    };

    EditProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/edit-profile/edit-profile.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/edit-profile/edit-profile.module.ts ***!
    \*****************************************************/

  /*! exports provided: EditProfilePageModule */

  /***/
  function srcAppEditProfileEditProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function () {
      return EditProfilePageModule;
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


    var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-profile-routing.module */
    "./src/app/edit-profile/edit-profile-routing.module.ts");
    /* harmony import */


    var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-profile.page */
    "./src/app/edit-profile/edit-profile.page.ts");

    var EditProfilePageModule = function EditProfilePageModule() {
      _classCallCheck(this, EditProfilePageModule);
    };

    EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePageRoutingModule"]],
      declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
    })], EditProfilePageModule);
    /***/
  },

  /***/
  "./src/app/edit-profile/edit-profile.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/edit-profile/edit-profile.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditProfileEditProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".filebtn {\n  opacity: 0;\n  position: absolute;\n  top: -100em;\n  left: -100em;\n}\n\n.profile-pic {\n  width: 200px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1wcm9maWxlL0M6XFxVc2Vyc1xcaXJzeWFcXERlc2t0b3BcXGZ5cDItbWFzdGVyL3NyY1xcYXBwXFxlZGl0LXByb2ZpbGVcXGVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlYnRuIHtcblx0b3BhY2l0eTogMDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IC0xMDBlbTtcblx0bGVmdDogLTEwMGVtO1xufVxuXG4ucHJvZmlsZS1waWMge1xuXHR3aWR0aDogMjAwcHg7XG5cdGhlaWdodDogMjAwcHg7XG59IiwiLmZpbGVidG4ge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwMGVtO1xuICBsZWZ0OiAtMTAwZW07XG59XG5cbi5wcm9maWxlLXBpYyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/edit-profile/edit-profile.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/edit-profile/edit-profile.page.ts ***!
    \***************************************************/

  /*! exports provided: EditProfilePage */

  /***/
  function srcAppEditProfileEditProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfilePage", function () {
      return EditProfilePage;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EditProfilePage = /*#__PURE__*/function () {
      function EditProfilePage(http, afs, router, alertController, user) {
        var _this = this;

        _classCallCheck(this, EditProfilePage);

        this.http = http;
        this.afs = afs;
        this.router = router;
        this.alertController = alertController;
        this.user = user;
        this.busy = false;
        this.mainuser = afs.doc("users/".concat(user.getUID()));
        this.sub = this.mainuser.valueChanges().subscribe(function (event) {
          _this.username = event.username;
          _this.profilePic = event.profilePic;
          _this.contact = event.contact;
          _this.address = event.address;
        });
      }

      _createClass(EditProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "updateProfilePic",
        value: function updateProfilePic() {
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
              profilePic: uuid
            });
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(title, content) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: content,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "updateDetails",
        value: function updateDetails() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.busy = true;

                    if (this.password) {
                      _context2.next = 4;
                      break;
                    }

                    this.busy = false;
                    return _context2.abrupt("return", this.presentAlert('Error!', 'You have to enter a password'));

                  case 4:
                    _context2.prev = 4;
                    _context2.next = 7;
                    return this.user.reAuth(this.user.getUsername(), this.password);

                  case 7:
                    _context2.next = 13;
                    break;

                  case 9:
                    _context2.prev = 9;
                    _context2.t0 = _context2["catch"](4);
                    this.busy = false;
                    return _context2.abrupt("return", this.presentAlert('Error!', 'Wrong password!'));

                  case 13:
                    if (!this.newpassword) {
                      _context2.next = 16;
                      break;
                    }

                    _context2.next = 16;
                    return this.user.updatePassword(this.newpassword);

                  case 16:
                    if (!(this.username !== this.user.getUsername())) {
                      _context2.next = 20;
                      break;
                    }

                    _context2.next = 19;
                    return this.user.updateEmail(this.username);

                  case 19:
                    this.mainuser.update({
                      username: this.username
                    });

                  case 20:
                    // if(this.address !== this.user.getAddress()) 
                    // {
                    // 	await this.user.updateEmail(this.address)
                    // 	this.mainuser.update({
                    // 		address: this.address
                    // 	})
                    // }
                    this.password = "";
                    this.newpassword = "";
                    this.contact = "";
                    this.address = "";
                    this.busy = false;
                    _context2.next = 27;
                    return this.presentAlert('Done!', 'Your profile was updated!');

                  case 27:
                    this.router.navigate(['/view-profile']);

                  case 28:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[4, 9]]);
          }));
        }
      }]);

      return EditProfilePage;
    }();

    EditProfilePage.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileBtn', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], EditProfilePage.prototype, "fileBtn", void 0);
    EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-profile/edit-profile.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-profile.page.scss */
      "./src/app/edit-profile/edit-profile.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])], EditProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=edit-profile-edit-profile-module-es5.js.map