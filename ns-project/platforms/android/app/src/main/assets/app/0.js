(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/home/home.component.ts");



var routes = [
    { path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n    <Label class=\"action-bar-title\" text=\"Weather Application\"></Label>\n</ActionBar>\n    <SearchBar name=\"searchBar\" hint=\"Enter City here...\" [text]=\"\"\n(submit)=\"onSubmit($event)\" color=\"yellow\" backgroundColor=\"skyblue\" textFieldHintColor=\"whitesmoke\" textFieldBackgroundColor=\"orangered\">\n\n<GridLayout class=\"page\">\n    <ListView [items]=\"WeatherData\" class=\"list-group\">\n        <ng-template let-Weather=\"item\">\n            <GridLayout class=\"list-group-item\" rows=\"auto, auto\" columns=\"50, *\">\n               <Label: [text]= \"{{Weather.temp_celcius}}°\" row=\"0\" col=\"0\">\n                <Label: [text]= \"{{Weather.temp_min}}° / {{WeatherData.temp_max}}°\" row=\"0\" col=\"0\">\n                <Label: [text]= \"Feels Like: {{Weather.temp_feels_like}}°\" row=\"0\" col=\"0\">\n                <Label: [text]=\"{{Weather.name}}\" row=\"0\" col=\"0\">\n                <Label: [text]=\"Humidity: {{Weather.main.humidity}}%\" row=\"0\" col=\"0\">\n            </GridLayout>\n        </ng-template>\n    </ListView>\n</GridLayout>\n</SearchBar>"

/***/ }),

/***/ "./app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.onSubmit = function (args) {
        this.getWeatherData(args);
        console.log(this.WeatherData);
    };
    HomeComponent.prototype.getWeatherData = function (args) {
        var _this = this;
        var e = args.object.text;
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + e + "&appid=ff1bc4683fc7325e9c57e586c20cc03e")
            .then(function (response) { return response.json(); })
            .then(function (data) { _this.setWeatherData(data); }, function (error) { console.error(error); });
    };
    HomeComponent.prototype.setWeatherData = function (data) {
        this.WeatherData = data;
        var sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
        this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
        var currentDate = new Date();
        this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
        this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
        this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
        this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
        this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __webpack_require__("./app/home/home.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/home/home.component.ts");




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFdEI7QUFFakQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0NBQ3pDLENBQUM7QUFNRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBSjdCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2Q5QixxbkJBQXFuQixzQkFBc0IsOERBQThELGtCQUFrQixNQUFNLHNCQUFzQiwwRUFBMEUseUJBQXlCLDZEQUE2RCxjQUFjLHNFQUFzRSx1QkFBdUIsMEg7Ozs7Ozs7O0FDQWxnQztBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQVFsRDtJQUlRO0lBQWdCLENBQUM7SUFHakIsZ0NBQVEsR0FBUixVQUFTLElBQUk7UUFFWCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRWhDLENBQUM7SUFHRCxzQ0FBYyxHQUFkLFVBQWUsSUFBSTtRQUFuQixpQkFNQztRQUxBLElBQUksQ0FBQyxHQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxvREFBb0QsR0FBQyxDQUFDLEdBQUMseUNBQXlDLENBQUM7YUFDdEcsSUFBSSxDQUFDLGtCQUFRLElBQUUsZUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUMvQixJQUFJLENBQUMsY0FBSSxJQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxFQUN2QyxlQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHNDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMvRCxJQUFJLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBakNJLGFBQWE7UUFKekIsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLCtEQUFvQztTQUN2QyxDQUFDOztPQUNXLGFBQWEsQ0FtQ3pCO0lBQUQsb0JBQUM7Q0FBQTtBQW5DeUI7Ozs7Ozs7OztBQ1IxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQ1k7QUFFYjtBQUNUO0FBY2pEO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFadEIsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxvRkFBd0I7Z0JBQ3hCLHNFQUFpQjthQUNwQjtZQUNELFlBQVksRUFBRTtnQkFDViw2REFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCw4REFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQTtBQUFKIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZVJvdXRpbmdNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxuICAgIDxMYWJlbCBjbGFzcz1cXFwiYWN0aW9uLWJhci10aXRsZVxcXCIgdGV4dD1cXFwiV2VhdGhlciBBcHBsaWNhdGlvblxcXCI+PC9MYWJlbD5cXG48L0FjdGlvbkJhcj5cXG4gICAgPFNlYXJjaEJhciBuYW1lPVxcXCJzZWFyY2hCYXJcXFwiIGhpbnQ9XFxcIkVudGVyIENpdHkgaGVyZS4uLlxcXCIgW3RleHRdPVxcXCJcXFwiXFxuKHN1Ym1pdCk9XFxcIm9uU3VibWl0KCRldmVudClcXFwiIGNvbG9yPVxcXCJ5ZWxsb3dcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwic2t5Ymx1ZVxcXCIgdGV4dEZpZWxkSGludENvbG9yPVxcXCJ3aGl0ZXNtb2tlXFxcIiB0ZXh0RmllbGRCYWNrZ3JvdW5kQ29sb3I9XFxcIm9yYW5nZXJlZFxcXCI+XFxuXFxuPEdyaWRMYXlvdXQgY2xhc3M9XFxcInBhZ2VcXFwiPlxcbiAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cXFwiV2VhdGhlckRhdGFcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtV2VhdGhlcj1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY29sdW1ucz1cXFwiNTAsICpcXFwiPlxcbiAgICAgICAgICAgICAgIDxMYWJlbDogW3RleHRdPSBcXFwie3tXZWF0aGVyLnRlbXBfY2VsY2l1c319wrBcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsOiBbdGV4dF09IFxcXCJ7e1dlYXRoZXIudGVtcF9taW59fcKwIC8ge3tXZWF0aGVyRGF0YS50ZW1wX21heH19wrBcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsOiBbdGV4dF09IFxcXCJGZWVscyBMaWtlOiB7e1dlYXRoZXIudGVtcF9mZWVsc19saWtlfX3CsFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWw6IFt0ZXh0XT1cXFwie3tXZWF0aGVyLm5hbWV9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWw6IFt0ZXh0XT1cXFwiSHVtaWRpdHk6IHt7V2VhdGhlci5tYWluLmh1bWlkaXR5fX0lXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9MaXN0Vmlldz5cXG48L0dyaWRMYXlvdXQ+XFxuPC9TZWFyY2hCYXI+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LEh0dHBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1NlYXJjaEJhcn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VhcmNoLWJhclwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50ICB7XG4gICAgICAgXG5cbiAgICAgICAgV2VhdGhlckRhdGE6YW55O1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHsgfVxuICAgICAgXG4gICAgICAgIFxuICAgICAgICBvblN1Ym1pdChhcmdzKVxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5nZXRXZWF0aGVyRGF0YShhcmdzKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLldlYXRoZXJEYXRhKTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgXG4gICAgICAgIGdldFdlYXRoZXJEYXRhKGFyZ3Mpe1xuICAgICAgICAgdmFyIGU9IGFyZ3Mub2JqZWN0LnRleHQ7XG4gICAgICAgICAgZmV0Y2goXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPVwiK2UrXCImYXBwaWQ9ZmYxYmM0NjgzZmM3MzI1ZTljNTdlNTg2YzIwY2MwM2VcIilcbiAgICAgICAgICAudGhlbihyZXNwb25zZT0+cmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgIC50aGVuKGRhdGE9Pnt0aGlzLnNldFdlYXRoZXJEYXRhKGRhdGEpO31cbiAgICAgICAgICAsZXJyb3IgPT57Y29uc29sZS5lcnJvcihlcnJvcik7fSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc2V0V2VhdGhlckRhdGEoZGF0YSl7XG4gICAgICAgICAgdGhpcy5XZWF0aGVyRGF0YSA9IGRhdGE7XG4gICAgICAgICAgbGV0IHN1bnNldFRpbWUgPSBuZXcgRGF0ZSh0aGlzLldlYXRoZXJEYXRhLnN5cy5zdW5zZXQgKiAxMDAwKTtcbiAgICAgICAgICB0aGlzLldlYXRoZXJEYXRhLnN1bnNldF90aW1lID0gc3Vuc2V0VGltZS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIHRoaXMuV2VhdGhlckRhdGEuaXNEYXkgPSAoY3VycmVudERhdGUuZ2V0VGltZSgpIDwgc3Vuc2V0VGltZS5nZXRUaW1lKCkpO1xuICAgICAgICAgIHRoaXMuV2VhdGhlckRhdGEudGVtcF9jZWxjaXVzID0gKHRoaXMuV2VhdGhlckRhdGEubWFpbi50ZW1wIC0gMjczLjE1KS50b0ZpeGVkKDApO1xuICAgICAgICAgIHRoaXMuV2VhdGhlckRhdGEudGVtcF9taW4gPSAodGhpcy5XZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluIC0gMjczLjE1KS50b0ZpeGVkKDApO1xuICAgICAgICAgIHRoaXMuV2VhdGhlckRhdGEudGVtcF9tYXggPSAodGhpcy5XZWF0aGVyRGF0YS5tYWluLnRlbXBfbWF4IC0gMjczLjE1KS50b0ZpeGVkKDApO1xuICAgICAgICAgIHRoaXMuV2VhdGhlckRhdGEudGVtcF9mZWVsc19saWtlID0gKHRoaXMuV2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlIC0gMjczLjE1KS50b0ZpeGVkKDApO1xuICAgICAgICB9XG4gICAgICBcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ob21lLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgSG9tZVJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBIb21lQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUgeyB9XG4iXSwic291cmNlUm9vdCI6IiJ9