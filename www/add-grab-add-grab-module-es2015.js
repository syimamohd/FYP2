(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-grab-add-grab-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-grab/add-grab.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-grab/add-grab.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title>New Grab</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form class=\"form\" [formGroup]=\"validations_form\"  (ngSubmit)=\"addGrab(validations_form.value)\">\r\n<ion-list>\r\n    <ion-item>\r\n        <input type=\"file\" #fileBtn class=\"filebtn\" (change)=\"uploadPic($event)\"/>\r\n          <div *ngIf=\"!grab.image\">\r\n            <ion-img class=\"profile-pic\" (click)=\"updateProfilePic()\" src=\"assets/defaultPic.png\"></ion-img>\r\n          </div>\r\n          <div *ngIf=\"grab.image\">\r\n          <ion-img class=\"profile-pic\" (click)=\"updateProfilePic()\" [src]=\"grab.image\"></ion-img>\r\n        </div>\r\n      </ion-item>\r\n  <ion-item>\r\n    <ion-input placeholder=\"Enter Grab Name\"  formControlName=\"grabName\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-textarea rows=\"6\"  formControlName=\"grabDetails\" placeholder=\"Enter grab details here...\"></ion-textarea>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-input placeholder=\"Enter Grab Price\"  formControlName=\"grabPrice\"></ion-input>\r\n  </ion-item>\r\n</ion-list>\r\n<ion-button class=\"submit-btn\" type=\"submit\" [disabled]=\"!validations_form.valid\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"primary\">Create</ion-button>\r\n  <!-- <ion-button color=\"primary\" expand=\"full\" (click)=\"addGrab()\">Create</ion-button> -->\r\n  </form>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/add-grab/add-grab-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-grab/add-grab-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AddGrabPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGrabPageRoutingModule", function() { return AddGrabPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_grab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-grab.page */ "./src/app/add-grab/add-grab.page.ts");




const routes = [
    {
        path: '',
        component: _add_grab_page__WEBPACK_IMPORTED_MODULE_3__["AddGrabPage"]
    }
];
let AddGrabPageRoutingModule = class AddGrabPageRoutingModule {
};
AddGrabPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddGrabPageRoutingModule);



/***/ }),

/***/ "./src/app/add-grab/add-grab.module.ts":
/*!*********************************************!*\
  !*** ./src/app/add-grab/add-grab.module.ts ***!
  \*********************************************/
/*! exports provided: AddGrabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGrabPageModule", function() { return AddGrabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_grab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-grab-routing.module */ "./src/app/add-grab/add-grab-routing.module.ts");
/* harmony import */ var _add_grab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-grab.page */ "./src/app/add-grab/add-grab.page.ts");








let AddGrabPageModule = class AddGrabPageModule {
};
AddGrabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _add_grab_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddGrabPageRoutingModule"]
        ],
        declarations: [_add_grab_page__WEBPACK_IMPORTED_MODULE_6__["AddGrabPage"]]
    })
], AddGrabPageModule);



/***/ }),

/***/ "./src/app/add-grab/add-grab.page.scss":
/*!*********************************************!*\
  !*** ./src/app/add-grab/add-grab.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1ncmFiL2FkZC1ncmFiLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/add-grab/add-grab.page.ts":
/*!*******************************************!*\
  !*** ./src/app/add-grab/add-grab.page.ts ***!
  \*******************************************/
/*! exports provided: AddGrabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGrabPage", function() { return AddGrabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let AddGrabPage = class AddGrabPage {
    constructor(activatedRoute, fbService, toastCtrl, alertController, router, http, formBuilder) {
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.grab = {
            grabName: '',
            grabDetails: '',
            grabPrice: '',
            image: ''
            // createdAt: new Date().getTime()
        };
    }
    ngOnInit() {
        this.validations_form = this.formBuilder.group({
            grabName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            ])),
            grabDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ])),
            grabPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ]))
        });
    }
    presentAlert(title, content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: content,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    addGrab(value) {
        this.grab.grabName = value.grabName;
        this.grab.grabDetails = value.grabDetails;
        this.grab.grabPrice = value.grabPrice;
        this.fbService.addGrab(this.grab).then(() => {
            this.router.navigateByUrl('/menugrab');
        }, err => {
        });
    }
    updateProfilePic() {
        this.fileBtn.nativeElement.click();
    }
    uploadPic(event) {
        const files = event.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('UPLOADCARE_STORE', '1');
        data.append('UPLOADCARE_PUB_KEY', '00f055ada25dcea69cac');
        this.http.post('https://upload.uploadcare.com/base/', data)
            .subscribe(event => {
            const uuid = event.json().file;
            this.grab.image = `https://ucarecdn.com/${uuid}/-/scale_crop/150x150/center/`;
            // this.mainuser.update({
            // 	profilePic: uuid
            // })
        });
    }
};
AddGrabPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileBtn', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddGrabPage.prototype, "fileBtn", void 0);
AddGrabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-grab',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-grab.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-grab/add-grab.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-grab.page.scss */ "./src/app/add-grab/add-grab.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
], AddGrabPage);



/***/ })

}]);
//# sourceMappingURL=add-grab-add-grab-module-es2015.js.map