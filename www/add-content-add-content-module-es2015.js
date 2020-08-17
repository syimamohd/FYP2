(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-content-add-content-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-content/add-content.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-content/add-content.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n      <ion-title>New Content</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n  <!-- <ion-list> -->\r\n      <form class=\"form\" [formGroup]=\"validations_form\"  (ngSubmit)=\"addContent(validations_form.value)\">\r\n      <ion-item>\r\n          <input type=\"file\" #fileBtn class=\"filebtn\" (change)=\"uploadPic($event)\"/>\r\n            <div *ngIf=\"!content.image\">\r\n              <ion-img class=\"profile-pic\" (click)=\"updateProfilePic()\" src=\"assets/defaultPic.png\"></ion-img>\r\n            </div>\r\n            <div *ngIf=\"content.image\">\r\n            <ion-img class=\"profile-pic\" (click)=\"updateProfilePic()\" [src]=\"content.image\"></ion-img>\r\n          </div>\r\n        </ion-item> \r\n\r\n      <!-- <div class=\"content-info\"> -->\r\n          <ion-item>\r\n              <ion-input placeholder=\"Enter Content Title\" formControlName=\"title\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-textarea rows=\"6\" formControlName=\"contentDetails\" placeholder=\"Enter content details here...\"></ion-textarea>\r\n            </ion-item>\r\n      <!-- </div> -->\r\n    \r\n  <!-- </ion-list> -->\r\n  <ion-button class=\"submit-btn\" type=\"submit\" [disabled]=\"!validations_form.valid\" fill=\"solid\" expand=\"block\" size=\"med\" color=\"primary\">Add to Dashboard</ion-button>\r\n    <!-- <ion-button color=\"primary\" expand=\"full\" (click)=\"addContent()\">Add to Dashboard</ion-button> -->\r\n    </form>\r\n  </ion-content>");

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
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
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
/* harmony default export */ __webpack_exports__["default"] = (".filebtn {\n  opacity: 0;\n  position: absolute;\n  top: -100em;\n  left: -100em;\n}\n\n.content-pic {\n  width: 200px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNvbnRlbnQvQzpcXFVzZXJzXFxpcnN5YVxcRGVza3RvcFxcZnlwMi1tYXN0ZXIvc3JjXFxhcHBcXGFkZC1jb250ZW50XFxhZGQtY29udGVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZC1jb250ZW50L2FkZC1jb250ZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Q7O0FERUE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvYWRkLWNvbnRlbnQvYWRkLWNvbnRlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGVidG4ge1xuXHRvcGFjaXR5OiAwO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLTEwMGVtO1xuXHRsZWZ0OiAtMTAwZW07XG59XG5cbi5jb250ZW50LXBpYyB7XG5cdHdpZHRoOiAyMDBweDtcblx0aGVpZ2h0OiAyMDBweDtcbn0iLCIuZmlsZWJ0biB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTAwZW07XG4gIGxlZnQ6IC0xMDBlbTtcbn1cblxuLmNvbnRlbnQtcGljIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufSJdfQ== */");

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");










let AddContentPage = class AddContentPage {
    constructor(http, afs, activatedRoute, fbService, toastCtrl, alertController, router, user, formBuilder) {
        this.http = http;
        this.afs = afs;
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.router = router;
        this.user = user;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.busy = false;
        this.content = {
            contentDetails: '',
            title: '',
            contactDetails: '',
            contacttitle: '',
            image: ''
            // createdAt: new Date().getTime()
        };
        this.mainuser = afs.doc(`users/${user.getUID()}`);
        this.sub = this.mainuser.valueChanges().subscribe(event => {
            this.username = event.username;
            this.contentPic = event.contentPic;
            // this.contact = event.contact
            // this.address = event.address
        });
    }
    ngOnInit() {
        this.validations_form = this.formBuilder.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
            ])),
            contentDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required
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
    addContent(value) {
        this.content.title = value.title;
        this.content.contentDetails = value.contentDetails;
        this.fbService.addContent(this.content).then(() => {
            this.router.navigateByUrl('/home');
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
            //this.content.image=`https://ucarecdn.com/${uuid}/-/smart/1024x1024/`;
            this.content.image = `https://ucarecdn.com/${uuid}/-/scale_crop/150x150/center/`;
            // this.mainuser.update({
            // 	profilePic: uuid
            // })
        });
    }
};
AddContentPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] }
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
], AddContentPage);



/***/ })

}]);
//# sourceMappingURL=add-content-add-content-module-es2015.js.map