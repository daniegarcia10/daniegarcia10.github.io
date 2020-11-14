(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-us-about-us-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<ion-content>\n  <ion-grid class=\"p-0 start\">\n    <ion-row>\n      <ion-col class=\"p-0\">\n        <img src=\"../../../assets/images/all_spreads.jpg\" />\n      </ion-col>\n      <ion-col class=\"o-90\">\n        <ion-text color=\"secondary\" class=\"d-flex justify-content-center\">\n          <h1 class=\"font-40 popout\">{{ 'about_us'  | translate}}</h1>\n        </ion-text>\n        <ion-text class=\"p-l-5\">\n          <p class=\"font-24 p-l-20\">{{ 'bussiness_description_paragraph_1' | translate}}</p>\n        </ion-text>\n        <ion-text>\n          <p class=\"font-24 p-l-20\">{{ 'bussiness_description_paragraph_2' | translate}}</p>\n        </ion-text>\n        <ion-text>\n          <p class=\"font-24 p-l-20\">{{ 'bussiness_description_paragraph_3' | translate}}</p>\n        </ion-text>\n        <ion-text>\n          <p class=\"font-24 p-l-20\">{{ 'bussiness_description_paragraph_4' | translate}}</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-grid [fixed]=\"true\">\n        <ion-row>\n          <ion-col class=\"d-flex align-items-center\">\n            <div>\n              <ion-text color=\"primary\">\n                <h1 class=\"font-28\">{{ 'why_bussiness_question' | translate }}</h1>\n              </ion-text>\n              <br>\n              <ion-text class=\"text-color\">\n                <p class=\"font-20\">\n                  {{ 'why_bussiness_answer_1' | translate }}\n                  <br>\n                  <br>\n                  {{ 'why_bussiness_answer_2' | translate }}\n                </p>\n              </ion-text>\n            </div>\n          </ion-col>\n          <ion-col>\n            <img src=\"../../../assets/images/NuezdelaInidia_G:CH_Ing.jpg\" />\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button href=\"https://www.facebook.com/italdesignqro/\" \n                      target=\"_blank\"><ion-icon name=\"logo-facebook\"></ion-icon></ion-fab-button>\n      <ion-fab-button href=\"https://www.instagram.com/deli.roots/\"\n                      target=\"_blank\"><ion-icon name=\"logo-instagram\"></ion-icon></ion-fab-button>\n      <!-- <ion-fab-button><ion-icon name=\"logo-whatsapp\"></ion-icon></ion-fab-button> -->\n    </ion-fab-list>\n  </ion-fab>\n  <app-footer></app-footer>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/about-us/about-us-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/about-us/about-us-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageRoutingModule", function() { return AboutUsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us.page */ "./src/app/pages/about-us/about-us.page.ts");




const routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_3__["AboutUsPage"]
    }
];
let AboutUsPageRoutingModule = class AboutUsPageRoutingModule {
};
AboutUsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutUsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/about-us/about-us.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/about-us/about-us.module.ts ***!
  \***************************************************/
/*! exports provided: AboutUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-us-routing.module */ "./src/app/pages/about-us/about-us-routing.module.ts");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us.page */ "./src/app/pages/about-us/about-us.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









let AboutUsPageModule = class AboutUsPageModule {
};
AboutUsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutUsPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]
        ],
        declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]]
    })
], AboutUsPageModule);



/***/ }),

/***/ "./src/app/pages/about-us/about-us.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid.start {\n  background-color: var(--ion-color-tertiary);\n  opacity: 90%;\n}\nion-grid.start p {\n  color: var(--ion-background-color);\n}\nion-grid.start h1 {\n  color: #fcdde8;\n  font-size: calc(1em + 20vw);\n  font-weight: 900;\n  text-shadow: -0.0075em 0.0075em 0 #fef2f6, 0.005em 0.005em 0 #f6a5c1, 0.01em 0.01em 0 #f7aac4, 0.015em 0.015em #f7aec7, 0.02em 0.02em 0 #f8b3ca, 0.025em 0.025em 0 #f8b7cd, 0.03em 0.03em 0 #f8bcd0, 0.035em 0.035em 0 #f9c0d3;\n}\nion-grid.start img {\n  height: 95vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkNBQUE7RUFDQSxZQUFBO0FBQ0o7QUFBSTtFQUNFLGtDQUFBO0FBRU47QUFBSTtFQUNJLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOE5BQ047QUFDRjtBQVFJO0VBQ0ksWUFBQTtBQU5SIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQuc3RhcnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gICAgb3BhY2l0eTogOTAlO1xuICAgIHAge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTsgIFxuICAgIH1cbiAgICBoMXtcbiAgICAgICAgY29sb3I6IG1peCgjZmZmLCAjZTkxZTYzLCA4NSUpO1xuICAgICAgICBmb250LXNpemU6IGNhbGMoMWVtICsgMjB2dykgOyAgXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIHRleHQtc2hhZG93OiBcblx0XHQtMC4wMDc1ZW0gMC4wMDc1ZW0gMCBtaXgoI2ZmZiwgI2U5MWU2MywgOTQlKSxcblx0XHQwLjAwNWVtIDAuMDA1ZW0gMCBtaXgoI2ZmZiwgI2U5MWU2MywgNjAlKSxcblx0XHQwLjAxZW0gMC4wMWVtIDAgbWl4KCNmZmYsICNlOTFlNjMsIDYyJSksIFxuXHRcdDAuMDE1ZW0gMC4wMTVlbSBtaXgoI2ZmZiwgI2U5MWU2MywgNjQlKSwgXG5cdFx0MC4wMmVtIDAuMDJlbSAwIG1peCgjZmZmLCAjZTkxZTYzLCA2NiUpLCBcblx0XHQwLjAyNWVtIDAuMDI1ZW0gMCBtaXgoI2ZmZiwgI2U5MWU2MywgNjglKSxcblx0XHQwLjAzZW0gMC4wM2VtIDAgbWl4KCNmZmYsICNlOTFlNjMsIDcwJSksXG5cdFx0MC4wMzVlbSAwLjAzNWVtIDAgbWl4KCNmZmYsICNlOTFlNjMsIDcyJSk7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogOTV2aDtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/about-us/about-us.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.ts ***!
  \*************************************************/
/*! exports provided: AboutUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPage", function() { return AboutUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AboutUsPage = class AboutUsPage {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsPage.ctorParameters = () => [];
AboutUsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about-us.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./about-us.page.scss */ "./src/app/pages/about-us/about-us.page.scss")).default]
    })
], AboutUsPage);



/***/ })

}]);
//# sourceMappingURL=pages-about-us-about-us-module-es2015.js.map