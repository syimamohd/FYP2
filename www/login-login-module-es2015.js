(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n\t\t<ion-title>Login</ion-title>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content padding class=\"background\">\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t  <ion-col size-md=\"6\" offset-md=\"3\">\n\t\t\t\t  <ion-card>\n\t\t\t\t\t<div class=\"ion-text-center\">\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t  <ion-card-title>Login</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t<ion-label position=\"floating\"> Username </ion-label>\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" [(ngModel)]=\"username\"></ion-input>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t<ion-label position=\"floating\"> Password </ion-label>\n\t\t\t\t\t\t\t\t<ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<ion-button class=\"button\" fill=\"solid\"  color=\"dark\" (click)=\"login()\">Login</ion-button>\n\t\t\t\t\t\t\t<ion-button class=\"button\" fill=\"solid\"  color=\"dark\" [routerLink]=\"['/register']\">Sign Up</ion-button>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<!-- <ion-button id=\"btn-confirm\"><ion-icon slot=\"start\" name=\"add\"></ion-icon> Sign Up </ion-button>\n\t\t\t\t\t\t\t<ion-button fill=\"outline\" color=\"danger\" id=\"btn-cancel\"> <ion-icon slot=\"start\" name=\"close\"></ion-icon>Cancel </ion-button>  -->\n\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t</div>\t\n\t\t\t\t  </ion-card>\n\t\t\t  </ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t  </ion-content>\n\n");

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  align-items: center;\n}\n\n#imglogin {\n  height: 15%;\n  width: 15%;\n  align-items: center;\n}\n\n#card {\n  height: 50%;\n  width: 80%;\n  align-items: center;\n  justify-content: center;\n}\n\n#button {\n  align-items: center;\n  size: medium;\n}\n\nion-content.background {\n  --background: url('background.jpg') 0 0/100% 100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxpcnN5YVxcRGVza3RvcFxcRllQMi1tYXN0ZXIvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0FDQUo7O0FER0E7RUFFSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFFSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNGSjs7QURLQTtFQUVJLG1CQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1BO0VBQ0ksMkRBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIgXG57XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2ltZ2xvZ2luXG57XG4gICAgaGVpZ2h0OiAxNSU7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jY2FyZFxue1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxufVxuXG4jYnV0dG9uXG57XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBzaXplOiBtZWRpdW07XG59XG5cbmlvbi1jb250ZW50LmJhY2tncm91bmR7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59IiwiI2NvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNpbWdsb2dpbiB7XG4gIGhlaWdodDogMTUlO1xuICB3aWR0aDogMTUlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jY2FyZCB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogODAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2J1dHRvbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHNpemU6IG1lZGl1bTtcbn1cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginPage = class LoginPage {
    constructor(afAuth, user, router) {
        this.afAuth = afAuth;
        this.user = user;
        this.router = router;
        this.username = "";
        this.password = "";
    }
    ngOnInit() {
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { username, password } = this;
            try {
                // kind of a hack. 
                const res = yield this.afAuth.auth.signInWithEmailAndPassword(username + '@codedamn.com', password);
                if (res.user) {
                    this.user.setUser({
                        username,
                        uid: res.user.uid
                    });
                    this.router.navigate(['/home']);
                }
            }
            catch (err) {
                console.dir(err);
                if (err.code === "auth/user-not-found") {
                    console.log("User not found");
                }
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map