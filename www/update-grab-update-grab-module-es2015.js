(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-grab-update-grab-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-grab/update-grab.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-grab/update-grab.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Update Grab</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n      <ion-item>\r\n          <input type=\"file\" #fileBtn class=\"filebtn\" (change)=\"uploadPic($event)\"/>\r\n            <div *ngIf=\"!grab.image\">\r\n              <ion-img class=\"profile-pic\" (click)=\"updateProfilePic()\" src=\"assets/defaultPic.png\"></ion-img>\r\n            </div>\r\n            <div *ngIf=\"grab.image\">\r\n            <ion-img class=\"profile-pic\" (click)=\"updateProfilePic()\" [src]=\"grab.image\"></ion-img>\r\n          </div>\r\n        </ion-item> \r\n      <ion-item>\r\n          <ion-input placeholder=\"Enter Grab Name\" [(ngModel)]=\"grab.grabName\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-textarea rows=\"6\" [(ngModel)]=\"grab.grabDetails\" placeholder=\"Enter grab details here...\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-input placeholder=\"Enter Grab Price\" [(ngModel)]=\"grab.grabPrice\"></ion-input>\r\n        </ion-item>\r\n  </ion-list>\r\n  <ion-button color=\"primary\" expand=\"full\" (click)=\"updateGrab()\">Update</ion-button>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/update-grab/update-grab-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/update-grab/update-grab-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: UpdateGrabPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateGrabPageRoutingModule", function() { return UpdateGrabPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _update_grab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-grab.page */ "./src/app/update-grab/update-grab.page.ts");




const routes = [
    {
        path: '',
        component: _update_grab_page__WEBPACK_IMPORTED_MODULE_3__["UpdateGrabPage"]
    }
];
let UpdateGrabPageRoutingModule = class UpdateGrabPageRoutingModule {
};
UpdateGrabPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UpdateGrabPageRoutingModule);



/***/ }),

/***/ "./src/app/update-grab/update-grab.module.ts":
/*!***************************************************!*\
  !*** ./src/app/update-grab/update-grab.module.ts ***!
  \***************************************************/
/*! exports provided: UpdateGrabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateGrabPageModule", function() { return UpdateGrabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _update_grab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-grab-routing.module */ "./src/app/update-grab/update-grab-routing.module.ts");
/* harmony import */ var _update_grab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-grab.page */ "./src/app/update-grab/update-grab.page.ts");







let UpdateGrabPageModule = class UpdateGrabPageModule {
};
UpdateGrabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _update_grab_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateGrabPageRoutingModule"]
        ],
        declarations: [_update_grab_page__WEBPACK_IMPORTED_MODULE_6__["UpdateGrabPage"]]
    })
], UpdateGrabPageModule);



/***/ }),

/***/ "./src/app/update-grab/update-grab.page.scss":
/*!***************************************************!*\
  !*** ./src/app/update-grab/update-grab.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1ncmFiL3VwZGF0ZS1ncmFiLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/update-grab/update-grab.page.ts":
/*!*************************************************!*\
  !*** ./src/app/update-grab/update-grab.page.ts ***!
  \*************************************************/
/*! exports provided: UpdateGrabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateGrabPage", function() { return UpdateGrabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");





let UpdateGrabPage = class UpdateGrabPage {
    constructor(activatedRoute, fbService, router, http) {
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router;
        this.http = http;
        this.grab = {
            grabName: '',
            grabDetails: '',
            grabPrice: '',
            image: ''
            // createdAt: new Date().getTime()
        };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.fbService.getGrab(id).subscribe(grabData => {
                this.grab = grabData;
            });
        }
    }
    updateGrab() {
        this.fbService.updateGrab(this.grab).then(() => {
            this.router.navigate(['/menugrab']);
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
UpdateGrabPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileBtn', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UpdateGrabPage.prototype, "fileBtn", void 0);
UpdateGrabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-grab',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-grab.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-grab/update-grab.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-grab.page.scss */ "./src/app/update-grab/update-grab.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
], UpdateGrabPage);



/***/ })

}]);
//# sourceMappingURL=update-grab-update-grab-module-es2015.js.map