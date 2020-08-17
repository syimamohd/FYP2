function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-menu side=\"start\" menuId=\"page\" contentId=\"content1\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-item>\n          <ion-label>\n            <b>Welcome: User</b>\n          </ion-label>\n        </ion-item>\n      </ion-toolbar>   \n    </ion-header>\n\n    <ion-content>\n      <ion-list *ngFor=\"let page of pages\">\n        <ion-menu-toggle auto-hide=\"true\">\n          <ion-item (click)=\"Goto(page)\">\n            <ion-icon [name]=\"page.icon\" slot=\"start\"></ion-icon>\n            <ion-label>{{page.pagename}}</ion-label>\n          </ion-item>\n          \n        </ion-menu-toggle>\n      </ion-list>\n      <ion-list>\n        <ion-item (click)= \"onLogout()\">\n          <ion-icon name=\"exit\" slot=\"start\"></ion-icon>\n          <ion-label>Log Out</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"content1\"></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cart-modal/cart-modal.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart-modal/cart-modal.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCartModalCartModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content fullscreen>\n \n  <div class=\"ion-text-end\">\n    <ion-button (click)=\"close()\" fill=\"clear\" color=\"dark\">\n      <ion-icon name=\"close\" slot=\"start\"></ion-icon>\n    </ion-button>\n  </div>\n \n  <div class=\"ion-padding\">\n    <ion-list>\n      <ion-item *ngFor=\"let p of cart\" class=\"ion-text-wrap\">\n        <ion-grid>\n          <!-- <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"decreaseCartItem(p)\">\n                <ion-icon name=\"remove-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n \n            <ion-col size=\"1\" class=\"ion-align-self-center\">\n              {{ p.amount }}\n            </ion-col>\n \n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"increaseCartItem(p)\">\n                <ion-icon name=\"add-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n \n            <ion-col size=\"2\" offset=\"5\">\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"removeCartItem(p)\">\n                <ion-icon name=\"close-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row> -->\n          <ion-row>\n            <ion-col size=\"9\">\n              <b>{{p.productName }}</b>\n            </ion-col>\n            <!-- <ion-col size=\"3\" class=\"ion-text-end\">\n              {{ p.amount * p.productPrice | currency:'MYR' }}\n            </ion-col> -->\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <!-- <ion-row>\n            <ion-col size=\"9\">\n              Total:\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-text-end\">\n              {{ getTotal() | currency:'MYR' }}\n            </ion-col>\n          </ion-row> -->\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n \n    <ion-button expand=\"full\" [routerLink]=\"['/checkout']\">\n    <!-- <ion-button expand=\"full\" (click)=\"checkout()\"> -->\n      Checkout\n    </ion-button>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | home-home-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-login-module */
        "login-login-module").then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | register-register-module */
        "register-register-module").then(__webpack_require__.bind(null,
        /*! ./register/register.module */
        "./src/app/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'booking',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | booking-booking-module */
        "booking-booking-module").then(__webpack_require__.bind(null,
        /*! ./booking/booking.module */
        "./src/app/booking/booking.module.ts")).then(function (m) {
          return m.BookingPageModule;
        });
      }
    }, {
      path: 'bookinghotel/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | bookinghotel-bookinghotel-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("bookinghotel-bookinghotel-module")]).then(__webpack_require__.bind(null,
        /*! ./bookinghotel/bookinghotel.module */
        "./src/app/bookinghotel/bookinghotel.module.ts")).then(function (m) {
          return m.BookinghotelPageModule;
        });
      }
    }, {
      path: 'menuhotel',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | menuhotel-menuhotel-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("menuhotel-menuhotel-module")]).then(__webpack_require__.bind(null,
        /*! ./menuhotel/menuhotel.module */
        "./src/app/menuhotel/menuhotel.module.ts")).then(function (m) {
          return m.MenuhotelPageModule;
        });
      }
    }, {
      path: 'menuspa',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | menuspa-menuspa-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("menuspa-menuspa-module")]).then(__webpack_require__.bind(null,
        /*! ./menuspa/menuspa.module */
        "./src/app/menuspa/menuspa.module.ts")).then(function (m) {
          return m.MenuspaPageModule;
        });
      }
    }, {
      path: 'menugrab',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | menugrab-menugrab-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("menugrab-menugrab-module")]).then(__webpack_require__.bind(null,
        /*! ./menugrab/menugrab.module */
        "./src/app/menugrab/menugrab.module.ts")).then(function (m) {
          return m.MenugrabPageModule;
        });
      }
    }, {
      path: 'menuvaccine',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | menuvaccine-menuvaccine-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("menuvaccine-menuvaccine-module")]).then(__webpack_require__.bind(null,
        /*! ./menuvaccine/menuvaccine.module */
        "./src/app/menuvaccine/menuvaccine.module.ts")).then(function (m) {
          return m.MenuvaccinePageModule;
        });
      }
    }, {
      path: 'services',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | services-firebase-service */
        "default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b").then(__webpack_require__.bind(null,
        /*! ./services/firebase.service */
        "./src/app/services/firebase.service.ts"));
      }
    }, {
      path: 'model',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | model-Note */
        "model-Note").then(__webpack_require__.bind(null,
        /*! ./model/Note */
        "./src/app/model/Note.ts"));
      }
    }, {
      path: 'model',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | model-CatHotel */
        "model-CatHotel").then(__webpack_require__.bind(null,
        /*! ./model/CatHotel */
        "./src/app/model/CatHotel.ts"));
      }
    }, {
      path: 'model',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | model-CatSpa */
        "model-CatSpa").then(__webpack_require__.bind(null,
        /*! ./model/CatSpa */
        "./src/app/model/CatSpa.ts"));
      }
    }, {
      path: 'model',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | model-CatVaccine */
        "model-CatVaccine").then(__webpack_require__.bind(null,
        /*! ./model/CatVaccine */
        "./src/app/model/CatVaccine.ts"));
      }
    }, {
      path: 'model',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | model-CatGrab */
        "model-CatGrab").then(__webpack_require__.bind(null,
        /*! ./model/CatGrab */
        "./src/app/model/CatGrab.ts"));
      }
    }, {
      path: 'model',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | model-CatProduct */
        "model-CatProduct").then(__webpack_require__.bind(null,
        /*! ./model/CatProduct */
        "./src/app/model/CatProduct.ts"));
      }
    }, {
      path: 'model',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | model-CatVaccine */
        "model-CatVaccine").then(__webpack_require__.bind(null,
        /*! ./model/CatVaccine */
        "./src/app/model/CatVaccine.ts"));
      }
    }, {
      path: 'model',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | model-BookingHotel */
        "model-BookingHotel").then(__webpack_require__.bind(null,
        /*! ./model/BookingHotel */
        "./src/app/model/BookingHotel.ts"));
      }
    }, {
      path: 'model',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | model-BookingSpa */
        "model-BookingSpa").then(__webpack_require__.bind(null,
        /*! ./model/BookingSpa */
        "./src/app/model/BookingSpa.ts"));
      }
    }, {
      path: 'model',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | model-BookingVacc */
        "model-BookingVacc").then(__webpack_require__.bind(null,
        /*! ./model/BookingVacc */
        "./src/app/model/BookingVacc.ts"));
      }
    }, {
      path: 'model',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | model-PurchasedItem */
        "model-PurchasedItem").then(__webpack_require__.bind(null,
        /*! ./model/PurchasedItem */
        "./src/app/model/PurchasedItem.ts"));
      }
    }, {
      path: 'model',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | model-Content */
        "model-Content").then(__webpack_require__.bind(null,
        /*! ./model/Content */
        "./src/app/model/Content.ts"));
      }
    }, {
      path: 'add-note',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | add-note-add-note-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("add-note-add-note-module")]).then(__webpack_require__.bind(null,
        /*! ./add-note/add-note.module */
        "./src/app/add-note/add-note.module.ts")).then(function (m) {
          return m.AddNotePageModule;
        });
      }
    }, {
      path: 'view-note/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | view-note-view-note-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("view-note-view-note-module")]).then(__webpack_require__.bind(null,
        /*! ./view-note/view-note.module */
        "./src/app/view-note/view-note.module.ts")).then(function (m) {
          return m.ViewNotePageModule;
        });
      }
    }, {
      path: 'update-note/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | update-note-update-note-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("update-note-update-note-module")]).then(__webpack_require__.bind(null,
        /*! ./update-note/update-note.module */
        "./src/app/update-note/update-note.module.ts")).then(function (m) {
          return m.UpdateNotePageModule;
        });
      }
    }, {
      path: 'add-hotel',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | add-hotel-add-hotel-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("add-hotel-add-hotel-module")]).then(__webpack_require__.bind(null,
        /*! ./add-hotel/add-hotel.module */
        "./src/app/add-hotel/add-hotel.module.ts")).then(function (m) {
          return m.AddHotelPageModule;
        });
      }
    }, {
      path: 'view-hotel/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | view-hotel-view-hotel-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("view-hotel-view-hotel-module")]).then(__webpack_require__.bind(null,
        /*! ./view-hotel/view-hotel.module */
        "./src/app/view-hotel/view-hotel.module.ts")).then(function (m) {
          return m.ViewHotelPageModule;
        });
      }
    }, {
      path: 'update-hotel/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | update-hotel-update-hotel-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("update-hotel-update-hotel-module")]).then(__webpack_require__.bind(null,
        /*! ./update-hotel/update-hotel.module */
        "./src/app/update-hotel/update-hotel.module.ts")).then(function (m) {
          return m.UpdateHotelPageModule;
        });
      }
    }, {
      path: 'add-spa',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | add-spa-add-spa-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("add-spa-add-spa-module")]).then(__webpack_require__.bind(null,
        /*! ./add-spa/add-spa.module */
        "./src/app/add-spa/add-spa.module.ts")).then(function (m) {
          return m.AddSpaPageModule;
        });
      }
    }, {
      path: 'view-spa/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | view-spa-view-spa-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("view-spa-view-spa-module")]).then(__webpack_require__.bind(null,
        /*! ./view-spa/view-spa.module */
        "./src/app/view-spa/view-spa.module.ts")).then(function (m) {
          return m.ViewSpaPageModule;
        });
      }
    }, {
      path: 'update-spa/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | update-spa-update-spa-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("update-spa-update-spa-module")]).then(__webpack_require__.bind(null,
        /*! ./update-spa/update-spa.module */
        "./src/app/update-spa/update-spa.module.ts")).then(function (m) {
          return m.UpdateSpaPageModule;
        });
      }
    }, {
      path: 'add-vaccine',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | add-vaccine-add-vaccine-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("add-vaccine-add-vaccine-module")]).then(__webpack_require__.bind(null,
        /*! ./add-vaccine/add-vaccine.module */
        "./src/app/add-vaccine/add-vaccine.module.ts")).then(function (m) {
          return m.AddVaccinePageModule;
        });
      }
    }, {
      path: 'view-vaccine/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | view-vaccine-view-vaccine-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("view-vaccine-view-vaccine-module")]).then(__webpack_require__.bind(null,
        /*! ./view-vaccine/view-vaccine.module */
        "./src/app/view-vaccine/view-vaccine.module.ts")).then(function (m) {
          return m.ViewVaccinePageModule;
        });
      }
    }, {
      path: 'update-vaccine/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | update-vaccine-update-vaccine-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("update-vaccine-update-vaccine-module")]).then(__webpack_require__.bind(null,
        /*! ./update-vaccine/update-vaccine.module */
        "./src/app/update-vaccine/update-vaccine.module.ts")).then(function (m) {
          return m.UpdateVaccinePageModule;
        });
      }
    }, {
      path: 'add-grab',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | add-grab-add-grab-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("add-grab-add-grab-module")]).then(__webpack_require__.bind(null,
        /*! ./add-grab/add-grab.module */
        "./src/app/add-grab/add-grab.module.ts")).then(function (m) {
          return m.AddGrabPageModule;
        });
      }
    }, {
      path: 'view-grab/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | view-grab-view-grab-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("view-grab-view-grab-module")]).then(__webpack_require__.bind(null,
        /*! ./view-grab/view-grab.module */
        "./src/app/view-grab/view-grab.module.ts")).then(function (m) {
          return m.ViewGrabPageModule;
        });
      }
    }, {
      path: 'update-grab/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | update-grab-update-grab-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("update-grab-update-grab-module")]).then(__webpack_require__.bind(null,
        /*! ./update-grab/update-grab.module */
        "./src/app/update-grab/update-grab.module.ts")).then(function (m) {
          return m.UpdateGrabPageModule;
        });
      }
    }, {
      path: 'add-product',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | add-product-add-product-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("add-product-add-product-module")]).then(__webpack_require__.bind(null,
        /*! ./add-product/add-product.module */
        "./src/app/add-product/add-product.module.ts")).then(function (m) {
          return m.AddProductPageModule;
        });
      }
    }, {
      path: 'view-product/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | view-product-view-product-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("view-product-view-product-module")]).then(__webpack_require__.bind(null,
        /*! ./view-product/view-product.module */
        "./src/app/view-product/view-product.module.ts")).then(function (m) {
          return m.ViewProductPageModule;
        });
      }
    }, {
      path: 'update-product/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | update-product-update-product-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("update-product-update-product-module")]).then(__webpack_require__.bind(null,
        /*! ./update-product/update-product.module */
        "./src/app/update-product/update-product.module.ts")).then(function (m) {
          return m.UpdateProductPageModule;
        });
      }
    }, {
      path: 'bookingspa/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | bookingspa-bookingspa-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("bookingspa-bookingspa-module")]).then(__webpack_require__.bind(null,
        /*! ./bookingspa/bookingspa.module */
        "./src/app/bookingspa/bookingspa.module.ts")).then(function (m) {
          return m.BookingspaPageModule;
        });
      }
    }, {
      path: 'bookingvacc/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | bookingvacc-bookingvacc-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("bookingvacc-bookingvacc-module")]).then(__webpack_require__.bind(null,
        /*! ./bookingvacc/bookingvacc.module */
        "./src/app/bookingvacc/bookingvacc.module.ts")).then(function (m) {
          return m.BookingvaccPageModule;
        });
      }
    }, {
      path: 'bookinggrab/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | bookinggrab-bookinggrab-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("bookinggrab-bookinggrab-module")]).then(__webpack_require__.bind(null,
        /*! ./bookinggrab/bookinggrab.module */
        "./src/app/bookinggrab/bookinggrab.module.ts")).then(function (m) {
          return m.BookinggrabPageModule;
        });
      }
    }, {
      path: 'edit-profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | edit-profile-edit-profile-module */
        "edit-profile-edit-profile-module").then(__webpack_require__.bind(null,
        /*! ./edit-profile/edit-profile.module */
        "./src/app/edit-profile/edit-profile.module.ts")).then(function (m) {
          return m.EditProfilePageModule;
        });
      }
    }, {
      path: 'view-profile',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | view-profile-view-profile-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("view-profile-view-profile-module")]).then(__webpack_require__.bind(null,
        /*! ./view-profile/view-profile.module */
        "./src/app/view-profile/view-profile.module.ts")).then(function (m) {
          return m.ViewProfilePageModule;
        });
      }
    }, {
      path: 'view-booking-hotel/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | view-booking-hotel-view-booking-hotel-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("view-booking-hotel-view-booking-hotel-module")]).then(__webpack_require__.bind(null,
        /*! ./view-booking-hotel/view-booking-hotel.module */
        "./src/app/view-booking-hotel/view-booking-hotel.module.ts")).then(function (m) {
          return m.ViewBookingHotelPageModule;
        });
      }
    }, {
      path: 'view-booking-spa/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | view-booking-spa-view-booking-spa-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("view-booking-spa-view-booking-spa-module")]).then(__webpack_require__.bind(null,
        /*! ./view-booking-spa/view-booking-spa.module */
        "./src/app/view-booking-spa/view-booking-spa.module.ts")).then(function (m) {
          return m.ViewBookingSpaPageModule;
        });
      }
    }, {
      path: 'view-booking-grab/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | view-booking-grab-view-booking-grab-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("view-booking-grab-view-booking-grab-module")]).then(__webpack_require__.bind(null,
        /*! ./view-booking-grab/view-booking-grab.module */
        "./src/app/view-booking-grab/view-booking-grab.module.ts")).then(function (m) {
          return m.ViewBookingGrabPageModule;
        });
      }
    }, {
      path: 'view-booking-vaccine/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | view-booking-vaccine-view-booking-vaccine-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("view-booking-vaccine-view-booking-vaccine-module")]).then(__webpack_require__.bind(null,
        /*! ./view-booking-vaccine/view-booking-vaccine.module */
        "./src/app/view-booking-vaccine/view-booking-vaccine.module.ts")).then(function (m) {
          return m.ViewBookingVaccinePageModule;
        });
      }
    }, {
      path: 'update-booking-hotel/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | update-booking-hotel-update-booking-hotel-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("update-booking-hotel-update-booking-hotel-module")]).then(__webpack_require__.bind(null,
        /*! ./update-booking-hotel/update-booking-hotel.module */
        "./src/app/update-booking-hotel/update-booking-hotel.module.ts")).then(function (m) {
          return m.UpdateBookingHotelPageModule;
        });
      }
    }, {
      path: 'update-booking-spa/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | update-booking-spa-update-booking-spa-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("update-booking-spa-update-booking-spa-module")]).then(__webpack_require__.bind(null,
        /*! ./update-booking-spa/update-booking-spa.module */
        "./src/app/update-booking-spa/update-booking-spa.module.ts")).then(function (m) {
          return m.UpdateBookingSpaPageModule;
        });
      }
    }, {
      path: 'update-booking-grab/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | update-booking-grab-update-booking-grab-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("update-booking-grab-update-booking-grab-module")]).then(__webpack_require__.bind(null,
        /*! ./update-booking-grab/update-booking-grab.module */
        "./src/app/update-booking-grab/update-booking-grab.module.ts")).then(function (m) {
          return m.UpdateBookingGrabPageModule;
        });
      }
    }, {
      path: 'update-booking-vacc/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | update-booking-vacc-update-booking-vacc-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("update-booking-vacc-update-booking-vacc-module")]).then(__webpack_require__.bind(null,
        /*! ./update-booking-vacc/update-booking-vacc.module */
        "./src/app/update-booking-vacc/update-booking-vacc.module.ts")).then(function (m) {
          return m.UpdateBookingVaccPageModule;
        });
      }
    }, {
      path: 'menuproduct',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | menuproduct-menuproduct-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("menuproduct-menuproduct-module")]).then(__webpack_require__.bind(null,
        /*! ./menuproduct/menuproduct.module */
        "./src/app/menuproduct/menuproduct.module.ts")).then(function (m) {
          return m.MenuproductPageModule;
        });
      }
    }, {
      path: 'checkout/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | checkout-checkout-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("checkout-checkout-module")]).then(__webpack_require__.bind(null,
        /*! ./checkout/checkout.module */
        "./src/app/checkout/checkout.module.ts")).then(function (m) {
          return m.CheckoutPageModule;
        });
      }
    }, {
      path: 'cart-modal/:id',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./cart-modal/cart-modal.module */
        "./src/app/cart-modal/cart-modal.module.ts")).then(function (m) {
          return m.CartModalPageModule;
        });
      }
    }, {
      path: 'add-content',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | add-content-add-content-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("add-content-add-content-module")]).then(__webpack_require__.bind(null,
        /*! ./add-content/add-content.module */
        "./src/app/add-content/add-content.module.ts")).then(function (m) {
          return m.AddContentPageModule;
        });
      }
    }, {
      path: 'view-content/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | view-content-view-content-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("view-content-view-content-module")]).then(__webpack_require__.bind(null,
        /*! ./view-content/view-content.module */
        "./src/app/view-content/view-content.module.ts")).then(function (m) {
          return m.ViewContentPageModule;
        });
      }
    }, {
      path: 'update-content/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | update-content-update-content-module */
        [__webpack_require__.e("default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"), __webpack_require__.e("update-content-update-content-module")]).then(__webpack_require__.bind(null,
        /*! ./update-content/update-content.module */
        "./src/app/update-content/update-content.module.ts")).then(function (m) {
          return m.UpdateContentPageModule;
        });
      }
    }, {
      path: 'paymentsuccess',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | paymentsuccess-paymentsuccess-module */
        "paymentsuccess-paymentsuccess-module").then(__webpack_require__.bind(null,
        /*! ./paymentsuccess/paymentsuccess.module */
        "./src/app/paymentsuccess/paymentsuccess.module.ts")).then(function (m) {
          return m.PaymentsuccessPageModule;
        });
      }
    }, {
      path: 'banklist',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | banklist-banklist-module */
        "banklist-banklist-module").then(__webpack_require__.bind(null,
        /*! ./banklist/banklist.module */
        "./src/app/banklist/banklist.module.ts")).then(function (m) {
          return m.BanklistPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts"); //import { AngularFireAuth } from '@angular/fire/auth'


    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, router, authService) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.authService = authService;
        this.pages = [];
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();

            _this.pages = [{
              pagename: "Dashboard",
              icon: "home",
              url: "/home"
            }, // {
            //   pagename: "Sign Up",
            //   icon: "person-add-outline",
            //   url: "/"
            //   },
            {
              pagename: "Profile",
              icon: "person",
              url: "/view-profile"
            }, {
              pagename: "Cat Services",
              icon: "list",
              url: "/booking"
            }, {
              pagename: "Cat Products",
              icon: "basket",
              url: "/menuproduct"
            }];
          });
        }
      }, {
        key: "Goto",
        value: function Goto(page) {
          this.router.navigate([page.url]);
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          // tslint:disable-next-line: no-unused-expression
          this.authService.logout;
          this.router.navigateByUrl('/login');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./firebase */
    "./src/app/firebase.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _cart_modal_cart_modal_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./cart-modal/cart-modal.module */
    "./src/app/cart-modal/cart-modal.module.ts");
    /* harmony import */


    var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ngx-qrcode2 */
    "./node_modules/ngx-qrcode2/fesm2015/ngx-qrcode2.js");
    /* harmony import */


    var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/barcode-scanner/ngx */
    "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js"); // import { HTTP } from '@ionic-native/http/ngx';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_firebase__WEBPACK_IMPORTED_MODULE_9__["default"]), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"], _angular_http__WEBPACK_IMPORTED_MODULE_14__["HttpModule"], _cart_modal_cart_modal_module__WEBPACK_IMPORTED_MODULE_17__["CartModalPageModule"], ngx_qrcode2__WEBPACK_IMPORTED_MODULE_18__["NgxQRCodeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_15__["NativeStorage"], _auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_19__["BarcodeScanner"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, {
        provide: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["FirestoreSettingsToken"],
        useValue: {}
      }, _user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/user.service.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(router, user) {
        _classCallCheck(this, AuthService);

        this.router = router;
        this.user = user;
        this._userIsAuthenticated = false;
      }

      _createClass(AuthService, [{
        key: "canActivate",
        value: function canActivate(route) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.user.isAuthenticated();

                  case 2:
                    if (!_context.sent) {
                      _context.next = 4;
                      break;
                    }

                    return _context.abrupt("return", true);

                  case 4:
                    this.router.navigate(['/login']);
                    return _context.abrupt("return", false);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "login",
        value: function login() {
          this._userIsAuthenticated = true;
        }
      }, {
        key: "logout",
        value: function logout() {
          this._userIsAuthenticated = false;
        }
      }, {
        key: "userIsAuthenticated",
        get: function get() {
          return this._userIsAuthenticated;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/cart-modal/cart-modal-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/cart-modal/cart-modal-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: CartModalPageRoutingModule */

  /***/
  function srcAppCartModalCartModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartModalPageRoutingModule", function () {
      return CartModalPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _cart_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cart-modal.page */
    "./src/app/cart-modal/cart-modal.page.ts");

    var routes = [{
      path: '',
      component: _cart_modal_page__WEBPACK_IMPORTED_MODULE_3__["CartModalPage"]
    }];

    var CartModalPageRoutingModule = function CartModalPageRoutingModule() {
      _classCallCheck(this, CartModalPageRoutingModule);
    };

    CartModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CartModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/cart-modal/cart-modal.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/cart-modal/cart-modal.module.ts ***!
    \*************************************************/

  /*! exports provided: CartModalPageModule */

  /***/
  function srcAppCartModalCartModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartModalPageModule", function () {
      return CartModalPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _cart_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cart-modal-routing.module */
    "./src/app/cart-modal/cart-modal-routing.module.ts");
    /* harmony import */


    var _cart_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cart-modal.page */
    "./src/app/cart-modal/cart-modal.page.ts");

    var CartModalPageModule = function CartModalPageModule() {
      _classCallCheck(this, CartModalPageModule);
    };

    CartModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cart_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartModalPageRoutingModule"]],
      declarations: [_cart_modal_page__WEBPACK_IMPORTED_MODULE_6__["CartModalPage"]]
    })], CartModalPageModule);
    /***/
  },

  /***/
  "./src/app/cart-modal/cart-modal.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/cart-modal/cart-modal.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCartModalCartModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQtbW9kYWwvY2FydC1tb2RhbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/cart-modal/cart-modal.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/cart-modal/cart-modal.page.ts ***!
    \***********************************************/

  /*! exports provided: CartModalPage */

  /***/
  function srcAppCartModalCartModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartModalPage", function () {
      return CartModalPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var CartModalPage = /*#__PURE__*/function () {
      function CartModalPage(cartService, modalCtrl, alertCtrl) {
        _classCallCheck(this, CartModalPage);

        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.product = {
          productName: '',
          productDetails: '',
          productPrice: 0,
          quantity: 0,
          image: ''
        };
        this.cart = [];
      }

      _createClass(CartModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cart = this.cartService.getCart();
        }
      }, {
        key: "decreaseCartItem",
        value: function decreaseCartItem(product) {
          this.cartService.decreaseProduct(product);
        }
      }, {
        key: "increaseCartItem",
        value: function increaseCartItem(product) {
          this.cartService.addProduct(product);
        }
      }, {
        key: "removeCartItem",
        value: function removeCartItem(product) {
          this.cartService.removeProduct(product);
        }
      }, {
        key: "getTotal",
        value: function getTotal() {
          return this.cart.reduce(function (i, j) {
            return i + j.productPrice * j.quantity;
          }, 0);
        }
      }, {
        key: "close",
        value: function close() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "checkout",
        value: function checkout() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertCtrl.create({
                      header: 'Thanks for your Order!',
                      message: 'We will deliver your item as soon as possible',
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context2.sent;
                    alert.present().then(function () {
                      _this2.modalCtrl.dismiss();
                    });

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return CartModalPage;
    }();

    CartModalPage.ctorParameters = function () {
      return [{
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    CartModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-cart-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cart-modal/cart-modal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart-modal.page.scss */
      "./src/app/cart-modal/cart-modal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], CartModalPage);
    /***/
  },

  /***/
  "./src/app/firebase.ts":
  /*!*****************************!*\
    !*** ./src/app/firebase.ts ***!
    \*****************************/

  /*! exports provided: default */

  /***/
  function srcAppFirebaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var config = {
      apiKey: "AIzaSyB5tFKSmz3TIUgla5FWYlJLLPt5cKjFa64",
      authDomain: "fyp2-syima.firebaseapp.com",
      databaseURL: "https://fyp2-syima.firebaseio.com",
      projectId: "fyp2-syima",
      storageBucket: "fyp2-syima.appspot.com",
      messagingSenderId: "897270428689",
      appId: "1:897270428689:web:88465c3e66114800cfedb0",
      measurementId: "G-G1KNTHK934"
    };
    /* harmony default export */

    __webpack_exports__["default"] = config;
    /***/
  },

  /***/
  "./src/app/services/cart.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/cart.service.ts ***!
    \******************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); // export interface Product {
    //   id: number;
    //   name: string;
    //   price: number;
    //   amount: number;
    // }


    var CartService = /*#__PURE__*/function () {
      function CartService() {
        _classCallCheck(this, CartService);

        this.isAdmin = false;
        this.isCustomer = true;
        this.product = {
          productName: '',
          productDetails: '',
          productPrice: null,
          quantity: null,
          id: null
        };
        this.cart = [];
        this.cartItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
      }

      _createClass(CartService, [{
        key: "getProducts",
        value: function getProducts() {
          return this.product;
        }
      }, {
        key: "getCart",
        value: function getCart() {
          return this.cart;
        }
      }, {
        key: "getCartItemCount",
        value: function getCartItemCount() {
          return this.cartItemCount;
        }
      }, {
        key: "addProduct",
        value: function addProduct(product) {
          var added = false;

          var _iterator = _createForOfIteratorHelper(this.cart),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var p = _step.value;

              if (p.id === product.id) {
                p.amount += 1;
                added = true;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (!added) {
            product.amoun = 1;
            this.cart.push(product);
          }

          this.cartItemCount.next(this.cartItemCount.value + 1);
        }
      }, {
        key: "minusProduct",
        value: function minusProduct(product) {
          var minus = false;

          var _iterator2 = _createForOfIteratorHelper(this.cart),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var p = _step2.value;

              if (p.id === product.id) {
                p.amount -= 1;
                minus = true;
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          if (!minus) {
            product.amoun = 1;
            this.cart.push(product);
          }

          this.cartItemCount.next(this.cartItemCount.value - 1);
        }
      }, {
        key: "decreaseProduct",
        value: function decreaseProduct(product) {
          var _iterator3 = _createForOfIteratorHelper(this.cart.entries()),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _step3$value = _slicedToArray(_step3.value, 2),
                  index = _step3$value[0],
                  p = _step3$value[1];

              if (p.id === product.id) {
                p.amount -= 1;

                if (p.amount == 0) {
                  this.cart.splice(index, 1);
                }
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          this.cartItemCount.next(this.cartItemCount.value - 1);
        }
      }, {
        key: "removeProduct",
        value: function removeProduct(product) {
          var _iterator4 = _createForOfIteratorHelper(this.cart.entries()),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _step4$value = _slicedToArray(_step4.value, 2),
                  index = _step4$value[0],
                  p = _step4$value[1];

              if (p.id === product.id) {
                this.cartItemCount.next(this.cartItemCount.value - p.amount);
                this.cart.splice(index, 1);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }]);

      return CartService;
    }();

    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CartService);
    /***/
  },

  /***/
  "./src/app/user.service.ts":
  /*!*********************************!*\
    !*** ./src/app/user.service.ts ***!
    \*********************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);

    var UserService = /*#__PURE__*/function () {
      function UserService(afAuth) {
        _classCallCheck(this, UserService);

        this.afAuth = afAuth;
      }

      _createClass(UserService, [{
        key: "setUser",
        value: function setUser(user) {
          this.user = user;
        }
      }, {
        key: "getUsername",
        value: function getUsername() {
          return this.user.username;
        } // getContact(): string 
        // {
        // 	return this.user.contact
        // }
        // getAddress(): string 
        // {
        // 	return this.user.address
        // }

      }, {
        key: "reAuth",
        value: function reAuth(username, password) {
          return this.afAuth.auth.currentUser.reauthenticateWithCredential(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].EmailAuthProvider.credential(username + '@codedamn.com', password));
        }
      }, {
        key: "updatePassword",
        value: function updatePassword(newpassword) {
          return this.afAuth.auth.currentUser.updatePassword(newpassword);
        }
      }, {
        key: "updateEmail",
        value: function updateEmail(newemail) {
          return this.afAuth.auth.currentUser.updateEmail(newemail + '@codedamn.com');
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var user;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!this.user) {
                      _context3.next = 2;
                      break;
                    }

                    return _context3.abrupt("return", true);

                  case 2:
                    _context3.next = 4;
                    return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).toPromise();

                  case 4:
                    user = _context3.sent;

                    if (!user) {
                      _context3.next = 8;
                      break;
                    }

                    this.setUser({
                      username: user.email.split('@')[0],
                      uid: user.uid
                    });
                    return _context3.abrupt("return", true);

                  case 8:
                    return _context3.abrupt("return", false);

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getUID",
        value: function getUID() {
          return this.user.uid;
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\irsya\Desktop\fyp2-master\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map