(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-note-view-note-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-note/view-note.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-note/view-note.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>{{note.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card color=\"secondary\">\n    <ion-card-header>\n      <ion-card-subtitle>{{note.createdAt | date: 'short'}}</ion-card-subtitle>\n      <ion-card-title>{{note.title}}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <p align=\"justify\">{{note.content}}</p>\n      <br>\n      <ion-button slot=\"start\" color=\"warning\" [routerLink]=\"'/update-note/' + note.id\">Edit</ion-button>\n      <ion-button slot=\"end\" color=\"danger\" (click)=\"deleteNote()\">Delete</ion-button>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/view-note/view-note-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/view-note/view-note-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ViewNotePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNotePageRoutingModule", function() { return ViewNotePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_note_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-note.page */ "./src/app/view-note/view-note.page.ts");




const routes = [
    {
        path: '',
        component: _view_note_page__WEBPACK_IMPORTED_MODULE_3__["ViewNotePage"]
    }
];
let ViewNotePageRoutingModule = class ViewNotePageRoutingModule {
};
ViewNotePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewNotePageRoutingModule);



/***/ }),

/***/ "./src/app/view-note/view-note.module.ts":
/*!***********************************************!*\
  !*** ./src/app/view-note/view-note.module.ts ***!
  \***********************************************/
/*! exports provided: ViewNotePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNotePageModule", function() { return ViewNotePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _view_note_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-note-routing.module */ "./src/app/view-note/view-note-routing.module.ts");
/* harmony import */ var _view_note_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-note.page */ "./src/app/view-note/view-note.page.ts");







let ViewNotePageModule = class ViewNotePageModule {
};
ViewNotePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_note_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewNotePageRoutingModule"]
        ],
        declarations: [_view_note_page__WEBPACK_IMPORTED_MODULE_6__["ViewNotePage"]]
    })
], ViewNotePageModule);



/***/ }),

/***/ "./src/app/view-note/view-note.page.scss":
/*!***********************************************!*\
  !*** ./src/app/view-note/view-note.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctbm90ZS92aWV3LW5vdGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/view-note/view-note.page.ts":
/*!*********************************************!*\
  !*** ./src/app/view-note/view-note.page.ts ***!
  \*********************************************/
/*! exports provided: ViewNotePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNotePage", function() { return ViewNotePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");




let ViewNotePage = class ViewNotePage {
    constructor(activatedRoute, fbService, router) {
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router;
        //note properties
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
    deleteNote() {
        this.fbService.deleteNote(this.note.id).then(() => {
            this.router.navigateByUrl('/');
        }, err => {
        });
    }
};
ViewNotePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ViewNotePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-note',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-note.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-note/view-note.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-note.page.scss */ "./src/app/view-note/view-note.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ViewNotePage);



/***/ })

}]);
//# sourceMappingURL=view-note-view-note-module-es2015.js.map