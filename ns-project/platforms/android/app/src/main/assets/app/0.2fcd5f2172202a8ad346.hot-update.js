webpackHotUpdate(0,{

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
        // var e=(<HTMLInputElement>document.getElementById("search-input")).value;
        // var host="https://api.openweathermap.org/data/2.5/weather?q=";
        // var id="&appid=ff1bc4683fc7325e9c57e586c20cc03e";
        var e = args.object.text;
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + e + "&appid=ff1bc4683fc7325e9c57e586c20cc03e")
            .then(function (response) { return response.json(); })
            .then(function (data) { _this.setWeatherData(data); }, function (error) { console.error(error); });
        // let data = JSON.parse('{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}');
        // this.setWeatherData(data);
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
        return this.WeatherData.temp_celcius + "° \n" + this.WeatherData.temp_min + "° / " + this.WeatherData.temp_max + "° \n"
            + "Feels Like: " + this.WeatherData.temp_feels_like + "° \n" + this.WeatherData.name + "\n" + "Humidity: " + this.WeatherData.main.humidity;
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

/***/ "./app/home/home.component.xml":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscW5CQUFxbkIsc0JBQXNCLDhEQUE4RCxrQkFBa0IsTUFBTSxzQkFBc0IsMEVBQTBFLHlCQUF5Qiw2REFBNkQsY0FBYyxzRUFBc0UsdUJBQXVCLDBIOzs7Ozs7OztBQ0FsZ0M7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFRbEQ7SUFJUTtJQUFnQixDQUFDO0lBR2pCLGdDQUFRLEdBQVIsVUFBUyxJQUFJO1FBRVgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBR0Qsc0NBQWMsR0FBZCxVQUFlLElBQUk7UUFBbkIsaUJBV0M7UUFWQSwyRUFBMkU7UUFDM0UsaUVBQWlFO1FBQ2pFLG9EQUFvRDtRQUNwRCxJQUFJLENBQUMsR0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN2QixLQUFLLENBQUMsb0RBQW9ELEdBQUMsQ0FBQyxHQUFDLHlDQUF5QyxDQUFDO2FBQ3RHLElBQUksQ0FBQyxrQkFBUSxJQUFFLGVBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDL0IsSUFBSSxDQUFDLGNBQUksSUFBRyxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsRUFDdkMsZUFBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ2pDLHFlQUFxZTtRQUNyZSw2QkFBNkI7SUFDL0IsQ0FBQztJQUVELHNDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMvRCxJQUFJLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsTUFBTTtjQUNySCxjQUFjLEdBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxZQUFZLEdBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzVJLENBQUM7SUF2Q0ksYUFBYTtRQUp6QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsK0RBQW9DO1NBQ3ZDLENBQUM7O09BQ1csYUFBYSxDQXlDekI7SUFBRCxvQkFBQztDQUFBO0FBekN5QiIsImZpbGUiOiIwLjJmY2Q1ZjIxNzIyMDJhOGFkMzQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxuICAgIDxMYWJlbCBjbGFzcz1cXFwiYWN0aW9uLWJhci10aXRsZVxcXCIgdGV4dD1cXFwiV2VhdGhlciBBcHBsaWNhdGlvblxcXCI+PC9MYWJlbD5cXG48L0FjdGlvbkJhcj5cXG4gICAgPFNlYXJjaEJhciBuYW1lPVxcXCJzZWFyY2hCYXJcXFwiIGhpbnQ9XFxcIkVudGVyIENpdHkgaGVyZS4uLlxcXCIgW3RleHRdPVxcXCJcXFwiXFxuKHN1Ym1pdCk9XFxcIm9uU3VibWl0KCRldmVudClcXFwiIGNvbG9yPVxcXCJ5ZWxsb3dcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwic2t5Ymx1ZVxcXCIgdGV4dEZpZWxkSGludENvbG9yPVxcXCJ3aGl0ZXNtb2tlXFxcIiB0ZXh0RmllbGRCYWNrZ3JvdW5kQ29sb3I9XFxcIm9yYW5nZXJlZFxcXCI+XFxuXFxuPEdyaWRMYXlvdXQgY2xhc3M9XFxcInBhZ2VcXFwiPlxcbiAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cXFwiV2VhdGhlckRhdGFcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtV2VhdGhlcj1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY29sdW1ucz1cXFwiNTAsICpcXFwiPlxcbiAgICAgICAgICAgICAgIDxMYWJlbDogW3RleHRdPSBcXFwie3tXZWF0aGVyLnRlbXBfY2VsY2l1c319wrBcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsOiBbdGV4dF09IFxcXCJ7e1dlYXRoZXIudGVtcF9taW59fcKwIC8ge3tXZWF0aGVyRGF0YS50ZW1wX21heH19wrBcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsOiBbdGV4dF09IFxcXCJGZWVscyBMaWtlOiB7e1dlYXRoZXIudGVtcF9mZWVsc19saWtlfX3CsFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWw6IFt0ZXh0XT1cXFwie3tXZWF0aGVyLm5hbWV9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWw6IFt0ZXh0XT1cXFwiSHVtaWRpdHk6IHt7V2VhdGhlci5tYWluLmh1bWlkaXR5fX0lXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9MaXN0Vmlldz5cXG48L0dyaWRMYXlvdXQ+XFxuPC9TZWFyY2hCYXI+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LEh0dHBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1NlYXJjaEJhcn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VhcmNoLWJhclwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50ICB7XG4gICAgICAgXG5cbiAgICAgICAgV2VhdGhlckRhdGE6YW55O1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHsgfVxuICAgICAgXG4gICAgICAgIFxuICAgICAgICBvblN1Ym1pdChhcmdzKVxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5nZXRXZWF0aGVyRGF0YShhcmdzKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLldlYXRoZXJEYXRhKTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgXG4gICAgICAgIGdldFdlYXRoZXJEYXRhKGFyZ3Mpe1xuICAgICAgICAgLy8gdmFyIGU9KDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWlucHV0XCIpKS52YWx1ZTtcbiAgICAgICAgIC8vIHZhciBob3N0PVwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1cIjtcbiAgICAgICAgIC8vIHZhciBpZD1cIiZhcHBpZD1mZjFiYzQ2ODNmYzczMjVlOWM1N2U1ODZjMjBjYzAzZVwiO1xuICAgICAgICAgdmFyIGU9IGFyZ3Mub2JqZWN0LnRleHQ7XG4gICAgICAgICAgZmV0Y2goXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPVwiK2UrXCImYXBwaWQ9ZmYxYmM0NjgzZmM3MzI1ZTljNTdlNTg2YzIwY2MwM2VcIilcbiAgICAgICAgICAudGhlbihyZXNwb25zZT0+cmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgIC50aGVuKGRhdGE9Pnt0aGlzLnNldFdlYXRoZXJEYXRhKGRhdGEpO31cbiAgICAgICAgICAsZXJyb3IgPT57Y29uc29sZS5lcnJvcihlcnJvcik7fSlcbiAgICAgICAgICAvLyBsZXQgZGF0YSA9IEpTT04ucGFyc2UoJ3tcImNvb3JkXCI6e1wibG9uXCI6NzIuODUsXCJsYXRcIjoxOS4wMX0sXCJ3ZWF0aGVyXCI6W3tcImlkXCI6NzIxLFwibWFpblwiOlwiSGF6ZVwiLFwiZGVzY3JpcHRpb25cIjpcImhhemVcIixcImljb25cIjpcIjUwblwifV0sXCJiYXNlXCI6XCJzdGF0aW9uc1wiLFwibWFpblwiOntcInRlbXBcIjoyOTcuMTUsXCJmZWVsc19saWtlXCI6Mjk3LjQsXCJ0ZW1wX21pblwiOjI5Ny4xNSxcInRlbXBfbWF4XCI6Mjk3LjE1LFwicHJlc3N1cmVcIjoxMDEzLFwiaHVtaWRpdHlcIjo2OX0sXCJ2aXNpYmlsaXR5XCI6MzUwMCxcIndpbmRcIjp7XCJzcGVlZFwiOjMuNixcImRlZ1wiOjMwMH0sXCJjbG91ZHNcIjp7XCJhbGxcIjoyMH0sXCJkdFwiOjE1ODAxNDE1ODksXCJzeXNcIjp7XCJ0eXBlXCI6MSxcImlkXCI6OTA1MixcImNvdW50cnlcIjpcIklOXCIsXCJzdW5yaXNlXCI6MTU4MDA4OTQ0MSxcInN1bnNldFwiOjE1ODAxMjk4ODR9LFwidGltZXpvbmVcIjoxOTgwMCxcImlkXCI6MTI3NTMzOSxcIm5hbWVcIjpcIk11bWJhaVwiLFwiY29kXCI6MjAwfScpO1xuICAgICAgICAgIC8vIHRoaXMuc2V0V2VhdGhlckRhdGEoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHNldFdlYXRoZXJEYXRhKGRhdGEpe1xuICAgICAgICAgIHRoaXMuV2VhdGhlckRhdGEgPSBkYXRhO1xuICAgICAgICAgIGxldCBzdW5zZXRUaW1lID0gbmV3IERhdGUodGhpcy5XZWF0aGVyRGF0YS5zeXMuc3Vuc2V0ICogMTAwMCk7XG4gICAgICAgICAgdGhpcy5XZWF0aGVyRGF0YS5zdW5zZXRfdGltZSA9IHN1bnNldFRpbWUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICB0aGlzLldlYXRoZXJEYXRhLmlzRGF5ID0gKGN1cnJlbnREYXRlLmdldFRpbWUoKSA8IHN1bnNldFRpbWUuZ2V0VGltZSgpKTtcbiAgICAgICAgICB0aGlzLldlYXRoZXJEYXRhLnRlbXBfY2VsY2l1cyA9ICh0aGlzLldlYXRoZXJEYXRhLm1haW4udGVtcCAtIDI3My4xNSkudG9GaXhlZCgwKTtcbiAgICAgICAgICB0aGlzLldlYXRoZXJEYXRhLnRlbXBfbWluID0gKHRoaXMuV2VhdGhlckRhdGEubWFpbi50ZW1wX21pbiAtIDI3My4xNSkudG9GaXhlZCgwKTtcbiAgICAgICAgICB0aGlzLldlYXRoZXJEYXRhLnRlbXBfbWF4ID0gKHRoaXMuV2VhdGhlckRhdGEubWFpbi50ZW1wX21heCAtIDI3My4xNSkudG9GaXhlZCgwKTtcbiAgICAgICAgICB0aGlzLldlYXRoZXJEYXRhLnRlbXBfZmVlbHNfbGlrZSA9ICh0aGlzLldlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZSAtIDI3My4xNSkudG9GaXhlZCgwKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5XZWF0aGVyRGF0YS50ZW1wX2NlbGNpdXMgKyBcIsKwIFxcblwiICsgdGhpcy5XZWF0aGVyRGF0YS50ZW1wX21pbiArIFwiwrAgLyBcIiArIHRoaXMuV2VhdGhlckRhdGEudGVtcF9tYXggKyBcIsKwIFxcblwiXG4gICAgICAgICAgKyBcIkZlZWxzIExpa2U6IFwiKyB0aGlzLldlYXRoZXJEYXRhLnRlbXBfZmVlbHNfbGlrZSArIFwiwrAgXFxuXCIgKyB0aGlzLldlYXRoZXJEYXRhLm5hbWUgKyBcIlxcblwiICsgXCJIdW1pZGl0eTogXCIrIHRoaXMuV2VhdGhlckRhdGEubWFpbi5odW1pZGl0eTtcbiAgICAgICAgfVxuICAgICAgXG59XG4iXSwic291cmNlUm9vdCI6IiJ9