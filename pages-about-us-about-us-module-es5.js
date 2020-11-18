(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-us-about-us-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAboutUsAboutUsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header></app-header>\n\n<ion-content \n[scrollEvents]=\"true\"\n(ionScroll)=\"scroll($event)\">\n  <ion-grid class=\"p-0 start pb-4 mx-2 pt-3\">\n    <ion-row>\n      <ion-col class=\"p-0 d-flex justify-content-center\">\n        <img class=\"circle animate__animated animate__fadeInLeft wow\" src=\"../../../assets/images/local_product.jpg\"  data-wow-delay=\"0.5s\"/>\n      </ion-col>\n      <ion-col class=\"o-90\">\n        <ion-text color=\"secondary\" class=\"d-flex justify-content-center wow animate__animated animate__fadeInRight\" data-wow-delay=\"0.4s\">\n          <h1 class=\"font-40 popout\">{{ 'about_us'  | translate}}</h1>\n        </ion-text>\n        <ion-text class=\"p-l-5\">\n          <p class=\"font-24 p-l-20  wow animate__animated animate__fadeInRight\" data-wow-delay=\"0.8s\">{{ 'bussiness_description_paragraph_1' | translate}}</p>\n        </ion-text>\n        <ion-text>\n          <p class=\"font-24 p-l-20 wow animate__animated animate__fadeInRight\" data-wow-delay=\"1.2s\">{{ 'bussiness_description_paragraph_2' | translate}}</p>\n        </ion-text>\n        <ion-text>\n          <p class=\"font-24 p-l-20 wow animate__animated animate__fadeInRight\" data-wow-delay=\"1.6s\">{{ 'bussiness_description_paragraph_3' | translate}}</p>\n        </ion-text>\n        <ion-text>\n          <p class=\"font-24 p-l-20 wow animate__animated animate__fadeInRight\" data-wow-delay=\"2s\">{{ 'bussiness_description_paragraph_4' | translate}}</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-card class=\"background-cuartery\">\n    <ion-card-content>\n      <ion-grid [fixed]=\"true\">\n        <ion-row>\n          <ion-col class=\"d-flex align-items-center\">\n            <div>\n              <ion-text color=\"primary\">\n                <h1 class=\"font-28\">{{ 'why_bussiness_question' | translate }}</h1>\n              </ion-text>\n              <br>\n              <ion-text class=\"text-color\">\n                <p class=\"font-20\">\n                  {{ 'why_bussiness_answer_1' | translate }}\n                  <br>\n                  <br>\n                  {{ 'why_bussiness_answer_2' | translate }}\n                </p>\n              </ion-text>\n            </div>\n          </ion-col>\n          <ion-col>\n            <img class=\"circle\" src=\"../../../assets/images/matcha_bowl_2.jpg\" />\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <div>\n    <img [src]=\"imgSec.img_sec_4\" />\n  </div>\n  <div>\n    <img [src]=\"imgSec.img_sec_1\" />\n  </div>\n  <div>\n    <img [src]=\"imgSec.img_sec_3\" />\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button href=\"https://www.facebook.com/italdesignqro/\" \n                      target=\"_blank\"><ion-icon name=\"logo-facebook\"></ion-icon></ion-fab-button>\n      <ion-fab-button href=\"https://www.instagram.com/deli.roots/\"\n                      target=\"_blank\"><ion-icon name=\"logo-instagram\"></ion-icon></ion-fab-button>\n      <!-- <ion-fab-button><ion-icon name=\"logo-whatsapp\"></ion-icon></ion-fab-button> -->\n    </ion-fab-list>\n  </ion-fab>\n  <app-footer></app-footer>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/about-us/about-us-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/about-us/about-us-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: AboutUsPageRoutingModule */

    /***/
    function srcAppPagesAboutUsAboutUsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutUsPageRoutingModule", function () {
        return AboutUsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _about_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about-us.page */
      "./src/app/pages/about-us/about-us.page.ts");

      var routes = [{
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_3__["AboutUsPage"]
      }];

      var AboutUsPageRoutingModule = function AboutUsPageRoutingModule() {
        _classCallCheck(this, AboutUsPageRoutingModule);
      };

      AboutUsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AboutUsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/about-us/about-us.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/about-us/about-us.module.ts ***!
      \***************************************************/

    /*! exports provided: AboutUsPageModule */

    /***/
    function srcAppPagesAboutUsAboutUsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function () {
        return AboutUsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./about-us-routing.module */
      "./src/app/pages/about-us/about-us-routing.module.ts");
      /* harmony import */


      var _about_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./about-us.page */
      "./src/app/pages/about-us/about-us.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var AboutUsPageModule = function AboutUsPageModule() {
        _classCallCheck(this, AboutUsPageModule);
      };

      AboutUsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutUsPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]],
        declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]]
      })], AboutUsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/about-us/about-us.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/about-us/about-us.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAboutUsAboutUsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid.start {\n  opacity: 90%;\n}\nion-grid.start p {\n  color: var(--ion-background-color-cuartery);\n}\nion-grid.start h1 {\n  color: var(--ion-background-color-cuartery);\n  font-size: calc(1em + 20vw);\n  font-weight: 900;\n  text-shadow: -0.0075em 0.0075em 0 var(--ion-background-color), 0.005em 0.005em 0 var(--ion-background-color), 0.01em 0.01em 0 var(--ion-background-color), 0.015em 0.015em var(--ion-background-color), 0.02em 0.02em 0 var(--ion-background-color), 0.025em 0.025em 0 var(--ion-background-color), 0.03em 0.03em 0 var(--ion-background-color), 0.035em 0.035em 0 var(--ion-background-color);\n}\nion-grid.start img {\n  height: 95vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKO0FBQUk7RUFDRSwyQ0FBQTtBQUVOO0FBQUk7RUFDSSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4WEFDTjtBQUNGO0FBUUk7RUFDSSxZQUFBO0FBTlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC11cy9hYm91dC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZC5zdGFydCB7XG4gICAgb3BhY2l0eTogOTAlO1xuICAgIHAge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLWN1YXJ0ZXJ5KTsgIFxuICAgIH1cbiAgICBoMXtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLWN1YXJ0ZXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDFlbSArIDIwdncpIDsgIFxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICB0ZXh0LXNoYWRvdzogXG5cdFx0LTAuMDA3NWVtIDAuMDA3NWVtIDAgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpLFxuXHRcdDAuMDA1ZW0gMC4wMDVlbSAwIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKSxcblx0XHQwLjAxZW0gMC4wMWVtIDAgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpLCBcblx0XHQwLjAxNWVtIDAuMDE1ZW0gdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpLCBcblx0XHQwLjAyZW0gMC4wMmVtIDAgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpLCBcblx0XHQwLjAyNWVtIDAuMDI1ZW0gMCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciksXG5cdFx0MC4wM2VtIDAuMDNlbSAwIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKSxcblx0XHQwLjAzNWVtIDAuMDM1ZW0gMCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogOTV2aDtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/about-us/about-us.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/about-us/about-us.page.ts ***!
      \*************************************************/

    /*! exports provided: AboutUsPage */

    /***/
    function srcAppPagesAboutUsAboutUsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutUsPage", function () {
        return AboutUsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/language.service */
      "./src/app/services/language.service.ts");

      var AboutUsPage = /*#__PURE__*/function () {
        function AboutUsPage(langService) {
          _classCallCheck(this, AboutUsPage);

          this.langService = langService;
        }

        _createClass(AboutUsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.langService.getImages().subscribe(function (data) {
              _this.imgSec = data;
            });
          }
        }, {
          key: "scroll",
          value: function scroll(event) {
            document.documentElement.dataset.scroll = event.detail.scrollTop;
          }
        }]);

        return AboutUsPage;
      }();

      AboutUsPage.ctorParameters = function () {
        return [{
          type: _services_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]
        }];
      };

      AboutUsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./about-us.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./about-us.page.scss */
        "./src/app/pages/about-us/about-us.page.scss"))["default"]]
      })], AboutUsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-about-us-about-us-module-es5.js.map