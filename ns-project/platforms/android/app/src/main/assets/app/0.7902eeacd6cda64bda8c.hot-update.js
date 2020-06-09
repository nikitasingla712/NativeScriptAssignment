webpackHotUpdate(0,{

/***/ "./app/home/home.component.html":
false,

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
            template: __webpack_require__("./app/home/home.component.xml"),
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./app/home/home.component.xml":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n    <Label class=\"action-bar-title\" text=\"Weather Application\"></Label>\n</ActionBar>\n    <SearchBar name=\"searchBar\" hint=\"Enter City here...\" [text]=\"\"\n(submit)=\"onSubmit($event)\" color=\"yellow\" backgroundColor=\"skyblue\" textFieldHintColor=\"whitesmoke\" textFieldBackgroundColor=\"orangered\">\n\n<GridLayout class=\"page\">\n    <ListView [items]=\"WeatherData\" class=\"list-group\">\n        <ng-template let-Weather=\"item\">\n            <GridLayout class=\"list-group-item\" rows=\"auto, auto\" columns=\"50, *\">\n               <Label: [text]= \"{{Weather.temp_celcius}}°\" row=\"0\" col=\"0\">\n                <Label: [text]= \"{{Weather.temp_min}}° / {{WeatherData.temp_max}}°\" row=\"0\" col=\"0\">\n                <Label: [text]= \"Feels Like: {{Weather.temp_feels_like}}°\" row=\"0\" col=\"0\">\n                <Label: [text]=\"{{Weather.name}}\" row=\"0\" col=\"0\">\n                <Label: [text]=\"Humidity: {{Weather.main.humidity}}%\" row=\"0\" col=\"0\">\n            </GridLayout>\n        </ng-template>\n    </ListView>\n</GridLayout>\n</SearchBar>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC54bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFRbEQ7SUFJUTtJQUFnQixDQUFDO0lBR2pCLGdDQUFRLEdBQVIsVUFBUyxJQUFJO1FBRVgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBR0Qsc0NBQWMsR0FBZCxVQUFlLElBQUk7UUFBbkIsaUJBV0M7UUFWQSwyRUFBMkU7UUFDM0UsaUVBQWlFO1FBQ2pFLG9EQUFvRDtRQUNwRCxJQUFJLENBQUMsR0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN2QixLQUFLLENBQUMsb0RBQW9ELEdBQUMsQ0FBQyxHQUFDLHlDQUF5QyxDQUFDO2FBQ3RHLElBQUksQ0FBQyxrQkFBUSxJQUFFLGVBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDL0IsSUFBSSxDQUFDLGNBQUksSUFBRyxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsRUFDdkMsZUFBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ2pDLHFlQUFxZTtRQUNyZSw2QkFBNkI7SUFDL0IsQ0FBQztJQUVELHNDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMvRCxJQUFJLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsTUFBTTtjQUNySCxjQUFjLEdBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxZQUFZLEdBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzVJLENBQUM7SUF2Q0ksYUFBYTtRQUp6QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsOERBQW1DO1NBQ3RDLENBQUM7O09BQ1csYUFBYSxDQXlDekI7SUFBRCxvQkFBQztDQUFBO0FBekN5Qjs7Ozs7Ozs7QUNSMUIscW5CQUFxbkIsc0JBQXNCLDhEQUE4RCxrQkFBa0IsTUFBTSxzQkFBc0IsMEVBQTBFLHlCQUF5Qiw2REFBNkQsY0FBYyxzRUFBc0UsdUJBQXVCLDBIIiwiZmlsZSI6IjAuNzkwMmVlYWNkNmNkYTY0YmRhOGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsSHR0cFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7U2VhcmNoQmFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC54bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCAge1xuICAgICAgIFxuXG4gICAgICAgIFdlYXRoZXJEYXRhOmFueTtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICAgIFxuICAgICAgICBcbiAgICAgICAgb25TdWJtaXQoYXJncylcbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuZ2V0V2VhdGhlckRhdGEoYXJncyk7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5XZWF0aGVyRGF0YSk7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgIFxuICAgICAgICBnZXRXZWF0aGVyRGF0YShhcmdzKXtcbiAgICAgICAgIC8vIHZhciBlPSg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1pbnB1dFwiKSkudmFsdWU7XG4gICAgICAgICAvLyB2YXIgaG9zdD1cImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9XCI7XG4gICAgICAgICAvLyB2YXIgaWQ9XCImYXBwaWQ9ZmYxYmM0NjgzZmM3MzI1ZTljNTdlNTg2YzIwY2MwM2VcIjtcbiAgICAgICAgIHZhciBlPSBhcmdzLm9iamVjdC50ZXh0O1xuICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1cIitlK1wiJmFwcGlkPWZmMWJjNDY4M2ZjNzMyNWU5YzU3ZTU4NmMyMGNjMDNlXCIpXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PnJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAudGhlbihkYXRhPT57dGhpcy5zZXRXZWF0aGVyRGF0YShkYXRhKTt9XG4gICAgICAgICAgLGVycm9yID0+e2NvbnNvbGUuZXJyb3IoZXJyb3IpO30pXG4gICAgICAgICAgLy8gbGV0IGRhdGEgPSBKU09OLnBhcnNlKCd7XCJjb29yZFwiOntcImxvblwiOjcyLjg1LFwibGF0XCI6MTkuMDF9LFwid2VhdGhlclwiOlt7XCJpZFwiOjcyMSxcIm1haW5cIjpcIkhhemVcIixcImRlc2NyaXB0aW9uXCI6XCJoYXplXCIsXCJpY29uXCI6XCI1MG5cIn1dLFwiYmFzZVwiOlwic3RhdGlvbnNcIixcIm1haW5cIjp7XCJ0ZW1wXCI6Mjk3LjE1LFwiZmVlbHNfbGlrZVwiOjI5Ny40LFwidGVtcF9taW5cIjoyOTcuMTUsXCJ0ZW1wX21heFwiOjI5Ny4xNSxcInByZXNzdXJlXCI6MTAxMyxcImh1bWlkaXR5XCI6Njl9LFwidmlzaWJpbGl0eVwiOjM1MDAsXCJ3aW5kXCI6e1wic3BlZWRcIjozLjYsXCJkZWdcIjozMDB9LFwiY2xvdWRzXCI6e1wiYWxsXCI6MjB9LFwiZHRcIjoxNTgwMTQxNTg5LFwic3lzXCI6e1widHlwZVwiOjEsXCJpZFwiOjkwNTIsXCJjb3VudHJ5XCI6XCJJTlwiLFwic3VucmlzZVwiOjE1ODAwODk0NDEsXCJzdW5zZXRcIjoxNTgwMTI5ODg0fSxcInRpbWV6b25lXCI6MTk4MDAsXCJpZFwiOjEyNzUzMzksXCJuYW1lXCI6XCJNdW1iYWlcIixcImNvZFwiOjIwMH0nKTtcbiAgICAgICAgICAvLyB0aGlzLnNldFdlYXRoZXJEYXRhKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzZXRXZWF0aGVyRGF0YShkYXRhKXtcbiAgICAgICAgICB0aGlzLldlYXRoZXJEYXRhID0gZGF0YTtcbiAgICAgICAgICBsZXQgc3Vuc2V0VGltZSA9IG5ldyBEYXRlKHRoaXMuV2VhdGhlckRhdGEuc3lzLnN1bnNldCAqIDEwMDApO1xuICAgICAgICAgIHRoaXMuV2VhdGhlckRhdGEuc3Vuc2V0X3RpbWUgPSBzdW5zZXRUaW1lLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgdGhpcy5XZWF0aGVyRGF0YS5pc0RheSA9IChjdXJyZW50RGF0ZS5nZXRUaW1lKCkgPCBzdW5zZXRUaW1lLmdldFRpbWUoKSk7XG4gICAgICAgICAgdGhpcy5XZWF0aGVyRGF0YS50ZW1wX2NlbGNpdXMgPSAodGhpcy5XZWF0aGVyRGF0YS5tYWluLnRlbXAgLSAyNzMuMTUpLnRvRml4ZWQoMCk7XG4gICAgICAgICAgdGhpcy5XZWF0aGVyRGF0YS50ZW1wX21pbiA9ICh0aGlzLldlYXRoZXJEYXRhLm1haW4udGVtcF9taW4gLSAyNzMuMTUpLnRvRml4ZWQoMCk7XG4gICAgICAgICAgdGhpcy5XZWF0aGVyRGF0YS50ZW1wX21heCA9ICh0aGlzLldlYXRoZXJEYXRhLm1haW4udGVtcF9tYXggLSAyNzMuMTUpLnRvRml4ZWQoMCk7XG4gICAgICAgICAgdGhpcy5XZWF0aGVyRGF0YS50ZW1wX2ZlZWxzX2xpa2UgPSAodGhpcy5XZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2UgLSAyNzMuMTUpLnRvRml4ZWQoMCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuV2VhdGhlckRhdGEudGVtcF9jZWxjaXVzICsgXCLCsCBcXG5cIiArIHRoaXMuV2VhdGhlckRhdGEudGVtcF9taW4gKyBcIsKwIC8gXCIgKyB0aGlzLldlYXRoZXJEYXRhLnRlbXBfbWF4ICsgXCLCsCBcXG5cIlxuICAgICAgICAgICsgXCJGZWVscyBMaWtlOiBcIisgdGhpcy5XZWF0aGVyRGF0YS50ZW1wX2ZlZWxzX2xpa2UgKyBcIsKwIFxcblwiICsgdGhpcy5XZWF0aGVyRGF0YS5uYW1lICsgXCJcXG5cIiArIFwiSHVtaWRpdHk6IFwiKyB0aGlzLldlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHk7XG4gICAgICAgIH1cbiAgICAgIFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcbiAgICA8TGFiZWwgY2xhc3M9XFxcImFjdGlvbi1iYXItdGl0bGVcXFwiIHRleHQ9XFxcIldlYXRoZXIgQXBwbGljYXRpb25cXFwiPjwvTGFiZWw+XFxuPC9BY3Rpb25CYXI+XFxuICAgIDxTZWFyY2hCYXIgbmFtZT1cXFwic2VhcmNoQmFyXFxcIiBoaW50PVxcXCJFbnRlciBDaXR5IGhlcmUuLi5cXFwiIFt0ZXh0XT1cXFwiXFxcIlxcbihzdWJtaXQpPVxcXCJvblN1Ym1pdCgkZXZlbnQpXFxcIiBjb2xvcj1cXFwieWVsbG93XFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcInNreWJsdWVcXFwiIHRleHRGaWVsZEhpbnRDb2xvcj1cXFwid2hpdGVzbW9rZVxcXCIgdGV4dEZpZWxkQmFja2dyb3VuZENvbG9yPVxcXCJvcmFuZ2VyZWRcXFwiPlxcblxcbjxHcmlkTGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPExpc3RWaWV3IFtpdGVtc109XFxcIldlYXRoZXJEYXRhXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LVdlYXRoZXI9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIHJvd3M9XFxcImF1dG8sIGF1dG9cXFwiIGNvbHVtbnM9XFxcIjUwLCAqXFxcIj5cXG4gICAgICAgICAgICAgICA8TGFiZWw6IFt0ZXh0XT0gXFxcInt7V2VhdGhlci50ZW1wX2NlbGNpdXN9fcKwXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbDogW3RleHRdPSBcXFwie3tXZWF0aGVyLnRlbXBfbWlufX3CsCAvIHt7V2VhdGhlckRhdGEudGVtcF9tYXh9fcKwXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbDogW3RleHRdPSBcXFwiRmVlbHMgTGlrZToge3tXZWF0aGVyLnRlbXBfZmVlbHNfbGlrZX19wrBcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsOiBbdGV4dF09XFxcInt7V2VhdGhlci5uYW1lfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsOiBbdGV4dF09XFxcIkh1bWlkaXR5OiB7e1dlYXRoZXIubWFpbi5odW1pZGl0eX19JVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgIDwvTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlxcbjwvU2VhcmNoQmFyPlwiIl0sInNvdXJjZVJvb3QiOiIifQ==