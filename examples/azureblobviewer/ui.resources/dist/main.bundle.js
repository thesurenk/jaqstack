webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <app-azureblobviewer></app-azureblobviewer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    /*export class AppComponent implements OnInit {
      name = 'This Message is from Test Angular index.html calling app.component.ts ';
      title = 'Angular App Title';
    
      //public title : String = 'Loading title...';
      //public content : String = 'Loading content...';
    
      constructor(private httpClient: HttpClient) {
      }
    
      ngOnInit() {
      }
    }*/
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        })
        /*export class AppComponent implements OnInit {
          name = 'This Message is from Test Angular index.html calling app.component.ts ';
          title = 'Angular App Title';
        
          //public title : String = 'Loading title...';
          //public content : String = 'Loading content...';
        
          constructor(private httpClient: HttpClient) {
          }
        
          ngOnInit() {
          }
        }*/
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__azureblobviewer_azureblobviewer_component__ = __webpack_require__("../../../../../src/app/azureblobviewer/azureblobviewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_azureblob_pipe__ = __webpack_require__("../../../../../src/app/helpers/azureblob.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__azureblobviewer_azureblobviewer_component__["a" /* AzureBlobViewerComponent */], __WEBPACK_IMPORTED_MODULE_5__helpers_azureblob_pipe__["a" /* KeysPipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/azureblobviewer/azureblobviewer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/azureblobviewer/azureblobviewer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--\n<div class=\"row\">\n\n  <div class=\"col-md-4\" *ngFor=\"let key of blobsList | keys\">\n    <p>\n      <a target=\"_blank\" href=\"{{blobsList[key].blobURL}}\">\n        <img src=\"{{blobsList[key].blobURL}}\" width=\"100px\" height=\"100px\" />\n      </a>\n    </p>\n    <p><a class=\"btn btn-default\" href=\"#\">{{blobsList[key].blobName}}</a></p>\n  </div>\n</div>\n-->\n\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h2>Thumbnail imageBlobUrl</h2>\n    <img [src]=\"imageBlobUrl\">\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/azureblobviewer/azureblobviewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AzureBlobViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_azureblob_service__ = __webpack_require__("../../../../../src/app/services/azureblob.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AzureBlobViewerComponent = (function () {
    function AzureBlobViewerComponent(azureblobService, sanitizer) {
        this.azureblobService = azureblobService;
        this.sanitizer = sanitizer;
        this.imageBlobUrl = null;
        this.sanitizedImageBlobUrl = null;
    }
    AzureBlobViewerComponent.prototype.ngOnInit = function () {
        this.getAllBlobs();
        this.getThumbnail();
    };
    AzureBlobViewerComponent.prototype.getAllBlobs = function () {
        var _this = this;
        this.azureblobService.getAllBlobs()
            .subscribe(function (val) {
            _this.blobsList = val; //<====== Set value here
        }, function (response) {
            console.log("POST - getAllBlobs in error", response);
        }, function () {
            console.log("POST - getAllBlobs is now completed.");
        });
    };
    AzureBlobViewerComponent.prototype.getThumbnail = function () {
        var _this = this;
        this.azureblobService.getBlobThumbnail()
            .subscribe(function (val) {
            console.log("POST - getThumbnail- successful value returned in body", val);
            //this.turl = val; //<====== Set value here
            _this.createImageFromBlob(val);
        }, function (response) {
            console.log("POST - getThumbnail - in error", response);
        }, function () {
            console.log("POST - getThumbnail - observable is now completed.");
        });
    };
    AzureBlobViewerComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        console.log("Call createImageFromBlob()", image);
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.imageBlobUrl = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    AzureBlobViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-azureblobviewer',
            template: __webpack_require__("../../../../../src/app/azureblobviewer/azureblobviewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/azureblobviewer/azureblobviewer.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_azureblob_service__["a" /* AzureblobService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_azureblob_service__["a" /* AzureblobService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]])
    ], AzureBlobViewerComponent);
    return AzureBlobViewerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/helpers/azureblob.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        return Object.keys(value);
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Pipe */])({
            name: 'keys'
        })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/azureblob.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AzureblobService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AzureblobService = (function () {
    function AzureblobService(httpClient) {
        this.httpClient = httpClient;
        this.serverUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].BACKEND_URL + "/service/blobservice/azure/fetch";
        this.thumbnailFetchUrl = "https://southcentralus.api.cognitive.microsoft.com/vision/v2.0/generateThumbnail?width=100&height=100&smartCropp";
    }
    AzureblobService.prototype.getAllBlobs = function () {
        console.log("....AzureblobService.getAllBlobs()");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        return this.httpClient.post(this.serverUrl, JSON.stringify({
            "azureAcountName": "acsazurestore",
            "azureAcountKey": "qjC6s44AmSbAkJ7Xqdsks/jjZDIYRTY8qgWKds8w8PXdL+Q08mU/yu3Oh/4wO3sYTwNgNiA6EG66gBRWBqMBNA==",
            "azureContainer": "acsazurecontainer"
        }), { headers: headers });
    };
    AzureblobService.prototype.getBlobThumbnail = function () {
        console.log("....AzureblobService.getBlobThumbnail()");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Ocp-Apim-Subscription-Key': 'f78fdd51de304d99862c4a50c9a0ec0c'
        });
        return this.httpClient.post(this.thumbnailFetchUrl, {
            "url": "http://acsazurestore.blob.core.windows.net/acsazurecontainer/Git-Logo-1788C.png"
        }, { headers: headers, responseType: 'blob' });
    };
    AzureblobService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AzureblobService);
    return AzureblobService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    BACKEND_URL: window.location.protocol + '//' + window.location.hostname + ':' + 8080 + "/jaqstack-azure-blobviewer"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map