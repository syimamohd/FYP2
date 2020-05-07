(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-note-update-note-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-note/update-note.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-note/update-note.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  \n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Update Note</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-input placeholder=\"Enter Title\" [(ngModel)]=\"note.title\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-textarea rows=\"6\" [(ngModel)]=\"note.content\" placeholder=\"Enter more information here...\"></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <ion-button color=\"primary\" expand=\"full\" (click)=\"updateNote()\">Update</ion-button>\n</ion-content>");

/***/ }),

/***/ "./src/app/update-note/update-note-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/update-note/update-note-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: UpdateNotePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateNotePageRoutingModule", function() { return UpdateNotePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _update_note_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-note.page */ "./src/app/update-note/update-note.page.ts");




const routes = [
    {
        path: '',
        component: _update_note_page__WEBPACK_IMPORTED_MODULE_3__["UpdateNotePage"]
    }
];
let UpdateNotePageRoutingModule = class UpdateNotePageRoutingModule {
};
UpdateNotePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UpdateNotePageRoutingModule);



/***/ }),

/***/ "./src/app/update-note/update-note.module.ts":
/*!***************************************************!*\
  !*** ./src/app/update-note/update-note.module.ts ***!
  \***************************************************/
/*! exports provided: UpdateNotePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateNotePageModule", function() { return UpdateNotePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _update_note_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-note-routing.module */ "./src/app/update-note/update-note-routing.module.ts");
/* harmony import */ var _update_note_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-note.page */ "./src/app/update-note/update-note.page.ts");







let UpdateNotePageModule = class UpdateNotePageModule {
};
UpdateNotePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _update_note_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateNotePageRoutingModule"]
        ],
        declarations: [_update_note_page__WEBPACK_IMPORTED_MODULE_6__["UpdateNotePage"]]
    })
], UpdateNotePageModule);



/***/ }),

/***/ "./src/app/update-note/update-note.page.scss":
/*!***************************************************!*\
  !*** ./src/app/update-note/update-note.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1ub3RlL3VwZGF0ZS1ub3RlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/update-note/update-note.page.ts":
/*!*************************************************!*\
  !*** ./src/app/update-note/update-note.page.ts ***!
  \*************************************************/
/*! exports provided: UpdateNotePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateNotePage", function() { return UpdateNotePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");




let UpdateNotePage = class UpdateNotePage {
    constructor(activatedRoute, fbService, router) {
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router;
        this.note = {
            id: '',
            title: '',
            content: '',
            createdAt: ''
        };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.fbService.getNote(id).subscribe(noteData => {
                this.note = noteData;
            });
        }
    }
    updateNote() {
        this.fbService.updateNote(this.note).then(() => {
            this.router.navigate(['/']);
        }, err => {
        });
    }
};
UpdateNotePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UpdateNotePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-note',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-note.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-note/update-note.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-note.page.scss */ "./src/app/update-note/update-note.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UpdateNotePage);



/***/ })

}]);
//# sourceMappingURL=update-note-update-note-module-es2015.js.map