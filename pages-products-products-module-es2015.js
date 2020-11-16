(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-products-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<ion-content \n[scrollEvents]=\"true\"\n(ionScroll)=\"scroll($event)\">\n  <app-slide [slideImgs]=\"slideImgs\"></app-slide>\n  <ion-card>\n    <ion-card-content>\n      <ion-grid [fixed]=\"true\">\n        <ion-row>\n          <ion-col>\n            <div>\n              <ion-text color=\"primary\">\n                <h1 class=\"font-28\">¿Cómo conservar nuestros untables y snacks?</h1>\n              </ion-text>\n              <br>\n              <ul class=\"text-color\">\n                <li>\n                  <ion-text>\n                    <p class=\"font-20\">\n                      Duración aproximada: 12 meses. <br>\n                      Periodo preferente de consumo: 8 meses. <br>\n                      Conservación: Temperatura ambiente de (25°-30°C) sin exposición directa a la luz solar.\n                    </p>\n                  </ion-text>\n                </li>\n                <li>\n                  <ion-text>\n                    <p class=\"font-20\">\n                      La separación de sus aceites es totalmente natural, puedes almacenar boca abajo y mezclar regularmente.\n                    </p>\n                  </ion-text>\n                </li>\n                <li>\n                  <ion-text>\n                    <p class=\"font-20\">\n                      Duración apróximadamente: 5 meses. <br>\n                      Periodo preferente de consumo: 4 meses. <br>\n                      Conservación: Temperatura ambiente de (25°-30°C) sin exposición directa a la luz solar.\n                    </p>\n                  </ion-text>\n                </li>\n                <li>\n                  <ion-text>\n                    <p class=\"font-20\">\n                      Una vez abierto lo puedes guardar fuera o dentro del refrigerador.\n                    </p>\n                  </ion-text>\n                </li>\n              </ul>\n            </div>\n          </ion-col>\n          <ion-col>\n            <img class=\"circle\" src=\"../../../assets/images/phone-img/image10.jpeg\" />\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <ion-grid [fixed]=\"true\">\n        <ion-row>\n          <ion-col>\n            <div>\n              <ion-text color=\"primary\">\n                <h1 class=\"font-28\">¿Cómo disfrutar nuestros untables?</h1>\n              </ion-text>\n              <br>\n              <ul class=\"text-color\">\n                <li>\n                  <ion-text>\n                    <p class=\"font-20\">\n                      Enriquece tus smoothies, licuados o batidos.\n                    </p>\n                  </ion-text>\n                </li>\n                <li>\n                  <ion-text>\n                    <p class=\"font-20\">\n                      Con frutas y verduras favoritas.\n                    </p>\n                  </ion-text>\n                </li>\n                <li>\n                  <ion-text>\n                    <p class=\"font-20\">\n                      En pan tostado, wafles, tortitas de arroz y hotcakes.\n                    </p>\n                  </ion-text>\n                </li>\n                <li>\n                  <ion-text>\n                    <p class=\"font-20\">\n                      Recetas para postres y galletas.\n                    </p>\n                  </ion-text>\n                </li>\n              </ul>\n            </div>\n          </ion-col>\n          <ion-col>\n            <img class=\"circle\" src=\"../../../assets/images/phone-img/image0.jpeg\" />\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <app-product-section></app-product-section>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button href=\"https://www.facebook.com/italdesignqro/\" \n                      target=\"_blank\"><ion-icon name=\"logo-facebook\"></ion-icon></ion-fab-button>\n      <ion-fab-button href=\"https://www.instagram.com/deli.roots/\"\n                      target=\"_blank\"><ion-icon name=\"logo-instagram\"></ion-icon></ion-fab-button>\n      <!-- <ion-fab-button><ion-icon name=\"logo-whatsapp\"></ion-icon></ion-fab-button> -->\n    </ion-fab-list>\n  </ion-fab>\n\n<app-footer></app-footer>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/products/products-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/products/products-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageRoutingModule", function() { return ProductsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.page */ "./src/app/pages/products/products.page.ts");




const routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_3__["ProductsPage"]
    }
];
let ProductsPageRoutingModule = class ProductsPageRoutingModule {
};
ProductsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/products/products.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/pages/products/products-routing.module.ts");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.page */ "./src/app/pages/products/products.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]]
    })
], ProductsPageModule);



/***/ }),

/***/ "./src/app/pages/products/products.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/products/products.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/products/products.page.ts ***!
  \*************************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProductsPage = class ProductsPage {
    constructor() {
        this.slideImgs = ['../../../assets/images/slides/frasquitos.jpg'];
    }
    ngOnInit() {
    }
    scroll(event) {
        document.documentElement.dataset.scroll = event.detail.scrollTop;
    }
};
ProductsPage.ctorParameters = () => [];
ProductsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./products.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./products.page.scss */ "./src/app/pages/products/products.page.scss")).default]
    })
], ProductsPage);



/***/ })

}]);
//# sourceMappingURL=pages-products-products-module-es2015.js.map