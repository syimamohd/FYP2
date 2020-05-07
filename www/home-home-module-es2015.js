(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-title>Home</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"background\">\r\n     <ion-list>\r\n        <ion-card>\r\n          <ion-item *ngFor=\"let content of (contentItem | async)\">\r\n            <ion-slides>\r\n              <ion-slide>\r\n                <div class=\"slide\">\r\n                  <img src=\"assets/img/logo.png\"/>\r\n                  <h2>{{content.title}}</h2>\r\n                  <p>{{content.contentDetails}}</p>\r\n                </div>\r\n              <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-content/'+content.id\">Edit</ion-button>\r\n              </ion-slide>\r\n<<<<<<< HEAD\r\n              <!-- <ion-slide>\r\n                <img src=\"assets/img/logo.png\"/>\r\n                <h2>What is Ionic?</h2>\r\n                <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>\r\n              </ion-slide> -->\r\n=======\r\n>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3\r\n            </ion-slides>\r\n          </ion-item>  \r\n        </ion-card>\r\n\r\n        <ion-card>\r\n            <ion-slide>\r\n                <div class=\"slide\">\r\n                  <img src=\"background.jpg\"/>\r\n                  <h2>We provide the best services</h2>\r\n                  <h2><a href=\"https://www.instagram.com/littlepawsstation/\">Visit our insta!</a></h2>\r\n                  <p><a [routerLink]=\"'/menuhotel/'\">Cat Boarding</a>,<a [routerLink]=\"'/menuspa/'\"> Cat Spa & Grooming</a>,<a [routerLink]=\"'/menuvaccine/'\">Cat Vaccine & Neuter</a>,<a [routerLink]=\"'/menugrab/'\"> Cat Grab (soon)</a></p>\r\n                </div>\r\n                <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-content/'\">Edit</ion-button>\r\n              </ion-slide>\r\n         </ion-card>\r\n<<<<<<< HEAD\r\n=======\r\n\r\n>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3\r\n        <ion-card>\r\n            <ion-slide>\r\n                <div class=\"slide\">\r\n                  <img size=\"med\" src=\"assets/img/vaccine.jpg\"/>\r\n<<<<<<< HEAD\r\n                  <!-- <h2>We provide the best services</h2> -->\r\n                  <!-- <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p> -->\r\n=======\r\n>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3\r\n                  <p>Vaccine and Neuter Service by our Certified Veterinarian every weekend.</p>\r\n                </div>\r\n                <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-content/'\">Edit</ion-button>\r\n              </ion-slide>\r\n         </ion-card>\r\n<<<<<<< HEAD\r\n=======\r\n\r\n>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3\r\n         <ion-card>\r\n           <ion-slides>\r\n              <ion-slide>\r\n                  <div class=\"slide\">\r\n<<<<<<< HEAD\r\n                    <!-- <img src=\"vaccine.jpg\"/> -->\r\n=======\r\n                   \r\n>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3\r\n                    <h2>Operating Hours:</h2>\r\n                      <p>Everyday</p>\r\n                      <p>10 AM to PM</p>\r\n                    <h2>Address:</h2>\r\n                      <p>Little Paws Station</p>\r\n                      <p>57 Jalan Pulai 21,</p>\r\n                      <p>Taman Pulai Utama,</p>\r\n                      <p>81300 Skudai,</p>\r\n                      <p>Johor Bharu</p>\r\n  \r\n                    <!-- <ion-col>\r\n                      <ion-row>\r\n                        <h2>Operating Hours:</h2>\r\n                        <p>Everyday</p>\r\n                        <p>10 AM to PM</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                          <h2>Address:</h2>\r\n                          <p>Little Paws Station</p>\r\n                          <p>57 Jalan Pulai 21,</p>\r\n                          <p>Taman Pulai Utama,</p>\r\n                          <p>81300 Skudai,</p>\r\n                          <p>Johor Bharu</p>\r\n                        </ion-row>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <img src=\"assets/img/map.png\"/>\r\n                    </ion-col> -->\r\n                  </div>\r\n                  <ion-button *ngIf=\"isAdmin\" fill=\"outline\" slot=\"end\" [routerLink]=\"'/view-content/'\">Edit</ion-button>\r\n                </ion-slide>\r\n<<<<<<< HEAD\r\n                <ion-slide>\r\n                  \r\n=======\r\n                <!-- <ion-slide>\r\n>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3\r\n                        <div class=\"slide\">\r\n                            <img src=\"assets/img/map.png\"/>\r\n                            <h2>Location</h2>\r\n                        </div>    \r\n<<<<<<< HEAD\r\n                    \r\n                </ion-slide>\r\n=======\r\n                </ion-slide> -->\r\n>>>>>>> 2bc00cab9c51230f7f6b420a0cc1f156856cd0d3\r\n           </ion-slides>\r\n          </ion-card> \r\n         \r\n\r\n     </ion-list>\r\n\r\n     <ion-fab *ngIf=\"isAdmin\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button [routerLink]=\"'/add-content'\">\r\n          <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n</ion-content>\r\n\r\n  <!-- <ion-footer>\r\n    <ion-toolbar color=\"dark\">\r\n      <ion-title>Footer</ion-title>\r\n    </ion-toolbar>\r\n  </ion-footer> -->\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content.background {\n  color: grey;\n}\n\nion-text.first {\n  text-align: center;\n  position: absolute;\n}\n\ndiv.second {\n  text-align: center;\n  position: absolute;\n}\n\n#images {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  max-width: 100%;\n  width: 606px;\n}\n\n.image {\n  margin-left: 1px;\n  margin-right: 1px;\n}\n\n.main-image, .user-image {\n  width: 200px;\n  height: 200px;\n}\n\n.center {\n  text-align: center;\n}\n\n.user-image {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-slides {\n  height: 100%;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcQmFja3VwIENcXERlc2t0b3BcXFNFTSA4XFxQUk9KRUNUXFxmeXAyL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdFLFdBQUE7QUNERjs7QURJQTtFQUVFLGtCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUVDLGtCQUFBO0VBQ0Msa0JBQUE7QUNIRjs7QURNQTtFQUNDLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNIRDs7QURNQTtFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7QUNIRDs7QURNQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0FDSEQ7O0FETUE7RUFDQyxrQkFBQTtBQ0hEOztBRE9BO0VBRUMseUJBQUE7VUFBQSxtQkFBQTtBQ0xEOztBRFFBO0VBQ0MsWUFBQTtBQ0xEOztBRFFFO0VBQ0QsY0FBQTtBQ0xEOztBRFFFO0VBQ0Qsa0JBQUE7QUNMRDs7QURRRTtFQUNELGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0xEOztBRFFFO0VBQ0QsZ0JBQUE7QUNMRDs7QURRRTtFQUNELGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQ0xEOztBRFFFO0VBQ0QscUNBQUE7QUNMRCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5kXG57XG4gIC8vIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICBjb2xvcjogZ3JleTtcbn1cblxuaW9uLXRleHQuZmlyc3RcbntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmRpdi5zZWNvbmQgXG57XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jaW1hZ2VzIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRtYXJnaW46IDAgYXV0bztcblx0bWF4LXdpZHRoOiAxMDAlO1xuXHR3aWR0aDogNjA2cHg7XG59XG5cbi5pbWFnZSB7XG5cdG1hcmdpbi1sZWZ0OiAxcHg7XG5cdG1hcmdpbi1yaWdodDogMXB4O1xufVxuXG4ubWFpbi1pbWFnZSwgLnVzZXItaW1hZ2Uge1xuXHR3aWR0aDogMjAwcHg7XG5cdGhlaWdodDogMjAwcHg7XG59XG5cbi5jZW50ZXIge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFxufVxuXG4udXNlci1pbWFnZVxue1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tc2xpZGVzIHtcblx0aGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLnN3aXBlci1zbGlkZSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnN3aXBlci1zbGlkZSBoMiB7XG5cdG1hcmdpbi10b3A6IDIuOHJlbTtcbiAgfVxuXG4gIC5zd2lwZXItc2xpZGUgaW1nIHtcblx0bWF4LWhlaWdodDogNTAlO1xuXHRtYXgtd2lkdGg6IDgwJTtcblx0bWFyZ2luOiA2MHB4IDAgNDBweDtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICBiIHtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIHAge1xuXHRwYWRkaW5nOiAwIDQwcHg7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bGluZS1oZWlnaHQ6IDEuNTtcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XG4gIH1cblxuICBwIGIge1xuXHRjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDAwMDApO1xuICB9XG5cbi8vICNjb250YWluZXIge1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBsZWZ0OiAwO1xuLy8gICByaWdodDogMDtcbi8vICAgdG9wOiA1MCU7XG4vLyAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbi8vIH1cblxuLy8gI2NvbnRhaW5lciBzdHJvbmcge1xuLy8gICBmb250LXNpemU6IDIwcHg7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuLy8gfVxuXG4vLyAjY29udGFpbmVyIHAge1xuLy8gICBmb250LXNpemU6IDE2cHg7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4vLyAgIGNvbG9yOiAjOGM4YzhjO1xuXG4vLyAgIG1hcmdpbjogMDtcbi8vIH1cblxuLy8gI2NvbnRhaW5lciBhIHtcbi8vICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gfVxuXG4vLyBpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4vLyAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG4vLyB9XG5cbi8vIC50aXRsZS1ibG9ja3tcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICBtYXJnaW46IDA7XG4vLyAgIHBhZGRpbmc6IDA7XG4gXG4vLyAgIGhlaWdodDogMTYwcHg7XG4vLyB9XG5cbi8vIC50aXRsZS1ibG9jayAuaGVhZGluZ3tcbi8vICAgZm9udC1zaXplOiAzNXB4O1xuLy8gICBjb2xvcjogd2hpdGU7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICB0b3A6IDUwJTtcbi8vICAgbGVmdDogNTAlO1xuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbi8vICAgZm9udC1mYW1pbHk6IFwiQXJpYWwgQmxhY2tcIlxuLy8gfVxuXG4iLCJpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgY29sb3I6IGdyZXk7XG59XG5cbmlvbi10ZXh0LmZpcnN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmRpdi5zZWNvbmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuI2ltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDYwNnB4O1xufVxuXG4uaW1hZ2Uge1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbn1cblxuLm1haW4taW1hZ2UsIC51c2VyLWltYWdlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udXNlci1pbWFnZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN3aXBlci1zbGlkZSBoMiB7XG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1heC13aWR0aDogODAlO1xuICBtYXJnaW46IDYwcHggMCA0MHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnAge1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XG59XG5cbnAgYiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");








let HomePage = class HomePage {
    constructor(http, activatedRoute, fbService, afs, user, storage, router) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.fbService = fbService;
        this.afs = afs;
        this.user = user;
        this.storage = storage;
        this.router = router;
        this.isAdmin = false;
        this.isCustomer = true;
        this.mainuser = afs.doc(`users/${user.getUID()}`);
        this.sub = this.mainuser.valueChanges().subscribe(event => {
            this.username = event.username;
            //this.contentPic = event.contentPic
            this.isAdmin = event.isAdmin;
            this.isCustomer = event.isCustomer;
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
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    ngOnInit() {
        this.contentItem = this.fbService.getContents();
        this.storage.setItem('username', this.username);
        this.storage.setItem('isAdmin', this.isAdmin);
        this.storage.setItem('isCustomer', this.isCustomer);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
        _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map