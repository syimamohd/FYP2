(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-hotel-update-hotel-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-hotel/update-hotel.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-hotel/update-hotel.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button icon=\"arrow-back-outline\"></ion-back-button>\r\n          </ion-buttons>\r\n      <ion-title>Update Hotel</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-list>\r\n        <ion-item>\r\n            <input type=\"file\" #fileBtn class=\"filebtn\" (change)=\"uploadPic($event)\"/>\r\n              <div *ngIf=\"!hotel.image\">\r\n                <ion-img class=\"profile-pic\" (click)=\"updateProfilePic()\" src=\"assets/defaultPic.png\"></ion-img>\r\n              </div>\r\n              <div *ngIf=\"hotel.image\">\r\n              <ion-img class=\"profile-pic\" (click)=\"updateProfilePic()\" [src]=\"hotel.image\"></ion-img>\r\n            </div>\r\n          </ion-item> \r\n        <ion-item>\r\n            <ion-input placeholder=\"Enter Hotel Name\" [(ngModel)]=\"hotel.hotelName\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-textarea rows=\"6\" [(ngModel)]=\"hotel.hotelDetails\" placeholder=\"Enter hotel details here...\"></ion-textarea>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-input placeholder=\"Enter Hotel Price\" [(ngModel)]=\"hotel.hotelPrice\"></ion-input>\r\n          </ion-item>\r\n    </ion-list>\r\n    <ion-button color=\"primary\" expand=\"full\" (click)=\"updateHotel()\">Update</ion-button>\r\n  </ion-content>");

/***/ }),

/***/ "./src/app/update-hotel/update-hotel-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/update-hotel/update-hotel-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UpdateHotelPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateHotelPageRoutingModule", function() { return UpdateHotelPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _update_hotel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-hotel.page */ "./src/app/update-hotel/update-hotel.page.ts");




const routes = [
    {
        path: '',
        component: _update_hotel_page__WEBPACK_IMPORTED_MODULE_3__["UpdateHotelPage"]
    }
];
let UpdateHotelPageRoutingModule = class UpdateHotelPageRoutingModule {
};
UpdateHotelPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UpdateHotelPageRoutingModule);



/***/ }),

/***/ "./src/app/update-hotel/update-hotel.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/update-hotel/update-hotel.module.ts ***!
  \*****************************************************/
/*! exports provided: UpdateHotelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateHotelPageModule", function() { return UpdateHotelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _update_hotel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-hotel-routing.module */ "./src/app/update-hotel/update-hotel-routing.module.ts");
/* harmony import */ var _update_hotel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-hotel.page */ "./src/app/update-hotel/update-hotel.page.ts");







let UpdateHotelPageModule = class UpdateHotelPageModule {
};
UpdateHotelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _update_hotel_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateHotelPageRoutingModule"]
        ],
        declarations: [_update_hotel_page__WEBPACK_IMPORTED_MODULE_6__["UpdateHotelPage"]]
    })
], UpdateHotelPageModule);



/***/ }),

/***/ "./src/app/update-hotel/update-hotel.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/update-hotel/update-hotel.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1ob3RlbC91cGRhdGUtaG90ZWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/update-hotel/update-hotel.page.ts":
/*!***************************************************!*\
  !*** ./src/app/update-hotel/update-hotel.page.ts ***!
  \***************************************************/
/*! exports provided: UpdateHotelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateHotelPage", function() { return UpdateHotelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");





let UpdateHotelPage = class UpdateHotelPage {
    constructor(activatedRoute, fbService, router, http) {
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.router = router;
        this.http = http;
        this.hotel = {
            hotelName: '',
            hotelDetails: '',
            hotelPrice: '',
            image: ''
            // createdAt: new Date().getTime()
        };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.fbService.getHotel(id).subscribe(hotelData => {
                this.hotel = hotelData;
            });
        }
    }
    updateHotel() {
        this.fbService.updateHotel(this.hotel).then(() => {
            this.router.navigate(['/menuhotel']);
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
            this.hotel.image = `https://ucarecdn.com/${uuid}/-/scale_crop/150x150/center/`;
            // this.mainuser.update({
            // 	profilePic: uuid
            // })
        });
    }
};
UpdateHotelPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileBtn', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UpdateHotelPage.prototype, "fileBtn", void 0);
UpdateHotelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-hotel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-hotel.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-hotel/update-hotel.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-hotel.page.scss */ "./src/app/update-hotel/update-hotel.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
], UpdateHotelPage);



/***/ })

}]);
//# sourceMappingURL=update-hotel-update-hotel-module-es2015.js.map