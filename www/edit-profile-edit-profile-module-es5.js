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


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\n          </ion-buttons>\n      <ion-title>Edit Profile</ion-title>\n      <ion-buttons size=\"medium\" slot=\"end\" (click)=\"onLogout()\">\n          <ion-icon name=\"exit-outline\"></ion-icon>\n        </ion-buttons>\n        \n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n  \n    <!-- <app-loading *ngIf=\"busy\"></app-loading> --> \n    <ion-grid>\n  \n    <div *ngIf=\"!busy\">\n  \n      <input type=\"file\" #fileBtn class=\"filebtn\" (change)=\"uploadPic($event)\" />\n  \n      <div>\n        <ion-img class=\"profile-pic\" src=\"https://ucarecdn.com/{{ profilePic }}/-/scale_crop/150x150/center/\"></ion-img>\n        <ion-button  (click)=\"updateProfilePic()\">Change</ion-button>\n      </div>\n  \n      <div class=\"profile-info\">\n        <ion-item>\n          <ion-label position=\"floating\">Username</ion-label>\n          <ion-input [(ngModel)]=\"username\"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label position=\"floating\">New Password?</ion-label>\n          <ion-input [(ngModel)]=\"newpassword\"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label position=\"floating\">Enter old password</ion-label>\n          <ion-input [(ngModel)]=\"password\"></ion-input>\n        </ion-item>\n\n        <!-- <ion-item>\n            <ion-label position=\"floating\">Enter Contact Number</ion-label>\n            <ion-input [(ngModel)]=\"contact\"></ion-input>\n        </ion-item>\n\n          <ion-item>\n              <ion-label position=\"floating\">Enter New Address</ion-label>\n              <ion-input [(ngModel)]=\"address\"></ion-input>\n            </ion-item> -->\n  \n        <ion-button fill=\"solid\" expand=\"block\" color=\"dark\" (click)=\"updateDetails()\">Save</ion-button>\n      </div>\n    </div>\n  </ion-grid>\n  </ion-content>";
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


    __webpack_exports__["default"] = ".filebtn {\n  opacity: 0;\n  position: absolute;\n  top: -100em;\n  left: -100em; }\n\n.profile-pic {\n  width: 200px;\n  height: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1wcm9maWxlL0M6XFxVc2Vyc1xcaXJzeWFcXERlc2t0b3BcXEZZUDItbWFzdGVyL3NyY1xcYXBwXFxlZGl0LXByb2ZpbGVcXGVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2I7RUFDQyxZQUFZO0VBQ1osYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZWJ0biB7XG5cdG9wYWNpdHk6IDA7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAtMTAwZW07XG5cdGxlZnQ6IC0xMDBlbTtcbn1cblxuLnByb2ZpbGUtcGljIHtcblx0d2lkdGg6IDIwMHB4O1xuXHRoZWlnaHQ6IDIwMHB4O1xufSJdfQ== */";
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

    var EditProfilePage =
    /*#__PURE__*/
    function () {
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
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
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], EditProfilePage.prototype, "fileBtn", void 0);
    EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-profile/edit-profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-profile.page.scss */
      "./src/app/edit-profile/edit-profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])], EditProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=edit-profile-edit-profile-module-es5.js.map