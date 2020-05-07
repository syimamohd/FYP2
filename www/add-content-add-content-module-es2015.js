(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-content-add-content-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-content/add-content.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-content/add-content.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"dark\">\n      <ion-title>New Content</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  <!-- <ion-list> -->\n      <div *ngIf=\"!busy\">\n      <input type=\"file\" #fileBtn class=\"filebtn\" (change)=\"uploadPic($event)\" data-multiple=\"true\" />\n\n      <div>\n        <ion-img class=\"content-pic\" src=\"https://ucarecdn.com/{{ contentPic }}/-/scale_crop/150x150/center/\"></ion-img>\n        <ion-button  (click)=\"updateContentPic()\">Change</ion-button>\n      </div>\n      <div class=\"content-info\">\n          <ion-item>\n              <ion-input placeholder=\"Enter Content Title\" [(ngModel)]=\"content.title\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-textarea rows=\"6\" [(ngModel)]=\"content.contentDetails\" placeholder=\"Enter content details here...\"></ion-textarea>\n            </ion-item>\n      </div>\n    </div>\n  <!-- </ion-list> -->\n    <ion-button color=\"primary\" expand=\"full\" (click)=\"addContent()\">Add to Dashboard</ion-button>\n  </ion-content>");

/***/ }),

/***/ "./src/app/add-content/add-content-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/add-content/add-content-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddContentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddContentPageRoutingModule", function() { return AddContentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_content_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-content.page */ "./src/app/add-content/add-content.page.ts");




const routes = [
    {
        path: '',
        component: _add_content_page__WEBPACK_IMPORTED_MODULE_3__["AddContentPage"]
    }
];
let AddContentPageRoutingModule = class AddContentPageRoutingModule {
};
AddContentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddContentPageRoutingModule);



/***/ }),

/***/ "./src/app/add-content/add-content.module.ts":
/*!***************************************************!*\
  !*** ./src/app/add-content/add-content.module.ts ***!
  \***************************************************/
/*! exports provided: AddContentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddContentPageModule", function() { return AddContentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_content_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-content-routing.module */ "./src/app/add-content/add-content-routing.module.ts");
/* harmony import */ var _add_content_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-content.page */ "./src/app/add-content/add-content.page.ts");







let AddContentPageModule = class AddContentPageModule {
};
AddContentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_content_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddContentPageRoutingModule"]
        ],
        declarations: [_add_content_page__WEBPACK_IMPORTED_MODULE_6__["AddContentPage"]]
    })
], AddContentPageModule);



/***/ }),

/***/ "./src/app/add-content/add-content.page.scss":
/*!***************************************************!*\
  !*** ./src/app/add-content/add-content.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filebtn {\n  opacity: 0;\n  position: absolute;\n  top: -100em;\n  left: -100em;\n}\n\n.content-pic {\n  width: 200px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNvbnRlbnQvRDpcXEJhY2t1cCBDXFxEZXNrdG9wXFxTRU0gOFxcUFJPSkVDVFxcZnlwMi9zcmNcXGFwcFxcYWRkLWNvbnRlbnRcXGFkZC1jb250ZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkLWNvbnRlbnQvYWRkLWNvbnRlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9hZGQtY29udGVudC9hZGQtY29udGVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZWJ0biB7XHJcblx0b3BhY2l0eTogMDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtMTAwZW07XHJcblx0bGVmdDogLTEwMGVtO1xyXG59XHJcblxyXG4uY29udGVudC1waWMge1xyXG5cdHdpZHRoOiAyMDBweDtcclxuXHRoZWlnaHQ6IDIwMHB4O1xyXG59IiwiLmZpbGVidG4ge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwMGVtO1xuICBsZWZ0OiAtMTAwZW07XG59XG5cbi5jb250ZW50LXBpYyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/add-content/add-content.page.ts":
/*!*************************************************!*\
  !*** ./src/app/add-content/add-content.page.ts ***!
  \*************************************************/
/*! exports provided: AddContentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddContentPage", function() { return AddContentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");








let AddContentPage = class AddContentPage {
    constructor(http, afs, activatedRoute, fbService, toastCtrl, router, user) {
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
            contacttitle: '',
        };
        this.mainuser = afs.doc(`users/${user.getUID()}`);
        this.sub = this.mainuser.valueChanges().subscribe(event => {
            this.username = event.username;
            this.contentPic = event.contentPic;
            // this.contact = event.contact
            // this.address = event.address
        });
        // this.mainuser = afs.doc(`contentItem/${user.getUID()}`)
        // this.sub = this.mainuser.valueChanges().subscribe(event => 
        //   {
        //     // this.username = event.username
        //     //this.contentPic = event.contentPic
        //     // this.isAdmin= event.isAdmin
        //     // this.isCustomer= event.isCustomer
        //   })
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    updateContentPic() {
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
            this.mainuser.update({
                contentPic: uuid
            });
        });
    }
    addContent() {
        this.fbService.addContent(this.content).then(() => {
            this.router.navigateByUrl('/home');
        }, err => {
        });
    }
};
AddContentPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileBtn', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddContentPage.prototype, "fileBtn", void 0);
AddContentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-content.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-content/add-content.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-content.page.scss */ "./src/app/add-content/add-content.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
], AddContentPage);



/***/ })

}]);
//# sourceMappingURL=add-content-add-content-module-es2015.js.map