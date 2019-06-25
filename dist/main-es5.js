(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./demo/app.module.ts":
/*!****************************!*\
  !*** ./demo/app.module.ts ***!
  \****************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules */ "./modules/index.ts");
/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home */ "./demo/home/home.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");









_modules__WEBPACK_IMPORTED_MODULE_4__["TagInputModule"].withDefaults({
    tagInput: {
        placeholder: 'Add new tag'
    }
});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _modules__WEBPACK_IMPORTED_MODULE_4__["TagInputModule"]
            ],
            declarations: [_home_home__WEBPACK_IMPORTED_MODULE_5__["Home"]],
            bootstrap: [_home_home__WEBPACK_IMPORTED_MODULE_5__["Home"]],
            entryComponents: [_home_home__WEBPACK_IMPORTED_MODULE_5__["Home"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./demo/home/home.scss":
/*!*****************************!*\
  !*** ./demo/home/home.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":ng-deep .ng2-tag-input.foundation-theme {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 1px solid #1779ba;\n}\n:ng-deep .ng2-tag-input.foundation-theme:focus {\n  outline: 0;\n}\n:ng-deep .ng2-tag-input.foundation-theme.ng2-tag-input--dropping {\n  opacity: 0.7;\n}\n:ng-deep .ng2-tag-input.foundation-theme.ng2-tag-input--loading {\n  border: none;\n}\n:ng-deep .ng2-tag-input.foundation-theme.ng2-tag-input--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n:ng-deep .ng2-tag-input.foundation-theme .ng2-tags-container {\n  flex-wrap: wrap;\n  display: flex;\n}\n:ng-deep .ng2-tag-input.foundation-theme tag {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  color: #fff;\n  border-radius: 2px;\n  background: #1779ba;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n}\n:ng-deep .ng2-tag-input.foundation-theme tag:not(.readonly):not(.tag--editing):focus {\n  background: #115b8d;\n}\n:ng-deep .ng2-tag-input.foundation-theme tag:not(.readonly):not(.tag--editing):active {\n  background: #115b8d;\n}\n:ng-deep .ng2-tag-input.foundation-theme tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n  background: #115b8d;\n  color: #fff;\n}\n:ng-deep .ng2-tag-input.foundation-theme tag.readonly {\n  cursor: default;\n}\n:ng-deep .ng2-tag-input.foundation-theme tag.readonly:focus, :ng-deep .ng2-tag-input.foundation-theme tag:focus {\n  outline: 0;\n}\n:ng-deep .ng2-tag-input.foundation-theme tag.tag--editing {\n  cursor: text;\n}\n:ng-deep .ng2-tag-input.foundation-theme tag delete-icon {\n  transition: all 0.35s;\n  text-align: right;\n}\n:ng-deep .ng2-tag-input.foundation-theme tag delete-icon path {\n  fill: #fff;\n}\n:ng-deep .ng2-tag-input.foundation-theme tag delete-icon svg {\n  vertical-align: bottom;\n  height: 34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vaG9tZS9DOlxceGFtcHBcXGh0ZG9jc1xcbmd4LWNoaXBzL2RlbW9cXGhvbWVcXGhvbWUuc2NzcyIsImRlbW8vaG9tZS9DOlxceGFtcHBcXGh0ZG9jc1xcbmd4LWNoaXBzL21vZHVsZXNcXGNvcmVcXHN0eWxlc1xcY29yZVxcX21peGlucy5zY3NzIiwiZGVtby9ob21lL2hvbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QkE7RUN4QkksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBT0EsWUFBQTtFQUVBLGdDQUFBO0FDTko7QURVSTtFQUNJLFVBQUE7QUNSUjtBRFdJO0VBQ0ksWUFBQTtBQ1RSO0FEb0JJO0VBQ0ksWUFBQTtBQ2xCUjtBRHFCSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ25CUjtBRDBCSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FDeEJSO0FGS0E7RUM4QkksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQU9BLFdBQUE7RUFDQSxrQkFBQTtFQVVBLG1CQUFBO0VBRUEseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUMvQ0o7QURpREk7RUFDSSxtQkFBQTtBQy9DUjtBRG9ESTtFQUNJLG1CQUFBO0FDbERSO0FEdURJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDckRSO0FEeURJO0VBQ0ksZUFBQTtBQ3ZEUjtBRDBESTtFQUVJLFVBQUE7QUN6RFI7QUQ0REk7RUFHSSxZQUFBO0FDNURSO0FGeEJBO0VDZ0hJLHFCQUFBO0VBRUEsaUJBQUE7QUNyRko7QUR1Rkk7RUFDSSxVQUFBO0FDckZSO0FEd0ZJO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0FDdEZSIiwiZmlsZSI6ImRlbW8vaG9tZS9ob21lLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vbW9kdWxlcy9jb3JlL3N0eWxlcy9jb3JlL19jb3JlLnNjc3NcIjtcclxuXHJcbiRmb3VuZGF0aW9uLXByaW1hcnk6ICMxNzc5YmE7XHJcbiRmb3VuZGF0aW9uLXByaW1hcnktZGFyazogZGFya2VuKCRmb3VuZGF0aW9uLXByaW1hcnksIDEwJSk7XHJcblxyXG4kZm91bmRhdGlvbi10aGVtZTogKFxyXG4gICAgY29udGFpbmVyLWJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZm91bmRhdGlvbi1wcmltYXJ5XHJcbik7XHJcblxyXG4kZm91bmRhdGlvbi10YWctdGhlbWU6IChcclxuICAgIGJhY2tncm91bmQ6ICRmb3VuZGF0aW9uLXByaW1hcnksXHJcbiAgICBiYWNrZ3JvdW5kLWZvY3VzZWQ6ICRmb3VuZGF0aW9uLXByaW1hcnktZGFyayxcclxuICAgIGJhY2tncm91bmQtYWN0aXZlOiAkZm91bmRhdGlvbi1wcmltYXJ5LWRhcmssXHJcbiAgICBiYWNrZ3JvdW5kLWhvdmVyOiAkZm91bmRhdGlvbi1wcmltYXJ5LWRhcmssXHJcbiAgICBjb2xvcjogI2ZmZixcclxuICAgIGNvbG9yLWhvdmVyOiAjZmZmLFxyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4XHJcbik7XHJcblxyXG4kZm91bmRhdGlvbi1pY29uLXRoZW1lOiAoXHJcbiAgICBmaWxsOiAjZmZmLFxyXG4gICAgZmlsbC1mb2N1czogI2VlZSxcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjM1c1xyXG4pO1xyXG5cclxuOm5nLWRlZXAgLm5nMi10YWctaW5wdXQuZm91bmRhdGlvbi10aGVtZSB7XHJcbiAgICBAaW5jbHVkZSB0YWctaW5wdXQtdGhlbWUoJGZvdW5kYXRpb24tdGhlbWUpO1xyXG59XHJcblxyXG46bmctZGVlcCAubmcyLXRhZy1pbnB1dC5mb3VuZGF0aW9uLXRoZW1lIHRhZyB7XHJcbiAgICBAaW5jbHVkZSB0YWctdGhlbWUoJGZvdW5kYXRpb24tdGFnLXRoZW1lKTtcclxufVxyXG5cclxuOm5nLWRlZXAgLm5nMi10YWctaW5wdXQuZm91bmRhdGlvbi10aGVtZSB0YWcgZGVsZXRlLWljb24ge1xyXG4gICAgQGluY2x1ZGUgaWNvbi10aGVtZSgkZm91bmRhdGlvbi1pY29uLXRoZW1lKTtcclxufVxyXG5cclxuIiwiQG1peGluIHRhZy1pbnB1dC10aGVtZSgkdGhlbWUpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBtYXAtZ2V0KCR0aGVtZSwgdHJhbnNpdGlvbik7XHJcblxyXG4gICAgcGFkZGluZzogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItcGFkZGluZycpO1xyXG4gICAgbWluLWhlaWdodDogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItaGVpZ2h0Jyk7XHJcblxyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG5cclxuICAgIGJvcmRlci1ib3R0b206IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLWJvcmRlci1ib3R0b20nKTtcclxuICAgIGJveC1zaGFkb3c6IG1hcC1nZXQoJHRoZW1lLCAnYm94LXNoYWRvdycpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkdGhlbWUsICdib3JkZXItcmFkaXVzJyk7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmLm5nMi10YWctaW5wdXQtLWRyb3BwaW5nIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9XHJcblxyXG4gICAgJi5uZzItdGFnLWlucHV0LS1mb2N1c2VkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci1ib3JkZXItYm90dG9tLWZvY3VzZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAmLm5nMi10YWctaW5wdXQtLWludmFsaWQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLWJvcmRlci1ib3R0b20taW52YWxpZCcpO1xyXG4gICAgfVxyXG5cclxuICAgICYubmcyLXRhZy1pbnB1dC0tbG9hZGluZyB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICYubmcyLXRhZy1pbnB1dC0tZGlzYWJsZWQge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm0ge1xyXG4gICAgICAgIG1hcmdpbjogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItbWFyZ2luJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLm5nMi10YWdzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBlcnJvci1tZXNzYWdlKCR0aGVtZSkge1xyXG4gICAgZm9udC1zaXplOiBtYXAtZ2V0KCR0aGVtZSwgJ2Vycm9yLW1lc3NhZ2UtZm9udC1zaXplJyk7XHJcbiAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdlcnJvci1tZXNzYWdlLWNvbG9yJyk7XHJcbiAgICBtYXJnaW46IG1hcC1nZXQoJHRoZW1lLCAnZXJyb3ItbWVzc2FnZS1tYXJnaW4nKTtcclxufVxyXG5cclxuQG1peGluIHRhZy10aGVtZSgkdGhlbWUpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBtYXAtZ2V0KCR0aGVtZSwgJ2ZvbnQtZmFtaWx5Jyk7XHJcbiAgICBmb250LXdlaWdodDogbWFwLWdldCgkdGhlbWUsICdmb250LXdlaWdodCcpO1xyXG4gICAgZm9udC1zaXplOiBtYXAtZ2V0KCR0aGVtZSwgJ2ZvbnQtc2l6ZScpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG1hcC1nZXQoJHRoZW1lLCAnbGV0dGVyLXNwYWNpbmcnKTtcclxuXHJcbiAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdjb2xvcicpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkdGhlbWUsICdib3JkZXItcmFkaXVzJyk7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogbWFwLWdldCgkdGhlbWUsICd0cmFuc2l0aW9uJyk7XHJcblxyXG4gICAgbWFyZ2luOiBtYXAtZ2V0KCR0aGVtZSwgJ21hcmdpbicpO1xyXG4gICAgcGFkZGluZzogbWFwLWdldCgkdGhlbWUsICdwYWRkaW5nJyk7XHJcblxyXG4gICAgaGVpZ2h0OiBtYXAtZ2V0KCR0aGVtZSwgJ2hlaWdodCcpO1xyXG4gICAgbGluZS1oZWlnaHQ6IG1hcC1nZXQoJHRoZW1lLCAnbGluZS1oZWlnaHQnKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQnKTtcclxuXHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6bm90KC5yZWFkb25seSk6bm90KC50YWctLWVkaXRpbmcpOmZvY3VzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQtZm9jdXNlZCcpO1xyXG4gICAgICAgIGNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbG9yLWZvY3VzZWQnKTtcclxuICAgICAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCR0aGVtZSwgJ2JveC1zaGFkb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgucmVhZG9ubHkpOm5vdCgudGFnLS1lZGl0aW5nKTphY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCAnYmFja2dyb3VuZC1hY3RpdmUnKTtcclxuICAgICAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdjb2xvci1hY3RpdmUnKTtcclxuICAgICAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCR0aGVtZSwgJ2JveC1zaGFkb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCg6Zm9jdXMpOm5vdCgudGFnLS1lZGl0aW5nKTpub3QoOmFjdGl2ZSk6bm90KC5yZWFkb25seSk6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCAnYmFja2dyb3VuZC1ob3ZlcicpO1xyXG4gICAgICAgIGNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbG9yLWhvdmVyJyk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbWFwLWdldCgkdGhlbWUsICdib3gtc2hhZG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5yZWFkb25seSB7XHJcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG5cclxuICAgICYucmVhZG9ubHk6Zm9jdXMsXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICYudGFnLS1lZGl0aW5nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQtZWRpdGluZycpO1xyXG4gICAgICAgIGJvcmRlcjogbWFwLWdldCgkdGhlbWUsICdib3JkZXItZWRpdGluZycpO1xyXG4gICAgICAgIGN1cnNvcjogdGV4dDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHRhZy1pbnB1dC1mb3JtLXRoZW1lKCR0aGVtZSkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgICBib3JkZXI6IG1hcC1nZXQoJHRoZW1lLCAnaW5wdXQtYm9yZGVyJyk7XHJcbiAgICBwYWRkaW5nOiBtYXAtZ2V0KCR0aGVtZSwgJ2lucHV0LXBhZGRpbmcnKTtcclxuICAgIGhlaWdodDogbWFwLWdldCgkdGhlbWUsICdpbnB1dC1oZWlnaHQnKTtcclxuXHJcbiAgICBmb250LXNpemU6IG1hcC1nZXQoJHRoZW1lLCAnaW5wdXQtZm9udC1zaXplJyk7XHJcbiAgICBmb250LWZhbWlseTogbWFwLWdldCgkdGhlbWUsICdmb250LWZhbWlseScpO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJltkaXNhYmxlZD10cnVlXSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBpY29uLXRoZW1lKCR0aGVtZSkge1xyXG4gICAgd2lkdGg6IG1hcC1nZXQoJHRoZW1lLCAnd2lkdGgnKTtcclxuICAgIGhlaWdodDogbWFwLWdldCgkdGhlbWUsICdoZWlnaHQnKTtcclxuICAgIHRyYW5zaXRpb246IG1hcC1nZXQoJHRoZW1lLCAndHJhbnNpdGlvbicpO1xyXG4gICAgZGlzcGxheTogbWFwLWdldCgkdGhlbWUsICdkaXNwbGF5Jyk7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICBwYXRoIHtcclxuICAgICAgICBmaWxsOiBtYXAtZ2V0KCR0aGVtZSwgJ2ZpbGwnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdmcge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gaWNvbi10aGVtZS1mb2N1c2VkKCR0aGVtZSkge1xyXG4gICAgcGF0aCB7XHJcbiAgICAgICAgZmlsbDogbWFwLWdldCgkdGhlbWUsICdmaWxsLWZvY3VzJyk7XHJcbiAgICB9XHJcbn1cclxuIiwiOm5nLWRlZXAgLm5nMi10YWctaW5wdXQuZm91bmRhdGlvbi10aGVtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiB0ZXh0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzE3NzliYTtcbn1cbjpuZy1kZWVwIC5uZzItdGFnLWlucHV0LmZvdW5kYXRpb24tdGhlbWU6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuOm5nLWRlZXAgLm5nMi10YWctaW5wdXQuZm91bmRhdGlvbi10aGVtZS5uZzItdGFnLWlucHV0LS1kcm9wcGluZyB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbjpuZy1kZWVwIC5uZzItdGFnLWlucHV0LmZvdW5kYXRpb24tdGhlbWUubmcyLXRhZy1pbnB1dC0tbG9hZGluZyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbjpuZy1kZWVwIC5uZzItdGFnLWlucHV0LmZvdW5kYXRpb24tdGhlbWUubmcyLXRhZy1pbnB1dC0tZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG46bmctZGVlcCAubmcyLXRhZy1pbnB1dC5mb3VuZGF0aW9uLXRoZW1lIC5uZzItdGFncy1jb250YWluZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbjpuZy1kZWVwIC5uZzItdGFnLWlucHV0LmZvdW5kYXRpb24tdGhlbWUgdGFnIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjMTc3OWJhO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3V0bGluZTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46bmctZGVlcCAubmcyLXRhZy1pbnB1dC5mb3VuZGF0aW9uLXRoZW1lIHRhZzpub3QoLnJlYWRvbmx5KTpub3QoLnRhZy0tZWRpdGluZyk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjMTE1YjhkO1xufVxuOm5nLWRlZXAgLm5nMi10YWctaW5wdXQuZm91bmRhdGlvbi10aGVtZSB0YWc6bm90KC5yZWFkb25seSk6bm90KC50YWctLWVkaXRpbmcpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxMTViOGQ7XG59XG46bmctZGVlcCAubmcyLXRhZy1pbnB1dC5mb3VuZGF0aW9uLXRoZW1lIHRhZzpub3QoOmZvY3VzKTpub3QoLnRhZy0tZWRpdGluZyk6bm90KDphY3RpdmUpOm5vdCgucmVhZG9ubHkpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzExNWI4ZDtcbiAgY29sb3I6ICNmZmY7XG59XG46bmctZGVlcCAubmcyLXRhZy1pbnB1dC5mb3VuZGF0aW9uLXRoZW1lIHRhZy5yZWFkb25seSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbjpuZy1kZWVwIC5uZzItdGFnLWlucHV0LmZvdW5kYXRpb24tdGhlbWUgdGFnLnJlYWRvbmx5OmZvY3VzLCA6bmctZGVlcCAubmcyLXRhZy1pbnB1dC5mb3VuZGF0aW9uLXRoZW1lIHRhZzpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG46bmctZGVlcCAubmcyLXRhZy1pbnB1dC5mb3VuZGF0aW9uLXRoZW1lIHRhZy50YWctLWVkaXRpbmcge1xuICBjdXJzb3I6IHRleHQ7XG59XG5cbjpuZy1kZWVwIC5uZzItdGFnLWlucHV0LmZvdW5kYXRpb24tdGhlbWUgdGFnIGRlbGV0ZS1pY29uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbjpuZy1kZWVwIC5uZzItdGFnLWlucHV0LmZvdW5kYXRpb24tdGhlbWUgdGFnIGRlbGV0ZS1pY29uIHBhdGgge1xuICBmaWxsOiAjZmZmO1xufVxuOm5nLWRlZXAgLm5nMi10YWctaW5wdXQuZm91bmRhdGlvbi10aGVtZSB0YWcgZGVsZXRlLWljb24gc3ZnIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgaGVpZ2h0OiAzNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./demo/home/home.ts":
/*!***************************!*\
  !*** ./demo/home/home.ts ***!
  \***************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var Home = /** @class */ (function () {
    function Home(http) {
        var _this = this;
        this.http = http;
        this.disabled = true;
        this.items = ["Javascript", "Typescript"];
        this.inputText = "text";
        this.itemsAsObjects = [{ id: 0, name: "Angular", readonly: true }, { id: 1, name: "React" }];
        this.autocompleteItems = ["Javascript", "Typescript", "Rust", "Go"];
        this.autocompleteGroupedItems = [
            { value: "Javascript", category: "Languages" },
            { value: "Typescript", category: "Languages" },
            { value: "Rust", category: "Languages" },
            { value: "Pizza", category: "Food" },
            { value: "Porridge", category: "Food" },
            { value: "Hamburger", category: "Food" },
            { value: "Strawberry", category: "Fruit" },
            { value: "Pineapple", category: "Fruit" },
            { value: "Apple", category: "Fruit" }
        ];
        this.autocompleteItemsAsObjects = [
            { value: "Item1", id: 0, extra: 0 },
            { value: "item2", id: 1, extra: 1 },
            "item3"
        ];
        this.dragAndDropExample = ["C#", "Java"];
        this.dragAndDropObjects = [
            { display: "Javascript", value: "Javascript" },
            { display: "Typescript", value: "Typescript" }
        ];
        this.dragAndDropStrings = ["CoffeScript", "Scala.js"];
        this.requestAutocompleteItems = function (text) {
            var url = "https://api.github.com/search/repositories?q=" + text;
            return _this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (items) { return items.map(function (item) { return item.full_name; }); }));
        };
        this.requestAutocompleteItemsFake = function (text) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(["item1", "item2", "item3"]);
        };
        this.options = {
            readonly: undefined,
            placeholder: "+ Tag"
        };
        this.asyncErrorMessages = {
            isNan: "Please only add numbers"
        };
        this.validators = [this.startsWithAt, this.endsWith$];
        this.asyncValidators = [this.validateAsync];
        this.errorMessages = {
            "startsWithAt@": "Your items need to start with '@'",
            endsWith$: "Your items need to end with '$'"
        };
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]().group({
            chips: [["chip"], []]
        });
    }
    Home.prototype.onAdd = function (item) {
        console.log("tag added: value is " + item);
    };
    Home.prototype.onRemove = function (item) {
        console.log("tag removed: value is " + item);
    };
    Home.prototype.onSelect = function (item) {
        console.log("tag selected: value is " + item);
    };
    Home.prototype.onFocus = function (item) {
        console.log("input focused: current value is " + item);
    };
    Home.prototype.onTextChange = function (text) {
        console.log("text changed: value is " + text);
    };
    Home.prototype.onBlur = function (item) {
        console.log("input blurred: current value is " + item);
    };
    Home.prototype.onTagEdited = function (item) {
        console.log("tag edited: current value is " + item);
    };
    Home.prototype.onValidationError = function (item) {
        console.log("invalid tag " + item);
    };
    Home.prototype.transform = function (value) {
        var item = { display: "@" + value, value: "@" + value };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(item);
    };
    Home.prototype.startsWithAt = function (control) {
        if (control.value.charAt(0) !== "@") {
            return {
                "startsWithAt@": true
            };
        }
        return null;
    };
    Home.prototype.endsWith$ = function (control) {
        if (control.value.charAt(control.value.length - 1) !== "$") {
            return {
                endsWith$: true
            };
        }
        return null;
    };
    Home.prototype.validateAsync = function (control) {
        return new Promise(function (resolve) {
            var value = control.value;
            var result = isNaN(value)
                ? {
                    isNan: true
                }
                : null;
            setTimeout(function () {
                resolve(result);
            }, 400);
        });
    };
    Home.prototype.onAdding = function (tag) {
        var confirm = window.confirm("Do you really want to add this tag?");
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(tag).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () { return confirm; }));
    };
    Home.prototype.onRemoving = function (tag) {
        var confirm = window.confirm("Do you really want to remove this tag?");
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(tag).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () { return confirm; }));
    };
    Home.prototype.asyncOnAdding = function (tag) {
        var confirm = window.confirm("Do you really want to add this tag?");
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(tag).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () { return confirm; }));
    };
    Home.prototype.insertInputTag = function () {
        if (this.inputText) {
            this.items.push(this.inputText);
            this.inputText = "";
        }
    };
    Home = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app",
            template: __webpack_require__(/*! raw-loader!./home.html */ "./node_modules/raw-loader/index.js!./demo/home/home.html"),
            styles: [__webpack_require__(/*! ./home.scss */ "./demo/home/home.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], Home);
    return Home;
}());



/***/ }),

/***/ "./demo/main.ts":
/*!**********************!*\
  !*** ./demo/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./demo/app.module.ts");


Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./modules/components/dropdown/index.ts":
/*!**********************************************!*\
  !*** ./modules/components/dropdown/index.ts ***!
  \**********************************************/
/*! exports provided: TagInputDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tag_input_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-input-dropdown.component */ "./modules/components/dropdown/tag-input-dropdown.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagInputDropdown", function() { return _tag_input_dropdown_component__WEBPACK_IMPORTED_MODULE_0__["TagInputDropdown"]; });




/***/ }),

/***/ "./modules/components/dropdown/tag-input-dropdown.component.ts":
/*!*********************************************************************!*\
  !*** ./modules/components/dropdown/tag-input-dropdown.component.ts ***!
  \*********************************************************************/
/*! exports provided: TagInputDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputDropdown", function() { return TagInputDropdown; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-material-dropdown */ "./node_modules/ng2-material-dropdown/fesm5/ng2-material-dropdown.js");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../defaults */ "./modules/defaults.ts");
/* harmony import */ var _tag_input_tag_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tag-input/tag-input */ "./modules/components/tag-input/tag-input.ts");






var TagInputDropdown = /** @class */ (function () {
    function TagInputDropdown(injector) {
        var _this = this;
        this.injector = injector;
        /**
         * @name offset
         */
        this.offset = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.offset;
        /**
         * @name focusFirstElement
         */
        this.focusFirstElement = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.focusFirstElement;
        /**
         * - show autocomplete dropdown if the value of input is empty
         * @name showDropdownIfEmpty
         */
        this.showDropdownIfEmpty = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.showDropdownIfEmpty;
        /**
         * - desc minimum text length in order to display the autocomplete dropdown
         * @name minimumTextLength
         */
        this.minimumTextLength = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.minimumTextLength;
        /**
         * - number of items to display in the autocomplete dropdown
         * @name limitItemsTo
         */
        this.limitItemsTo = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.limitItemsTo;
        /**
         * @name displayBy
         */
        this.displayBy = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.displayBy;
        /**
         * @name identifyBy
         */
        this.identifyBy = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.identifyBy;
        /**
         * @description a function a developer can use to implement custom matching for the autocomplete
         * @name matchingFn
         */
        this.matchingFn = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.matchingFn;
        /**
         * @name appendToBody
         */
        this.appendToBody = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.appendToBody;
        /**
         * @name keepOpen
         * @description option to leave dropdown open when adding a new item
         */
        this.keepOpen = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.keepOpen;
        /**
         * @name dynamicUpdate
         */
        this.dynamicUpdate = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.dynamicUpdate;
        /**
         * @name zIndex
         */
        this.zIndex = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.zIndex;
        /**
         * list of items that match the current value of the input (for autocomplete)
         * @name items
         */
        this.items = [];
        /**
         * @name tagInput
         */
        this.tagInput = this.injector.get(_tag_input_tag_input__WEBPACK_IMPORTED_MODULE_5__["TagInputComponent"]);
        /**
         * @name _autocompleteItems
         */
        this._autocompleteItems = [];
        /**
         *
         * @name show
         */
        this.show = function () {
            var maxItemsReached = _this.tagInput.items.length === _this.tagInput.maxItems;
            var value = _this.getFormValue();
            var hasMinimumText = value.trim().length >= _this.minimumTextLength;
            var position = _this.calculatePosition();
            var items = _this.getMatchingItems(value);
            var hasItems = items.length > 0;
            var isHidden = _this.isVisible === false;
            var showDropdownIfEmpty = _this.showDropdownIfEmpty && hasItems && !value;
            var isDisabled = _this.tagInput.disable;
            var shouldShow = isHidden && ((hasItems && hasMinimumText) || showDropdownIfEmpty);
            var shouldHide = _this.isVisible && !hasItems;
            if (_this.autocompleteObservable && hasMinimumText) {
                return _this.getItemsFromObservable(value);
            }
            if ((!_this.showDropdownIfEmpty && !value) || maxItemsReached || isDisabled) {
                return _this.dropdown.hide();
            }
            console.log(items);
            _this.setItems(items);
            if (shouldShow) {
                _this.dropdown.show(position);
            }
            else if (shouldHide) {
                _this.hide();
            }
        };
        /**
         * @name requestAdding
         * @param item {Ng2MenuItem}
         */
        this.requestAdding = function (item) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var tag;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tag = this.createTagModel(item);
                        return [4 /*yield*/, this.tagInput.onAddingRequested(true, tag).catch(function () { })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * @name resetItems
         */
        this.resetItems = function () {
            _this.items = [];
        };
        /**
         * @name getItemsFromObservable
         * @param text
         */
        this.getItemsFromObservable = function (text) {
            _this.setLoadingState(true);
            var subscribeFn = function (data) {
                // hide loading animation
                _this.setLoadingState(false)
                    // add items
                    .populateItems(data);
                _this.setItems(_this.getMatchingItems(text));
                if (_this.items.length) {
                    _this.dropdown.show(_this.calculatePosition());
                }
                else {
                    _this.dropdown.hide();
                }
            };
            _this.autocompleteObservable(text)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
                .subscribe(subscribeFn, function () { return _this.setLoadingState(false); });
        };
    }
    Object.defineProperty(TagInputDropdown.prototype, "autocompleteItems", {
        /**
         * @name autocompleteItems
         * @desc array of items that will populate the autocomplete
         */
        get: function () {
            var _this = this;
            var items = this._autocompleteItems;
            if (!items) {
                return [];
            }
            return items.map(function (item, index) {
                var _a;
                if (typeof item === "string") {
                    return _a = {},
                        _a[_this.displayBy] = item,
                        _a[_this.identifyBy] = item,
                        _a;
                }
                else {
                    if (!item.id) {
                        item.id = index;
                    }
                    return item;
                }
            });
        },
        /**
         * @name autocompleteItems
         * @param items
         */
        set: function (items) {
            this._autocompleteItems = items;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name ngAfterviewInit
     */
    TagInputDropdown.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.onItemClicked().subscribe(function (item) {
            _this.requestAdding(item);
        });
        // reset itemsMatching array when the dropdown is hidden
        this.onHide().subscribe(this.resetItems);
        var DEBOUNCE_TIME = 200;
        var KEEP_OPEN = this.keepOpen;
        this.tagInput.onTextChange
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(DEBOUNCE_TIME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (value) {
            if (KEEP_OPEN === false) {
                return value.length > 0;
            }
            return true;
        }))
            .subscribe(this.show);
    };
    /**
     * @name updatePosition
     */
    TagInputDropdown.prototype.updatePosition = function () {
        var position = this.tagInput.inputForm.getElementPosition();
        this.dropdown.menu.updatePosition(position, this.dynamicUpdate);
    };
    Object.defineProperty(TagInputDropdown.prototype, "isVisible", {
        /**
         * @name isVisible
         */
        get: function () {
            return this.dropdown.menu.state.menuState.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name onHide
     */
    TagInputDropdown.prototype.onHide = function () {
        return this.dropdown.onHide;
    };
    /**
     * @name onItemClicked
     */
    TagInputDropdown.prototype.onItemClicked = function () {
        return this.dropdown.onItemClicked;
    };
    Object.defineProperty(TagInputDropdown.prototype, "selectedItem", {
        /**
         * @name selectedItem
         */
        get: function () {
            return this.dropdown.menu.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputDropdown.prototype, "state", {
        /**
         * @name state
         */
        get: function () {
            return this.dropdown.menu.state;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name hide
     */
    TagInputDropdown.prototype.hide = function () {
        this.resetItems();
        this.dropdown.hide();
    };
    /**
     * @name scrollListener
     */
    TagInputDropdown.prototype.scrollListener = function () {
        if (!this.isVisible || !this.dynamicUpdate) {
            return;
        }
        this.updatePosition();
    };
    /**
     * @name onWindowBlur
     */
    TagInputDropdown.prototype.onWindowBlur = function () {
        this.dropdown.hide();
    };
    /**
     * @name getFormValue
     */
    TagInputDropdown.prototype.getFormValue = function () {
        var formValue = this.tagInput.formValue;
        return formValue ? formValue.toString().trim() : "";
    };
    /**
     * @name calculatePosition
     */
    TagInputDropdown.prototype.calculatePosition = function () {
        return this.tagInput.inputForm.getElementPosition();
    };
    /**
     * @name createTagModel
     * @param item
     */
    TagInputDropdown.prototype.createTagModel = function (item) {
        var _a;
        var display = typeof item.value === "string" ? item.value : item.value[this.displayBy];
        var value = typeof item.value === "string" ? item.value : item.value[this.identifyBy];
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item.value, (_a = {}, _a[this.tagInput.displayBy] = display, _a[this.tagInput.identifyBy] = value, _a));
    };
    /**
     *
     * @param value {string}
     */
    TagInputDropdown.prototype.getMatchingItems = function (value) {
        var _this = this;
        if (!value && !this.showDropdownIfEmpty) {
            return [];
        }
        var dupesAllowed = this.tagInput.allowDupes;
        return this.autocompleteItems.filter(function (item) {
            var hasValue = dupesAllowed
                ? false
                : _this.tagInput.tags.some(function (tag) {
                    var identifyBy = _this.tagInput.identifyBy;
                    var model = typeof tag.model === "string" ? tag.model : tag.model[identifyBy];
                    return model === item[_this.identifyBy];
                });
            return _this.matchingFn(value, item) && hasValue === false;
        });
    };
    /**
     * @name setItems
     */
    TagInputDropdown.prototype.setItems = function (items) {
        var finalItems = [];
        var categoryItems = [];
        var _loop_1 = function (item) {
            if (item.category) {
                if (!categoryItems.some(function (categoryItem) {
                    return categoryItem.id === item.category;
                })) {
                    var categoryItem = {
                        id: item.category,
                        value: item.category,
                        isCategory: true
                    };
                    categoryItems.push(categoryItem);
                    finalItems.push(categoryItem);
                }
            }
            finalItems.push(item);
        };
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            _loop_1(item);
        }
        this.items = finalItems;
        //this.items = items.slice(0, this.limitItemsTo || items.length);
    };
    /**
     * @name populateItems
     * @param data
     */
    TagInputDropdown.prototype.populateItems = function (data) {
        var _this = this;
        this.autocompleteItems = data.map(function (item) {
            var _a;
            return typeof item === "string"
                ? (_a = {},
                    _a[_this.displayBy] = item,
                    _a[_this.identifyBy] = item,
                    _a) : item;
        });
        return this;
    };
    /**
     * @name setLoadingState
     * @param state
     */
    TagInputDropdown.prototype.setLoadingState = function (state) {
        this.tagInput.isLoading = state;
        return this;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_3__["Ng2Dropdown"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_3__["Ng2Dropdown"])
    ], TagInputDropdown.prototype, "dropdown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], TagInputDropdown.prototype, "templates", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TagInputDropdown.prototype, "offset", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputDropdown.prototype, "focusFirstElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputDropdown.prototype, "showDropdownIfEmpty", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], TagInputDropdown.prototype, "autocompleteObservable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputDropdown.prototype, "minimumTextLength", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TagInputDropdown.prototype, "limitItemsTo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputDropdown.prototype, "displayBy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputDropdown.prototype, "identifyBy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], TagInputDropdown.prototype, "matchingFn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputDropdown.prototype, "appendToBody", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputDropdown.prototype, "keepOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputDropdown.prototype, "dynamicUpdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputDropdown.prototype, "zIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], TagInputDropdown.prototype, "autocompleteItems", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TagInputDropdown.prototype, "scrollListener", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:blur"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TagInputDropdown.prototype, "onWindowBlur", null);
    TagInputDropdown = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "tag-input-dropdown",
            template: __webpack_require__(/*! raw-loader!./tag-input-dropdown.template.html */ "./node_modules/raw-loader/index.js!./modules/components/dropdown/tag-input-dropdown.template.html"),
            styles: [__webpack_require__(/*! ./tag-input-dropdown.css */ "./modules/components/dropdown/tag-input-dropdown.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TagInputDropdown);
    return TagInputDropdown;
}());



/***/ }),

/***/ "./modules/components/dropdown/tag-input-dropdown.css":
/*!************************************************************!*\
  !*** ./modules/components/dropdown/tag-input-dropdown.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-menu-item .ng-menu-item-content {\r\n  margin-left: 1em;\r\n  opacity: 0.7;\r\n}\r\n\r\n.ng-menu-item--category {\r\n  pointer-events: none;\r\n  cursor: default;\r\n}\r\n\r\n.ng-menu-item--category .ng-menu-item-content {\r\n  font-size: 1.2em;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tcG9uZW50cy9kcm9wZG93bi90YWctaW5wdXQtZHJvcGRvd24uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJtb2R1bGVzL2NvbXBvbmVudHMvZHJvcGRvd24vdGFnLWlucHV0LWRyb3Bkb3duLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1tZW51LWl0ZW0gLm5nLW1lbnUtaXRlbS1jb250ZW50IHtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLm5nLW1lbnUtaXRlbS0tY2F0ZWdvcnkge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLm5nLW1lbnUtaXRlbS0tY2F0ZWdvcnkgLm5nLW1lbnUtaXRlbS1jb250ZW50IHtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./modules/components/icon/icon.scss":
/*!*******************************************!*\
  !*** ./modules/components/icon/icon.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dark tag:focus {\n  box-shadow: 0 0 0 1px #323232;\n}\n\n.ng2-tag-input.bootstrap3-info {\n  background-color: #fff;\n  display: inline-block;\n  color: #555;\n  vertical-align: middle;\n  max-width: 100%;\n  height: 42px;\n  line-height: 44px;\n}\n\n.ng2-tag-input.bootstrap3-info input {\n  border: none;\n  box-shadow: none;\n  outline: none;\n  background-color: transparent;\n  padding: 0 6px;\n  margin: 0;\n  width: auto;\n  max-width: inherit;\n}\n\n.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder {\n  color: #777;\n  opacity: 1;\n}\n\n.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder {\n  color: #777;\n}\n\n.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder {\n  color: #777;\n}\n\n.ng2-tag-input.bootstrap3-info input:focus {\n  border: none;\n  box-shadow: none;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused {\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n  border: 1px solid #ccc;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n  box-shadow: inset 0 1px 1px #d9534f;\n}\n\n.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  transition: all 0.25s;\n  padding: 0.25rem 0;\n  min-height: 32px;\n  cursor: text;\n  border-bottom: 2px solid #efefef;\n}\n\n.ng2-tag-input:focus {\n  outline: 0;\n}\n\n.ng2-tag-input.ng2-tag-input--dropping {\n  opacity: 0.7;\n}\n\n.ng2-tag-input.ng2-tag-input--focused {\n  border-bottom: 2px solid #2196F3;\n}\n\n.ng2-tag-input.ng2-tag-input--invalid {\n  border-bottom: 2px solid #f44336;\n}\n\n.ng2-tag-input.ng2-tag-input--loading {\n  border: none;\n}\n\n.ng2-tag-input.ng2-tag-input--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.ng2-tag-input form {\n  margin: 0.1em 0;\n}\n\n.ng2-tag-input .ng2-tags-container {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.minimal.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 1px solid transparent;\n}\n\n.minimal.ng2-tag-input:focus {\n  outline: 0;\n}\n\n.minimal.ng2-tag-input.ng2-tag-input--dropping {\n  opacity: 0.7;\n}\n\n.minimal.ng2-tag-input.ng2-tag-input--loading {\n  border: none;\n}\n\n.minimal.ng2-tag-input.ng2-tag-input--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.minimal.ng2-tag-input .ng2-tags-container {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.dark.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #444;\n}\n\n.dark.ng2-tag-input:focus {\n  outline: 0;\n}\n\n.dark.ng2-tag-input.ng2-tag-input--dropping {\n  opacity: 0.7;\n}\n\n.dark.ng2-tag-input.ng2-tag-input--loading {\n  border: none;\n}\n\n.dark.ng2-tag-input.ng2-tag-input--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.dark.ng2-tag-input .ng2-tags-container {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.bootstrap.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #efefef;\n}\n\n.bootstrap.ng2-tag-input:focus {\n  outline: 0;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--dropping {\n  opacity: 0.7;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--focused {\n  border-bottom: 2px solid #0275d8;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--invalid {\n  border-bottom: 2px solid #d9534f;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--loading {\n  border: none;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.bootstrap.ng2-tag-input .ng2-tags-container {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.bootstrap3-info.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  padding: 4px;\n  cursor: text;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  border-radius: 4px;\n}\n\n.bootstrap3-info.ng2-tag-input:focus {\n  outline: 0;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping {\n  opacity: 0.7;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n  border-bottom: 1px solid #d9534f;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading {\n  border: none;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.bootstrap3-info.ng2-tag-input form {\n  margin: 0.1em 0;\n}\n\n.bootstrap3-info.ng2-tag-input .ng2-tags-container {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.error-message {\n  font-size: 0.8em;\n  color: #f44336;\n  margin: 0.5em 0 0 0;\n}\n\n.bootstrap .error-message {\n  color: #d9534f;\n}\n\n:host(delete-icon) {\n  width: 20px;\n  height: 16px;\n  transition: all 0.15s;\n  display: inline-block;\n  text-align: right;\n}\n\n:host(delete-icon) path {\n  fill: #444;\n}\n\n:host(delete-icon) svg {\n  vertical-align: bottom;\n  height: 34px;\n}\n\n:host(delete-icon):hover {\n  -webkit-transform: scale(1.5) translateY(-3px);\n          transform: scale(1.5) translateY(-3px);\n}\n\n:host-context(.dark) {\n  text-align: right;\n}\n\n:host-context(.dark) path {\n  fill: #fff;\n}\n\n:host-context(.dark) svg {\n  vertical-align: bottom;\n  height: 34px;\n}\n\n:host-context(.minimal) {\n  text-align: right;\n}\n\n:host-context(.minimal) path {\n  fill: #444;\n}\n\n:host-context(.minimal) svg {\n  vertical-align: bottom;\n  height: 34px;\n}\n\n:host-context(.bootstrap) {\n  text-align: right;\n}\n\n:host-context(.bootstrap) path {\n  fill: #fff;\n}\n\n:host-context(.bootstrap) svg {\n  vertical-align: bottom;\n  height: 34px;\n}\n\n:host-context(tag:focus) path,\n:host-context(tag:active) path {\n  fill: #fff;\n}\n\n:host-context(.dark tag:focus) path,\n:host-context(.dark tag:active) path {\n  fill: #000;\n}\n\n:host-context(.minimal tag:focus) path,\n:host-context(.minimal tag:active) path {\n  fill: #000;\n}\n\n:host-context(.bootstrap tag:focus) path,\n:host-context(.bootstrap tag:active) path {\n  fill: #fff;\n}\n\n:host-context(.bootstrap3-info) {\n  height: inherit;\n}\n\n:host-context(.bootstrap3-info) path {\n  fill: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tcG9uZW50cy9pY29uL0M6XFx4YW1wcFxcaHRkb2NzXFxuZ3gtY2hpcHMvbW9kdWxlc1xcY29tcG9uZW50c1xcaWNvblxcaWNvbi5zY3NzIiwibW9kdWxlcy9jb21wb25lbnRzL2ljb24vaWNvbi5zY3NzIiwibW9kdWxlcy9jb21wb25lbnRzL2ljb24vQzpcXHhhbXBwXFxodGRvY3NcXG5neC1jaGlwcy9tb2R1bGVzXFxjb3JlXFxzdHlsZXNcXHRoZW1lc1xcX2Jvb3RzdHJhcDMtaW5mby10aGVtZS5zY3NzIiwibW9kdWxlcy9jb21wb25lbnRzL2ljb24vQzpcXHhhbXBwXFxodGRvY3NcXG5neC1jaGlwcy9tb2R1bGVzXFxjb3JlXFxzdHlsZXNcXHRoZW1lc1xcX3RoZW1lcy5zY3NzIiwibW9kdWxlcy9jb21wb25lbnRzL2ljb24vQzpcXHhhbXBwXFxodGRvY3NcXG5neC1jaGlwcy9tb2R1bGVzXFxjb3JlXFxzdHlsZXNcXGNvcmVcXF9taXhpbnMuc2NzcyIsIm1vZHVsZXMvY29tcG9uZW50cy9pY29uL0M6XFx4YW1wcFxcaHRkb2NzXFxuZ3gtY2hpcHMvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBO0VBQ0ksNkJBQUE7QUNsQko7O0FDNEJBO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7QUQxQko7O0FDNkJBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUQxQko7O0FDNkJBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUQxQko7O0FDNkJBO0VBQ0ksV0FBQTtBRDFCSjs7QUM2QkE7RUFDSSxXQUFBO0FEMUJKOztBQzZCQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBRDFCSjs7QUM2QkE7RUFDSSw4Q0FBQTtFQUNBLHNCQUFBO0FEMUJKOztBQzZCQTtFQUNJLG1DQUFBO0FEMUJKOztBRXpDQTtFQ1JJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUVBLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUVBLFlBQUE7RUFFQSxnQ0FBQTtBSGlESjs7QUc3Q0k7RUFDSSxVQUFBO0FIK0NSOztBRzVDSTtFQUNJLFlBQUE7QUg4Q1I7O0FHM0NJO0VBQ0ksZ0NBQUE7QUg2Q1I7O0FHMUNJO0VBQ0ksZ0NBQUE7QUg0Q1I7O0FHekNJO0VBQ0ksWUFBQTtBSDJDUjs7QUd4Q0k7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUgwQ1I7O0FHdkNJO0VBQ0ksZUFBQTtBSHlDUjs7QUd0Q0k7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBSHdDUjs7QUUzRUE7RUNaSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFPQSxZQUFBO0VBRUEsb0NBQUE7QUhvRko7O0FHaEZJO0VBQ0ksVUFBQTtBSGtGUjs7QUcvRUk7RUFDSSxZQUFBO0FIaUZSOztBR3RFSTtFQUNJLFlBQUE7QUh3RVI7O0FHckVJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FIdUVSOztBR2hFSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FIa0VSOztBRWpHQTtFQ2hCSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFPQSxZQUFBO0VBRUEsNkJBQUE7QUg4R0o7O0FHMUdJO0VBQ0ksVUFBQTtBSDRHUjs7QUd6R0k7RUFDSSxZQUFBO0FIMkdSOztBR2hHSTtFQUNJLFlBQUE7QUhrR1I7O0FHL0ZJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FIaUdSOztBRzFGSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FINEZSOztBRXZIQTtFQ3BCSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFPQSxZQUFBO0VBRUEsZ0NBQUE7QUh3SUo7O0FHcElJO0VBQ0ksVUFBQTtBSHNJUjs7QUduSUk7RUFDSSxZQUFBO0FIcUlSOztBR2xJSTtFQUNJLGdDQUFBO0FIb0lSOztBR2pJSTtFQUNJLGdDQUFBO0FIbUlSOztBR2hJSTtFQUNJLFlBQUE7QUhrSVI7O0FHL0hJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FIaUlSOztBRzFISTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FINEhSOztBRW5KQTtFQ3hCSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFJQSxZQUFBO0VBR0EsWUFBQTtFQUdBLGdEQUFBO0VBQ0Esa0JBQUE7QUh3S0o7O0FHdEtJO0VBQ0ksVUFBQTtBSHdLUjs7QUdyS0k7RUFDSSxZQUFBO0FIdUtSOztBR2hLSTtFQUNJLGdDQUFBO0FIa0tSOztBRy9KSTtFQUNJLFlBQUE7QUhpS1I7O0FHOUpJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FIZ0tSOztBRzdKSTtFQUNJLGVBQUE7QUgrSlI7O0FHNUpJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUg4SlI7O0FFakxBO0VDd0JJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FINkpKOztBRW5MQTtFQ3FCSSxjQUFBO0FIa0tKOztBSXROQTtFRDZJSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBSDZFSjs7QUczRUk7RUFDSSxVQUFBO0FINkVSOztBRzFFSTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtBSDRFUjs7QUlqT0E7RUFDSSw4Q0FBQTtVQUFBLHNDQUFBO0FKb09KOztBSWpPQTtFRHlJSSxpQkFBQTtBSDRGSjs7QUcxRkk7RUFDSSxVQUFBO0FINEZSOztBR3pGSTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtBSDJGUjs7QUl4T0E7RURxSUksaUJBQUE7QUh1R0o7O0FHckdJO0VBQ0ksVUFBQTtBSHVHUjs7QUdwR0k7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUhzR1I7O0FJL09BO0VEaUlJLGlCQUFBO0FIa0hKOztBR2hISTtFQUNJLFVBQUE7QUhrSFI7O0FHL0dJO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0FIaUhSOztBRzVHSTs7RUFDSSxVQUFBO0FIZ0hSOztBR2pISTs7RUFDSSxVQUFBO0FIcUhSOztBR3RISTs7RUFDSSxVQUFBO0FIMEhSOztBRzNISTs7RUFDSSxVQUFBO0FIK0hSOztBSXRQQTtFQUVJLGVBQUE7QUp3UEo7O0FHcElJO0VBQ0ksVUFBQTtBSHNJUiIsImZpbGUiOiJtb2R1bGVzL2NvbXBvbmVudHMvaWNvbi9pY29uLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZGFyay10aGVtZTogKFxyXG4gICAgY29udGFpbmVyLWJvcmRlci1ib3R0b206IDJweCBzb2xpZCBtYXAtZ2V0KCRjb2xvci1wcmltYXJ5LCAnZGFyaycpXHJcbik7XHJcblxyXG4kZGFyay10YWctdGhlbWU6IChcclxuICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbG9yLXByaW1hcnksICdkYXJrJyksXHJcbiAgICBjb2xvcjogI2Y5ZjlmOSxcclxuICAgIGJhY2tncm91bmQtZm9jdXNlZDogbWFwLWdldCgkY29sb3ItZm9jdXNlZCwgJ2RhcmsnKSxcclxuICAgIGJhY2tncm91bmQtaG92ZXI6IGRhcmtlbihtYXAtZ2V0KCRjb2xvci1wcmltYXJ5LCAnZGFyaycpLCAxMCUpLFxyXG4gICAgY29sb3ItZm9jdXNlZDogbWFwLWdldCgkY29sb3ItcHJpbWFyeSwgJ2RhcmsnKSxcclxuICAgIGNvbG9yLWhvdmVyOiAjZjlmOWY5LFxyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4XHJcbik7XHJcblxyXG4kZGFyay1pY29uLXRoZW1lOiAoXHJcbiAgICBmaWxsOiBtYXAtZ2V0KCRjb2xvci1hcnJvdywgJ2RhcmsnKSxcclxuICAgIGZpbGwtZm9jdXM6IG1hcC1nZXQoJGNvbG9yLWFycm93LWZvY3VzZWQsICdkYXJrJylcclxuKTtcclxuXHJcbi5kYXJrIHRhZzpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzMyMzIzMjtcclxufVxyXG4iLCIuZGFyayB0YWc6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzMyMzIzMjtcbn1cblxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzU1NTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xufVxuXG4ubmcyLXRhZy1pbnB1dC5ib290c3RyYXAzLWluZm8gaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwIDZweDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4ubmcyLXRhZy1pbnB1dC5ib290c3RyYXAzLWluZm8gLmZvcm0tY29udHJvbCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNzc3O1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubmcyLXRhZy1pbnB1dC5ib290c3RyYXAzLWluZm8gLmZvcm0tY29udHJvbCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzc3Nztcbn1cblxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIC5mb3JtLWNvbnRyb2wgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzc3Nztcbn1cblxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIGlucHV0OmZvY3VzIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZm9jdXNlZCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1pbnZhbGlkIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4ICNkOTUzNGY7XG59XG5cbi5uZzItdGFnLWlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMDtcbiAgbWluLWhlaWdodDogMzJweDtcbiAgY3Vyc29yOiB0ZXh0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VmZWZlZjtcbn1cbi5uZzItdGFnLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWRyb3BwaW5nIHtcbiAgb3BhY2l0eTogMC43O1xufVxuLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZm9jdXNlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjE5NkYzO1xufVxuLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0taW52YWxpZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjQ0MzM2O1xufVxuLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tbG9hZGluZyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLm5nMi10YWctaW5wdXQgZm9ybSB7XG4gIG1hcmdpbjogMC4xZW0gMDtcbn1cbi5uZzItdGFnLWlucHV0IC5uZzItdGFncy1jb250YWluZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5taW5pbWFsLm5nMi10YWctaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogdGV4dDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLm1pbmltYWwubmcyLXRhZy1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4ubWluaW1hbC5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWRyb3BwaW5nIHtcbiAgb3BhY2l0eTogMC43O1xufVxuLm1pbmltYWwubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1sb2FkaW5nIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1pbmltYWwubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5taW5pbWFsLm5nMi10YWctaW5wdXQgLm5nMi10YWdzLWNvbnRhaW5lciB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRhcmsubmcyLXRhZy1pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiB0ZXh0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQ0NDtcbn1cbi5kYXJrLm5nMi10YWctaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuLmRhcmsubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kcm9wcGluZyB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5kYXJrLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tbG9hZGluZyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kYXJrLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uZGFyay5uZzItdGFnLWlucHV0IC5uZzItdGFncy1jb250YWluZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ib290c3RyYXAubmcyLXRhZy1pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiB0ZXh0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VmZWZlZjtcbn1cbi5ib290c3RyYXAubmcyLXRhZy1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4uYm9vdHN0cmFwLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZHJvcHBpbmcge1xuICBvcGFjaXR5OiAwLjc7XG59XG4uYm9vdHN0cmFwLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZm9jdXNlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDI3NWQ4O1xufVxuLmJvb3RzdHJhcC5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWludmFsaWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Q5NTM0Zjtcbn1cbi5ib290c3RyYXAubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1sb2FkaW5nIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmJvb3RzdHJhcC5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLmJvb3RzdHJhcC5uZzItdGFnLWlucHV0IC5uZzItdGFncy1jb250YWluZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNHB4O1xuICBjdXJzb3I6IHRleHQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmJvb3RzdHJhcDMtaW5mby5uZzItdGFnLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kcm9wcGluZyB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1pbnZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOTUzNGY7XG59XG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tbG9hZGluZyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dCBmb3JtIHtcbiAgbWFyZ2luOiAwLjFlbSAwO1xufVxuLmJvb3RzdHJhcDMtaW5mby5uZzItdGFnLWlucHV0IC5uZzItdGFncy1jb250YWluZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6ICNmNDQzMzY7XG4gIG1hcmdpbjogMC41ZW0gMCAwIDA7XG59XG5cbi5ib290c3RyYXAgLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogI2Q5NTM0Zjtcbn1cblxuOmhvc3QoZGVsZXRlLWljb24pIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMTZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuOmhvc3QoZGVsZXRlLWljb24pIHBhdGgge1xuICBmaWxsOiAjNDQ0O1xufVxuOmhvc3QoZGVsZXRlLWljb24pIHN2ZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIGhlaWdodDogMzRweDtcbn1cblxuOmhvc3QoZGVsZXRlLWljb24pOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpIHRyYW5zbGF0ZVkoLTNweCk7XG59XG5cbjpob3N0LWNvbnRleHQoLmRhcmspIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG46aG9zdC1jb250ZXh0KC5kYXJrKSBwYXRoIHtcbiAgZmlsbDogI2ZmZjtcbn1cbjpob3N0LWNvbnRleHQoLmRhcmspIHN2ZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIGhlaWdodDogMzRweDtcbn1cblxuOmhvc3QtY29udGV4dCgubWluaW1hbCkge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbjpob3N0LWNvbnRleHQoLm1pbmltYWwpIHBhdGgge1xuICBmaWxsOiAjNDQ0O1xufVxuOmhvc3QtY29udGV4dCgubWluaW1hbCkgc3ZnIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG46aG9zdC1jb250ZXh0KC5ib290c3RyYXApIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG46aG9zdC1jb250ZXh0KC5ib290c3RyYXApIHBhdGgge1xuICBmaWxsOiAjZmZmO1xufVxuOmhvc3QtY29udGV4dCguYm9vdHN0cmFwKSBzdmcge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbjpob3N0LWNvbnRleHQodGFnOmZvY3VzKSBwYXRoLFxuOmhvc3QtY29udGV4dCh0YWc6YWN0aXZlKSBwYXRoIHtcbiAgZmlsbDogI2ZmZjtcbn1cblxuOmhvc3QtY29udGV4dCguZGFyayB0YWc6Zm9jdXMpIHBhdGgsXG46aG9zdC1jb250ZXh0KC5kYXJrIHRhZzphY3RpdmUpIHBhdGgge1xuICBmaWxsOiAjMDAwO1xufVxuXG46aG9zdC1jb250ZXh0KC5taW5pbWFsIHRhZzpmb2N1cykgcGF0aCxcbjpob3N0LWNvbnRleHQoLm1pbmltYWwgdGFnOmFjdGl2ZSkgcGF0aCB7XG4gIGZpbGw6ICMwMDA7XG59XG5cbjpob3N0LWNvbnRleHQoLmJvb3RzdHJhcCB0YWc6Zm9jdXMpIHBhdGgsXG46aG9zdC1jb250ZXh0KC5ib290c3RyYXAgdGFnOmFjdGl2ZSkgcGF0aCB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbjpob3N0LWNvbnRleHQoLmJvb3RzdHJhcDMtaW5mbykge1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG46aG9zdC1jb250ZXh0KC5ib290c3RyYXAzLWluZm8pIHBhdGgge1xuICBmaWxsOiAjZmZmO1xufSIsIiRib290c3RyYXAzLWluZm8tdGhlbWU6IChcclxuICAgIGNvbnRhaW5lci1wYWRkaW5nOiA0cHgsXHJcbiAgICBjb250YWluZXItbWFyZ2luOiAkY29udGFpbmVyLW1hcmdpbixcclxuICAgIGNvbnRhaW5lci1ib3JkZXItYm90dG9tLWludmFsaWQ6IDFweCBzb2xpZCBtYXAtZ2V0KCRjb2xvci1lcnJvciwgJ2Jvb3RzdHJhcDMtaW5mbycpLFxyXG4gICAgaW5wdXQtYm9yZGVyOiAxcHggc29saWQgI2NjYyxcclxuICAgIGlucHV0LXBhZGRpbmc6ICRpbnB1dC1wYWRkaW5nLFxyXG4gICAgaW5wdXQtZm9udC1zaXplOiA5NSUsXHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdCxcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSxcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweFxyXG4pO1xyXG5cclxuJGJvb3RzdHJhcDMtaW5mby10YWctdGhlbWU6IChcclxuICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbG9yLXByaW1hcnksICdib290c3RyYXAzLWluZm8nKSxcclxuICAgIGZvbnQtc2l6ZTogOTUlLFxyXG4gICAgY29sb3I6ICNmZmYsXHJcbiAgICBjb2xvci1ob3ZlcjogI2ZmZixcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVlbSxcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0LFxyXG4gICAgYmFja2dyb3VuZC1mb2N1c2VkOiBtYXAtZ2V0KCRjb2xvci1mb2N1c2VkLCAnYm9vdHN0cmFwMy1pbmZvJyksXHJcbiAgICBiYWNrZ3JvdW5kLWFjdGl2ZTogbWFwLWdldCgkY29sb3ItZm9jdXNlZCwgJ2Jvb3RzdHJhcDMtaW5mbycpLFxyXG4gICAgYmFja2dyb3VuZC1ob3ZlcjogZGFya2VuKG1hcC1nZXQoJGNvbG9yLXByaW1hcnksICdib290c3RyYXAzLWluZm8nKSwgNSUpXHJcbik7XHJcblxyXG4kYm9vdHN0cmFwMy1pbmZvLWljb24tdGhlbWU6IChcclxuICAgIGZpbGw6IG1hcC1nZXQoJGNvbG9yLWFycm93LCAnYm9vdHN0cmFwMy1pbmZvJyksXHJcbiAgICBmaWxsLWZvY3VzOiBtYXAtZ2V0KCRjb2xvci1hcnJvdywgJ2Jvb3RzdHJhcDMtaW5mbycpXHJcbik7XHJcblxyXG4ubmcyLXRhZy1pbnB1dC5ib290c3RyYXAzLWluZm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuXHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDRweDtcclxufVxyXG5cclxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIGlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubmcyLXRhZy1pbnB1dC5ib290c3RyYXAzLWluZm8gLmZvcm0tY29udHJvbCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mbyAuZm9ybS1jb250cm9sIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzc3NztcclxufVxyXG5cclxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIC5mb3JtLWNvbnRyb2wgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mbyBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZm9jdXNlZCB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLmJvb3RzdHJhcDMtaW5mby5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWludmFsaWQge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IG1hcC1nZXQoJGNvbG9yLWVycm9yLCAnYm9vdHN0cmFwJyk7XHJcbn1cclxuIiwiLy8gVEhFTUVTXHJcblxyXG5AaW1wb3J0IFwiLi4vY29yZS9fY29yZS5zY3NzXCI7XHJcbkBpbXBvcnQgXCJfZGVmYXVsdC10aGVtZS5zY3NzXCI7XHJcbkBpbXBvcnQgXCJfbWluaW1hbC10aGVtZS5zY3NzXCI7XHJcbkBpbXBvcnQgXCJfZGFyay10aGVtZS5zY3NzXCI7XHJcbkBpbXBvcnQgXCJfYm9vdHN0cmFwLXRoZW1lLnNjc3NcIjtcclxuQGltcG9ydCBcIl9ib290c3RyYXAzLWluZm8tdGhlbWUuc2Nzc1wiO1xyXG5cclxuLm5nMi10YWctaW5wdXQge1xyXG4gICAgQGluY2x1ZGUgdGFnLWlucHV0LXRoZW1lKCRkZWZhdWx0LXRoZW1lKTtcclxufVxyXG5cclxuLm1pbmltYWwubmcyLXRhZy1pbnB1dCB7XHJcbiAgICBAaW5jbHVkZSB0YWctaW5wdXQtdGhlbWUoJG1pbmltYWwtdGhlbWUpO1xyXG59XHJcblxyXG4uZGFyay5uZzItdGFnLWlucHV0IHtcclxuICAgIEBpbmNsdWRlIHRhZy1pbnB1dC10aGVtZSgkZGFyay10aGVtZSk7XHJcbn1cclxuXHJcbi5ib290c3RyYXAubmcyLXRhZy1pbnB1dCB7XHJcbiAgICBAaW5jbHVkZSB0YWctaW5wdXQtdGhlbWUoJGJvb3RzdHJhcC10aGVtZSk7XHJcbn1cclxuXHJcbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dCB7XHJcbiAgICBAaW5jbHVkZSB0YWctaW5wdXQtdGhlbWUoJGJvb3RzdHJhcDMtaW5mby10aGVtZSk7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICAgIEBpbmNsdWRlIGVycm9yLW1lc3NhZ2UoJGRlZmF1bHQtdGhlbWUpO1xyXG59XHJcblxyXG4uYm9vdHN0cmFwIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIEBpbmNsdWRlIGVycm9yLW1lc3NhZ2UoJGJvb3RzdHJhcC10aGVtZSk7XHJcbn1cclxuIiwiQG1peGluIHRhZy1pbnB1dC10aGVtZSgkdGhlbWUpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBtYXAtZ2V0KCR0aGVtZSwgdHJhbnNpdGlvbik7XHJcblxyXG4gICAgcGFkZGluZzogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItcGFkZGluZycpO1xyXG4gICAgbWluLWhlaWdodDogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItaGVpZ2h0Jyk7XHJcblxyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG5cclxuICAgIGJvcmRlci1ib3R0b206IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLWJvcmRlci1ib3R0b20nKTtcclxuICAgIGJveC1zaGFkb3c6IG1hcC1nZXQoJHRoZW1lLCAnYm94LXNoYWRvdycpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkdGhlbWUsICdib3JkZXItcmFkaXVzJyk7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmLm5nMi10YWctaW5wdXQtLWRyb3BwaW5nIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9XHJcblxyXG4gICAgJi5uZzItdGFnLWlucHV0LS1mb2N1c2VkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci1ib3JkZXItYm90dG9tLWZvY3VzZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAmLm5nMi10YWctaW5wdXQtLWludmFsaWQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLWJvcmRlci1ib3R0b20taW52YWxpZCcpO1xyXG4gICAgfVxyXG5cclxuICAgICYubmcyLXRhZy1pbnB1dC0tbG9hZGluZyB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICYubmcyLXRhZy1pbnB1dC0tZGlzYWJsZWQge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm0ge1xyXG4gICAgICAgIG1hcmdpbjogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItbWFyZ2luJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLm5nMi10YWdzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBlcnJvci1tZXNzYWdlKCR0aGVtZSkge1xyXG4gICAgZm9udC1zaXplOiBtYXAtZ2V0KCR0aGVtZSwgJ2Vycm9yLW1lc3NhZ2UtZm9udC1zaXplJyk7XHJcbiAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdlcnJvci1tZXNzYWdlLWNvbG9yJyk7XHJcbiAgICBtYXJnaW46IG1hcC1nZXQoJHRoZW1lLCAnZXJyb3ItbWVzc2FnZS1tYXJnaW4nKTtcclxufVxyXG5cclxuQG1peGluIHRhZy10aGVtZSgkdGhlbWUpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBtYXAtZ2V0KCR0aGVtZSwgJ2ZvbnQtZmFtaWx5Jyk7XHJcbiAgICBmb250LXdlaWdodDogbWFwLWdldCgkdGhlbWUsICdmb250LXdlaWdodCcpO1xyXG4gICAgZm9udC1zaXplOiBtYXAtZ2V0KCR0aGVtZSwgJ2ZvbnQtc2l6ZScpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG1hcC1nZXQoJHRoZW1lLCAnbGV0dGVyLXNwYWNpbmcnKTtcclxuXHJcbiAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdjb2xvcicpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkdGhlbWUsICdib3JkZXItcmFkaXVzJyk7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogbWFwLWdldCgkdGhlbWUsICd0cmFuc2l0aW9uJyk7XHJcblxyXG4gICAgbWFyZ2luOiBtYXAtZ2V0KCR0aGVtZSwgJ21hcmdpbicpO1xyXG4gICAgcGFkZGluZzogbWFwLWdldCgkdGhlbWUsICdwYWRkaW5nJyk7XHJcblxyXG4gICAgaGVpZ2h0OiBtYXAtZ2V0KCR0aGVtZSwgJ2hlaWdodCcpO1xyXG4gICAgbGluZS1oZWlnaHQ6IG1hcC1nZXQoJHRoZW1lLCAnbGluZS1oZWlnaHQnKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQnKTtcclxuXHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6bm90KC5yZWFkb25seSk6bm90KC50YWctLWVkaXRpbmcpOmZvY3VzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQtZm9jdXNlZCcpO1xyXG4gICAgICAgIGNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbG9yLWZvY3VzZWQnKTtcclxuICAgICAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCR0aGVtZSwgJ2JveC1zaGFkb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgucmVhZG9ubHkpOm5vdCgudGFnLS1lZGl0aW5nKTphY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCAnYmFja2dyb3VuZC1hY3RpdmUnKTtcclxuICAgICAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdjb2xvci1hY3RpdmUnKTtcclxuICAgICAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCR0aGVtZSwgJ2JveC1zaGFkb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCg6Zm9jdXMpOm5vdCgudGFnLS1lZGl0aW5nKTpub3QoOmFjdGl2ZSk6bm90KC5yZWFkb25seSk6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCAnYmFja2dyb3VuZC1ob3ZlcicpO1xyXG4gICAgICAgIGNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbG9yLWhvdmVyJyk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbWFwLWdldCgkdGhlbWUsICdib3gtc2hhZG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5yZWFkb25seSB7XHJcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG5cclxuICAgICYucmVhZG9ubHk6Zm9jdXMsXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICYudGFnLS1lZGl0aW5nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQtZWRpdGluZycpO1xyXG4gICAgICAgIGJvcmRlcjogbWFwLWdldCgkdGhlbWUsICdib3JkZXItZWRpdGluZycpO1xyXG4gICAgICAgIGN1cnNvcjogdGV4dDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHRhZy1pbnB1dC1mb3JtLXRoZW1lKCR0aGVtZSkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgICBib3JkZXI6IG1hcC1nZXQoJHRoZW1lLCAnaW5wdXQtYm9yZGVyJyk7XHJcbiAgICBwYWRkaW5nOiBtYXAtZ2V0KCR0aGVtZSwgJ2lucHV0LXBhZGRpbmcnKTtcclxuICAgIGhlaWdodDogbWFwLWdldCgkdGhlbWUsICdpbnB1dC1oZWlnaHQnKTtcclxuXHJcbiAgICBmb250LXNpemU6IG1hcC1nZXQoJHRoZW1lLCAnaW5wdXQtZm9udC1zaXplJyk7XHJcbiAgICBmb250LWZhbWlseTogbWFwLWdldCgkdGhlbWUsICdmb250LWZhbWlseScpO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJltkaXNhYmxlZD10cnVlXSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBpY29uLXRoZW1lKCR0aGVtZSkge1xyXG4gICAgd2lkdGg6IG1hcC1nZXQoJHRoZW1lLCAnd2lkdGgnKTtcclxuICAgIGhlaWdodDogbWFwLWdldCgkdGhlbWUsICdoZWlnaHQnKTtcclxuICAgIHRyYW5zaXRpb246IG1hcC1nZXQoJHRoZW1lLCAndHJhbnNpdGlvbicpO1xyXG4gICAgZGlzcGxheTogbWFwLWdldCgkdGhlbWUsICdkaXNwbGF5Jyk7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICBwYXRoIHtcclxuICAgICAgICBmaWxsOiBtYXAtZ2V0KCR0aGVtZSwgJ2ZpbGwnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdmcge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gaWNvbi10aGVtZS1mb2N1c2VkKCR0aGVtZSkge1xyXG4gICAgcGF0aCB7XHJcbiAgICAgICAgZmlsbDogbWFwLWdldCgkdGhlbWUsICdmaWxsLWZvY3VzJyk7XHJcbiAgICB9XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uLy4uL2NvcmUvc3R5bGVzL3RoZW1lcy9fdGhlbWVzLnNjc3NcIjtcclxuXHJcbjpob3N0KGRlbGV0ZS1pY29uKSB7XHJcbiAgICBAaW5jbHVkZSBpY29uLXRoZW1lKCRkZWZhdWx0LWljb24tdGhlbWUpO1xyXG59XHJcblxyXG46aG9zdChkZWxldGUtaWNvbik6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpIHRyYW5zbGF0ZVkoLTNweCk7XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLmRhcmspIHtcclxuICAgIEBpbmNsdWRlIGljb24tdGhlbWUoJGRhcmstaWNvbi10aGVtZSk7XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLm1pbmltYWwpIHtcclxuICAgIEBpbmNsdWRlIGljb24tdGhlbWUoJG1pbmltYWwtaWNvbi10aGVtZSk7XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLmJvb3RzdHJhcCkge1xyXG4gICAgQGluY2x1ZGUgaWNvbi10aGVtZSgkYm9vdHN0cmFwLWljb24tdGhlbWUpO1xyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KHRhZzpmb2N1cyksXHJcbjpob3N0LWNvbnRleHQodGFnOmFjdGl2ZSkge1xyXG4gICAgQGluY2x1ZGUgaWNvbi10aGVtZS1mb2N1c2VkKCRkZWZhdWx0LWljb24tdGhlbWUpO1xyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5kYXJrIHRhZzpmb2N1cyksXHJcbjpob3N0LWNvbnRleHQoLmRhcmsgdGFnOmFjdGl2ZSkge1xyXG4gICAgQGluY2x1ZGUgaWNvbi10aGVtZS1mb2N1c2VkKCRkYXJrLWljb24tdGhlbWUpO1xyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5taW5pbWFsIHRhZzpmb2N1cyksXHJcbjpob3N0LWNvbnRleHQoLm1pbmltYWwgdGFnOmFjdGl2ZSkge1xyXG4gICAgQGluY2x1ZGUgaWNvbi10aGVtZS1mb2N1c2VkKCRtaW5pbWFsLWljb24tdGhlbWUpO1xyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5ib290c3RyYXAgdGFnOmZvY3VzKSxcclxuOmhvc3QtY29udGV4dCguYm9vdHN0cmFwIHRhZzphY3RpdmUpIHtcclxuICAgIEBpbmNsdWRlIGljb24tdGhlbWUtZm9jdXNlZCgkYm9vdHN0cmFwLWljb24tdGhlbWUpO1xyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5ib290c3RyYXAzLWluZm8pIHtcclxuICAgIEBpbmNsdWRlIGljb24tdGhlbWUtZm9jdXNlZCgkYm9vdHN0cmFwMy1pbmZvLWljb24tdGhlbWUpO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./modules/components/icon/icon.ts":
/*!*****************************************!*\
  !*** ./modules/components/icon/icon.ts ***!
  \*****************************************/
/*! exports provided: DeleteIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIconComponent", function() { return DeleteIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeleteIconComponent = /** @class */ (function () {
    function DeleteIconComponent() {
    }
    DeleteIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'delete-icon',
            template: __webpack_require__(/*! raw-loader!./icon.html */ "./node_modules/raw-loader/index.js!./modules/components/icon/icon.html"),
            styles: [__webpack_require__(/*! ./icon.scss */ "./modules/components/icon/icon.scss")]
        })
    ], DeleteIconComponent);
    return DeleteIconComponent;
}());



/***/ }),

/***/ "./modules/components/icon/index.ts":
/*!******************************************!*\
  !*** ./modules/components/icon/index.ts ***!
  \******************************************/
/*! exports provided: DeleteIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ "./modules/components/icon/icon.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteIconComponent", function() { return _icon__WEBPACK_IMPORTED_MODULE_0__["DeleteIconComponent"]; });




/***/ }),

/***/ "./modules/components/index.ts":
/*!*************************************!*\
  !*** ./modules/components/index.ts ***!
  \*************************************/
/*! exports provided: TagInputDropdown, DeleteIconComponent, TagInputForm, TagRipple, TagComponent, TagInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown/index */ "./modules/components/dropdown/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagInputDropdown", function() { return _dropdown_index__WEBPACK_IMPORTED_MODULE_0__["TagInputDropdown"]; });

/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon/index */ "./modules/components/icon/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteIconComponent", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_1__["DeleteIconComponent"]; });

/* harmony import */ var _tag_input_form_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag-input-form/index */ "./modules/components/tag-input-form/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagInputForm", function() { return _tag_input_form_index__WEBPACK_IMPORTED_MODULE_2__["TagInputForm"]; });

/* harmony import */ var _tag_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag/index */ "./modules/components/tag/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagRipple", function() { return _tag_index__WEBPACK_IMPORTED_MODULE_3__["TagRipple"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return _tag_index__WEBPACK_IMPORTED_MODULE_3__["TagComponent"]; });

/* harmony import */ var _tag_input_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tag-input/index */ "./modules/components/tag-input/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagInputComponent", function() { return _tag_input_index__WEBPACK_IMPORTED_MODULE_4__["TagInputComponent"]; });








/***/ }),

/***/ "./modules/components/tag-input-form/index.ts":
/*!****************************************************!*\
  !*** ./modules/components/tag-input-form/index.ts ***!
  \****************************************************/
/*! exports provided: TagInputForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tag_input_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-input-form.component */ "./modules/components/tag-input-form/tag-input-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagInputForm", function() { return _tag_input_form_component__WEBPACK_IMPORTED_MODULE_0__["TagInputForm"]; });




/***/ }),

/***/ "./modules/components/tag-input-form/tag-input-form.component.ts":
/*!***********************************************************************!*\
  !*** ./modules/components/tag-input-form/tag-input-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: TagInputForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputForm", function() { return TagInputForm; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var TagInputForm = /** @class */ (function () {
    function TagInputForm() {
        /**
         * @name onSubmit
         */
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onBlur
         */
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onFocus
         */
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onKeyup
         */
        this.onKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onKeydown
         */
        this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name inputTextChange
         */
        this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name validators
         */
        this.validators = [];
        /**
         * @name asyncValidators
         * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
         */
        this.asyncValidators = [];
        /**
         * @name tabindex
         * @desc pass through the specified tabindex to the input
         */
        this.tabindex = '';
        /**
         * @name disabled
         */
        this.disabled = false;
        this.item = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: this.disabled });
    }
    Object.defineProperty(TagInputForm.prototype, "inputText", {
        /**
         * @name inputText
         */
        get: function () {
            return this.item.value;
        },
        /**
         * @name inputText
         * @param text {string}
         */
        set: function (text) {
            this.item.setValue(text);
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    TagInputForm.prototype.ngOnInit = function () {
        this.item.setValidators(this.validators);
        this.item.setAsyncValidators(this.asyncValidators);
        // creating form
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            item: this.item
        });
    };
    TagInputForm.prototype.ngOnChanges = function (changes) {
        if (changes.disabled && !changes.disabled.firstChange) {
            if (changes.disabled.currentValue) {
                this.form.controls['item'].disable();
            }
            else {
                this.form.controls['item'].enable();
            }
        }
    };
    Object.defineProperty(TagInputForm.prototype, "value", {
        /**
         * @name value
         */
        get: function () {
            return this.form.get('item');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name isInputFocused
     */
    TagInputForm.prototype.isInputFocused = function () {
        var doc = typeof document !== 'undefined' ? document : undefined;
        return doc ? doc.activeElement === this.input.nativeElement : false;
    };
    /**
     * @name getErrorMessages
     * @param messages
     */
    TagInputForm.prototype.getErrorMessages = function (messages) {
        var _this = this;
        return Object.keys(messages)
            .filter(function (err) { return _this.value.hasError(err); })
            .map(function (err) { return messages[err]; });
    };
    /**
     * @name hasErrors
     */
    TagInputForm.prototype.hasErrors = function () {
        var _a = this.form, dirty = _a.dirty, value = _a.value, valid = _a.valid;
        return dirty && value.item && !valid;
    };
    /**
     * @name focus
     */
    TagInputForm.prototype.focus = function () {
        this.input.nativeElement.focus();
    };
    /**
     * @name blur
     */
    TagInputForm.prototype.blur = function () {
        this.input.nativeElement.blur();
    };
    /**
     * @name getElementPosition
     */
    TagInputForm.prototype.getElementPosition = function () {
        return this.input.nativeElement.getBoundingClientRect();
    };
    /**
     * - removes input from the component
     * @name destroy
     */
    TagInputForm.prototype.destroy = function () {
        var input = this.input.nativeElement;
        input.parentElement.removeChild(input);
    };
    /**
     * @name onKeyDown
     * @param $event
     */
    TagInputForm.prototype.onKeyDown = function ($event) {
        this.inputText = this.value.value;
        if ($event.key === 'Enter') {
            this.submit($event);
            this.inputText = '';
        }
        return this.onKeydown.emit($event);
    };
    /**
     * @name onKeyUp
     * @param $event
     */
    TagInputForm.prototype.onKeyUp = function ($event) {
        this.inputText = this.value.value;
        return this.onKeyup.emit($event);
    };
    /**
     * @name submit
     */
    TagInputForm.prototype.submit = function ($event) {
        $event.preventDefault();
        if (this.form.valid) {
            this.onSubmit.emit($event);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagInputForm.prototype, "onSubmit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagInputForm.prototype, "onBlur", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagInputForm.prototype, "onFocus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagInputForm.prototype, "onKeyup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagInputForm.prototype, "onKeydown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagInputForm.prototype, "inputTextChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TagInputForm.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TagInputForm.prototype, "validators", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TagInputForm.prototype, "asyncValidators", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TagInputForm.prototype, "inputId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TagInputForm.prototype, "inputClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputForm.prototype, "tabindex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputForm.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputForm.prototype, "input", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], TagInputForm.prototype, "inputText", null);
    TagInputForm = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tag-input-form',
            template: __webpack_require__(/*! raw-loader!./tag-input-form.template.html */ "./node_modules/raw-loader/index.js!./modules/components/tag-input-form/tag-input-form.template.html"),
            styles: [__webpack_require__(/*! ./tag-input-form.style.scss */ "./modules/components/tag-input-form/tag-input-form.style.scss")]
        })
    ], TagInputForm);
    return TagInputForm;
}());



/***/ }),

/***/ "./modules/components/tag-input-form/tag-input-form.style.scss":
/*!*********************************************************************!*\
  !*** ./modules/components/tag-input-form/tag-input-form.style.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dark tag:focus {\n  box-shadow: 0 0 0 1px #323232;\n}\n\n.ng2-tag-input.bootstrap3-info {\n  background-color: #fff;\n  display: inline-block;\n  color: #555;\n  vertical-align: middle;\n  max-width: 100%;\n  height: 42px;\n  line-height: 44px;\n}\n\n.ng2-tag-input.bootstrap3-info input {\n  border: none;\n  box-shadow: none;\n  outline: none;\n  background-color: transparent;\n  padding: 0 6px;\n  margin: 0;\n  width: auto;\n  max-width: inherit;\n}\n\n.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder {\n  color: #777;\n  opacity: 1;\n}\n\n.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder {\n  color: #777;\n}\n\n.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder {\n  color: #777;\n}\n\n.ng2-tag-input.bootstrap3-info input:focus {\n  border: none;\n  box-shadow: none;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused {\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n  border: 1px solid #ccc;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n  box-shadow: inset 0 1px 1px #d9534f;\n}\n\n.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  transition: all 0.25s;\n  padding: 0.25rem 0;\n  min-height: 32px;\n  cursor: text;\n  border-bottom: 2px solid #efefef;\n}\n\n.ng2-tag-input:focus {\n  outline: 0;\n}\n\n.ng2-tag-input.ng2-tag-input--dropping {\n  opacity: 0.7;\n}\n\n.ng2-tag-input.ng2-tag-input--focused {\n  border-bottom: 2px solid #2196F3;\n}\n\n.ng2-tag-input.ng2-tag-input--invalid {\n  border-bottom: 2px solid #f44336;\n}\n\n.ng2-tag-input.ng2-tag-input--loading {\n  border: none;\n}\n\n.ng2-tag-input.ng2-tag-input--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.ng2-tag-input form {\n  margin: 0.1em 0;\n}\n\n.ng2-tag-input .ng2-tags-container {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.minimal.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 1px solid transparent;\n}\n\n.minimal.ng2-tag-input:focus {\n  outline: 0;\n}\n\n.minimal.ng2-tag-input.ng2-tag-input--dropping {\n  opacity: 0.7;\n}\n\n.minimal.ng2-tag-input.ng2-tag-input--loading {\n  border: none;\n}\n\n.minimal.ng2-tag-input.ng2-tag-input--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.minimal.ng2-tag-input .ng2-tags-container {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.dark.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #444;\n}\n\n.dark.ng2-tag-input:focus {\n  outline: 0;\n}\n\n.dark.ng2-tag-input.ng2-tag-input--dropping {\n  opacity: 0.7;\n}\n\n.dark.ng2-tag-input.ng2-tag-input--loading {\n  border: none;\n}\n\n.dark.ng2-tag-input.ng2-tag-input--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.dark.ng2-tag-input .ng2-tags-container {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.bootstrap.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #efefef;\n}\n\n.bootstrap.ng2-tag-input:focus {\n  outline: 0;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--dropping {\n  opacity: 0.7;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--focused {\n  border-bottom: 2px solid #0275d8;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--invalid {\n  border-bottom: 2px solid #d9534f;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--loading {\n  border: none;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.bootstrap.ng2-tag-input .ng2-tags-container {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.bootstrap3-info.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  padding: 4px;\n  cursor: text;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  border-radius: 4px;\n}\n\n.bootstrap3-info.ng2-tag-input:focus {\n  outline: 0;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping {\n  opacity: 0.7;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n  border-bottom: 1px solid #d9534f;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading {\n  border: none;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.bootstrap3-info.ng2-tag-input form {\n  margin: 0.1em 0;\n}\n\n.bootstrap3-info.ng2-tag-input .ng2-tags-container {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.error-message {\n  font-size: 0.8em;\n  color: #f44336;\n  margin: 0.5em 0 0 0;\n}\n\n.bootstrap .error-message {\n  color: #d9534f;\n}\n\n.ng2-tag-input__text-input {\n  display: inline;\n  vertical-align: middle;\n  border: none;\n  padding: 0 0.5rem;\n  height: 38px;\n  font-size: 1em;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\n\n.ng2-tag-input__text-input:focus {\n  outline: 0;\n}\n\n.ng2-tag-input__text-input[disabled=true] {\n  opacity: 0.5;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tcG9uZW50cy90YWctaW5wdXQtZm9ybS9DOlxceGFtcHBcXGh0ZG9jc1xcbmd4LWNoaXBzL21vZHVsZXNcXGNvbXBvbmVudHNcXHRhZy1pbnB1dC1mb3JtXFx0YWctaW5wdXQtZm9ybS5zdHlsZS5zY3NzIiwibW9kdWxlcy9jb21wb25lbnRzL3RhZy1pbnB1dC1mb3JtL3RhZy1pbnB1dC1mb3JtLnN0eWxlLnNjc3MiLCJtb2R1bGVzL2NvbXBvbmVudHMvdGFnLWlucHV0LWZvcm0vQzpcXHhhbXBwXFxodGRvY3NcXG5neC1jaGlwcy9tb2R1bGVzXFxjb3JlXFxzdHlsZXNcXHRoZW1lc1xcX2Jvb3RzdHJhcDMtaW5mby10aGVtZS5zY3NzIiwibW9kdWxlcy9jb21wb25lbnRzL3RhZy1pbnB1dC1mb3JtL0M6XFx4YW1wcFxcaHRkb2NzXFxuZ3gtY2hpcHMvbW9kdWxlc1xcY29yZVxcc3R5bGVzXFx0aGVtZXNcXF90aGVtZXMuc2NzcyIsIm1vZHVsZXMvY29tcG9uZW50cy90YWctaW5wdXQtZm9ybS9DOlxceGFtcHBcXGh0ZG9jc1xcbmd4LWNoaXBzL21vZHVsZXNcXGNvcmVcXHN0eWxlc1xcY29yZVxcX21peGlucy5zY3NzIiwibW9kdWxlcy9jb21wb25lbnRzL3RhZy1pbnB1dC1mb3JtL0M6XFx4YW1wcFxcaHRkb2NzXFxuZ3gtY2hpcHMvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBO0VBQ0ksNkJBQUE7QUNsQko7O0FDNEJBO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7QUQxQko7O0FDNkJBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUQxQko7O0FDNkJBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUQxQko7O0FDNkJBO0VBQ0ksV0FBQTtBRDFCSjs7QUM2QkE7RUFDSSxXQUFBO0FEMUJKOztBQzZCQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBRDFCSjs7QUM2QkE7RUFDSSw4Q0FBQTtFQUNBLHNCQUFBO0FEMUJKOztBQzZCQTtFQUNJLG1DQUFBO0FEMUJKOztBRXpDQTtFQ1JJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUVBLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUVBLFlBQUE7RUFFQSxnQ0FBQTtBSGlESjs7QUc3Q0k7RUFDSSxVQUFBO0FIK0NSOztBRzVDSTtFQUNJLFlBQUE7QUg4Q1I7O0FHM0NJO0VBQ0ksZ0NBQUE7QUg2Q1I7O0FHMUNJO0VBQ0ksZ0NBQUE7QUg0Q1I7O0FHekNJO0VBQ0ksWUFBQTtBSDJDUjs7QUd4Q0k7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUgwQ1I7O0FHdkNJO0VBQ0ksZUFBQTtBSHlDUjs7QUd0Q0k7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBSHdDUjs7QUUzRUE7RUNaSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFPQSxZQUFBO0VBRUEsb0NBQUE7QUhvRko7O0FHaEZJO0VBQ0ksVUFBQTtBSGtGUjs7QUcvRUk7RUFDSSxZQUFBO0FIaUZSOztBR3RFSTtFQUNJLFlBQUE7QUh3RVI7O0FHckVJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FIdUVSOztBR2hFSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FIa0VSOztBRWpHQTtFQ2hCSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFPQSxZQUFBO0VBRUEsNkJBQUE7QUg4R0o7O0FHMUdJO0VBQ0ksVUFBQTtBSDRHUjs7QUd6R0k7RUFDSSxZQUFBO0FIMkdSOztBR2hHSTtFQUNJLFlBQUE7QUhrR1I7O0FHL0ZJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FIaUdSOztBRzFGSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FINEZSOztBRXZIQTtFQ3BCSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFPQSxZQUFBO0VBRUEsZ0NBQUE7QUh3SUo7O0FHcElJO0VBQ0ksVUFBQTtBSHNJUjs7QUduSUk7RUFDSSxZQUFBO0FIcUlSOztBR2xJSTtFQUNJLGdDQUFBO0FIb0lSOztBR2pJSTtFQUNJLGdDQUFBO0FIbUlSOztBR2hJSTtFQUNJLFlBQUE7QUhrSVI7O0FHL0hJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FIaUlSOztBRzFISTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FINEhSOztBRW5KQTtFQ3hCSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFJQSxZQUFBO0VBR0EsWUFBQTtFQUdBLGdEQUFBO0VBQ0Esa0JBQUE7QUh3S0o7O0FHdEtJO0VBQ0ksVUFBQTtBSHdLUjs7QUdyS0k7RUFDSSxZQUFBO0FIdUtSOztBR2hLSTtFQUNJLGdDQUFBO0FIa0tSOztBRy9KSTtFQUNJLFlBQUE7QUhpS1I7O0FHOUpJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FIZ0tSOztBRzdKSTtFQUNJLGVBQUE7QUgrSlI7O0FHNUpJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUg4SlI7O0FFakxBO0VDd0JJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FINkpKOztBRW5MQTtFQ3FCSSxjQUFBO0FIa0tKOztBSXROQTtFRHdISSxlQUFBO0VBQ0Esc0JBQUE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBRUEsY0FBQTtFQUNBLG1EQUFBO0FIZ0dKOztBRzlGSTtFQUNJLFVBQUE7QUhnR1I7O0FHN0ZJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FIK0ZSIiwiZmlsZSI6Im1vZHVsZXMvY29tcG9uZW50cy90YWctaW5wdXQtZm9ybS90YWctaW5wdXQtZm9ybS5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRhcmstdGhlbWU6IChcclxuICAgIGNvbnRhaW5lci1ib3JkZXItYm90dG9tOiAycHggc29saWQgbWFwLWdldCgkY29sb3ItcHJpbWFyeSwgJ2RhcmsnKVxyXG4pO1xyXG5cclxuJGRhcmstdGFnLXRoZW1lOiAoXHJcbiAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb2xvci1wcmltYXJ5LCAnZGFyaycpLFxyXG4gICAgY29sb3I6ICNmOWY5ZjksXHJcbiAgICBiYWNrZ3JvdW5kLWZvY3VzZWQ6IG1hcC1nZXQoJGNvbG9yLWZvY3VzZWQsICdkYXJrJyksXHJcbiAgICBiYWNrZ3JvdW5kLWhvdmVyOiBkYXJrZW4obWFwLWdldCgkY29sb3ItcHJpbWFyeSwgJ2RhcmsnKSwgMTAlKSxcclxuICAgIGNvbG9yLWZvY3VzZWQ6IG1hcC1nZXQoJGNvbG9yLXByaW1hcnksICdkYXJrJyksXHJcbiAgICBjb2xvci1ob3ZlcjogI2Y5ZjlmOSxcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweFxyXG4pO1xyXG5cclxuJGRhcmstaWNvbi10aGVtZTogKFxyXG4gICAgZmlsbDogbWFwLWdldCgkY29sb3ItYXJyb3csICdkYXJrJyksXHJcbiAgICBmaWxsLWZvY3VzOiBtYXAtZ2V0KCRjb2xvci1hcnJvdy1mb2N1c2VkLCAnZGFyaycpXHJcbik7XHJcblxyXG4uZGFyayB0YWc6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMzMjMyMzI7XHJcbn1cclxuIiwiLmRhcmsgdGFnOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMzMjMyMzI7XG59XG5cbi5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICM1NTU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbn1cblxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMCA2cHg7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIC5mb3JtLWNvbnRyb2wgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzc3NztcbiAgb3BhY2l0eTogMTtcbn1cblxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIC5mb3JtLWNvbnRyb2wgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mbyAuZm9ybS1jb250cm9sIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mbyBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJvb3RzdHJhcDMtaW5mby5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWZvY3VzZWQge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0taW52YWxpZCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCAjZDk1MzRmO1xufVxuXG4ubmcyLXRhZy1pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xuICBwYWRkaW5nOiAwLjI1cmVtIDA7XG4gIG1pbi1oZWlnaHQ6IDMycHg7XG4gIGN1cnNvcjogdGV4dDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZmVmZWY7XG59XG4ubmcyLXRhZy1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kcm9wcGluZyB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWZvY3VzZWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzIxOTZGMztcbn1cbi5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWludmFsaWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y0NDMzNjtcbn1cbi5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWxvYWRpbmcge1xuICBib3JkZXI6IG5vbmU7XG59XG4ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5uZzItdGFnLWlucHV0IGZvcm0ge1xuICBtYXJnaW46IDAuMWVtIDA7XG59XG4ubmcyLXRhZy1pbnB1dCAubmcyLXRhZ3MtY29udGFpbmVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWluaW1hbC5uZzItdGFnLWlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHRleHQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5taW5pbWFsLm5nMi10YWctaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuLm1pbmltYWwubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kcm9wcGluZyB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5taW5pbWFsLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tbG9hZGluZyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5taW5pbWFsLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4ubWluaW1hbC5uZzItdGFnLWlucHV0IC5uZzItdGFncy1jb250YWluZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kYXJrLm5nMi10YWctaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogdGV4dDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0NDQ7XG59XG4uZGFyay5uZzItdGFnLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5kYXJrLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZHJvcHBpbmcge1xuICBvcGFjaXR5OiAwLjc7XG59XG4uZGFyay5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWxvYWRpbmcge1xuICBib3JkZXI6IG5vbmU7XG59XG4uZGFyay5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLmRhcmsubmcyLXRhZy1pbnB1dCAubmcyLXRhZ3MtY29udGFpbmVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYm9vdHN0cmFwLm5nMi10YWctaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogdGV4dDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZmVmZWY7XG59XG4uYm9vdHN0cmFwLm5nMi10YWctaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuLmJvb3RzdHJhcC5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWRyb3BwaW5nIHtcbiAgb3BhY2l0eTogMC43O1xufVxuLmJvb3RzdHJhcC5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWZvY3VzZWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAyNzVkODtcbn1cbi5ib290c3RyYXAubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1pbnZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkOTUzNGY7XG59XG4uYm9vdHN0cmFwLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tbG9hZGluZyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5ib290c3RyYXAubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5ib290c3RyYXAubmcyLXRhZy1pbnB1dCAubmcyLXRhZ3MtY29udGFpbmVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDRweDtcbiAgY3Vyc29yOiB0ZXh0O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZHJvcHBpbmcge1xuICBvcGFjaXR5OiAwLjc7XG59XG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0taW52YWxpZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDk1MzRmO1xufVxuLmJvb3RzdHJhcDMtaW5mby5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWxvYWRpbmcge1xuICBib3JkZXI6IG5vbmU7XG59XG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQgZm9ybSB7XG4gIG1hcmdpbjogMC4xZW0gMDtcbn1cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dCAubmcyLXRhZ3MtY29udGFpbmVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjZjQ0MzM2O1xuICBtYXJnaW46IDAuNWVtIDAgMCAwO1xufVxuXG4uYm9vdHN0cmFwIC5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6ICNkOTUzNGY7XG59XG5cbi5uZzItdGFnLWlucHV0X190ZXh0LWlucHV0IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICBoZWlnaHQ6IDM4cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuLm5nMi10YWctaW5wdXRfX3RleHQtaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuLm5nMi10YWctaW5wdXRfX3RleHQtaW5wdXRbZGlzYWJsZWQ9dHJ1ZV0ge1xuICBvcGFjaXR5OiAwLjU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59IiwiJGJvb3RzdHJhcDMtaW5mby10aGVtZTogKFxyXG4gICAgY29udGFpbmVyLXBhZGRpbmc6IDRweCxcclxuICAgIGNvbnRhaW5lci1tYXJnaW46ICRjb250YWluZXItbWFyZ2luLFxyXG4gICAgY29udGFpbmVyLWJvcmRlci1ib3R0b20taW52YWxpZDogMXB4IHNvbGlkIG1hcC1nZXQoJGNvbG9yLWVycm9yLCAnYm9vdHN0cmFwMy1pbmZvJyksXHJcbiAgICBpbnB1dC1ib3JkZXI6IDFweCBzb2xpZCAjY2NjLFxyXG4gICAgaW5wdXQtcGFkZGluZzogJGlucHV0LXBhZGRpbmcsXHJcbiAgICBpbnB1dC1mb250LXNpemU6IDk1JSxcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0LFxyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLFxyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4XHJcbik7XHJcblxyXG4kYm9vdHN0cmFwMy1pbmZvLXRhZy10aGVtZTogKFxyXG4gICAgYmFja2dyb3VuZDogbWFwLWdldCgkY29sb3ItcHJpbWFyeSwgJ2Jvb3RzdHJhcDMtaW5mbycpLFxyXG4gICAgZm9udC1zaXplOiA5NSUsXHJcbiAgICBjb2xvcjogI2ZmZixcclxuICAgIGNvbG9yLWhvdmVyOiAjZmZmLFxyXG4gICAgZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNWVtLFxyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQsXHJcbiAgICBiYWNrZ3JvdW5kLWZvY3VzZWQ6IG1hcC1nZXQoJGNvbG9yLWZvY3VzZWQsICdib290c3RyYXAzLWluZm8nKSxcclxuICAgIGJhY2tncm91bmQtYWN0aXZlOiBtYXAtZ2V0KCRjb2xvci1mb2N1c2VkLCAnYm9vdHN0cmFwMy1pbmZvJyksXHJcbiAgICBiYWNrZ3JvdW5kLWhvdmVyOiBkYXJrZW4obWFwLWdldCgkY29sb3ItcHJpbWFyeSwgJ2Jvb3RzdHJhcDMtaW5mbycpLCA1JSlcclxuKTtcclxuXHJcbiRib290c3RyYXAzLWluZm8taWNvbi10aGVtZTogKFxyXG4gICAgZmlsbDogbWFwLWdldCgkY29sb3ItYXJyb3csICdib290c3RyYXAzLWluZm8nKSxcclxuICAgIGZpbGwtZm9jdXM6IG1hcC1nZXQoJGNvbG9yLWFycm93LCAnYm9vdHN0cmFwMy1pbmZvJylcclxuKTtcclxuXHJcbi5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG59XHJcblxyXG4ubmcyLXRhZy1pbnB1dC5ib290c3RyYXAzLWluZm8gaW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mbyAuZm9ybS1jb250cm9sIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIC5mb3JtLWNvbnRyb2wgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG59XHJcblxyXG4ubmcyLXRhZy1pbnB1dC5ib290c3RyYXAzLWluZm8gLmZvcm0tY29udHJvbCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzc3NztcclxufVxyXG5cclxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIGlucHV0OmZvY3VzIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1mb2N1c2VkIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0taW52YWxpZCB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggbWFwLWdldCgkY29sb3ItZXJyb3IsICdib290c3RyYXAnKTtcclxufVxyXG4iLCIvLyBUSEVNRVNcclxuXHJcbkBpbXBvcnQgXCIuLi9jb3JlL19jb3JlLnNjc3NcIjtcclxuQGltcG9ydCBcIl9kZWZhdWx0LXRoZW1lLnNjc3NcIjtcclxuQGltcG9ydCBcIl9taW5pbWFsLXRoZW1lLnNjc3NcIjtcclxuQGltcG9ydCBcIl9kYXJrLXRoZW1lLnNjc3NcIjtcclxuQGltcG9ydCBcIl9ib290c3RyYXAtdGhlbWUuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiX2Jvb3RzdHJhcDMtaW5mby10aGVtZS5zY3NzXCI7XHJcblxyXG4ubmcyLXRhZy1pbnB1dCB7XHJcbiAgICBAaW5jbHVkZSB0YWctaW5wdXQtdGhlbWUoJGRlZmF1bHQtdGhlbWUpO1xyXG59XHJcblxyXG4ubWluaW1hbC5uZzItdGFnLWlucHV0IHtcclxuICAgIEBpbmNsdWRlIHRhZy1pbnB1dC10aGVtZSgkbWluaW1hbC10aGVtZSk7XHJcbn1cclxuXHJcbi5kYXJrLm5nMi10YWctaW5wdXQge1xyXG4gICAgQGluY2x1ZGUgdGFnLWlucHV0LXRoZW1lKCRkYXJrLXRoZW1lKTtcclxufVxyXG5cclxuLmJvb3RzdHJhcC5uZzItdGFnLWlucHV0IHtcclxuICAgIEBpbmNsdWRlIHRhZy1pbnB1dC10aGVtZSgkYm9vdHN0cmFwLXRoZW1lKTtcclxufVxyXG5cclxuLmJvb3RzdHJhcDMtaW5mby5uZzItdGFnLWlucHV0IHtcclxuICAgIEBpbmNsdWRlIHRhZy1pbnB1dC10aGVtZSgkYm9vdHN0cmFwMy1pbmZvLXRoZW1lKTtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgQGluY2x1ZGUgZXJyb3ItbWVzc2FnZSgkZGVmYXVsdC10aGVtZSk7XHJcbn1cclxuXHJcbi5ib290c3RyYXAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgQGluY2x1ZGUgZXJyb3ItbWVzc2FnZSgkYm9vdHN0cmFwLXRoZW1lKTtcclxufVxyXG4iLCJAbWl4aW4gdGFnLWlucHV0LXRoZW1lKCR0aGVtZSkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIHRyYW5zaXRpb246IG1hcC1nZXQoJHRoZW1lLCB0cmFuc2l0aW9uKTtcclxuXHJcbiAgICBwYWRkaW5nOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci1wYWRkaW5nJyk7XHJcbiAgICBtaW4taGVpZ2h0OiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci1oZWlnaHQnKTtcclxuXHJcbiAgICBjdXJzb3I6IHRleHQ7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbTogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItYm9yZGVyLWJvdHRvbScpO1xyXG4gICAgYm94LXNoYWRvdzogbWFwLWdldCgkdGhlbWUsICdib3gtc2hhZG93Jyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCR0aGVtZSwgJ2JvcmRlci1yYWRpdXMnKTtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICYubmcyLXRhZy1pbnB1dC0tZHJvcHBpbmcge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxuXHJcbiAgICAmLm5nMi10YWctaW5wdXQtLWZvY3VzZWQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLWJvcmRlci1ib3R0b20tZm9jdXNlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgICYubmcyLXRhZy1pbnB1dC0taW52YWxpZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItYm9yZGVyLWJvdHRvbS1pbnZhbGlkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5uZzItdGFnLWlucHV0LS1sb2FkaW5nIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgJi5uZzItdGFnLWlucHV0LS1kaXNhYmxlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgbWFyZ2luOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci1tYXJnaW4nKTtcclxuICAgIH1cclxuXHJcbiAgICAubmcyLXRhZ3MtY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGVycm9yLW1lc3NhZ2UoJHRoZW1lKSB7XHJcbiAgICBmb250LXNpemU6IG1hcC1nZXQoJHRoZW1lLCAnZXJyb3ItbWVzc2FnZS1mb250LXNpemUnKTtcclxuICAgIGNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgJ2Vycm9yLW1lc3NhZ2UtY29sb3InKTtcclxuICAgIG1hcmdpbjogbWFwLWdldCgkdGhlbWUsICdlcnJvci1tZXNzYWdlLW1hcmdpbicpO1xyXG59XHJcblxyXG5AbWl4aW4gdGFnLXRoZW1lKCR0aGVtZSkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IG1hcC1nZXQoJHRoZW1lLCAnZm9udC1mYW1pbHknKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBtYXAtZ2V0KCR0aGVtZSwgJ2ZvbnQtd2VpZ2h0Jyk7XHJcbiAgICBmb250LXNpemU6IG1hcC1nZXQoJHRoZW1lLCAnZm9udC1zaXplJyk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbWFwLWdldCgkdGhlbWUsICdsZXR0ZXItc3BhY2luZycpO1xyXG5cclxuICAgIGNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbG9yJyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCR0aGVtZSwgJ2JvcmRlci1yYWRpdXMnKTtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBtYXAtZ2V0KCR0aGVtZSwgJ3RyYW5zaXRpb24nKTtcclxuXHJcbiAgICBtYXJnaW46IG1hcC1nZXQoJHRoZW1lLCAnbWFyZ2luJyk7XHJcbiAgICBwYWRkaW5nOiBtYXAtZ2V0KCR0aGVtZSwgJ3BhZGRpbmcnKTtcclxuXHJcbiAgICBoZWlnaHQ6IG1hcC1nZXQoJHRoZW1lLCAnaGVpZ2h0Jyk7XHJcbiAgICBsaW5lLWhlaWdodDogbWFwLWdldCgkdGhlbWUsICdsaW5lLWhlaWdodCcpO1xyXG5cclxuICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCAnYmFja2dyb3VuZCcpO1xyXG5cclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJjpub3QoLnJlYWRvbmx5KTpub3QoLnRhZy0tZWRpdGluZyk6Zm9jdXMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCAnYmFja2dyb3VuZC1mb2N1c2VkJyk7XHJcbiAgICAgICAgY29sb3I6IG1hcC1nZXQoJHRoZW1lLCAnY29sb3ItZm9jdXNlZCcpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG1hcC1nZXQoJHRoZW1lLCAnYm94LXNoYWRvdycpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC5yZWFkb25seSk6bm90KC50YWctLWVkaXRpbmcpOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsICdiYWNrZ3JvdW5kLWFjdGl2ZScpO1xyXG4gICAgICAgIGNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbG9yLWFjdGl2ZScpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG1hcC1nZXQoJHRoZW1lLCAnYm94LXNoYWRvdycpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KDpmb2N1cyk6bm90KC50YWctLWVkaXRpbmcpOm5vdCg6YWN0aXZlKTpub3QoLnJlYWRvbmx5KTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsICdiYWNrZ3JvdW5kLWhvdmVyJyk7XHJcbiAgICAgICAgY29sb3I6IG1hcC1nZXQoJHRoZW1lLCAnY29sb3ItaG92ZXInKTtcclxuICAgICAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCR0aGVtZSwgJ2JveC1zaGFkb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICAmLnJlYWRvbmx5IHtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5yZWFkb25seTpmb2N1cyxcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJi50YWctLWVkaXRpbmcge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHRoZW1lLCAnYmFja2dyb3VuZC1lZGl0aW5nJyk7XHJcbiAgICAgICAgYm9yZGVyOiBtYXAtZ2V0KCR0aGVtZSwgJ2JvcmRlci1lZGl0aW5nJyk7XHJcbiAgICAgICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFnLWlucHV0LWZvcm0tdGhlbWUoJHRoZW1lKSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxuICAgIGJvcmRlcjogbWFwLWdldCgkdGhlbWUsICdpbnB1dC1ib3JkZXInKTtcclxuICAgIHBhZGRpbmc6IG1hcC1nZXQoJHRoZW1lLCAnaW5wdXQtcGFkZGluZycpO1xyXG4gICAgaGVpZ2h0OiBtYXAtZ2V0KCR0aGVtZSwgJ2lucHV0LWhlaWdodCcpO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkdGhlbWUsICdpbnB1dC1mb250LXNpemUnKTtcclxuICAgIGZvbnQtZmFtaWx5OiBtYXAtZ2V0KCR0aGVtZSwgJ2ZvbnQtZmFtaWx5Jyk7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmW2Rpc2FibGVkPXRydWVdIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGljb24tdGhlbWUoJHRoZW1lKSB7XHJcbiAgICB3aWR0aDogbWFwLWdldCgkdGhlbWUsICd3aWR0aCcpO1xyXG4gICAgaGVpZ2h0OiBtYXAtZ2V0KCR0aGVtZSwgJ2hlaWdodCcpO1xyXG4gICAgdHJhbnNpdGlvbjogbWFwLWdldCgkdGhlbWUsICd0cmFuc2l0aW9uJyk7XHJcbiAgICBkaXNwbGF5OiBtYXAtZ2V0KCR0aGVtZSwgJ2Rpc3BsYXknKTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICAgIHBhdGgge1xyXG4gICAgICAgIGZpbGw6IG1hcC1nZXQoJHRoZW1lLCAnZmlsbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHN2ZyB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBpY29uLXRoZW1lLWZvY3VzZWQoJHRoZW1lKSB7XHJcbiAgICBwYXRoIHtcclxuICAgICAgICBmaWxsOiBtYXAtZ2V0KCR0aGVtZSwgJ2ZpbGwtZm9jdXMnKTtcclxuICAgIH1cclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vY29yZS9zdHlsZXMvdGhlbWVzL190aGVtZXMuc2Nzc1wiO1xyXG5cclxuLm5nMi10YWctaW5wdXRfX3RleHQtaW5wdXQge1xyXG4gICAgQGluY2x1ZGUgdGFnLWlucHV0LWZvcm0tdGhlbWUoJGRlZmF1bHQtdGhlbWUpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./modules/components/tag-input/animations.ts":
/*!****************************************************!*\
  !*** ./modules/components/tag-input/animations.ts ***!
  \****************************************************/
/*! exports provided: animations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animations", function() { return animations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

/**
 * @name animations
 */
var animations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ enter }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, offset: 0, transform: 'translate(0px, 20px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0.3, offset: 0.3, transform: 'translate(0px, -10px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0.5, offset: 0.5, transform: 'translate(0px, 0px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0.75, offset: 0.75, transform: 'translate(0px, 5px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, offset: 1, transform: 'translate(0px, 0px)' })
            ]))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ leave }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
            ]))
        ])
    ])
];


/***/ }),

/***/ "./modules/components/tag-input/index.ts":
/*!***********************************************!*\
  !*** ./modules/components/tag-input/index.ts ***!
  \***********************************************/
/*! exports provided: TagInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tag_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-input */ "./modules/components/tag-input/tag-input.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagInputComponent", function() { return _tag_input__WEBPACK_IMPORTED_MODULE_0__["TagInputComponent"]; });




/***/ }),

/***/ "./modules/components/tag-input/tag-input.style.scss":
/*!***********************************************************!*\
  !*** ./modules/components/tag-input/tag-input.style.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dark tag:focus {\n  box-shadow: 0 0 0 1px #323232;\n}\n\n.ng2-tag-input.bootstrap3-info {\n  background-color: #fff;\n  display: inline-block;\n  color: #555;\n  vertical-align: middle;\n  max-width: 100%;\n  height: 42px;\n  line-height: 44px;\n}\n\n.ng2-tag-input.bootstrap3-info input {\n  border: none;\n  box-shadow: none;\n  outline: none;\n  background-color: transparent;\n  padding: 0 6px;\n  margin: 0;\n  width: auto;\n  max-width: inherit;\n}\n\n.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder {\n  color: #777;\n  opacity: 1;\n}\n\n.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder {\n  color: #777;\n}\n\n.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder {\n  color: #777;\n}\n\n.ng2-tag-input.bootstrap3-info input:focus {\n  border: none;\n  box-shadow: none;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused {\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n  border: 1px solid #ccc;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n  box-shadow: inset 0 1px 1px #d9534f;\n}\n\n.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  transition: all 0.25s;\n  padding: 0.25rem 0;\n  min-height: 32px;\n  cursor: text;\n  border-bottom: 2px solid #efefef;\n}\n\n.ng2-tag-input:focus {\n  outline: 0;\n}\n\n.ng2-tag-input.ng2-tag-input--dropping {\n  opacity: 0.7;\n}\n\n.ng2-tag-input.ng2-tag-input--focused {\n  border-bottom: 2px solid #2196F3;\n}\n\n.ng2-tag-input.ng2-tag-input--invalid {\n  border-bottom: 2px solid #f44336;\n}\n\n.ng2-tag-input.ng2-tag-input--loading {\n  border: none;\n}\n\n.ng2-tag-input.ng2-tag-input--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.ng2-tag-input form {\n  margin: 0.1em 0;\n}\n\n.ng2-tag-input .ng2-tags-container {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.minimal.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 1px solid transparent;\n}\n\n.minimal.ng2-tag-input:focus {\n  outline: 0;\n}\n\n.minimal.ng2-tag-input.ng2-tag-input--dropping {\n  opacity: 0.7;\n}\n\n.minimal.ng2-tag-input.ng2-tag-input--loading {\n  border: none;\n}\n\n.minimal.ng2-tag-input.ng2-tag-input--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.minimal.ng2-tag-input .ng2-tags-container {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.dark.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #444;\n}\n\n.dark.ng2-tag-input:focus {\n  outline: 0;\n}\n\n.dark.ng2-tag-input.ng2-tag-input--dropping {\n  opacity: 0.7;\n}\n\n.dark.ng2-tag-input.ng2-tag-input--loading {\n  border: none;\n}\n\n.dark.ng2-tag-input.ng2-tag-input--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.dark.ng2-tag-input .ng2-tags-container {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.bootstrap.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #efefef;\n}\n\n.bootstrap.ng2-tag-input:focus {\n  outline: 0;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--dropping {\n  opacity: 0.7;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--focused {\n  border-bottom: 2px solid #0275d8;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--invalid {\n  border-bottom: 2px solid #d9534f;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--loading {\n  border: none;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.bootstrap.ng2-tag-input .ng2-tags-container {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.bootstrap3-info.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  padding: 4px;\n  cursor: text;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  border-radius: 4px;\n}\n\n.bootstrap3-info.ng2-tag-input:focus {\n  outline: 0;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping {\n  opacity: 0.7;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n  border-bottom: 1px solid #d9534f;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading {\n  border: none;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.bootstrap3-info.ng2-tag-input form {\n  margin: 0.1em 0;\n}\n\n.bootstrap3-info.ng2-tag-input .ng2-tags-container {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.error-message {\n  font-size: 0.8em;\n  color: #f44336;\n  margin: 0.5em 0 0 0;\n}\n\n.bootstrap .error-message {\n  color: #d9534f;\n}\n\n.progress-bar, .progress-bar:before {\n  height: 2px;\n  width: 100%;\n  margin: 0;\n}\n\n.progress-bar {\n  background-color: #2196F3;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n}\n\n.progress-bar:before {\n  background-color: #82c4f8;\n  content: \"\";\n  -webkit-animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n}\n\n@-webkit-keyframes running-progress {\n  0% {\n    margin-left: 0;\n    margin-right: 100%;\n  }\n  50% {\n    margin-left: 25%;\n    margin-right: 0;\n  }\n  100% {\n    margin-left: 100%;\n    margin-right: 0;\n  }\n}\n\n@keyframes running-progress {\n  0% {\n    margin-left: 0;\n    margin-right: 100%;\n  }\n  50% {\n    margin-left: 25%;\n    margin-right: 0;\n  }\n  100% {\n    margin-left: 100%;\n    margin-right: 0;\n  }\n}\n\ntag {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n  font-weight: 400;\n  font-size: 1em;\n  letter-spacing: 0.05rem;\n  color: #444;\n  border-radius: 16px;\n  transition: all 0.3s;\n  margin: 0.1rem 0.3rem 0.1rem 0;\n  padding: 0.08rem 0.45rem;\n  height: 32px;\n  line-height: 34px;\n  background: #efefef;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n}\n\ntag:not(.readonly):not(.tag--editing):focus {\n  background: #2196F3;\n  color: #fff;\n  box-shadow: 0 2px 3px 1px #d4d1d1;\n}\n\ntag:not(.readonly):not(.tag--editing):active {\n  background: #0d8aee;\n  color: #fff;\n  box-shadow: 0 2px 3px 1px #d4d1d1;\n}\n\ntag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n  background: #e2e2e2;\n  color: initial;\n  box-shadow: 0 2px 3px 1px #d4d1d1;\n}\n\ntag.readonly {\n  cursor: default;\n}\n\ntag.readonly:focus, tag:focus {\n  outline: 0;\n}\n\ntag.tag--editing {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  cursor: text;\n}\n\n.minimal tag {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  border-radius: 0;\n  background: #f9f9f9;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n}\n\n.minimal tag:not(.readonly):not(.tag--editing):focus {\n  background: #d0d0d0;\n  color: initial;\n}\n\n.minimal tag:not(.readonly):not(.tag--editing):active {\n  background: #d0d0d0;\n  color: initial;\n}\n\n.minimal tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n  background: #ececec;\n}\n\n.minimal tag.readonly {\n  cursor: default;\n}\n\n.minimal tag.readonly:focus, .minimal tag:focus {\n  outline: 0;\n}\n\n.minimal tag.tag--editing {\n  cursor: text;\n}\n\n.dark tag {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  color: #f9f9f9;\n  border-radius: 3px;\n  background: #444;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n}\n\n.dark tag:not(.readonly):not(.tag--editing):focus {\n  background: #efefef;\n  color: #444;\n}\n\n.dark tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n  background: #2b2b2b;\n  color: #f9f9f9;\n}\n\n.dark tag.readonly {\n  cursor: default;\n}\n\n.dark tag.readonly:focus, .dark tag:focus {\n  outline: 0;\n}\n\n.dark tag.tag--editing {\n  cursor: text;\n}\n\n.bootstrap tag {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  color: #f9f9f9;\n  border-radius: 0.25rem;\n  background: #0275d8;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n}\n\n.bootstrap tag:not(.readonly):not(.tag--editing):focus {\n  background: #025aa5;\n}\n\n.bootstrap tag:not(.readonly):not(.tag--editing):active {\n  background: #025aa5;\n}\n\n.bootstrap tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n  background: #0267bf;\n  color: #f9f9f9;\n}\n\n.bootstrap tag.readonly {\n  cursor: default;\n}\n\n.bootstrap tag.readonly:focus, .bootstrap tag:focus {\n  outline: 0;\n}\n\n.bootstrap tag.tag--editing {\n  cursor: text;\n}\n\n.bootstrap3-info tag {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: inherit;\n  font-weight: 400;\n  font-size: 95%;\n  color: #fff;\n  border-radius: 0.25em;\n  background: #5bc0de;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n  padding: 0.25em 0.6em;\n  text-align: center;\n  white-space: nowrap;\n}\n\n.bootstrap3-info tag:not(.readonly):not(.tag--editing):focus {\n  background: #28a1c5;\n}\n\n.bootstrap3-info tag:not(.readonly):not(.tag--editing):active {\n  background: #28a1c5;\n}\n\n.bootstrap3-info tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n  background: #46b8da;\n  color: #fff;\n}\n\n.bootstrap3-info tag.readonly {\n  cursor: default;\n}\n\n.bootstrap3-info tag.readonly:focus, .bootstrap3-info tag:focus {\n  outline: 0;\n}\n\n.bootstrap3-info tag.tag--editing {\n  cursor: text;\n}\n\n:host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tcG9uZW50cy90YWctaW5wdXQvQzpcXHhhbXBwXFxodGRvY3NcXG5neC1jaGlwcy9tb2R1bGVzXFxjb21wb25lbnRzXFx0YWctaW5wdXRcXHRhZy1pbnB1dC5zdHlsZS5zY3NzIiwibW9kdWxlcy9jb21wb25lbnRzL3RhZy1pbnB1dC90YWctaW5wdXQuc3R5bGUuc2NzcyIsIm1vZHVsZXMvY29tcG9uZW50cy90YWctaW5wdXQvQzpcXHhhbXBwXFxodGRvY3NcXG5neC1jaGlwcy9tb2R1bGVzXFxjb3JlXFxzdHlsZXNcXHRoZW1lc1xcX2Jvb3RzdHJhcDMtaW5mby10aGVtZS5zY3NzIiwibW9kdWxlcy9jb21wb25lbnRzL3RhZy1pbnB1dC9DOlxceGFtcHBcXGh0ZG9jc1xcbmd4LWNoaXBzL21vZHVsZXNcXGNvcmVcXHN0eWxlc1xcdGhlbWVzXFxfdGhlbWVzLnNjc3MiLCJtb2R1bGVzL2NvbXBvbmVudHMvdGFnLWlucHV0L0M6XFx4YW1wcFxcaHRkb2NzXFxuZ3gtY2hpcHMvbW9kdWxlc1xcY29yZVxcc3R5bGVzXFxjb3JlXFxfbWl4aW5zLnNjc3MiLCJtb2R1bGVzL2NvbXBvbmVudHMvdGFnLWlucHV0L0M6XFx4YW1wcFxcaHRkb2NzXFxuZ3gtY2hpcHMvbW9kdWxlc1xcY29yZVxcc3R5bGVzXFxjb21wb25lbnRzXFxfcHJvZ3Jlc3MtYmFyLnNjc3MiLCJtb2R1bGVzL2NvbXBvbmVudHMvdGFnLWlucHV0L0M6XFx4YW1wcFxcaHRkb2NzXFxuZ3gtY2hpcHMvbW9kdWxlc1xcY29yZVxcc3R5bGVzXFxjb21wb25lbnRzXFxfdGFnLnNjc3MiLCJtb2R1bGVzL2NvbXBvbmVudHMvdGFnLWlucHV0L0M6XFx4YW1wcFxcaHRkb2NzXFxuZ3gtY2hpcHMvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBO0VBQ0ksNkJBQUE7QUNsQko7O0FDNEJBO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7QUQxQko7O0FDNkJBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUQxQko7O0FDNkJBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUQxQko7O0FDNkJBO0VBQ0ksV0FBQTtBRDFCSjs7QUM2QkE7RUFDSSxXQUFBO0FEMUJKOztBQzZCQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBRDFCSjs7QUM2QkE7RUFDSSw4Q0FBQTtFQUNBLHNCQUFBO0FEMUJKOztBQzZCQTtFQUNJLG1DQUFBO0FEMUJKOztBRXpDQTtFQ1JJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUVBLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUVBLFlBQUE7RUFFQSxnQ0FBQTtBSGlESjs7QUc3Q0k7RUFDSSxVQUFBO0FIK0NSOztBRzVDSTtFQUNJLFlBQUE7QUg4Q1I7O0FHM0NJO0VBQ0ksZ0NBQUE7QUg2Q1I7O0FHMUNJO0VBQ0ksZ0NBQUE7QUg0Q1I7O0FHekNJO0VBQ0ksWUFBQTtBSDJDUjs7QUd4Q0k7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUgwQ1I7O0FHdkNJO0VBQ0ksZUFBQTtBSHlDUjs7QUd0Q0k7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBSHdDUjs7QUUzRUE7RUNaSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFPQSxZQUFBO0VBRUEsb0NBQUE7QUhvRko7O0FHaEZJO0VBQ0ksVUFBQTtBSGtGUjs7QUcvRUk7RUFDSSxZQUFBO0FIaUZSOztBR3RFSTtFQUNJLFlBQUE7QUh3RVI7O0FHckVJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FIdUVSOztBR2hFSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FIa0VSOztBRWpHQTtFQ2hCSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFPQSxZQUFBO0VBRUEsNkJBQUE7QUg4R0o7O0FHMUdJO0VBQ0ksVUFBQTtBSDRHUjs7QUd6R0k7RUFDSSxZQUFBO0FIMkdSOztBR2hHSTtFQUNJLFlBQUE7QUhrR1I7O0FHL0ZJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FIaUdSOztBRzFGSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FINEZSOztBRXZIQTtFQ3BCSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFPQSxZQUFBO0VBRUEsZ0NBQUE7QUh3SUo7O0FHcElJO0VBQ0ksVUFBQTtBSHNJUjs7QUduSUk7RUFDSSxZQUFBO0FIcUlSOztBR2xJSTtFQUNJLGdDQUFBO0FIb0lSOztBR2pJSTtFQUNJLGdDQUFBO0FIbUlSOztBR2hJSTtFQUNJLFlBQUE7QUhrSVI7O0FHL0hJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FIaUlSOztBRzFISTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FINEhSOztBRW5KQTtFQ3hCSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFJQSxZQUFBO0VBR0EsWUFBQTtFQUdBLGdEQUFBO0VBQ0Esa0JBQUE7QUh3S0o7O0FHdEtJO0VBQ0ksVUFBQTtBSHdLUjs7QUdyS0k7RUFDSSxZQUFBO0FIdUtSOztBR2hLSTtFQUNJLGdDQUFBO0FIa0tSOztBRy9KSTtFQUNJLFlBQUE7QUhpS1I7O0FHOUpJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FIZ0tSOztBRzdKSTtFQUNJLGVBQUE7QUgrSlI7O0FHNUpJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUg4SlI7O0FFakxBO0VDd0JJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FINkpKOztBRW5MQTtFQ3FCSSxjQUFBO0FIa0tKOztBSXhOQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBSjJOSjs7QUl4TkE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUoyTko7O0FJeE5BO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsNEVBQUE7RUFDQSxvRUFBQTtBSjJOSjs7QUl4TkE7RUFDSTtJQUFLLGNBQUE7SUFBZ0Isa0JBQUE7RUo2TnZCO0VJNU5FO0lBQU0sZ0JBQUE7SUFBa0IsZUFBQTtFSmdPMUI7RUkvTkU7SUFBTyxpQkFBQTtJQUFtQixlQUFBO0VKbU81QjtBQUNGOztBSWpPQTtFQUNJO0lBQUssY0FBQTtJQUFnQixrQkFBQTtFSnFPdkI7RUlwT0U7SUFBTSxnQkFBQTtJQUFrQixlQUFBO0VKd08xQjtFSXZPRTtJQUFPLGlCQUFBO0lBQW1CLGVBQUE7RUoyTzVCO0FBQ0Y7O0FLelFBO0VGMkRJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxtREFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLG1CQUFBO0VBRUEsb0JBQUE7RUFFQSw4QkFBQTtFQUNBLHdCQUFBO0VBRUEsWUFBQTtFQUNBLGlCQUFBO0VBRUEsbUJBQUE7RUFFQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBSDBNSjs7QUd4TUk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBSDBNUjs7QUd2TUk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBSHlNUjs7QUd0TUk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtBSHdNUjs7QUdyTUk7RUFDSSxlQUFBO0FIdU1SOztBR3BNSTtFQUVJLFVBQUE7QUhxTVI7O0FHbE1JO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUhvTVI7O0FLclRBO0VGdURJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFRQSxnQkFBQTtFQVVBLG1CQUFBO0VBRUEseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUhpUEo7O0FHL09JO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FIaVBSOztBRzdPSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBSCtPUjs7QUczT0k7RUFDSSxtQkFBQTtBSDZPUjs7QUd4T0k7RUFDSSxlQUFBO0FIME9SOztBR3ZPSTtFQUVJLFVBQUE7QUh3T1I7O0FHck9JO0VBR0ksWUFBQTtBSHFPUjs7QUtsVkE7RUZtREksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQU9BLGNBQUE7RUFDQSxrQkFBQTtFQVVBLGdCQUFBO0VBRUEseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUhtUko7O0FHalJJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FIbVJSOztBR3pRSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBSDJRUjs7QUd2UUk7RUFDSSxlQUFBO0FIeVFSOztBR3RRSTtFQUVJLFVBQUE7QUh1UVI7O0FHcFFJO0VBR0ksWUFBQTtBSG9RUjs7QUs3V0E7RUYrQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQU9BLGNBQUE7RUFDQSxzQkFBQTtFQVVBLG1CQUFBO0VBRUEseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUhrVEo7O0FHaFRJO0VBQ0ksbUJBQUE7QUhrVFI7O0FHN1NJO0VBQ0ksbUJBQUE7QUgrU1I7O0FHMVNJO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FINFNSOztBR3hTSTtFQUNJLGVBQUE7QUgwU1I7O0FHdlNJO0VBRUksVUFBQTtBSHdTUjs7QUdyU0k7RUFHSSxZQUFBO0FIcVNSOztBSzFZQTtFRjJDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBRUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFHQSxXQUFBO0VBQ0EscUJBQUE7RUFVQSxtQkFBQTtFQUVBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VFbEVBLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtBTHdaSjs7QUd2Vkk7RUFDSSxtQkFBQTtBSHlWUjs7QUdwVkk7RUFDSSxtQkFBQTtBSHNWUjs7QUdqVkk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUhtVlI7O0FHL1VJO0VBQ0ksZUFBQTtBSGlWUjs7QUc5VUk7RUFFSSxVQUFBO0FIK1VSOztBRzVVSTtFQUdJLFlBQUE7QUg0VVI7O0FNOWJBO0VBQ0UsY0FBQTtBTmljRiIsImZpbGUiOiJtb2R1bGVzL2NvbXBvbmVudHMvdGFnLWlucHV0L3RhZy1pbnB1dC5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRhcmstdGhlbWU6IChcclxuICAgIGNvbnRhaW5lci1ib3JkZXItYm90dG9tOiAycHggc29saWQgbWFwLWdldCgkY29sb3ItcHJpbWFyeSwgJ2RhcmsnKVxyXG4pO1xyXG5cclxuJGRhcmstdGFnLXRoZW1lOiAoXHJcbiAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb2xvci1wcmltYXJ5LCAnZGFyaycpLFxyXG4gICAgY29sb3I6ICNmOWY5ZjksXHJcbiAgICBiYWNrZ3JvdW5kLWZvY3VzZWQ6IG1hcC1nZXQoJGNvbG9yLWZvY3VzZWQsICdkYXJrJyksXHJcbiAgICBiYWNrZ3JvdW5kLWhvdmVyOiBkYXJrZW4obWFwLWdldCgkY29sb3ItcHJpbWFyeSwgJ2RhcmsnKSwgMTAlKSxcclxuICAgIGNvbG9yLWZvY3VzZWQ6IG1hcC1nZXQoJGNvbG9yLXByaW1hcnksICdkYXJrJyksXHJcbiAgICBjb2xvci1ob3ZlcjogI2Y5ZjlmOSxcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweFxyXG4pO1xyXG5cclxuJGRhcmstaWNvbi10aGVtZTogKFxyXG4gICAgZmlsbDogbWFwLWdldCgkY29sb3ItYXJyb3csICdkYXJrJyksXHJcbiAgICBmaWxsLWZvY3VzOiBtYXAtZ2V0KCRjb2xvci1hcnJvdy1mb2N1c2VkLCAnZGFyaycpXHJcbik7XHJcblxyXG4uZGFyayB0YWc6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMzMjMyMzI7XHJcbn1cclxuIiwiLmRhcmsgdGFnOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMzMjMyMzI7XG59XG5cbi5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICM1NTU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbn1cblxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMCA2cHg7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIC5mb3JtLWNvbnRyb2wgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzc3NztcbiAgb3BhY2l0eTogMTtcbn1cblxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIC5mb3JtLWNvbnRyb2wgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mbyAuZm9ybS1jb250cm9sIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mbyBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJvb3RzdHJhcDMtaW5mby5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWZvY3VzZWQge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0taW52YWxpZCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCAjZDk1MzRmO1xufVxuXG4ubmcyLXRhZy1pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xuICBwYWRkaW5nOiAwLjI1cmVtIDA7XG4gIG1pbi1oZWlnaHQ6IDMycHg7XG4gIGN1cnNvcjogdGV4dDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZmVmZWY7XG59XG4ubmcyLXRhZy1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kcm9wcGluZyB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWZvY3VzZWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzIxOTZGMztcbn1cbi5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWludmFsaWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y0NDMzNjtcbn1cbi5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWxvYWRpbmcge1xuICBib3JkZXI6IG5vbmU7XG59XG4ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5uZzItdGFnLWlucHV0IGZvcm0ge1xuICBtYXJnaW46IDAuMWVtIDA7XG59XG4ubmcyLXRhZy1pbnB1dCAubmcyLXRhZ3MtY29udGFpbmVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWluaW1hbC5uZzItdGFnLWlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHRleHQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5taW5pbWFsLm5nMi10YWctaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuLm1pbmltYWwubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kcm9wcGluZyB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5taW5pbWFsLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tbG9hZGluZyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5taW5pbWFsLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4ubWluaW1hbC5uZzItdGFnLWlucHV0IC5uZzItdGFncy1jb250YWluZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kYXJrLm5nMi10YWctaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogdGV4dDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0NDQ7XG59XG4uZGFyay5uZzItdGFnLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5kYXJrLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZHJvcHBpbmcge1xuICBvcGFjaXR5OiAwLjc7XG59XG4uZGFyay5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWxvYWRpbmcge1xuICBib3JkZXI6IG5vbmU7XG59XG4uZGFyay5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLmRhcmsubmcyLXRhZy1pbnB1dCAubmcyLXRhZ3MtY29udGFpbmVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYm9vdHN0cmFwLm5nMi10YWctaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogdGV4dDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZmVmZWY7XG59XG4uYm9vdHN0cmFwLm5nMi10YWctaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuLmJvb3RzdHJhcC5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWRyb3BwaW5nIHtcbiAgb3BhY2l0eTogMC43O1xufVxuLmJvb3RzdHJhcC5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWZvY3VzZWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAyNzVkODtcbn1cbi5ib290c3RyYXAubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1pbnZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkOTUzNGY7XG59XG4uYm9vdHN0cmFwLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tbG9hZGluZyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5ib290c3RyYXAubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5ib290c3RyYXAubmcyLXRhZy1pbnB1dCAubmcyLXRhZ3MtY29udGFpbmVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDRweDtcbiAgY3Vyc29yOiB0ZXh0O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZHJvcHBpbmcge1xuICBvcGFjaXR5OiAwLjc7XG59XG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0taW52YWxpZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDk1MzRmO1xufVxuLmJvb3RzdHJhcDMtaW5mby5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWxvYWRpbmcge1xuICBib3JkZXI6IG5vbmU7XG59XG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQgZm9ybSB7XG4gIG1hcmdpbjogMC4xZW0gMDtcbn1cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dCAubmcyLXRhZ3MtY29udGFpbmVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjZjQ0MzM2O1xuICBtYXJnaW46IDAuNWVtIDAgMCAwO1xufVxuXG4uYm9vdHN0cmFwIC5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6ICNkOTUzNGY7XG59XG5cbi5wcm9ncmVzcy1iYXIsIC5wcm9ncmVzcy1iYXI6YmVmb3JlIHtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn1cblxuLnByb2dyZXNzLWJhcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODJjNGY4O1xuICBjb250ZW50OiBcIlwiO1xuICAtd2Via2l0LWFuaW1hdGlvbjogcnVubmluZy1wcm9ncmVzcyAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlO1xuICBhbmltYXRpb246IHJ1bm5pbmctcHJvZ3Jlc3MgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHJ1bm5pbmctcHJvZ3Jlc3Mge1xuICAwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMDAlO1xuICB9XG4gIDUwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJ1bm5pbmctcHJvZ3Jlc3Mge1xuICAwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMDAlO1xuICB9XG4gIDUwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG50YWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbiAgY29sb3I6ICM0NDQ7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBtYXJnaW46IDAuMXJlbSAwLjNyZW0gMC4xcmVtIDA7XG4gIHBhZGRpbmc6IDAuMDhyZW0gMC40NXJlbTtcbiAgaGVpZ2h0OiAzMnB4O1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG91dGxpbmU6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxudGFnOm5vdCgucmVhZG9ubHkpOm5vdCgudGFnLS1lZGl0aW5nKTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICMyMTk2RjM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCAzcHggMXB4ICNkNGQxZDE7XG59XG50YWc6bm90KC5yZWFkb25seSk6bm90KC50YWctLWVkaXRpbmcpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMwZDhhZWU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCAzcHggMXB4ICNkNGQxZDE7XG59XG50YWc6bm90KDpmb2N1cyk6bm90KC50YWctLWVkaXRpbmcpOm5vdCg6YWN0aXZlKTpub3QoLnJlYWRvbmx5KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlMmUyZTI7XG4gIGNvbG9yOiBpbml0aWFsO1xuICBib3gtc2hhZG93OiAwIDJweCAzcHggMXB4ICNkNGQxZDE7XG59XG50YWcucmVhZG9ubHkge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG50YWcucmVhZG9ubHk6Zm9jdXMsIHRhZzpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG50YWcudGFnLS1lZGl0aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgY3Vyc29yOiB0ZXh0O1xufVxuXG4ubWluaW1hbCB0YWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdXRsaW5lOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5taW5pbWFsIHRhZzpub3QoLnJlYWRvbmx5KTpub3QoLnRhZy0tZWRpdGluZyk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjZDBkMGQwO1xuICBjb2xvcjogaW5pdGlhbDtcbn1cbi5taW5pbWFsIHRhZzpub3QoLnJlYWRvbmx5KTpub3QoLnRhZy0tZWRpdGluZyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2QwZDBkMDtcbiAgY29sb3I6IGluaXRpYWw7XG59XG4ubWluaW1hbCB0YWc6bm90KDpmb2N1cyk6bm90KC50YWctLWVkaXRpbmcpOm5vdCg6YWN0aXZlKTpub3QoLnJlYWRvbmx5KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XG59XG4ubWluaW1hbCB0YWcucmVhZG9ubHkge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4ubWluaW1hbCB0YWcucmVhZG9ubHk6Zm9jdXMsIC5taW5pbWFsIHRhZzpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4ubWluaW1hbCB0YWcudGFnLS1lZGl0aW5nIHtcbiAgY3Vyc29yOiB0ZXh0O1xufVxuXG4uZGFyayB0YWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGNvbG9yOiAjZjlmOWY5O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6ICM0NDQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdXRsaW5lOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kYXJrIHRhZzpub3QoLnJlYWRvbmx5KTpub3QoLnRhZy0tZWRpdGluZyk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBjb2xvcjogIzQ0NDtcbn1cbi5kYXJrIHRhZzpub3QoOmZvY3VzKTpub3QoLnRhZy0tZWRpdGluZyk6bm90KDphY3RpdmUpOm5vdCgucmVhZG9ubHkpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzJiMmIyYjtcbiAgY29sb3I6ICNmOWY5Zjk7XG59XG4uZGFyayB0YWcucmVhZG9ubHkge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uZGFyayB0YWcucmVhZG9ubHk6Zm9jdXMsIC5kYXJrIHRhZzpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4uZGFyayB0YWcudGFnLS1lZGl0aW5nIHtcbiAgY3Vyc29yOiB0ZXh0O1xufVxuXG4uYm9vdHN0cmFwIHRhZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgY29sb3I6ICNmOWY5Zjk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGJhY2tncm91bmQ6ICMwMjc1ZDg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdXRsaW5lOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ib290c3RyYXAgdGFnOm5vdCgucmVhZG9ubHkpOm5vdCgudGFnLS1lZGl0aW5nKTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICMwMjVhYTU7XG59XG4uYm9vdHN0cmFwIHRhZzpub3QoLnJlYWRvbmx5KTpub3QoLnRhZy0tZWRpdGluZyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzAyNWFhNTtcbn1cbi5ib290c3RyYXAgdGFnOm5vdCg6Zm9jdXMpOm5vdCgudGFnLS1lZGl0aW5nKTpub3QoOmFjdGl2ZSk6bm90KC5yZWFkb25seSk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDI2N2JmO1xuICBjb2xvcjogI2Y5ZjlmOTtcbn1cbi5ib290c3RyYXAgdGFnLnJlYWRvbmx5IHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmJvb3RzdHJhcCB0YWcucmVhZG9ubHk6Zm9jdXMsIC5ib290c3RyYXAgdGFnOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5ib290c3RyYXAgdGFnLnRhZy0tZWRpdGluZyB7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuLmJvb3RzdHJhcDMtaW5mbyB0YWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDk1JTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgYmFja2dyb3VuZDogIzViYzBkZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG91dGxpbmU6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwLjI1ZW0gMC42ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5ib290c3RyYXAzLWluZm8gdGFnOm5vdCgucmVhZG9ubHkpOm5vdCgudGFnLS1lZGl0aW5nKTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICMyOGExYzU7XG59XG4uYm9vdHN0cmFwMy1pbmZvIHRhZzpub3QoLnJlYWRvbmx5KTpub3QoLnRhZy0tZWRpdGluZyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzI4YTFjNTtcbn1cbi5ib290c3RyYXAzLWluZm8gdGFnOm5vdCg6Zm9jdXMpOm5vdCgudGFnLS1lZGl0aW5nKTpub3QoOmFjdGl2ZSk6bm90KC5yZWFkb25seSk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNDZiOGRhO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5ib290c3RyYXAzLWluZm8gdGFnLnJlYWRvbmx5IHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmJvb3RzdHJhcDMtaW5mbyB0YWcucmVhZG9ubHk6Zm9jdXMsIC5ib290c3RyYXAzLWluZm8gdGFnOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5ib290c3RyYXAzLWluZm8gdGFnLnRhZy0tZWRpdGluZyB7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn0iLCIkYm9vdHN0cmFwMy1pbmZvLXRoZW1lOiAoXHJcbiAgICBjb250YWluZXItcGFkZGluZzogNHB4LFxyXG4gICAgY29udGFpbmVyLW1hcmdpbjogJGNvbnRhaW5lci1tYXJnaW4sXHJcbiAgICBjb250YWluZXItYm9yZGVyLWJvdHRvbS1pbnZhbGlkOiAxcHggc29saWQgbWFwLWdldCgkY29sb3ItZXJyb3IsICdib290c3RyYXAzLWluZm8nKSxcclxuICAgIGlucHV0LWJvcmRlcjogMXB4IHNvbGlkICNjY2MsXHJcbiAgICBpbnB1dC1wYWRkaW5nOiAkaW5wdXQtcGFkZGluZyxcclxuICAgIGlucHV0LWZvbnQtc2l6ZTogOTUlLFxyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQsXHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksXHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHhcclxuKTtcclxuXHJcbiRib290c3RyYXAzLWluZm8tdGFnLXRoZW1lOiAoXHJcbiAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb2xvci1wcmltYXJ5LCAnYm9vdHN0cmFwMy1pbmZvJyksXHJcbiAgICBmb250LXNpemU6IDk1JSxcclxuICAgIGNvbG9yOiAjZmZmLFxyXG4gICAgY29sb3ItaG92ZXI6ICNmZmYsXHJcbiAgICBmb250LXdlaWdodDogNDAwLFxyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1ZW0sXHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdCxcclxuICAgIGJhY2tncm91bmQtZm9jdXNlZDogbWFwLWdldCgkY29sb3ItZm9jdXNlZCwgJ2Jvb3RzdHJhcDMtaW5mbycpLFxyXG4gICAgYmFja2dyb3VuZC1hY3RpdmU6IG1hcC1nZXQoJGNvbG9yLWZvY3VzZWQsICdib290c3RyYXAzLWluZm8nKSxcclxuICAgIGJhY2tncm91bmQtaG92ZXI6IGRhcmtlbihtYXAtZ2V0KCRjb2xvci1wcmltYXJ5LCAnYm9vdHN0cmFwMy1pbmZvJyksIDUlKVxyXG4pO1xyXG5cclxuJGJvb3RzdHJhcDMtaW5mby1pY29uLXRoZW1lOiAoXHJcbiAgICBmaWxsOiBtYXAtZ2V0KCRjb2xvci1hcnJvdywgJ2Jvb3RzdHJhcDMtaW5mbycpLFxyXG4gICAgZmlsbC1mb2N1czogbWFwLWdldCgkY29sb3ItYXJyb3csICdib290c3RyYXAzLWluZm8nKVxyXG4pO1xyXG5cclxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbn1cclxuXHJcbi5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mbyBpbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcclxufVxyXG5cclxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIC5mb3JtLWNvbnRyb2wgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ubmcyLXRhZy1pbnB1dC5ib290c3RyYXAzLWluZm8gLmZvcm0tY29udHJvbCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mbyAuZm9ybS1jb250cm9sIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG59XHJcblxyXG4ubmcyLXRhZy1pbnB1dC5ib290c3RyYXAzLWluZm8gaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmJvb3RzdHJhcDMtaW5mby5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWZvY3VzZWQge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1pbnZhbGlkIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCBtYXAtZ2V0KCRjb2xvci1lcnJvciwgJ2Jvb3RzdHJhcCcpO1xyXG59XHJcbiIsIi8vIFRIRU1FU1xyXG5cclxuQGltcG9ydCBcIi4uL2NvcmUvX2NvcmUuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiX2RlZmF1bHQtdGhlbWUuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiX21pbmltYWwtdGhlbWUuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiX2RhcmstdGhlbWUuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiX2Jvb3RzdHJhcC10aGVtZS5zY3NzXCI7XHJcbkBpbXBvcnQgXCJfYm9vdHN0cmFwMy1pbmZvLXRoZW1lLnNjc3NcIjtcclxuXHJcbi5uZzItdGFnLWlucHV0IHtcclxuICAgIEBpbmNsdWRlIHRhZy1pbnB1dC10aGVtZSgkZGVmYXVsdC10aGVtZSk7XHJcbn1cclxuXHJcbi5taW5pbWFsLm5nMi10YWctaW5wdXQge1xyXG4gICAgQGluY2x1ZGUgdGFnLWlucHV0LXRoZW1lKCRtaW5pbWFsLXRoZW1lKTtcclxufVxyXG5cclxuLmRhcmsubmcyLXRhZy1pbnB1dCB7XHJcbiAgICBAaW5jbHVkZSB0YWctaW5wdXQtdGhlbWUoJGRhcmstdGhlbWUpO1xyXG59XHJcblxyXG4uYm9vdHN0cmFwLm5nMi10YWctaW5wdXQge1xyXG4gICAgQGluY2x1ZGUgdGFnLWlucHV0LXRoZW1lKCRib290c3RyYXAtdGhlbWUpO1xyXG59XHJcblxyXG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQge1xyXG4gICAgQGluY2x1ZGUgdGFnLWlucHV0LXRoZW1lKCRib290c3RyYXAzLWluZm8tdGhlbWUpO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBAaW5jbHVkZSBlcnJvci1tZXNzYWdlKCRkZWZhdWx0LXRoZW1lKTtcclxufVxyXG5cclxuLmJvb3RzdHJhcCAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBAaW5jbHVkZSBlcnJvci1tZXNzYWdlKCRib290c3RyYXAtdGhlbWUpO1xyXG59XHJcbiIsIkBtaXhpbiB0YWctaW5wdXQtdGhlbWUoJHRoZW1lKSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogbWFwLWdldCgkdGhlbWUsIHRyYW5zaXRpb24pO1xyXG5cclxuICAgIHBhZGRpbmc6IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLXBhZGRpbmcnKTtcclxuICAgIG1pbi1oZWlnaHQ6IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLWhlaWdodCcpO1xyXG5cclxuICAgIGN1cnNvcjogdGV4dDtcclxuXHJcbiAgICBib3JkZXItYm90dG9tOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci1ib3JkZXItYm90dG9tJyk7XHJcbiAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCR0aGVtZSwgJ2JveC1zaGFkb3cnKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJHRoZW1lLCAnYm9yZGVyLXJhZGl1cycpO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJi5uZzItdGFnLWlucHV0LS1kcm9wcGluZyB7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG5cclxuICAgICYubmcyLXRhZy1pbnB1dC0tZm9jdXNlZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItYm9yZGVyLWJvdHRvbS1mb2N1c2VkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5uZzItdGFnLWlucHV0LS1pbnZhbGlkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci1ib3JkZXItYm90dG9tLWludmFsaWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAmLm5nMi10YWctaW5wdXQtLWxvYWRpbmcge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmLm5nMi10YWctaW5wdXQtLWRpc2FibGVkIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgICBtYXJnaW46IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLW1hcmdpbicpO1xyXG4gICAgfVxyXG5cclxuICAgIC5uZzItdGFncy1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZXJyb3ItbWVzc2FnZSgkdGhlbWUpIHtcclxuICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkdGhlbWUsICdlcnJvci1tZXNzYWdlLWZvbnQtc2l6ZScpO1xyXG4gICAgY29sb3I6IG1hcC1nZXQoJHRoZW1lLCAnZXJyb3ItbWVzc2FnZS1jb2xvcicpO1xyXG4gICAgbWFyZ2luOiBtYXAtZ2V0KCR0aGVtZSwgJ2Vycm9yLW1lc3NhZ2UtbWFyZ2luJyk7XHJcbn1cclxuXHJcbkBtaXhpbiB0YWctdGhlbWUoJHRoZW1lKSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICBmb250LWZhbWlseTogbWFwLWdldCgkdGhlbWUsICdmb250LWZhbWlseScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG1hcC1nZXQoJHRoZW1lLCAnZm9udC13ZWlnaHQnKTtcclxuICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkdGhlbWUsICdmb250LXNpemUnKTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBtYXAtZ2V0KCR0aGVtZSwgJ2xldHRlci1zcGFjaW5nJyk7XHJcblxyXG4gICAgY29sb3I6IG1hcC1nZXQoJHRoZW1lLCAnY29sb3InKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJHRoZW1lLCAnYm9yZGVyLXJhZGl1cycpO1xyXG5cclxuICAgIHRyYW5zaXRpb246IG1hcC1nZXQoJHRoZW1lLCAndHJhbnNpdGlvbicpO1xyXG5cclxuICAgIG1hcmdpbjogbWFwLWdldCgkdGhlbWUsICdtYXJnaW4nKTtcclxuICAgIHBhZGRpbmc6IG1hcC1nZXQoJHRoZW1lLCAncGFkZGluZycpO1xyXG5cclxuICAgIGhlaWdodDogbWFwLWdldCgkdGhlbWUsICdoZWlnaHQnKTtcclxuICAgIGxpbmUtaGVpZ2h0OiBtYXAtZ2V0KCR0aGVtZSwgJ2xpbmUtaGVpZ2h0Jyk7XHJcblxyXG4gICAgYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsICdiYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOm5vdCgucmVhZG9ubHkpOm5vdCgudGFnLS1lZGl0aW5nKTpmb2N1cyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsICdiYWNrZ3JvdW5kLWZvY3VzZWQnKTtcclxuICAgICAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdjb2xvci1mb2N1c2VkJyk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbWFwLWdldCgkdGhlbWUsICdib3gtc2hhZG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnJlYWRvbmx5KTpub3QoLnRhZy0tZWRpdGluZyk6YWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQtYWN0aXZlJyk7XHJcbiAgICAgICAgY29sb3I6IG1hcC1nZXQoJHRoZW1lLCAnY29sb3ItYWN0aXZlJyk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbWFwLWdldCgkdGhlbWUsICdib3gtc2hhZG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoOmZvY3VzKTpub3QoLnRhZy0tZWRpdGluZyk6bm90KDphY3RpdmUpOm5vdCgucmVhZG9ubHkpOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQtaG92ZXInKTtcclxuICAgICAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdjb2xvci1ob3ZlcicpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG1hcC1nZXQoJHRoZW1lLCAnYm94LXNoYWRvdycpO1xyXG4gICAgfVxyXG5cclxuICAgICYucmVhZG9ubHkge1xyXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuXHJcbiAgICAmLnJlYWRvbmx5OmZvY3VzLFxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmLnRhZy0tZWRpdGluZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkdGhlbWUsICdiYWNrZ3JvdW5kLWVkaXRpbmcnKTtcclxuICAgICAgICBib3JkZXI6IG1hcC1nZXQoJHRoZW1lLCAnYm9yZGVyLWVkaXRpbmcnKTtcclxuICAgICAgICBjdXJzb3I6IHRleHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWctaW5wdXQtZm9ybS10aGVtZSgkdGhlbWUpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gICAgYm9yZGVyOiBtYXAtZ2V0KCR0aGVtZSwgJ2lucHV0LWJvcmRlcicpO1xyXG4gICAgcGFkZGluZzogbWFwLWdldCgkdGhlbWUsICdpbnB1dC1wYWRkaW5nJyk7XHJcbiAgICBoZWlnaHQ6IG1hcC1nZXQoJHRoZW1lLCAnaW5wdXQtaGVpZ2h0Jyk7XHJcblxyXG4gICAgZm9udC1zaXplOiBtYXAtZ2V0KCR0aGVtZSwgJ2lucHV0LWZvbnQtc2l6ZScpO1xyXG4gICAgZm9udC1mYW1pbHk6IG1hcC1nZXQoJHRoZW1lLCAnZm9udC1mYW1pbHknKTtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICZbZGlzYWJsZWQ9dHJ1ZV0ge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gaWNvbi10aGVtZSgkdGhlbWUpIHtcclxuICAgIHdpZHRoOiBtYXAtZ2V0KCR0aGVtZSwgJ3dpZHRoJyk7XHJcbiAgICBoZWlnaHQ6IG1hcC1nZXQoJHRoZW1lLCAnaGVpZ2h0Jyk7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXAtZ2V0KCR0aGVtZSwgJ3RyYW5zaXRpb24nKTtcclxuICAgIGRpc3BsYXk6IG1hcC1nZXQoJHRoZW1lLCAnZGlzcGxheScpO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgcGF0aCB7XHJcbiAgICAgICAgZmlsbDogbWFwLWdldCgkdGhlbWUsICdmaWxsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgIGhlaWdodDogMzRweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGljb24tdGhlbWUtZm9jdXNlZCgkdGhlbWUpIHtcclxuICAgIHBhdGgge1xyXG4gICAgICAgIGZpbGw6IG1hcC1nZXQoJHRoZW1lLCAnZmlsbC1mb2N1cycpO1xyXG4gICAgfVxyXG59XHJcbiIsIi5wcm9ncmVzcy1iYXIsIC5wcm9ncmVzcy1iYXI6YmVmb3JlIHtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwX2dldCgkY29sb3ItZm9jdXNlZCwgJ2RlZmF1bHQnKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXI6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4obWFwX2dldCgkY29sb3ItZm9jdXNlZCwgJ2RlZmF1bHQnKSwgMjAlKTtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHJ1bm5pbmctcHJvZ3Jlc3MgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogcnVubmluZy1wcm9ncmVzcyAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcnVubmluZy1wcm9ncmVzcyB7XHJcbiAgICAwJSB7IG1hcmdpbi1sZWZ0OiAwOyBtYXJnaW4tcmlnaHQ6IDEwMCU7IH1cclxuICAgIDUwJSB7IG1hcmdpbi1sZWZ0OiAyNSU7IG1hcmdpbi1yaWdodDogMDsgfVxyXG4gICAgMTAwJSB7IG1hcmdpbi1sZWZ0OiAxMDAlOyBtYXJnaW4tcmlnaHQ6IDA7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBydW5uaW5nLXByb2dyZXNzIHtcclxuICAgIDAlIHsgbWFyZ2luLWxlZnQ6IDA7IG1hcmdpbi1yaWdodDogMTAwJTsgfVxyXG4gICAgNTAlIHsgbWFyZ2luLWxlZnQ6IDI1JTsgbWFyZ2luLXJpZ2h0OiAwOyB9XHJcbiAgICAxMDAlIHsgbWFyZ2luLWxlZnQ6IDEwMCU7IG1hcmdpbi1yaWdodDogMDsgfVxyXG59XHJcbiIsInRhZyB7XHJcbiAgICBAaW5jbHVkZSB0YWctdGhlbWUoJGRlZmF1bHQtdGFnLXRoZW1lKTtcclxufVxyXG5cclxuLm1pbmltYWwgdGFnIHtcclxuICAgIEBpbmNsdWRlIHRhZy10aGVtZSgkbWluaW1hbC10YWctdGhlbWUpO1xyXG59XHJcblxyXG4uZGFyayB0YWcge1xyXG4gICAgQGluY2x1ZGUgdGFnLXRoZW1lKCRkYXJrLXRhZy10aGVtZSk7XHJcbn1cclxuXHJcbi5ib290c3RyYXAgdGFnIHtcclxuICAgIEBpbmNsdWRlIHRhZy10aGVtZSgkYm9vdHN0cmFwLXRhZy10aGVtZSk7XHJcbn1cclxuXHJcbi5ib290c3RyYXAzLWluZm8gdGFnIHtcclxuICAgIEBpbmNsdWRlIHRhZy10aGVtZSgkYm9vdHN0cmFwMy1pbmZvLXRhZy10aGVtZSk7XHJcblxyXG4gICAgcGFkZGluZzogLjI1ZW0gLjZlbTtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi9jb3JlL3N0eWxlcy90aGVtZXMvX3RoZW1lcy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi9jb3JlL3N0eWxlcy9jb21wb25lbnRzL19jb21wb25lbnRzLnNjc3NcIjtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./modules/components/tag-input/tag-input.ts":
/*!***************************************************!*\
  !*** ./modules/components/tag-input/tag-input.ts ***!
  \***************************************************/
/*! exports provided: TagInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputComponent", function() { return TagInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_accessor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessor */ "./modules/core/accessor.ts");
/* harmony import */ var _core_helpers_listen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/helpers/listen */ "./modules/core/helpers/listen.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/constants */ "./modules/core/constants/index.ts");
/* harmony import */ var _core_providers_drag_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/providers/drag-provider */ "./modules/core/providers/drag-provider.ts");
/* harmony import */ var _tag_input_form_tag_input_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tag-input-form/tag-input-form.component */ "./modules/components/tag-input-form/tag-input-form.component.ts");
/* harmony import */ var _tag_tag_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tag/tag.component */ "./modules/components/tag/tag.component.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./animations */ "./modules/components/tag-input/animations.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../defaults */ "./modules/defaults.ts");
/* harmony import */ var _dropdown_tag_input_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dropdown/tag-input-dropdown.component */ "./modules/components/dropdown/tag-input-dropdown.component.ts");

// angular



// ng2-tag-input









// angular universal hacks
/* tslint:disable-next-line */
var DragEvent = window.DragEvent;
var CUSTOM_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return TagInputComponent; }),
    multi: true
};
var TagInputComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TagInputComponent, _super);
    function TagInputComponent(renderer, dragProvider) {
        var _a;
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.dragProvider = dragProvider;
        /**
         * @name separatorKeys
         * @desc keyboard keys with which a user can separate items
         */
        _this.separatorKeys = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.separatorKeys;
        /**
         * @name separatorKeyCodes
         * @desc keyboard key codes with which a user can separate items
         */
        _this.separatorKeyCodes = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.separatorKeyCodes;
        /**
         * @name placeholder
         * @desc the placeholder of the input text
         */
        _this.placeholder = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.placeholder;
        /**
         * @name secondaryPlaceholder
         * @desc placeholder to appear when the input is empty
         */
        _this.secondaryPlaceholder = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.secondaryPlaceholder;
        /**
         * @name maxItems
         * @desc maximum number of items that can be added
         */
        _this.maxItems = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.maxItems;
        /**
         * @name validators
         * @desc array of Validators that are used to validate the tag before it gets appended to the list
         */
        _this.validators = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.validators;
        /**
         * @name asyncValidators
         * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
         */
        _this.asyncValidators = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.asyncValidators;
        /**
        * - if set to true, it will only possible to add items from the autocomplete
        * @name onlyFromAutocomplete
        */
        _this.onlyFromAutocomplete = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.onlyFromAutocomplete;
        /**
         * @name errorMessages
         */
        _this.errorMessages = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.errorMessages;
        /**
         * @name theme
         */
        _this.theme = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.theme;
        /**
         * @name onTextChangeDebounce
         */
        _this.onTextChangeDebounce = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.onTextChangeDebounce;
        /**
         * - custom id assigned to the input
         * @name id
         */
        _this.inputId = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.inputId;
        /**
         * - custom class assigned to the input
         */
        _this.inputClass = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.inputClass;
        /**
         * - option to clear text input when the form is blurred
         * @name clearOnBlur
         */
        _this.clearOnBlur = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.clearOnBlur;
        /**
         * - hideForm
         * @name clearOnBlur
         */
        _this.hideForm = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.hideForm;
        /**
         * @name addOnBlur
         */
        _this.addOnBlur = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.addOnBlur;
        /**
         * @name addOnPaste
         */
        _this.addOnPaste = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.addOnPaste;
        /**
         * - pattern used with the native method split() to separate patterns in the string pasted
         * @name pasteSplitPattern
         */
        _this.pasteSplitPattern = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.pasteSplitPattern;
        /**
         * @name blinkIfDupe
         */
        _this.blinkIfDupe = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.blinkIfDupe;
        /**
         * @name removable
         */
        _this.removable = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.removable;
        /**
         * @name editable
         */
        _this.editable = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.editable;
        /**
         * @name allowDupes
         */
        _this.allowDupes = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.allowDupes;
        /**
         * @description if set to true, the newly added tags will be added as strings, and not objects
         * @name modelAsStrings
         */
        _this.modelAsStrings = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.modelAsStrings;
        /**
         * @name trimTags
         */
        _this.trimTags = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.trimTags;
        /**
         * @name ripple
         */
        _this.ripple = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.ripple;
        /**
         * @name tabindex
         * @desc pass through the specified tabindex to the input
         */
        _this.tabindex = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.tabIndex;
        /**
         * @name disable
         */
        _this.disable = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.disable;
        /**
         * @name dragZone
         */
        _this.dragZone = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.dragZone;
        /**
         * @name onRemoving
         */
        _this.onRemoving = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.onRemoving;
        /**
         * @name onAdding
         */
        _this.onAdding = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.onAdding;
        /**
         * @name animationDuration
         */
        _this.animationDuration = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.animationDuration;
        /**
         * @name onAdd
         * @desc event emitted when adding a new item
         */
        _this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onRemove
         * @desc event emitted when removing an existing item
         */
        _this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onSelect
         * @desc event emitted when selecting an item
         */
        _this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onFocus
         * @desc event emitted when the input is focused
         */
        _this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onFocus
         * @desc event emitted when the input is blurred
         */
        _this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onTextChange
         * @desc event emitted when the input value changes
         */
        _this.onTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * - output triggered when text is pasted in the form
         * @name onPaste
         */
        _this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * - output triggered when tag entered is not valid
         * @name onValidationError
         */
        _this.onValidationError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * - output triggered when tag is edited
         * @name onTagEdited
         */
        _this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name isLoading
         */
        _this.isLoading = false;
        /**
         * @name listeners
         * @desc array of events that get fired using @fireEvents
         */
        _this.listeners = (_a = {},
            _a[_core_constants__WEBPACK_IMPORTED_MODULE_6__["KEYDOWN"]] = [],
            _a[_core_constants__WEBPACK_IMPORTED_MODULE_6__["KEYUP"]] = [],
            _a);
        /**
         * @description emitter for the 2-way data binding inputText value
         * @name inputTextChange
         */
        _this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @description private variable to bind get/set
         * @name inputTextValue
         */
        _this.inputTextValue = '';
        _this.errors = [];
        /**
         * @name appendTag
         * @param tag {TagModel}
         */
        _this.appendTag = function (tag, index) {
            if (index === void 0) { index = _this.items.length; }
            var items = _this.items;
            var model = _this.modelAsStrings ? tag[_this.identifyBy] : tag;
            _this.items = items.slice(0, index).concat([
                model
            ], items.slice(index, items.length));
        };
        /**
         * @name createTag
         * @param model
         */
        _this.createTag = function (model) {
            var _a;
            var trim = function (val, key) {
                return typeof val === 'string' ? val.trim() : val[key];
            };
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, typeof model !== 'string' ? model : {}, (_a = {}, _a[_this.displayBy] = _this.trimTags ? trim(model, _this.displayBy) : model, _a[_this.identifyBy] = _this.trimTags ? trim(model, _this.identifyBy) : model, _a));
        };
        /**
         *
         * @param tag
         * @param isFromAutocomplete
         */
        _this.isTagValid = function (tag, fromAutocomplete) {
            if (fromAutocomplete === void 0) { fromAutocomplete = false; }
            var selectedItem = _this.dropdown ? _this.dropdown.selectedItem : undefined;
            var value = _this.getItemDisplay(tag).trim();
            if (selectedItem && !fromAutocomplete || !value) {
                return false;
            }
            var dupe = _this.findDupe(tag, fromAutocomplete);
            // if so, give a visual cue and return false
            if (!_this.allowDupes && dupe && _this.blinkIfDupe) {
                var model = _this.tags.find(function (item) {
                    return _this.getItemValue(item.model) === _this.getItemValue(dupe);
                });
                if (model) {
                    model.blink();
                }
            }
            var isFromAutocomplete = fromAutocomplete && _this.onlyFromAutocomplete;
            var assertions = [
                // 1. there must be no dupe OR dupes are allowed
                !dupe || _this.allowDupes,
                // 2. check max items has not been reached
                !_this.maxItemsReached,
                // 3. check item comes from autocomplete or onlyFromAutocomplete is false
                ((isFromAutocomplete) || !_this.onlyFromAutocomplete)
            ];
            return assertions.filter(Boolean).length === assertions.length;
        };
        /**
         * @name onPasteCallback
         * @param data
         */
        _this.onPasteCallback = function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var getText, text, requests, resetInput;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                getText = function () {
                    var isIE = Boolean(window.clipboardData);
                    var clipboardData = isIE ? (window.clipboardData) : data.clipboardData;
                    var type = isIE ? 'Text' : 'text/plain';
                    return clipboardData === null ? '' : clipboardData.getData(type) || '';
                };
                text = getText();
                requests = text
                    .split(this.pasteSplitPattern)
                    .map(function (item) {
                    var tag = _this.createTag(item);
                    _this.setInputValue(tag[_this.displayBy]);
                    return _this.onAddingRequested(false, tag);
                });
                resetInput = function () { return setTimeout(function () { return _this.setInputValue(''); }, 50); };
                Promise.all(requests).then(function () {
                    _this.onPaste.emit(text);
                    resetInput();
                })
                    .catch(resetInput);
                return [2 /*return*/];
            });
        }); };
        return _this;
    }
    Object.defineProperty(TagInputComponent.prototype, "inputText", {
        /**
         * @name inputText
         */
        get: function () {
            return this.inputTextValue;
        },
        /**
         * @name inputText
         * @param text
         */
        set: function (text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "tabindexAttr", {
        /**
         * @desc removes the tab index if it is set - it will be passed through to the input
         * @name tabindexAttr
         */
        get: function () {
            return this.tabindex !== '' ? '-1' : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name ngAfterViewInit
     */
    TagInputComponent.prototype.ngAfterViewInit = function () {
        // set up listeners
        var _this = this;
        this.setUpKeypressListeners();
        this.setupSeparatorKeysListener();
        this.setUpInputKeydownListeners();
        if (this.onTextChange.observers.length) {
            this.setUpTextChangeSubscriber();
        }
        // if clear on blur is set to true, subscribe to the event and clear the text's form
        if (this.clearOnBlur || this.addOnBlur) {
            this.setUpOnBlurSubscriber();
        }
        // if addOnPaste is set to true, register the handler and add items
        if (this.addOnPaste) {
            this.setUpOnPasteListener();
        }
        var statusChanges$ = this.inputForm.form.statusChanges;
        statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (status) { return status !== 'PENDING'; })).subscribe(function () {
            _this.errors = _this.inputForm.getErrorMessages(_this.errorMessages);
        });
        this.isProgressBarVisible$ = statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (status) {
            return status === 'PENDING' || _this.isLoading;
        }));
        // if hideForm is set to true, remove the input
        if (this.hideForm) {
            this.inputForm.destroy();
        }
    };
    /**
     * @name ngOnInit
     */
    TagInputComponent.prototype.ngOnInit = function () {
        // if the number of items specified in the model is > of the value of maxItems
        // degrade gracefully and let the max number of items to be the number of items in the model
        // though, warn the user.
        var hasReachedMaxItems = this.maxItems !== undefined &&
            this.items &&
            this.items.length > this.maxItems;
        if (hasReachedMaxItems) {
            this.maxItems = this.items.length;
            console.warn(_core_constants__WEBPACK_IMPORTED_MODULE_6__["MAX_ITEMS_WARNING"]);
        }
        // Setting editable to false to fix problem with tags in IE still being editable when
        // onlyFromAutocomplete is true
        this.editable = this.onlyFromAutocomplete ? false : this.editable;
        this.setAnimationMetadata();
    };
    /**
     * @name onRemoveRequested
     * @param tag
     * @param index
     */
    TagInputComponent.prototype.onRemoveRequested = function (tag, index) {
        var _this = this;
        return new Promise(function (resolve) {
            var subscribeFn = function (model) {
                _this.removeItem(model, index);
                resolve(tag);
            };
            _this.onRemoving ?
                _this.onRemoving(tag)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(subscribeFn) : subscribeFn(tag);
        });
    };
    /**
     * @name onAddingRequested
     * @param fromAutocomplete {boolean}
     * @param tag {TagModel}
     * @param index? {number}
     * @param giveupFocus? {boolean}
     */
    TagInputComponent.prototype.onAddingRequested = function (fromAutocomplete, tag, index, giveupFocus) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var subscribeFn = function (model) {
                return _this
                    .addItem(fromAutocomplete, model, index, giveupFocus)
                    .then(resolve)
                    .catch(reject);
            };
            return _this.onAdding ?
                _this.onAdding(tag)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(subscribeFn, reject) : subscribeFn(tag);
        });
    };
    /**
     * @name selectItem
     * @desc selects item passed as parameter as the selected tag
     * @param item
     * @param emit
     */
    TagInputComponent.prototype.selectItem = function (item, emit) {
        if (emit === void 0) { emit = true; }
        var isReadonly = item && typeof item !== 'string' && item.readonly;
        if (isReadonly || this.selectedTag === item) {
            return;
        }
        this.selectedTag = item;
        if (emit) {
            this.onSelect.emit(item);
        }
    };
    /**
     * @name fireEvents
     * @desc goes through the list of the events for a given eventName, and fires each of them
     * @param eventName
     * @param $event
     */
    TagInputComponent.prototype.fireEvents = function (eventName, $event) {
        var _this = this;
        this.listeners[eventName].forEach(function (listener) { return listener.call(_this, $event); });
    };
    /**
     * @name handleKeydown
     * @desc handles action when the user hits a keyboard key
     * @param data
     */
    TagInputComponent.prototype.handleKeydown = function (data) {
        var event = data.event;
        var key = event.keyCode || event.which;
        var shiftKey = event.shiftKey || false;
        switch (_core_constants__WEBPACK_IMPORTED_MODULE_6__["KEY_PRESS_ACTIONS"][key]) {
            case _core_constants__WEBPACK_IMPORTED_MODULE_6__["ACTIONS_KEYS"].DELETE:
                if (this.selectedTag && this.removable) {
                    var index = this.items.indexOf(this.selectedTag);
                    this.onRemoveRequested(this.selectedTag, index);
                }
                break;
            case _core_constants__WEBPACK_IMPORTED_MODULE_6__["ACTIONS_KEYS"].SWITCH_PREV:
                this.moveToTag(data.model, _core_constants__WEBPACK_IMPORTED_MODULE_6__["PREV"]);
                break;
            case _core_constants__WEBPACK_IMPORTED_MODULE_6__["ACTIONS_KEYS"].SWITCH_NEXT:
                this.moveToTag(data.model, _core_constants__WEBPACK_IMPORTED_MODULE_6__["NEXT"]);
                break;
            case _core_constants__WEBPACK_IMPORTED_MODULE_6__["ACTIONS_KEYS"].TAB:
                if (shiftKey) {
                    if (this.isFirstTag(data.model)) {
                        return;
                    }
                    this.moveToTag(data.model, _core_constants__WEBPACK_IMPORTED_MODULE_6__["PREV"]);
                }
                else {
                    if (this.isLastTag(data.model) && (this.disable || this.maxItemsReached)) {
                        return;
                    }
                    this.moveToTag(data.model, _core_constants__WEBPACK_IMPORTED_MODULE_6__["NEXT"]);
                }
                break;
            default:
                return;
        }
        // prevent default behaviour
        event.preventDefault();
    };
    TagInputComponent.prototype.onFormSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.onAddingRequested(false, this.formValue)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @name setInputValue
     * @param value
     */
    TagInputComponent.prototype.setInputValue = function (value, emitEvent) {
        if (emitEvent === void 0) { emitEvent = true; }
        var control = this.getControl();
        // update form value with the transformed item
        control.setValue(value, { emitEvent: emitEvent });
    };
    /**
     * @name getControl
     */
    TagInputComponent.prototype.getControl = function () {
        return this.inputForm.value;
    };
    /**
     * @name focus
     * @param applyFocus
     * @param displayAutocomplete
     */
    TagInputComponent.prototype.focus = function (applyFocus, displayAutocomplete) {
        if (applyFocus === void 0) { applyFocus = false; }
        if (displayAutocomplete === void 0) { displayAutocomplete = false; }
        if (this.dragProvider.getState('dragging')) {
            return;
        }
        this.selectItem(undefined, false);
        if (applyFocus) {
            this.inputForm.focus();
            this.onFocus.emit(this.formValue);
        }
    };
    /**
     * @name blur
     */
    TagInputComponent.prototype.blur = function () {
        this.onTouched();
        this.onBlur.emit(this.formValue);
    };
    /**
     * @name hasErrors
     */
    TagInputComponent.prototype.hasErrors = function () {
        return !!this.inputForm && this.inputForm.hasErrors();
    };
    /**
     * @name isInputFocused
     */
    TagInputComponent.prototype.isInputFocused = function () {
        return !!this.inputForm && this.inputForm.isInputFocused();
    };
    /**
     * - this is the one way I found to tell if the template has been passed and it is not
     * the template for the menu item
     * @name hasCustomTemplate
     */
    TagInputComponent.prototype.hasCustomTemplate = function () {
        var template = this.templates ? this.templates.first : undefined;
        var menuTemplate = this.dropdown && this.dropdown.templates ?
            this.dropdown.templates.first : undefined;
        return Boolean(template && template !== menuTemplate);
    };
    Object.defineProperty(TagInputComponent.prototype, "maxItemsReached", {
        /**
         * @name maxItemsReached
         */
        get: function () {
            return this.maxItems !== undefined &&
                this.items.length >= this.maxItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "formValue", {
        /**
         * @name formValue
         */
        get: function () {
            var form = this.inputForm.value;
            return form ? form.value : '';
        },
        enumerable: true,
        configurable: true
    });
    /**3
     * @name onDragStarted
     * @param event
     * @param index
     */
    TagInputComponent.prototype.onDragStarted = function (event, tag, index) {
        event.stopPropagation();
        var item = { zone: this.dragZone, tag: tag, index: index };
        this.dragProvider.setSender(this);
        this.dragProvider.setDraggedItem(event, item);
        this.dragProvider.setState({ dragging: true, index: index });
    };
    /**
     * @name onDragOver
     * @param event
     */
    TagInputComponent.prototype.onDragOver = function (event, index) {
        this.dragProvider.setState({ dropping: true });
        this.dragProvider.setReceiver(this);
        event.preventDefault();
    };
    /**
     * @name onTagDropped
     * @param event
     * @param index
     */
    TagInputComponent.prototype.onTagDropped = function (event, index) {
        var item = this.dragProvider.getDraggedItem(event);
        if (!item || item.zone !== this.dragZone) {
            return;
        }
        this.dragProvider.onTagDropped(item.tag, item.index, index);
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * @name isDropping
     */
    TagInputComponent.prototype.isDropping = function () {
        var isReceiver = this.dragProvider.receiver === this;
        var isDropping = this.dragProvider.getState('dropping');
        return Boolean(isReceiver && isDropping);
    };
    /**
     * @name onTagBlurred
     * @param changedElement {TagModel}
     * @param index {number}
     */
    TagInputComponent.prototype.onTagBlurred = function (changedElement, index) {
        this.items[index] = changedElement;
        this.blur();
    };
    /**
     * @name trackBy
     * @param items
     */
    TagInputComponent.prototype.trackBy = function (index, item) {
        return item[this.identifyBy];
    };
    /**
     * @name updateEditedTag
     * @param tag
     */
    TagInputComponent.prototype.updateEditedTag = function (_a) {
        var tag = _a.tag, index = _a.index;
        this.onTagEdited.emit(tag);
    };
    /**
     * @name moveToTag
     * @param item
     * @param direction
     */
    TagInputComponent.prototype.moveToTag = function (item, direction) {
        var isLast = this.isLastTag(item);
        var isFirst = this.isFirstTag(item);
        var stopSwitch = (direction === _core_constants__WEBPACK_IMPORTED_MODULE_6__["NEXT"] && isLast) ||
            (direction === _core_constants__WEBPACK_IMPORTED_MODULE_6__["PREV"] && isFirst);
        if (stopSwitch) {
            this.focus(true);
            return;
        }
        var offset = direction === _core_constants__WEBPACK_IMPORTED_MODULE_6__["NEXT"] ? 1 : -1;
        var index = this.getTagIndex(item) + offset;
        var tag = this.getTagAtIndex(index);
        return tag.select.call(tag);
    };
    /**
     * @name isFirstTag
     * @param item {TagModel}
     */
    TagInputComponent.prototype.isFirstTag = function (item) {
        return this.tags.first.model === item;
    };
    /**
     * @name isLastTag
     * @param item {TagModel}
     */
    TagInputComponent.prototype.isLastTag = function (item) {
        return this.tags.last.model === item;
    };
    /**
     * @name getTagIndex
     * @param item
     */
    TagInputComponent.prototype.getTagIndex = function (item) {
        var tags = this.tags.toArray();
        return tags.findIndex(function (tag) { return tag.model === item; });
    };
    /**
     * @name getTagAtIndex
     * @param index
     */
    TagInputComponent.prototype.getTagAtIndex = function (index) {
        var tags = this.tags.toArray();
        return tags[index];
    };
    /**
     * @name removeItem
     * @desc removes an item from the array of the model
     * @param tag {TagModel}
     * @param index {number}
     */
    TagInputComponent.prototype.removeItem = function (tag, index) {
        this.items = this.getItemsWithout(index);
        // if the removed tag was selected, set it as undefined
        if (this.selectedTag === tag) {
            this.selectItem(undefined, false);
        }
        // focus input
        this.focus(true, false);
        // emit remove event
        this.onRemove.emit(tag);
    };
    /**
     * @name addItem
     * @desc adds the current text model to the items array
     * @param fromAutocomplete {boolean}
     * @param item {TagModel}
     * @param index? {number}
     * @param giveupFocus? {boolean}
     */
    TagInputComponent.prototype.addItem = function (fromAutocomplete, item, index, giveupFocus) {
        var _this = this;
        if (fromAutocomplete === void 0) { fromAutocomplete = false; }
        var display = this.getItemDisplay(item);
        var tag = this.createTag(item);
        if (fromAutocomplete) {
            this.setInputValue(this.getItemValue(item, true));
        }
        return new Promise(function (resolve, reject) {
            /**
             * @name reset
             */
            var reset = function () {
                // reset control and focus input
                _this.setInputValue('');
                if (giveupFocus) {
                    _this.focus(false, false);
                }
                else {
                    // focus input
                    _this.focus(true, false);
                }
                resolve(display);
            };
            var appendItem = function () {
                _this.appendTag(tag, index);
                // emit event
                _this.onAdd.emit(tag);
                if (!_this.dropdown) {
                    return;
                }
                _this.dropdown.hide();
                if (_this.dropdown.showDropdownIfEmpty) {
                    _this.dropdown.show();
                }
            };
            var status = _this.inputForm.form.status;
            var isTagValid = _this.isTagValid(tag, fromAutocomplete);
            var onValidationError = function () {
                _this.onValidationError.emit(tag);
                return reject();
            };
            if (status === 'VALID' && isTagValid) {
                appendItem();
                return reset();
            }
            if (status === 'INVALID' || !isTagValid) {
                reset();
                return onValidationError();
            }
            if (status === 'PENDING') {
                var statusUpdate$ = _this.inputForm.form.statusChanges;
                return statusUpdate$
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (statusUpdate) { return statusUpdate !== 'PENDING'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(function (statusUpdate) {
                    if (statusUpdate === 'VALID' && isTagValid) {
                        appendItem();
                        resolve();
                    }
                    else {
                        onValidationError();
                    }
                });
            }
        });
    };
    /**
     * @name setupSeparatorKeysListener
     */
    TagInputComponent.prototype.setupSeparatorKeysListener = function () {
        var _this = this;
        var useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;
        var listener = function ($event) {
            var hasKeyCode = _this.separatorKeyCodes.indexOf($event.keyCode) >= 0;
            var hasKey = _this.separatorKeys.indexOf($event.key) >= 0;
            // the keyCode of keydown event is 229 when IME is processing the key event.
            var isIMEProcessing = $event.keyCode === 229;
            if (hasKeyCode || (hasKey && !isIMEProcessing)) {
                $event.preventDefault();
                _this.onAddingRequested(false, _this.formValue)
                    .catch(function () { });
            }
        };
        _core_helpers_listen__WEBPACK_IMPORTED_MODULE_5__["listen"].call(this, _core_constants__WEBPACK_IMPORTED_MODULE_6__["KEYDOWN"], listener, useSeparatorKeys);
    };
    /**
     * @name setUpKeypressListeners
     */
    TagInputComponent.prototype.setUpKeypressListeners = function () {
        var _this = this;
        var listener = function ($event) {
            var isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;
            if (isCorrectKey &&
                !_this.formValue &&
                _this.items.length) {
                _this.tags.last.select.call(_this.tags.last);
            }
        };
        // setting up the keypress listeners
        _core_helpers_listen__WEBPACK_IMPORTED_MODULE_5__["listen"].call(this, _core_constants__WEBPACK_IMPORTED_MODULE_6__["KEYDOWN"], listener);
    };
    /**
     * @name setUpKeydownListeners
     */
    TagInputComponent.prototype.setUpInputKeydownListeners = function () {
        var _this = this;
        this.inputForm.onKeydown.subscribe(function (event) {
            _this.fireEvents('keydown', event);
            if (event.key === 'Backspace' && _this.formValue.trim() === '') {
                event.preventDefault();
            }
        });
    };
    /**
     * @name setUpOnPasteListener
     */
    TagInputComponent.prototype.setUpOnPasteListener = function () {
        var _this = this;
        var input = this.inputForm.input.nativeElement;
        // attach listener to input
        this.renderer.listen(input, 'paste', function (event) {
            _this.onPasteCallback(event);
            event.preventDefault();
            return true;
        });
    };
    /**
     * @name setUpTextChangeSubscriber
     */
    TagInputComponent.prototype.setUpTextChangeSubscriber = function () {
        var _this = this;
        this.inputForm.form
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.onTextChangeDebounce))
            .subscribe(function (value) {
            _this.onTextChange.emit(value.item);
        });
    };
    /**
     * @name setUpOnBlurSubscriber
     */
    TagInputComponent.prototype.setUpOnBlurSubscriber = function () {
        var _this = this;
        var filterFn = function () {
            var isVisible = _this.dropdown && _this.dropdown.isVisible;
            return !isVisible && !!_this.formValue;
        };
        this.inputForm
            .onBlur
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(filterFn))
            .subscribe(function () {
            var reset = function () { return _this.setInputValue(''); };
            if (_this.addOnBlur) {
                return _this
                    .onAddingRequested(false, _this.formValue, undefined, true)
                    .then(reset)
                    .catch(reset);
            }
            reset();
        });
    };
    /**
     * @name findDupe
     * @param tag
     * @param isFromAutocomplete
     */
    TagInputComponent.prototype.findDupe = function (tag, isFromAutocomplete) {
        var _this = this;
        var identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
        var id = tag[identifyBy];
        return this.items.find(function (item) { return _this.getItemValue(item) === id; });
    };
    /**
     * @name setAnimationMetadata
     */
    TagInputComponent.prototype.setAnimationMetadata = function () {
        this.animationMetadata = {
            value: 'in',
            params: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.animationDuration)
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TagInputComponent.prototype, "separatorKeys", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TagInputComponent.prototype, "separatorKeyCodes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TagInputComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TagInputComponent.prototype, "secondaryPlaceholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TagInputComponent.prototype, "maxItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TagInputComponent.prototype, "validators", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TagInputComponent.prototype, "asyncValidators", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "onlyFromAutocomplete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "errorMessages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TagInputComponent.prototype, "theme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "onTextChangeDebounce", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "inputId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TagInputComponent.prototype, "inputClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TagInputComponent.prototype, "clearOnBlur", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TagInputComponent.prototype, "hideForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TagInputComponent.prototype, "addOnBlur", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TagInputComponent.prototype, "addOnPaste", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "pasteSplitPattern", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "blinkIfDupe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "removable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TagInputComponent.prototype, "editable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "allowDupes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "modelAsStrings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "trimTags", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], TagInputComponent.prototype, "inputText", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TagInputComponent.prototype, "ripple", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TagInputComponent.prototype, "tabindex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TagInputComponent.prototype, "disable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TagInputComponent.prototype, "dragZone", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "onRemoving", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "onAdding", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "animationDuration", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "onAdd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "onRemove", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "onSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "onFocus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "onBlur", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "onTextChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "onPaste", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "onValidationError", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagInputComponent.prototype, "onTagEdited", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_dropdown_tag_input_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["TagInputDropdown"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _dropdown_tag_input_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["TagInputDropdown"])
    ], TagInputComponent.prototype, "dropdown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], { descendants: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], TagInputComponent.prototype, "templates", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_tag_input_form_tag_input_form_component__WEBPACK_IMPORTED_MODULE_8__["TagInputForm"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _tag_input_form_tag_input_form_component__WEBPACK_IMPORTED_MODULE_8__["TagInputForm"])
    ], TagInputComponent.prototype, "inputForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_tag_tag_component__WEBPACK_IMPORTED_MODULE_9__["TagComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], TagInputComponent.prototype, "tags", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagInputComponent.prototype, "inputTextChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.tabindex'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TagInputComponent.prototype, "tabindexAttr", null);
    TagInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tag-input',
            providers: [CUSTOM_ACCESSOR],
            template: __webpack_require__(/*! raw-loader!./tag-input.template.html */ "./node_modules/raw-loader/index.js!./modules/components/tag-input/tag-input.template.html"),
            animations: _animations__WEBPACK_IMPORTED_MODULE_10__["animations"],
            styles: [__webpack_require__(/*! ./tag-input.style.scss */ "./modules/components/tag-input/tag-input.style.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _core_providers_drag_provider__WEBPACK_IMPORTED_MODULE_7__["DragProvider"]])
    ], TagInputComponent);
    return TagInputComponent;
}(_core_accessor__WEBPACK_IMPORTED_MODULE_4__["TagInputAccessor"]));



/***/ }),

/***/ "./modules/components/tag/index.ts":
/*!*****************************************!*\
  !*** ./modules/components/tag/index.ts ***!
  \*****************************************/
/*! exports provided: TagRipple, TagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tag_ripple_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-ripple.component */ "./modules/components/tag/tag-ripple.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagRipple", function() { return _tag_ripple_component__WEBPACK_IMPORTED_MODULE_0__["TagRipple"]; });

/* harmony import */ var _tag_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag.component */ "./modules/components/tag/tag.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return _tag_component__WEBPACK_IMPORTED_MODULE_1__["TagComponent"]; });





/***/ }),

/***/ "./modules/components/tag/tag-component.style.scss":
/*!*********************************************************!*\
  !*** ./modules/components/tag/tag-component.style.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host,\n:host > div,\n:host > div:focus {\n  outline: 0;\n  overflow: hidden;\n  transition: opacity 1s;\n  z-index: 1;\n}\n\n:host {\n  max-width: 400px;\n}\n\n:host.blink {\n  -webkit-animation: blink 0.3s normal forwards ease-in-out;\n  animation: blink 0.3s normal forwards ease-in-out;\n}\n\n@-webkit-keyframes blink {\n  0% {\n    opacity: 0.3;\n  }\n}\n\n@keyframes blink {\n  0% {\n    opacity: 0.3;\n  }\n}\n\n:host .disabled {\n  cursor: not-allowed;\n}\n\n:host [contenteditable=true] {\n  outline: 0;\n}\n\n.tag-wrapper {\n  flex-direction: row;\n  display: flex;\n}\n\n.tag__text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.tag-category {\n  opacity: 0.7;\n  font-size: 0.9;\n  margin-left: 0.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tcG9uZW50cy90YWcvQzpcXHhhbXBwXFxodGRvY3NcXG5neC1jaGlwcy9tb2R1bGVzXFxjb21wb25lbnRzXFx0YWdcXHRhZy1jb21wb25lbnQuc3R5bGUuc2NzcyIsIm1vZHVsZXMvY29tcG9uZW50cy90YWcvdGFnLWNvbXBvbmVudC5zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5REFBQTtFQUNBLGlEQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLFlBQUE7RUNDRjtBQUNGOztBREpBO0VBQ0U7SUFDRSxZQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FGIiwiZmlsZSI6Im1vZHVsZXMvY29tcG9uZW50cy90YWcvdGFnLWNvbXBvbmVudC5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QsXHJcbjpob3N0ID4gZGl2LFxyXG46aG9zdCA+IGRpdjpmb2N1cyB7XHJcbiAgb3V0bGluZTogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbjpob3N0LmJsaW5rIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMC4zcyBub3JtYWwgZm9yd2FyZHMgZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBibGluayAwLjNzIG5vcm1hbCBmb3J3YXJkcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBibGluayB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgLmRpc2FibGVkIHtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG46aG9zdCBbY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXSB7XHJcbiAgb3V0bGluZTogMDtcclxufVxyXG5cclxuLnRhZy13cmFwcGVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi50YWdfX3RleHQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnRhZy1jYXRlZ29yeSB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGZvbnQtc2l6ZTogMC45O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjJlbTtcclxufVxyXG4iLCI6aG9zdCxcbjpob3N0ID4gZGl2LFxuOmhvc3QgPiBkaXY6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xuICB6LWluZGV4OiAxO1xufVxuXG46aG9zdCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5cbjpob3N0LmJsaW5rIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rIDAuM3Mgbm9ybWFsIGZvcndhcmRzIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IGJsaW5rIDAuM3Mgbm9ybWFsIGZvcndhcmRzIGVhc2UtaW4tb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxufVxuOmhvc3QgLmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuOmhvc3QgW2NvbnRlbnRlZGl0YWJsZT10cnVlXSB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi50YWctd3JhcHBlciB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50YWdfX3RleHQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnRhZy1jYXRlZ29yeSB7XG4gIG9wYWNpdHk6IDAuNztcbiAgZm9udC1zaXplOiAwLjk7XG4gIG1hcmdpbi1sZWZ0OiAwLjJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./modules/components/tag/tag-ripple.component.ts":
/*!********************************************************!*\
  !*** ./modules/components/tag/tag-ripple.component.ts ***!
  \********************************************************/
/*! exports provided: TagRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagRipple", function() { return TagRipple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var TagRipple = /** @class */ (function () {
    function TagRipple() {
        this.state = 'none';
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagRipple.prototype, "state", void 0);
    TagRipple = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tag-ripple',
            template: "\n        <div class=\"tag-ripple\" [@ink]=\"state\"></div>\n    ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('ink', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ width: 0, opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('none => clicked', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, offset: 0, width: '30%', borderRadius: '100%' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, offset: 0.5, width: '50%' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.5, offset: 1, width: '100%', borderRadius: '16px' })
                        ]))
                    ])
                ])
            ],
            styles: ["\n        :host {\n            width: 100%;\n            height: 100%;\n            left: 0;\n            overflow: hidden;\n            position: absolute;\n        }\n\n        .tag-ripple {\n            background: rgba(0, 0, 0, 0.1);\n            top: 50%;\n            left: 50%;\n            height: 100%;\n            transform: translate(-50%, -50%);\n            position: absolute;\n        }\n    "]
        })
    ], TagRipple);
    return TagRipple;
}());



/***/ }),

/***/ "./modules/components/tag/tag.component.ts":
/*!*************************************************!*\
  !*** ./modules/components/tag/tag.component.ts ***!
  \*************************************************/
/*! exports provided: TagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tag_tag_ripple_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tag/tag-ripple.component */ "./modules/components/tag/tag-ripple.component.ts");



// mocking navigator
var navigator = typeof window !== "undefined"
    ? window.navigator
    : {
        userAgent: "Chrome",
        vendor: "Google Inc"
    };
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var TagComponent = /** @class */ (function () {
    function TagComponent(element, renderer, cdRef) {
        this.element = element;
        this.renderer = renderer;
        this.cdRef = cdRef;
        /**
         * @name disabled
         */
        this.disabled = false;
        /**
         * @name onSelect
         */
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onRemove
         */
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onBlur
         */
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onKeyDown
         */
        this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onTagEdited
         */
        this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name editing
         */
        this.editing = false;
        /**
         * @name rippleState
         */
        this.rippleState = "none";
    }
    Object.defineProperty(TagComponent.prototype, "readonly", {
        /**
         * @name readonly {boolean}
         */
        get: function () {
            return typeof this.model !== "string" && this.model.readonly === true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name select
     */
    TagComponent.prototype.select = function ($event) {
        if (this.readonly || this.disabled) {
            return;
        }
        if ($event) {
            $event.stopPropagation();
        }
        this.focus();
        this.onSelect.emit(this.model);
    };
    /**
     * @name remove
     */
    TagComponent.prototype.remove = function ($event) {
        $event.stopPropagation();
        this.onRemove.emit(this);
    };
    /**
     * @name focus
     */
    TagComponent.prototype.focus = function () {
        this.element.nativeElement.focus();
    };
    TagComponent.prototype.move = function () {
        this.moving = true;
    };
    /**
     * @name keydown
     * @param event
     */
    TagComponent.prototype.keydown = function (event) {
        if (this.editing) {
            if (event.keyCode === 13) {
                return this.disableEditMode(event);
            }
        }
        else {
            this.onKeyDown.emit({ event: event, model: this.model });
        }
    };
    /**
     * @name blink
     */
    TagComponent.prototype.blink = function () {
        var classList = this.element.nativeElement.classList;
        classList.add("blink");
        setTimeout(function () { return classList.remove("blink"); }, 50);
    };
    /**
     * @name toggleEditMode
     */
    TagComponent.prototype.toggleEditMode = function () {
        if (this.editable) {
            return this.editing ? undefined : this.activateEditMode();
        }
    };
    /**
     * @name onBlurred
     * @param event
     */
    TagComponent.prototype.onBlurred = function (event) {
        var _a;
        // Checks if it is editable first before handeling the onBlurred event in order to prevent
        // a bug in IE where tags are still editable with onlyFromAutocomplete set to true
        if (!this.editable) {
            return;
        }
        this.disableEditMode();
        var value = event.target.innerText;
        var result = typeof this.model === "string" ? value : tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.model, (_a = {}, _a[this.displayBy] = value, _a));
        this.onBlur.emit(result);
    };
    /**
     * @name getDisplayValue
     * @param item
     */
    TagComponent.prototype.getDisplayValue = function (item) {
        return typeof item === "string" ? item : item[this.displayBy];
    };
    Object.defineProperty(TagComponent.prototype, "isRippleVisible", {
        /**
         * @desc returns whether the ripple is visible or not
         * only works in Chrome
         * @name isRippleVisible
         */
        get: function () {
            return !this.readonly && !this.editing && isChrome && this.hasRipple;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name disableEditMode
     * @param $event
     */
    TagComponent.prototype.disableEditMode = function ($event) {
        var classList = this.element.nativeElement.classList;
        var input = this.getContentEditableText();
        this.editing = false;
        classList.remove("tag--editing");
        if (!input) {
            this.setContentEditableText(this.model);
            return;
        }
        this.storeNewValue(input);
        this.cdRef.detectChanges();
        if ($event) {
            $event.preventDefault();
        }
    };
    /**
     * @name isDeleteIconVisible
     */
    TagComponent.prototype.isDeleteIconVisible = function () {
        return !this.readonly && !this.disabled && this.removable && !this.editing;
    };
    /**
     * @name getContentEditableText
     */
    TagComponent.prototype.getContentEditableText = function () {
        var input = this.getContentEditable();
        return input ? input.innerText.trim() : "";
    };
    /**
     * @name setContentEditableText
     * @param model
     */
    TagComponent.prototype.setContentEditableText = function (model) {
        var input = this.getContentEditable();
        var value = this.getDisplayValue(model);
        input.innerText = value;
    };
    /**
     * @name
     */
    TagComponent.prototype.activateEditMode = function () {
        var classList = this.element.nativeElement.classList;
        classList.add("tag--editing");
        this.editing = true;
    };
    /**
     * @name storeNewValue
     * @param input
     */
    TagComponent.prototype.storeNewValue = function (input) {
        var _this = this;
        var _a;
        var exists = function (tag) {
            return typeof tag === "string" ? tag === input : tag[_this.displayBy] === input;
        };
        var hasId = function () {
            return _this.model[_this.identifyBy] !== _this.model[_this.displayBy];
        };
        // if the value changed, replace the value in the model
        if (exists(this.model)) {
            return;
        }
        var model = typeof this.model === "string"
            ? input
            : (_a = {
                    index: this.index
                },
                _a[this.identifyBy] = hasId() ? this.model[this.identifyBy] : input,
                _a[this.displayBy] = input,
                _a);
        if (this.canAddTag(model)) {
            this.onTagEdited.emit({ tag: model, index: this.index });
        }
        else {
            this.setContentEditableText(this.model);
        }
    };
    /**
     * @name getContentEditable
     */
    TagComponent.prototype.getContentEditable = function () {
        return this.element.nativeElement.querySelector("[contenteditable]");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagComponent.prototype, "model", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TagComponent.prototype, "removable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TagComponent.prototype, "editable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], TagComponent.prototype, "template", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TagComponent.prototype, "displayBy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TagComponent.prototype, "identifyBy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TagComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TagComponent.prototype, "hasRipple", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], TagComponent.prototype, "canAddTag", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagComponent.prototype, "onSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagComponent.prototype, "onRemove", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagComponent.prototype, "onBlur", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagComponent.prototype, "onKeyDown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagComponent.prototype, "onTagEdited", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.moving"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TagComponent.prototype, "moving", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_tag_tag_ripple_component__WEBPACK_IMPORTED_MODULE_2__["TagRipple"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _tag_tag_ripple_component__WEBPACK_IMPORTED_MODULE_2__["TagRipple"])
    ], TagComponent.prototype, "ripple", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("keydown", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TagComponent.prototype, "keydown", null);
    TagComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "tag",
            template: __webpack_require__(/*! raw-loader!./tag.template.html */ "./node_modules/raw-loader/index.js!./modules/components/tag/tag.template.html"),
            styles: [__webpack_require__(/*! ./tag-component.style.scss */ "./modules/components/tag/tag-component.style.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], TagComponent);
    return TagComponent;
}());



/***/ }),

/***/ "./modules/core/accessor.ts":
/*!**********************************!*\
  !*** ./modules/core/accessor.ts ***!
  \**********************************/
/*! exports provided: TagModelClass, isObject, TagInputAccessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagModelClass", function() { return TagModelClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputAccessor", function() { return TagInputAccessor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_options_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers/options-provider */ "./modules/core/providers/options-provider.ts");



var TagModelClass = /** @class */ (function () {
    function TagModelClass() {
    }
    return TagModelClass;
}());

function isObject(obj) {
    return obj === Object(obj);
}
var TagInputAccessor = /** @class */ (function () {
    function TagInputAccessor() {
        this._items = [];
        /**
         * @name displayBy
         */
        this.displayBy = _providers_options_provider__WEBPACK_IMPORTED_MODULE_2__["OptionsProvider"].defaults.tagInput.displayBy;
        /**
         * @name identifyBy
         */
        this.identifyBy = _providers_options_provider__WEBPACK_IMPORTED_MODULE_2__["OptionsProvider"].defaults.tagInput.identifyBy;
    }
    Object.defineProperty(TagInputAccessor.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
            this._onChangeCallback(this._items);
        },
        enumerable: true,
        configurable: true
    });
    TagInputAccessor.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    TagInputAccessor.prototype.writeValue = function (items) {
        this._items = items || [];
    };
    TagInputAccessor.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    TagInputAccessor.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    /**
     * @name getItemValue
     * @param item
     * @param fromDropdown
     */
    TagInputAccessor.prototype.getItemValue = function (item, fromDropdown) {
        if (fromDropdown === void 0) { fromDropdown = false; }
        var property = fromDropdown && this.dropdown ? this.dropdown.identifyBy : this.identifyBy;
        return isObject(item) ? item[property] : item;
    };
    /**
     * @name getItemDisplay
     * @param item
     * @param fromDropdown
     */
    TagInputAccessor.prototype.getItemDisplay = function (item, fromDropdown) {
        if (fromDropdown === void 0) { fromDropdown = false; }
        var property = fromDropdown && this.dropdown ? this.dropdown.displayBy : this.displayBy;
        return isObject(item) ? item[property] : item;
    };
    /**
     * @name getItemsWithout
     * @param index
     */
    TagInputAccessor.prototype.getItemsWithout = function (index) {
        return this.items.filter(function (item, position) { return position !== index; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TagInputAccessor.prototype, "displayBy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TagInputAccessor.prototype, "identifyBy", void 0);
    return TagInputAccessor;
}());



/***/ }),

/***/ "./modules/core/constants/index.ts":
/*!*****************************************!*\
  !*** ./modules/core/constants/index.ts ***!
  \*****************************************/
/*! exports provided: PLACEHOLDER, SECONDARY_PLACEHOLDER, KEYDOWN, KEYUP, FOCUS, MAX_ITEMS_WARNING, ACTIONS_KEYS, KEY_PRESS_ACTIONS, DRAG_AND_DROP_KEY, NEXT, PREV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLACEHOLDER", function() { return PLACEHOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECONDARY_PLACEHOLDER", function() { return SECONDARY_PLACEHOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYDOWN", function() { return KEYDOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYUP", function() { return KEYUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS", function() { return FOCUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_ITEMS_WARNING", function() { return MAX_ITEMS_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIONS_KEYS", function() { return ACTIONS_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_PRESS_ACTIONS", function() { return KEY_PRESS_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAG_AND_DROP_KEY", function() { return DRAG_AND_DROP_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEXT", function() { return NEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREV", function() { return PREV; });
/*
** constants and default values for <tag-input>
 */
var PLACEHOLDER = '+ Tag';
var SECONDARY_PLACEHOLDER = 'Enter a new tag';
var KEYDOWN = 'keydown';
var KEYUP = 'keyup';
var FOCUS = 'focus';
var MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
var ACTIONS_KEYS = {
    DELETE: 'DELETE',
    SWITCH_PREV: 'SWITCH_PREV',
    SWITCH_NEXT: 'SWITCH_NEXT',
    TAB: 'TAB'
};
var KEY_PRESS_ACTIONS = {
    8: ACTIONS_KEYS.DELETE,
    37: ACTIONS_KEYS.SWITCH_PREV,
    39: ACTIONS_KEYS.SWITCH_NEXT,
    9: ACTIONS_KEYS.TAB
};
var DRAG_AND_DROP_KEY = 'Text';
var NEXT = 'NEXT';
var PREV = 'PREV';


/***/ }),

/***/ "./modules/core/helpers/listen.ts":
/*!****************************************!*\
  !*** ./modules/core/helpers/listen.ts ***!
  \****************************************/
/*! exports provided: listen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/**
 * @name listen
 * @param listenerType
 * @param action
 * @param condition
 */
function listen(listenerType, action, condition) {
    if (condition === void 0) { condition = true; }
    // if the event provided does not exist, throw an error
    if (!this.listeners.hasOwnProperty(listenerType)) {
        throw new Error('The event entered may be wrong');
    }
    // if a condition is present and is false, exit early
    if (!condition) {
        return;
    }
    // fire listener
    this.listeners[listenerType].push(action);
}


/***/ }),

/***/ "./modules/core/pipes/highlight.pipe.ts":
/*!**********************************************!*\
  !*** ./modules/core/pipes/highlight.pipe.ts ***!
  \**********************************************/
/*! exports provided: HighlightPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightPipe", function() { return HighlightPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var escape = function (s) { return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); };
var HighlightPipe = /** @class */ (function () {
    function HighlightPipe() {
    }
    /**
     * @name transform
     * @param value {string}
     * @param arg {string}
     */
    HighlightPipe.prototype.transform = function (value, arg) {
        if (!arg.trim()) {
            return value;
        }
        try {
            var regex = new RegExp("(" + escape(arg) + ")", 'i');
            return value.replace(regex, '<b>$1</b>');
        }
        catch (e) {
            return value;
        }
    };
    HighlightPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'highlight'
        })
    ], HighlightPipe);
    return HighlightPipe;
}());



/***/ }),

/***/ "./modules/core/providers/drag-provider.ts":
/*!*************************************************!*\
  !*** ./modules/core/providers/drag-provider.ts ***!
  \*************************************************/
/*! exports provided: DragProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragProvider", function() { return DragProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/constants */ "./modules/core/constants/index.ts");



var DragProvider = /** @class */ (function () {
    function DragProvider() {
        this.state = {
            dragging: false,
            dropping: false,
            index: undefined
        };
    }
    /**
     * @name setDraggedItem
     * @param event
     * @param tag
     */
    DragProvider.prototype.setDraggedItem = function (event, tag) {
        if (event && event.dataTransfer) {
            event.dataTransfer.setData(_core_constants__WEBPACK_IMPORTED_MODULE_2__["DRAG_AND_DROP_KEY"], JSON.stringify(tag));
        }
    };
    /**
     * @name getDraggedItem
     * @param event
     */
    DragProvider.prototype.getDraggedItem = function (event) {
        if (event && event.dataTransfer) {
            var data = event.dataTransfer.getData(_core_constants__WEBPACK_IMPORTED_MODULE_2__["DRAG_AND_DROP_KEY"]);
            try {
                return JSON.parse(data);
            }
            catch (_a) {
                return;
            }
        }
    };
    /**
     * @name setSender
     * @param sender
     */
    DragProvider.prototype.setSender = function (sender) {
        this.sender = sender;
    };
    /**
     * @name setReceiver
     * @param receiver
     */
    DragProvider.prototype.setReceiver = function (receiver) {
        this.receiver = receiver;
    };
    /**
     * @name onTagDropped
     * @param tag
     * @param indexDragged
     * @param indexDropped
     */
    DragProvider.prototype.onTagDropped = function (tag, indexDragged, indexDropped) {
        this.onDragEnd();
        this.sender.onRemoveRequested(tag, indexDragged);
        this.receiver.onAddingRequested(false, tag, indexDropped);
    };
    /**
     * @name setState
     * @param state
     */
    DragProvider.prototype.setState = function (state) {
        this.state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.state, state);
    };
    /**
     * @name getState
     * @param key
     */
    DragProvider.prototype.getState = function (key) {
        return key ? this.state[key] : this.state;
    };
    /**
     * @name onDragEnd
     */
    DragProvider.prototype.onDragEnd = function () {
        this.setState({
            dragging: false,
            dropping: false,
            index: undefined
        });
    };
    DragProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DragProvider);
    return DragProvider;
}());



/***/ }),

/***/ "./modules/core/providers/options-provider.ts":
/*!****************************************************!*\
  !*** ./modules/core/providers/options-provider.ts ***!
  \****************************************************/
/*! exports provided: OptionsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsProvider", function() { return OptionsProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../defaults */ "./modules/defaults.ts");


var OptionsProvider = /** @class */ (function () {
    function OptionsProvider() {
    }
    OptionsProvider.prototype.setOptions = function (options) {
        OptionsProvider.defaults.tagInput = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _defaults__WEBPACK_IMPORTED_MODULE_1__["defaults"].tagInput, options.tagInput);
        OptionsProvider.defaults.dropdown = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _defaults__WEBPACK_IMPORTED_MODULE_1__["defaults"].dropdown, options.dropdown);
    };
    OptionsProvider.defaults = _defaults__WEBPACK_IMPORTED_MODULE_1__["defaults"];
    return OptionsProvider;
}());



/***/ }),

/***/ "./modules/defaults.ts":
/*!*****************************!*\
  !*** ./modules/defaults.ts ***!
  \*****************************/
/*! exports provided: defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
/* harmony import */ var _core_constants_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/constants/index */ "./modules/core/constants/index.ts");

var defaults = {
    tagInput: {
        separatorKeys: [],
        separatorKeyCodes: [],
        maxItems: Infinity,
        placeholder: _core_constants_index__WEBPACK_IMPORTED_MODULE_0__["PLACEHOLDER"],
        secondaryPlaceholder: _core_constants_index__WEBPACK_IMPORTED_MODULE_0__["SECONDARY_PLACEHOLDER"],
        validators: [],
        asyncValidators: [],
        onlyFromAutocomplete: false,
        errorMessages: {},
        theme: "",
        onTextChangeDebounce: 250,
        inputId: null,
        inputClass: "",
        clearOnBlur: false,
        hideForm: false,
        addOnBlur: false,
        addOnPaste: false,
        pasteSplitPattern: ",",
        blinkIfDupe: true,
        removable: true,
        editable: false,
        allowDupes: false,
        modelAsStrings: false,
        trimTags: true,
        ripple: true,
        tabIndex: "",
        disable: false,
        dragZone: "",
        onRemoving: undefined,
        onAdding: undefined,
        displayBy: "display",
        identifyBy: "value",
        animationDuration: {
            enter: "250ms",
            leave: "150ms"
        }
    },
    dropdown: {
        displayBy: "display",
        identifyBy: "value",
        appendToBody: true,
        offset: "50 0",
        focusFirstElement: false,
        showDropdownIfEmpty: false,
        minimumTextLength: 1,
        limitItemsTo: Infinity,
        keepOpen: true,
        dynamicUpdate: true,
        zIndex: 1000,
        matchingFn: matchingFn
    }
};
/**
 * @name matchingFn
 * @param this
 * @param value
 * @param target
 */
function matchingFn(value, target) {
    var targetValue = target[this.displayBy].toString();
    return targetValue && targetValue.toLowerCase().indexOf(value.toLowerCase()) >= 0;
}


/***/ }),

/***/ "./modules/index.ts":
/*!**************************!*\
  !*** ./modules/index.ts ***!
  \**************************/
/*! exports provided: TagInputModule, TagInputDropdown, DeleteIconComponent, TagInputForm, TagRipple, TagComponent, TagInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tag_input_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-input.module */ "./modules/tag-input.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagInputModule", function() { return _tag_input_module__WEBPACK_IMPORTED_MODULE_0__["TagInputModule"]; });

/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/index */ "./modules/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagInputDropdown", function() { return _components_index__WEBPACK_IMPORTED_MODULE_1__["TagInputDropdown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteIconComponent", function() { return _components_index__WEBPACK_IMPORTED_MODULE_1__["DeleteIconComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagInputForm", function() { return _components_index__WEBPACK_IMPORTED_MODULE_1__["TagInputForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagRipple", function() { return _components_index__WEBPACK_IMPORTED_MODULE_1__["TagRipple"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return _components_index__WEBPACK_IMPORTED_MODULE_1__["TagComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagInputComponent", function() { return _components_index__WEBPACK_IMPORTED_MODULE_1__["TagInputComponent"]; });





/***/ }),

/***/ "./modules/tag-input.module.ts":
/*!*************************************!*\
  !*** ./modules/tag-input.module.ts ***!
  \*************************************/
/*! exports provided: TagInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputModule", function() { return TagInputModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-material-dropdown */ "./node_modules/ng2-material-dropdown/fesm5/ng2-material-dropdown.js");
/* harmony import */ var _core_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/pipes/highlight.pipe */ "./modules/core/pipes/highlight.pipe.ts");
/* harmony import */ var _core_providers_drag_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/providers/drag-provider */ "./modules/core/providers/drag-provider.ts");
/* harmony import */ var _core_providers_options_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/providers/options-provider */ "./modules/core/providers/options-provider.ts");
/* harmony import */ var _components_tag_input_tag_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tag-input/tag-input */ "./modules/components/tag-input/tag-input.ts");
/* harmony import */ var _components_icon_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/icon/icon */ "./modules/components/icon/icon.ts");
/* harmony import */ var _components_tag_input_form_tag_input_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tag-input-form/tag-input-form.component */ "./modules/components/tag-input-form/tag-input-form.component.ts");
/* harmony import */ var _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/tag/tag.component */ "./modules/components/tag/tag.component.ts");
/* harmony import */ var _components_dropdown_tag_input_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dropdown/tag-input-dropdown.component */ "./modules/components/dropdown/tag-input-dropdown.component.ts");
/* harmony import */ var _components_tag_tag_ripple_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tag/tag-ripple.component */ "./modules/components/tag/tag-ripple.component.ts");














var optionsProvider = new _core_providers_options_provider__WEBPACK_IMPORTED_MODULE_7__["OptionsProvider"]();
var TagInputModule = /** @class */ (function () {
    function TagInputModule() {
    }
    /**
     * @name withDefaults
     * @param options {Options}
     */
    TagInputModule.withDefaults = function (options) {
        optionsProvider.setOptions(options);
    };
    TagInputModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2DropdownModule"]
            ],
            declarations: [
                _components_tag_input_tag_input__WEBPACK_IMPORTED_MODULE_8__["TagInputComponent"],
                _components_icon_icon__WEBPACK_IMPORTED_MODULE_9__["DeleteIconComponent"],
                _components_tag_input_form_tag_input_form_component__WEBPACK_IMPORTED_MODULE_10__["TagInputForm"],
                _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_11__["TagComponent"],
                _core_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_5__["HighlightPipe"],
                _components_dropdown_tag_input_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["TagInputDropdown"],
                _components_tag_tag_ripple_component__WEBPACK_IMPORTED_MODULE_13__["TagRipple"]
            ],
            exports: [
                _components_tag_input_tag_input__WEBPACK_IMPORTED_MODULE_8__["TagInputComponent"],
                _components_icon_icon__WEBPACK_IMPORTED_MODULE_9__["DeleteIconComponent"],
                _components_tag_input_form_tag_input_form_component__WEBPACK_IMPORTED_MODULE_10__["TagInputForm"],
                _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_11__["TagComponent"],
                _core_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_5__["HighlightPipe"],
                _components_dropdown_tag_input_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["TagInputDropdown"],
                _components_tag_tag_ripple_component__WEBPACK_IMPORTED_MODULE_13__["TagRipple"]
            ],
            providers: [
                _core_providers_drag_provider__WEBPACK_IMPORTED_MODULE_6__["DragProvider"],
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"], useValue: false },
            ]
        })
    ], TagInputModule);
    return TagInputModule;
}());



/***/ }),

/***/ "./node_modules/raw-loader/index.js!./demo/home/home.html":
/*!*******************************************************!*\
  !*** ./node_modules/raw-loader!./demo/home/home.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <div class=\"home-container\">\r\n    <div>\r\n      <h3>Tags accepting only items from an autocomplete</h3>\r\n      <tag-input\r\n        [ngModel]=\"['@item']\"\r\n        [onlyFromAutocomplete]=\"true\"\r\n        [placeholder]=\"'Enter another term'\"\r\n        [secondaryPlaceholder]=\"'Enter search term'\"\r\n      >\r\n        <tag-input-dropdown\r\n          [showDropdownIfEmpty]=\"true\"\r\n          [dynamicUpdate]=\"false\"\r\n          [focusFirstElement]=\"true\"\r\n          [displayBy]=\"'value'\"\r\n          [identifyBy]=\"'id'\"\r\n          [autocompleteItems]=\"autocompleteGroupedItems\"\r\n        >\r\n          <!-- <ng-template let-item=\"item\" let-index=\"index\">\r\n            ({{ index }}) {{ item.id }}: {{ item.value }}\r\n          </ng-template> -->\r\n        </tag-input-dropdown>\r\n      </tag-input>\r\n    </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./modules/components/dropdown/tag-input-dropdown.template.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./modules/components/dropdown/tag-input-dropdown.template.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng2-dropdown [dynamicUpdate]=\"dynamicUpdate\">\r\n  <ng2-dropdown-menu\r\n    [focusFirstElement]=\"focusFirstElement\"\r\n    [zIndex]=\"zIndex\"\r\n    [appendToBody]=\"appendToBody\"\r\n    [offset]=\"offset\"\r\n  >\r\n    <ng2-menu-item\r\n      *ngFor=\"let item of items; let index = index; let last = last\"\r\n      [value]=\"item\"\r\n      [ngSwitch]=\"!!templates.length\"\r\n      class=\"{{ item.isCategory ? 'ng-menu-item--category' : '' }}\"\r\n    >\r\n      <span\r\n        class=\"ng-menu-item-content\"\r\n        *ngSwitchCase=\"false\"\r\n        [innerHTML]=\"item[displayBy] | highlight: tagInput.inputForm.value.value\"\r\n      >\r\n      </span>\r\n\r\n      <ng-template\r\n        *ngSwitchDefault\r\n        [ngTemplateOutlet]=\"templates.first\"\r\n        [ngTemplateOutletContext]=\"{ item: item, index: index, last: last }\"\r\n      >\r\n      </ng-template>\r\n    </ng2-menu-item>\r\n  </ng2-dropdown-menu>\r\n</ng2-dropdown>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./modules/components/icon/icon.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./modules/components/icon/icon.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>\r\n    <svg\r\n        height=\"16px\"\r\n        viewBox=\"0 0 32 32\"\r\n        width=\"16px\"\r\n    >\r\n        <path\r\n            d=\"M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z\"\r\n            fill=\"#121313\"\r\n        />\r\n    </svg>\r\n</span>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./modules/components/tag-input-form/tag-input-form.template.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./modules/components/tag-input-form/tag-input-form.template.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- form -->\r\n<form (ngSubmit)=\"submit($event)\" [formGroup]=\"form\">\r\n    <input #input\r\n\r\n           type=\"text\"\r\n           class=\"ng2-tag-input__text-input\"\r\n           autocomplete=\"off\"\r\n           tabindex=\"{{ disabled ? -1 : tabindex ? tabindex : 0 }}\"\r\n           minlength=\"1\"\r\n           formControlName=\"item\"\r\n\r\n           [ngClass]=\"inputClass\"\r\n           [attr.id]=\"inputId\"\r\n           [attr.placeholder]=\"placeholder\"\r\n           [attr.aria-label]=\"placeholder\"\r\n           [attr.tabindex]=\"tabindex\"\r\n           [attr.disabled]=\"disabled ? disabled : null\"\r\n\r\n           (focus)=\"onFocus.emit($event)\"\r\n           (blur)=\"onBlur.emit($event)\"\r\n           (keydown)=\"onKeyDown($event)\"\r\n           (keyup)=\"onKeyUp($event)\"\r\n    />\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./modules/components/tag-input/tag-input.template.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./modules/components/tag-input/tag-input.template.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n    [ngClass]=\"theme\"\r\n    class=\"ng2-tag-input\"\r\n    (click)=\"focus(true, false)\"\r\n    [attr.tabindex]=\"-1\"\r\n    (drop)=\"dragZone ? onTagDropped($event, undefined) : undefined\"\r\n    (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\r\n    (dragover)=\"dragZone ? onDragOver($event) : undefined\"\r\n    (dragend)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\r\n    [class.ng2-tag-input--dropping]=\"isDropping()\"\r\n    [class.ng2-tag-input--disabled]=\"disable\"\r\n    [class.ng2-tag-input--loading]=\"isLoading\"\r\n    [class.ng2-tag-input--invalid]=\"hasErrors()\"\r\n    [class.ng2-tag-input--focused]=\"isInputFocused()\"\r\n>\r\n\r\n    <!-- TAGS -->\r\n    <div class=\"ng2-tags-container\">\r\n        <tag\r\n            *ngFor=\"let item of items; let i = index; trackBy: trackBy\"\r\n            (onSelect)=\"selectItem(item)\"\r\n            (onRemove)=\"onRemoveRequested(item, i)\"\r\n            (onKeyDown)=\"handleKeydown($event)\"\r\n            (onTagEdited)=\"updateEditedTag($event)\"\r\n            (onBlur)=\"onTagBlurred($event, i)\"\r\n            draggable=\"{{ editable }}\"\r\n            (dragstart)=\"dragZone ? onDragStarted($event, item, i) : undefined\"\r\n            (drop)=\"dragZone ? onTagDropped($event, i) : undefined\"\r\n            (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\r\n            (dragover)=\"dragZone ? onDragOver($event, i) : undefined\"\r\n            (dragleave)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\r\n            [canAddTag]=\"isTagValid\"\r\n            [attr.tabindex]=\"0\"\r\n            [disabled]=\"disable\"\r\n            [@animation]=\"animationMetadata\"\r\n            [hasRipple]=\"ripple\"\r\n            [index]=\"i\"\r\n            [removable]=\"removable\"\r\n            [editable]=\"editable\"\r\n            [displayBy]=\"displayBy\"\r\n            [identifyBy]=\"identifyBy\"\r\n            [template]=\"!!hasCustomTemplate() ? templates.first : undefined\"\r\n            [draggable]=\"dragZone\"\r\n            [model]=\"item\"\r\n        >\r\n        </tag>\r\n\r\n        <tag-input-form\r\n            (onSubmit)=\"onFormSubmit()\"\r\n            (onBlur)=\"blur()\"\r\n            (click)=\"dropdown ? dropdown.show() : undefined\"\r\n            (onKeydown)=\"fireEvents('keydown', $event)\"\r\n            (onKeyup)=\"fireEvents('keyup', $event)\"\r\n            [(inputText)]=\"inputText\"\r\n            [disabled]=\"disable\"\r\n            [validators]=\"validators\"\r\n            [asyncValidators]=\"asyncValidators\"\r\n            [hidden]=\"maxItemsReached\"\r\n            [placeholder]=\"items.length ? placeholder : secondaryPlaceholder\"\r\n            [inputClass]=\"inputClass\"\r\n            [inputId]=\"inputId\"\r\n            [tabindex]=\"tabindex\"\r\n        >\r\n        </tag-input-form>\r\n    </div>\r\n\r\n    <div\r\n        class=\"progress-bar\"\r\n        *ngIf=\"isProgressBarVisible$ | async\"\r\n    ></div>\r\n</div>\r\n\r\n<!-- ERRORS -->\r\n<div\r\n    *ngIf=\"hasErrors()\"\r\n    [ngClass]=\"theme\"\r\n    class=\"error-messages\"\r\n>\r\n    <p\r\n        *ngFor=\"let error of errors\"\r\n        class=\"error-message\"\r\n    >\r\n        <span>{{ error }}</span>\r\n    </p>\r\n</div>\r\n<ng-content></ng-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./modules/components/tag/tag.template.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./modules/components/tag/tag.template.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  (click)=\"select($event)\"\r\n  (dblclick)=\"toggleEditMode()\"\r\n  (mousedown)=\"rippleState = 'clicked'\"\r\n  (mouseup)=\"rippleState = 'none'\"\r\n  [ngSwitch]=\"!!template\"\r\n  [class.disabled]=\"disabled\"\r\n  [attr.tabindex]=\"-1\"\r\n  [attr.aria-label]=\"getDisplayValue(model)\"\r\n>\r\n  <div *ngSwitchCase=\"true\" [attr.contenteditable]=\"editing\">\r\n    <!-- CUSTOM TEMPLATE -->\r\n    <ng-template\r\n      [ngTemplateOutletContext]=\"{ item: model, index: index }\"\r\n      [ngTemplateOutlet]=\"template\"\r\n    >\r\n    </ng-template>\r\n  </div>\r\n\r\n  <div *ngSwitchCase=\"false\" class=\"tag-wrapper\">\r\n    <!-- TAG NAME -->\r\n    <div\r\n      [attr.contenteditable]=\"editing\"\r\n      [attr.title]=\"getDisplayValue(model)\"\r\n      class=\"tag__text inline\"\r\n      spellcheck=\"false\"\r\n      (keydown.enter)=\"disableEditMode($event)\"\r\n      (keydown.escape)=\"disableEditMode($event)\"\r\n      (click)=\"editing ? $event.stopPropagation() : undefined\"\r\n      (blur)=\"onBlurred($event)\"\r\n    >\r\n      <span *ngIf=\"model.category\" class=\"tag-category\">{{ model.category }}:</span>\r\n      {{ getDisplayValue(model) }}\r\n    </div>\r\n\r\n    <!-- 'X' BUTTON -->\r\n    <delete-icon\r\n      aria-label=\"Remove tag\"\r\n      role=\"button\"\r\n      (click)=\"remove($event)\"\r\n      *ngIf=\"isDeleteIconVisible()\"\r\n    >\r\n    </delete-icon>\r\n  </div>\r\n</div>\r\n\r\n<tag-ripple [state]=\"rippleState\" [attr.tabindex]=\"-1\" *ngIf=\"isRippleVisible\">\r\n</tag-ripple>\r\n"

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./demo/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\ngx-chips\demo\main.ts */"./demo/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map