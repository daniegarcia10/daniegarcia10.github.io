(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-shopping-cart-shopping-cart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shopping-cart/shopping-cart.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shopping-cart/shopping-cart.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<ion-content \n[scrollEvents]=\"true\"\n(ionScroll)=\"scroll($event)\">\n  <ion-grid class=\"p-0 start pb-4 mx-2 pt-3\">\n    <ion-row>\n      <ion-col>\n        <ion-text color=\"primary\" class=\"d-flex justify-content-center wow animate__animated animate__fadeInRight\" data-wow-delay=\"0.4s\">\n          <h1 class=\"font-40 popout\">{{ 'buy_products_title' | translate}}</h1>\n        </ion-text>\n        <ion-text class=\"p-l-5\">\n          <p class=\"font-24 p-l-20  wow animate__animated animate__fadeInLeft\" data-wow-delay=\"0.8s\">\n            {{ 'buy_products_desc_1' | translate}}\n            <br>\n            <br> \n            {{ 'buy_products_desc_2' | translate}}\n            <br>\n            <br>\n            {{ 'buy_products_desc_3' | translate}}\n          </p>\n        </ion-text>\n      </ion-col>\n      <ion-col class=\"p-0 d-flex justify-content-center\">\n        <img class=\"circle animate__animated animate__fadeInRight wow\" src=\"../../../assets/images/contact.png\"  data-wow-delay=\"0.5s\"/>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div>\n    <img [src]=\"imgSec.img_sec_5\" />\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button href=\"https://www.facebook.com/italdesignqro/\" \n                      target=\"_blank\"><ion-icon name=\"logo-facebook\"></ion-icon></ion-fab-button>\n      <ion-fab-button href=\"https://www.instagram.com/deli.roots/\"\n                      target=\"_blank\"><ion-icon name=\"logo-instagram\"></ion-icon></ion-fab-button>\n      <!-- <ion-fab-button><ion-icon name=\"logo-whatsapp\"></ion-icon></ion-fab-button> -->\n    </ion-fab-list>\n  </ion-fab>\n  <app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/shopping-cart/shopping-cart-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/shopping-cart/shopping-cart-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ShoppingCartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartPageRoutingModule", function() { return ShoppingCartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shopping_cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-cart.page */ "./src/app/pages/shopping-cart/shopping-cart.page.ts");




const routes = [
    {
        path: '',
        component: _shopping_cart_page__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartPage"]
    }
];
let ShoppingCartPageRoutingModule = class ShoppingCartPageRoutingModule {
};
ShoppingCartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShoppingCartPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/shopping-cart/shopping-cart.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/shopping-cart/shopping-cart.module.ts ***!
  \*************************************************************/
/*! exports provided: ShoppingCartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartPageModule", function() { return ShoppingCartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-cart-routing.module */ "./src/app/pages/shopping-cart/shopping-cart-routing.module.ts");
/* harmony import */ var _shopping_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopping-cart.page */ "./src/app/pages/shopping-cart/shopping-cart.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









let ShoppingCartPageModule = class ShoppingCartPageModule {
};
ShoppingCartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]
        ],
        declarations: [_shopping_cart_page__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartPage"]]
    })
], ShoppingCartPageModule);



/***/ }),

/***/ "./src/app/pages/shopping-cart/shopping-cart.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/shopping-cart/shopping-cart.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/shopping-cart/shopping-cart.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/shopping-cart/shopping-cart.page.ts ***!
  \***********************************************************/
/*! exports provided: ShoppingCartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartPage", function() { return ShoppingCartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/language.service */ "./src/app/services/language.service.ts");



let ShoppingCartPage = class ShoppingCartPage {
    constructor(langService) {
        this.langService = langService;
    }
    ngOnInit() {
        this.langService.getImages().subscribe(data => {
            this.imgSec = data;
        });
    }
    scroll(event) {
        document.documentElement.dataset.scroll = event.detail.scrollTop;
    }
};
ShoppingCartPage.ctorParameters = () => [
    { type: _services_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"] }
];
ShoppingCartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shopping-cart.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shopping-cart/shopping-cart.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./shopping-cart.page.scss */ "./src/app/pages/shopping-cart/shopping-cart.page.scss")).default]
    })
], ShoppingCartPage);



/***/ })

}]);
//# sourceMappingURL=pages-shopping-cart-shopping-cart-module-es2015.js.map