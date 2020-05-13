(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-content-update-content-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-content/update-content.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-content/update-content.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n      <ion-title>Update Content</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-list>\r\n        <ion-item>\r\n            <input type=\"file\" #fileBtn class=\"filebtn\" (change)=\"uploadPic($event)\"/>\r\n              <div *ngIf=\"!content.image\">\r\n                <ion-img class=\"profile-pic\" (click)=\"updateProfilePic()\" src=\"assets/defaultPic.png\"></ion-img>\r\n              </div>\r\n              <div *ngIf=\"content.image\">\r\n              <ion-img class=\"profile-pic\" (click)=\"updateProfilePic()\" [src]=\"content.image\"></ion-img>\r\n            </div>\r\n          </ion-item> \r\n        <ion-item>\r\n            <ion-input placeholder=\"Enter Title (optional)\" [(ngModel)]=\"content.title\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-textarea rows=\"6\" [(ngModel)]=\"content.contentDetails\" placeholder=\"Enter details here...\"></ion-textarea>\r\n          </ion-item>\r\n    </ion-list>\r\n    <ion-button color=\"primary\" expand=\"full\" (click)=\"updateContent()\">Update</ion-button>\r\n  </ion-content>");

/***/ }),

/***/ "./src/app/update-content/update-content-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/update-content/update-content-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: UpdateContentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateContentPageRoutingModule", function() { return UpdateContentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _update_content_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-content.page */ "./src/app/update-content/update-content.page.ts");




const routes = [
    {
        path: '',
        component: _update_content_page__WEBPACK_IMPORTED_MODULE_3__["UpdateContentPage"]
    }
];
let UpdateContentPageRoutingModule = class UpdateContentPageRoutingModule {
};
UpdateContentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UpdateContentPageRoutingModule);



/***/ }),

/***/ "./src/app/update-content/update-content.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/update-content/update-content.module.ts ***!
  \*********************************************************/
/*! exports provided: UpdateContentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateContentPageModule", function() { return UpdateContentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _update_content_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-content-routing.module */ "./src/app/update-content/update-content-routing.module.ts");
/* harmony import */ var _update_content_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-content.page */ "./src/app/update-content/update-content.page.ts");







let UpdateContentPageModule = class UpdateContentPageModule {
};
UpdateContentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _update_content_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateContentPageRoutingModule"]
        ],
        declarations: [_update_content_page__WEBPACK_IMPORTED_MODULE_6__["UpdateContentPage"]]
    })
], UpdateContentPageModule);



/***/ }),

/***/ "./src/app/update-content/update-content.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/update-content/update-content.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1jb250ZW50L3VwZGF0ZS1jb250ZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/update-content/update-content.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/update-content/update-content.page.ts ***!
  \*******************************************************/
/*! exports provided: UpdateContentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateContentPage", function() { return UpdateContentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");





let UpdateContentPage = class UpdateContentPage {
    constructor(activatedRoute, fbService, router, http) {
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router;
        this.http = http;
        this.content = {
            title: '',
            contentDetails: '',
            contactDetails: '',
            contacttitle: '',
            image: ''
            // createdAt: new Date().getTime()
        };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.fbService.getContent(id).subscribe(contentData => {
                this.content = contentData;
            });
        }
    }
    updateContent() {
        this.fbService.updateContent(this.content).then(() => {
            this.router.navigate(['/home']);
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
            this.content.image = `https://ucarecdn.com/${uuid}/-/scale_crop/150x150/center/`;
            // this.mainuser.update({
            // 	profilePic: uuid
            // })
        });
    }
};
UpdateContentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileBtn', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UpdateContentPage.prototype, "fileBtn", void 0);
UpdateContentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-content.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-content/update-content.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-content.page.scss */ "./src/app/update-content/update-content.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
], UpdateContentPage);



/***/ })

}]);
//# sourceMappingURL=update-content-update-content-module-es2015.js.map