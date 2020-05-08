(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-hotel-add-hotel-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-hotel/add-hotel.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-hotel/add-hotel.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>New Hotel</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<ion-list>\r\n<<<<<<< HEAD\r\n=======\r\n    <ion-item>\r\n      <input type=\"file\" #fileBtn class=\"filebtn\" (change)=\"uploadPic($event)\"/>\r\n        <div *ngIf=\"!hotel.image\">\r\n          <ion-img class=\"profile-pic\" (click)=\"updateProfilePic()\" src=\"assets/defaultPic.png\"></ion-img>\r\n        </div>\r\n        <div *ngIf=\"hotel.image\">\r\n        <ion-img class=\"profile-pic\" (click)=\"updateProfilePic()\" [src]=\"hotel.image\"></ion-img>\r\n      </div>\r\n    </ion-item>   \r\n>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3\r\n  <ion-item>\r\n    <ion-input placeholder=\"Enter Hotel Name\" [(ngModel)]=\"hotel.hotelName\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-textarea rows=\"6\" [(ngModel)]=\"hotel.hotelDetails\" placeholder=\"Enter hotel details here...\"></ion-textarea>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-input placeholder=\"Enter Hotel Price\" [(ngModel)]=\"hotel.hotelPrice\"></ion-input>\r\n  </ion-item>\r\n</ion-list>\r\n  <ion-button color=\"primary\" expand=\"full\" (click)=\"addNote()\">Create</ion-button>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/add-hotel/add-hotel-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/add-hotel/add-hotel-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AddHotelPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHotelPageRoutingModule", function() { return AddHotelPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_hotel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-hotel.page */ "./src/app/add-hotel/add-hotel.page.ts");




const routes = [
    {
        path: '',
        component: _add_hotel_page__WEBPACK_IMPORTED_MODULE_3__["AddHotelPage"]
    }
];
let AddHotelPageRoutingModule = class AddHotelPageRoutingModule {
};
AddHotelPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddHotelPageRoutingModule);



/***/ }),

/***/ "./src/app/add-hotel/add-hotel.module.ts":
/*!***********************************************!*\
  !*** ./src/app/add-hotel/add-hotel.module.ts ***!
  \***********************************************/
/*! exports provided: AddHotelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHotelPageModule", function() { return AddHotelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_hotel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-hotel-routing.module */ "./src/app/add-hotel/add-hotel-routing.module.ts");
/* harmony import */ var _add_hotel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-hotel.page */ "./src/app/add-hotel/add-hotel.page.ts");







let AddHotelPageModule = class AddHotelPageModule {
};
AddHotelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_hotel_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddHotelPageRoutingModule"]
        ],
        declarations: [_add_hotel_page__WEBPACK_IMPORTED_MODULE_6__["AddHotelPage"]]
    })
], AddHotelPageModule);



/***/ }),

/***/ "./src/app/add-hotel/add-hotel.page.scss":
/*!***********************************************!*\
  !*** ./src/app/add-hotel/add-hotel.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1ob3RlbC9hZGQtaG90ZWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/add-hotel/add-hotel.page.ts":
/*!*********************************************!*\
  !*** ./src/app/add-hotel/add-hotel.page.ts ***!
  \*********************************************/
/*! exports provided: AddHotelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHotelPage", function() { return AddHotelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let AddHotelPage = class AddHotelPage {
    constructor(activatedRoute, fbService, toastCtrl, router, http) {
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.http = http;
        this.hotel = {
            hotelName: '',
            hotelDetails: '',
            hotelPrice: '',
        };
    }
    ngOnInit() {
    }
    addNote() {
        this.fbService.addHotel(this.hotel).then(() => {
            this.router.navigateByUrl('/menuhotel');
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
            // this.hotel.image=`https://ucarecdn.com/${uuid}/-/scale_crop/150x150/center/`;
            // this.mainuser.update({
            // 	profilePic: uuid
            // })
        });
    }
};
AddHotelPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileBtn', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddHotelPage.prototype, "fileBtn", void 0);
AddHotelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-hotel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-hotel.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-hotel/add-hotel.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-hotel.page.scss */ "./src/app/add-hotel/add-hotel.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], AddHotelPage);



/***/ })

}]);
//# sourceMappingURL=add-hotel-add-hotel-module-es2015.js.map