(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header></app-header>\n\n<ion-content \n[scrollEvents]=\"true\"\n(ionScroll)=\"scroll($event)\">\n  <app-slide [slideImgs]=\"slideImgs\"></app-slide>\n  <ion-card class=\"background-cuartery animate__animated animate__backInDown\" data-wow-duration=\"2s\" data-wow-delay=\"1s\">\n    <ion-card-content class=\"py-0\">\n      <ion-grid [fixed]=\"true\">\n        <ion-row>\n          <ion-col class=\"py-0\">\n            <img class=\"circle\" height=\"350px\" width=\"600px\" \n            src=\"../../../assets/images/Logo DeliRoots (transparente).svg\"   />\n          </ion-col>\n          <ion-col size=\"7\" class=\"d-flex align-items-center p-y-0\">\n            <br>\n            <ion-text class=\"text-color\">\n              <p class=\"font-20\" >\n                {{ 'bussiness_description_1' | translate }}\n                <br>\n                <br>\n                {{ 'bussiness_description_2' | translate }}\n              </p>\n            </ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <div>\n      <ion-grid [fixed]=\"true\">\n        <ion-row>\n          <ion-col class=\"d-flex align-items-center animate__animated animate__bounceInLeft\" data-wow-duration=\"2s\" data-wow-delay=\"2s\">\n            <div>\n              <ion-text>\n                <h1 class=\"font-28 text-primary-dark\">{{ 'why_bussiness_question' | translate }}</h1>\n              </ion-text>\n              <br>\n              <ion-text class=\"text-color\">\n                <p class=\"font-20 text-brown\">\n                  {{ 'why_bussiness_answer_1' | translate }}\n                  <br>\n                  <br>\n                  {{ 'why_bussiness_answer_2' | translate }}\n                </p>\n              </ion-text>\n            </div>\n          </ion-col>\n          <ion-col class=\"animate__animated animate__bounceInRight\" data-wow-duration=\"2s\" data-wow-delay=\"2s\">\n            <img class=\"circle\" src=\"../../../assets/images/phone-img/image2.jpeg\" />\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  </div>\n  <app-product-section></app-product-section>\n  <div class=\"animate__animated animate__backInUp pt-2\">\n    <img [src]=\"imgSec.img_sec_2\"/>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button href=\"https://www.facebook.com/italdesignqro/\" \n                      target=\"_blank\"><ion-icon name=\"logo-facebook\"></ion-icon></ion-fab-button>\n      <ion-fab-button href=\"https://www.instagram.com/deli.roots/\"\n                      target=\"_blank\"><ion-icon name=\"logo-instagram\"></ion-icon></ion-fab-button>\n      <!-- <ion-fab-button><ion-icon name=\"logo-whatsapp\"></ion-icon></ion-fab-button> -->\n    </ion-fab-list>\n  </ion-fab>\n\n  <app-footer></app-footer>\n</ion-content>\n\n";
      /***/
    },

    /***/
    "./src/app/pages/home/home-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/home/home-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/pages/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/home/home.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.module.ts ***!
      \*******************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/pages/home/home.page.ts");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/pages/home/home-routing.module.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../components/components.module */
      "./src/app/components/components.module.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(), _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/pages/home/home.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/home/home.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/home/home.page.ts ***!
      \*****************************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
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
      /* harmony import */


      var _services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/request.service */
      "./src/app/services/request.service.ts");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(langService, requestService) {
          _classCallCheck(this, HomePage);

          this.langService = langService;
          this.requestService = requestService;
          this.slideImgs = ['../../../assets/images/slides/all_products.jpeg', '../../../assets/images/slides/slide_1.jpg', '../../../assets/images/slides/slide_2.jpg', '../../../assets/images/slides/slide_3.jpg', '../../../assets/images/slides/slide_4.jpg', '../../../assets/images/slides/quinoa.jpg'];
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.langService.getImages().subscribe(function (data) {
              _this.imgSec = data;
            }); // setTimeout(() => {
            //   this.requestService.httpRequest('example').then(data => {
            //     console.warn('Data', data);
            //   }).catch( err => {
            //     console.log('Error post', err);
            //   });
            // }, 2000);
          }
        }, {
          key: "scroll",
          value: function scroll(event) {
            document.documentElement.dataset.scroll = event.detail.scrollTop;
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _services_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]
        }, {
          type: _services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/pages/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    },

    /***/
    "./src/app/services/request.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/request.service.ts ***!
      \*********************************************/

    /*! exports provided: RequestService */

    /***/
    function srcAppServicesRequestServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestService", function () {
        return RequestService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl;

      var RequestService = /*#__PURE__*/function () {
        function RequestService(httpClient, http, platform, translateService) {
          _classCallCheck(this, RequestService);

          this.httpClient = httpClient;
          this.http = http;
          this.platform = platform;
          this.translateService = translateService;
        }

        _createClass(RequestService, [{
          key: "httpRequest",
          value: function httpRequest(path, headers) {
            var _this2 = this;

            var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            if (!path.includes('.php')) {
              path = path + '.php';
            }

            var url = "".concat(serverUrl).concat(path);
            console.log('url', url);
            return new Promise(function (resolve) {
              console.log('init');

              var postSub = _this2.httpClient.post(url, '', {
                headers: headers,
                params: params
              }).subscribe(function (response) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          postSub.unsubscribe();
                          resolve(response);

                        case 2:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));
              }, function (error) {
                console.warn('Error request', error);
              });
            });
          }
        }]);

        return RequestService;
      }();

      RequestService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }];
      };

      RequestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], RequestService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-home-home-module-es5.js.map