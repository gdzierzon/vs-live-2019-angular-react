(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _expenses_expense_insert_expense_insert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expenses/expense-insert/expense-insert.component */ "./src/app/expenses/expense-insert/expense-insert.component.ts");
/* harmony import */ var _categories_category_insert_category_insert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories/category-insert/category-insert.component */ "./src/app/categories/category-insert/category-insert.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expenses/expenses.component */ "./src/app/expenses/expenses.component.ts");









var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], pathMatch: 'full' },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"] },
    { path: 'categories',
        children: [
            { path: '', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__["CategoriesComponent"] },
            { path: 'insert', component: _categories_category_insert_category_insert_component__WEBPACK_IMPORTED_MODULE_2__["CategoryInsertComponent"] },
        ]
    },
    { path: 'expenses',
        children: [
            { path: '', component: _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_8__["ExpensesComponent"] },
            { path: 'insert', component: _expenses_expense_insert_expense_insert_component__WEBPACK_IMPORTED_MODULE_1__["ExpenseInsertComponent"] }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-success\">  \r\n    <ul class=\"navbar-nav mr-auto\">\r\n        <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"><a class=\"nav-link\" routerLink=\"/\">Home</a></li>\r\n        <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"users\">Users</a></li>\r\n        <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"categories\">Categories</a></li>\r\n        <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"expenses\">Expenses</a></li>\r\n    </ul> \r\n</nav>\r\n<div class=\"container\">\r\n  \r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Budget';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _categories_category_insert_category_insert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./categories/category-insert/category-insert.component */ "./src/app/categories/category-insert/category-insert.component.ts");
/* harmony import */ var _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./expenses/expenses.component */ "./src/app/expenses/expenses.component.ts");
/* harmony import */ var _expenses_expense_insert_expense_insert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./expenses/expense-insert/expense-insert.component */ "./src/app/expenses/expense-insert/expense-insert.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_9__["CategoriesComponent"],
                _categories_category_insert_category_insert_component__WEBPACK_IMPORTED_MODULE_10__["CategoryInsertComponent"],
                _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_11__["ExpensesComponent"],
                _expenses_expense_insert_expense_insert_component__WEBPACK_IMPORTED_MODULE_12__["ExpenseInsertComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Categories</h2>\n<a routerLink=\"insert\" class=\"btn btn-success\">Add</a>\n\n<table class=\"table table-hover\" style=\"margin-top: 20px;\">\n  <thead>\n    <tr class=\"table-dark\">\n      <th>Id</th>\n      <th>Category</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let category of categories\">\n      <td>{{category.categoryId}}</td>\n      <td>{{category.title}}</td>\n      <td>{{category.description}}</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.service */ "./src/app/categories/categories.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(categoriesService) {
        this.categoriesService = categoriesService;
        this.categories = [];
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    CategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoriesService.getCategories()
            .subscribe(function (response) {
            _this.categories = response;
        }, function (error) { return console.log(error); });
    };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.service.ts":
/*!**************************************************!*\
  !*** ./src/app/categories/categories.service.ts ***!
  \**************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var CategoriesService = /** @class */ (function () {
    function CategoriesService(http) {
        this.http = http;
        this.categoriesUrl = 'https://localhost:44370/api/categories';
    }
    CategoriesService.prototype.getCategories = function () {
        return this.http.get(this.categoriesUrl);
    };
    CategoriesService.prototype.getCategory = function (id) {
        var url = this.categoriesUrl + "/" + id;
        return this.http.get(url);
    };
    CategoriesService.prototype.addCategory = function (category) {
        return this.http.post(this.categoriesUrl, category);
    };
    CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "./src/app/categories/category-insert/category-insert.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/categories/category-insert/category-insert.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcnktaW5zZXJ0L2NhdGVnb3J5LWluc2VydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/categories/category-insert/category-insert.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/categories/category-insert/category-insert.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Add category</h2>\n\n  <fieldset>\n    <div class=\"form-group row\">\n      <label for=\"title\" class=\"col-sm-2 col-form-label\">Name</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" [(ngModel)]=\"category.title\" class=\"form-control\" value=\"{{category.title}}\" />\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"description\" class=\"col-sm-2 col-form-label\">Description</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" [(ngModel)]=\"category.description\" class=\"form-control\" value=\"{{category.description}}\" />\n      </div>\n    </div>\n    <button class=\"btn btn-success\" (click)='onSubmit()'>Submit</button>\n  </fieldset>\n"

/***/ }),

/***/ "./src/app/categories/category-insert/category-insert.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/categories/category-insert/category-insert.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoryInsertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryInsertComponent", function() { return CategoryInsertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../categories.service */ "./src/app/categories/categories.service.ts");
/* harmony import */ var _models_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../models/category */ "./src/app/models/category.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CategoryInsertComponent = /** @class */ (function () {
    function CategoryInsertComponent(categoriesService, router) {
        this.categoriesService = categoriesService;
        this.router = router;
        this.category = new _models_category__WEBPACK_IMPORTED_MODULE_2__["Category"]();
    }
    CategoryInsertComponent.prototype.ngOnInit = function () {
    };
    CategoryInsertComponent.prototype.onSubmit = function () {
        var _this = this;
        this.categoriesService.addCategory(this.category)
            .subscribe(function (response) {
            _this.router.navigate(['/categories']);
        }, function (error) { return console.log(error); });
    };
    CategoryInsertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-category-insert',
            template: __webpack_require__(/*! ./category-insert.component.html */ "./src/app/categories/category-insert/category-insert.component.html"),
            styles: [__webpack_require__(/*! ./category-insert.component.css */ "./src/app/categories/category-insert/category-insert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CategoryInsertComponent);
    return CategoryInsertComponent;
}());



/***/ }),

/***/ "./src/app/expenses/expense-insert/expense-insert.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/expenses/expense-insert/expense-insert.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVuc2VzL2V4cGVuc2UtaW5zZXJ0L2V4cGVuc2UtaW5zZXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/expenses/expense-insert/expense-insert.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/expenses/expense-insert/expense-insert.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Add category</h2>\n\n  <fieldset>  \n      <div class=\"form-group row\">\n        <label for=\"user\" class=\"col-sm-2 col-form-label\">User</label>\n        <div class=\"col-sm-10\">\n          <select class=\"form-control\" [(ngModel)]=\"expense.userId\">\n            <option *ngFor=\"let user of users\" [value]=\"user.userId\">{{user.firstName}} {{user.lastName}}</option>\n          </select>\n        </div>\n      </div> \n      <div class=\"form-group row\">\n        <label for=\"category\" class=\"col-sm-2 col-form-label\">User</label>\n        <div class=\"col-sm-10\">\n          <select class=\"form-control\" [(ngModel)]=\"expense.categoryId\">\n            <option *ngFor=\"let category of categories\" [value]=\"category.categoryId\">{{category.title}}</option>\n          </select>\n        </div>\n      </div>\n    <div class=\"form-group row\">\n      <label for=\"title\" class=\"col-sm-2 col-form-label\">Expense Name</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" [(ngModel)]=\"expense.title\" class=\"form-control\" value=\"{{expense.title}}\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"amount\" class=\"col-sm-2 col-form-label\">Amount</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" [(ngModel)]=\"expense.amount\" class=\"form-control\" value=\"{{expense.amount}}\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"date\" class=\"col-sm-2 col-form-label\">Date</label>\n      <div class=\"col-sm-10\">\n        <input type=\"date\" [(ngModel)]=\"expense.date\" class=\"form-control\" value=\"{{expense.date}}\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"description\" class=\"col-sm-2 col-form-label\">Description</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" [(ngModel)]=\"expense.description\" class=\"form-control\" value=\"{{expense.description}}\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"vendor\" class=\"col-sm-2 col-form-label\">Description</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" [(ngModel)]=\"expense.vendor\" class=\"form-control\" value=\"{{expense.vendor}}\">\n      </div>\n    </div>\n    <button class=\"btn btn-success\" (click)='onSubmit()'>Submit</button>\n  </fieldset>"

/***/ }),

/***/ "./src/app/expenses/expense-insert/expense-insert.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/expenses/expense-insert/expense-insert.component.ts ***!
  \*********************************************************************/
/*! exports provided: ExpenseInsertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseInsertComponent", function() { return ExpenseInsertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _expense_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../expense.service */ "./src/app/expenses/expense.service.ts");
/* harmony import */ var src_app_users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/users/users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var src_app_categories_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/categories/categories.service */ "./src/app/categories/categories.service.ts");
/* harmony import */ var src_app_models_expense__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/expense */ "./src/app/models/expense.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ExpenseInsertComponent = /** @class */ (function () {
    function ExpenseInsertComponent(expenseService, userService, categoryService, router) {
        this.expenseService = expenseService;
        this.userService = userService;
        this.categoryService = categoryService;
        this.router = router;
        this.users = [];
        this.categories = [];
        this.expense = new src_app_models_expense__WEBPACK_IMPORTED_MODULE_5__["Expense"]();
    }
    ExpenseInsertComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.getCategories();
    };
    ExpenseInsertComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (response) {
            _this.users = response;
            _this.expense.userId = _this.users[0].userId;
        });
    };
    ExpenseInsertComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (response) {
            _this.categories = response;
            _this.expense.categoryId = _this.categories[0].categoryId;
        });
    };
    ExpenseInsertComponent.prototype.onSubmit = function () {
        var _this = this;
        this.expenseService.addExpense(this.expense)
            .subscribe(function (response) {
            _this.router.navigate(['/expenses']);
        }, function (error) { return console.log(error); });
    };
    ExpenseInsertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expense-insert',
            template: __webpack_require__(/*! ./expense-insert.component.html */ "./src/app/expenses/expense-insert/expense-insert.component.html"),
            styles: [__webpack_require__(/*! ./expense-insert.component.css */ "./src/app/expenses/expense-insert/expense-insert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_expense_service__WEBPACK_IMPORTED_MODULE_2__["ExpenseService"],
            src_app_users_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            src_app_categories_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ExpenseInsertComponent);
    return ExpenseInsertComponent;
}());



/***/ }),

/***/ "./src/app/expenses/expense.service.ts":
/*!*********************************************!*\
  !*** ./src/app/expenses/expense.service.ts ***!
  \*********************************************/
/*! exports provided: ExpenseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseService", function() { return ExpenseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ExpenseService = /** @class */ (function () {
    function ExpenseService(http) {
        this.http = http;
        this.expensesUrl = 'https://localhost:44370/api/expenses';
    }
    ExpenseService.prototype.getExpensesPage = function (page, size) {
        var url = this.expensesUrl + "/page/?page=" + page + "&size=" + size;
        return this.http.get(url);
    };
    ExpenseService.prototype.getExpenses = function () {
        return this.http.get(this.expensesUrl);
    };
    ExpenseService.prototype.addExpense = function (expense) {
        return this.http.post(this.expensesUrl, expense);
    };
    ExpenseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ExpenseService);
    return ExpenseService;
}());



/***/ }),

/***/ "./src/app/expenses/expenses.component.css":
/*!*************************************************!*\
  !*** ./src/app/expenses/expenses.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVuc2VzL2V4cGVuc2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/expenses/expenses.component.html":
/*!**************************************************!*\
  !*** ./src/app/expenses/expenses.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Expenses</h2>\r\n<a routerLink=\"insert\" class=\"btn btn-success\">Add</a>\r\n\r\n<div class=\"page-navigation\">\r\n  <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"navigation\">\r\n    <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">      \r\n      <div class=\"input-group-prepend\">\r\n        <span class=\"input-group-text\">page: {{page}}</span>\r\n      </div>\r\n      <button type=\"button\" class=\"btn btn-success\" (click)='onPrevClick()'>prev</button>\r\n      <button type=\"button\" class=\"btn btn-success\" (click)='onNextClick()'>next</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<table class=\"table table-hover\" style=\"margin-top: 20px;\">\r\n  <thead>\r\n    <tr class=\"table-dark\">\r\n      <th>Id</th>\r\n      <th>User</th>\r\n      <th>Category</th>\r\n      <th>Title</th>\r\n      <th>Amount</th>\r\n      <th>Date</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let expense of expenses\">\r\n      <td>{{expense.expenseId}}</td>\r\n      <td>{{expense.user.firstName}}</td>\r\n      <td>{{expense.category.title}}</td>\r\n      <td>{{expense.title}}</td>\r\n      <td>{{expense.amount | currency}}</td>\r\n      <td>{{expense.date | date}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/expenses/expenses.component.ts":
/*!************************************************!*\
  !*** ./src/app/expenses/expenses.component.ts ***!
  \************************************************/
/*! exports provided: ExpensesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesComponent", function() { return ExpensesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _categories_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../categories/categories.service */ "./src/app/categories/categories.service.ts");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../users/users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _expense_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expense.service */ "./src/app/expenses/expense.service.ts");





var ExpensesComponent = /** @class */ (function () {
    function ExpensesComponent(expenseService, userService, categoryService) {
        this.expenseService = expenseService;
        this.userService = userService;
        this.categoryService = categoryService;
        this.users = [];
        this.categories = [];
        this.expenses = [];
        this.page = 1;
        this.size = 5;
    }
    ExpensesComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    ExpensesComponent.prototype.getExpenses = function () {
        var _this = this;
        this.expenseService.getExpensesPage(this.page, this.size)
            .subscribe(function (response) {
            _this.expenses = response;
            _this.expenses.forEach(function (expense) {
                expense.user = _this.users.find(function (user) { return user.userId === expense.userId; });
                expense.category = _this.categories.find(function (category) { return category.categoryId === expense.categoryId; });
                // this.userService.getUser(expense.userId).subscribe(userResponse => expense.user = userResponse);
                // this.categoryService.getCategory(expense.categoryId).subscribe(categoryResponse => expense.category = categoryResponse);
            });
        });
    };
    ExpensesComponent.prototype.onPrevClick = function () {
        if (this.page <= 1) {
            return;
        }
        this.page--;
        this.getExpenses();
    };
    ExpensesComponent.prototype.onNextClick = function () {
        if (this.expenses.length < this.size) {
            return;
        }
        this.page++;
        this.getExpenses();
    };
    ExpensesComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (response) {
            _this.users = response;
            _this.getCategories();
        });
    };
    ExpensesComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (response) {
            _this.categories = response;
            _this.getExpenses();
        });
    };
    ExpensesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-expenses',
            template: __webpack_require__(/*! ./expenses.component.html */ "./src/app/expenses/expenses.component.html"),
            styles: [__webpack_require__(/*! ./expenses.component.css */ "./src/app/expenses/expenses.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_expense_service__WEBPACK_IMPORTED_MODULE_4__["ExpenseService"],
            _users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _categories_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]])
    ], ExpensesComponent);
    return ExpensesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"\"\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/models/category.ts":
/*!************************************!*\
  !*** ./src/app/models/category.ts ***!
  \************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category() {
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/models/expense.ts":
/*!***********************************!*\
  !*** ./src/app/models/expense.ts ***!
  \***********************************/
/*! exports provided: Expense */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expense", function() { return Expense; });
var Expense = /** @class */ (function () {
    function Expense() {
        this.userId = 0;
        this.categoryId = 0;
        this.description = '';
        this.title = '';
        this.amount = 0;
        this.date = new Date();
        this.vendor = '';
        this.isBusinessExpense = false;
    }
    return Expense;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Users</h2>\n\n<table class=\"table table-hover\">\n  <thead>\n    <tr class=\"table-dark\">\n      <th>Id</th>\n      <th>First Name</th>\n      <th>Last Name</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let user of users\">\n      <td>{{user.userId}}</td>\n      <td>{{user.firstName}}</td>\n      <td>{{user.lastName}}</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService) {
        this.userService = userService;
        this.users = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (response) {
            _this.users = response;
        }, function (error) { return console.log(error); });
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/users/users.service.ts":
/*!****************************************!*\
  !*** ./src/app/users/users.service.ts ***!
  \****************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.usersUrl = 'https://localhost:44370/api/users';
    }
    UsersService.prototype.getUsers = function () {
        return this.http.get(this.usersUrl);
    };
    UsersService.prototype.getUser = function (id) {
        var url = this.usersUrl + "/" + id;
        return this.http.get(url);
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Repos\Conferences\VSLive2019\vs-live-2019-angular-react\AngularClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map