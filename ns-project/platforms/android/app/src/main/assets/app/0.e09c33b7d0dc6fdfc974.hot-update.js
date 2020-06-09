webpackHotUpdate(0,{

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
            + "Feels Like: " + this.WeatherData.temp_feels_like + "° \n" + this.WeatherData.name + "\n" + "Humidity: " + this.WeatherData.humidity;
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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQVFsRDtJQUlRO0lBQWdCLENBQUM7SUFHakIsZ0NBQVEsR0FBUixVQUFTLElBQUk7UUFFWCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFHRCxzQ0FBYyxHQUFkLFVBQWUsSUFBSTtRQUFuQixpQkFXQztRQVZBLDJFQUEyRTtRQUMzRSxpRUFBaUU7UUFDakUsb0RBQW9EO1FBQ3BELElBQUksQ0FBQyxHQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxvREFBb0QsR0FBQyxDQUFDLEdBQUMseUNBQXlDLENBQUM7YUFDdEcsSUFBSSxDQUFDLGtCQUFRLElBQUUsZUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUMvQixJQUFJLENBQUMsY0FBSSxJQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxFQUN2QyxlQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDakMscWVBQXFlO1FBQ3JlLDZCQUE2QjtJQUMvQixDQUFDO0lBRUQsc0NBQWMsR0FBZCxVQUFlLElBQUk7UUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQy9ELElBQUksV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFGLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxNQUFNO2NBQ3JILGNBQWMsR0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLFlBQVksR0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUN2SSxDQUFDO0lBdkNJLGFBQWE7UUFKekIsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLCtEQUFvQztTQUN2QyxDQUFDOztPQUNXLGFBQWEsQ0F5Q3pCO0lBQUQsb0JBQUM7Q0FBQTtBQXpDeUIiLCJmaWxlIjoiMC5lMDljMzNiN2QwZGM2ZmRmYzk3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCxIdHRwUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTZWFyY2hCYXJ9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCAge1xuICAgICAgIFxuXG4gICAgICAgIFdlYXRoZXJEYXRhOmFueTtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICAgIFxuICAgICAgICBcbiAgICAgICAgb25TdWJtaXQoYXJncylcbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuZ2V0V2VhdGhlckRhdGEoYXJncyk7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5XZWF0aGVyRGF0YSk7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgIFxuICAgICAgICBnZXRXZWF0aGVyRGF0YShhcmdzKXtcbiAgICAgICAgIC8vIHZhciBlPSg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1pbnB1dFwiKSkudmFsdWU7XG4gICAgICAgICAvLyB2YXIgaG9zdD1cImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9XCI7XG4gICAgICAgICAvLyB2YXIgaWQ9XCImYXBwaWQ9ZmYxYmM0NjgzZmM3MzI1ZTljNTdlNTg2YzIwY2MwM2VcIjtcbiAgICAgICAgIHZhciBlPSBhcmdzLm9iamVjdC50ZXh0O1xuICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1cIitlK1wiJmFwcGlkPWZmMWJjNDY4M2ZjNzMyNWU5YzU3ZTU4NmMyMGNjMDNlXCIpXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PnJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAudGhlbihkYXRhPT57dGhpcy5zZXRXZWF0aGVyRGF0YShkYXRhKTt9XG4gICAgICAgICAgLGVycm9yID0+e2NvbnNvbGUuZXJyb3IoZXJyb3IpO30pXG4gICAgICAgICAgLy8gbGV0IGRhdGEgPSBKU09OLnBhcnNlKCd7XCJjb29yZFwiOntcImxvblwiOjcyLjg1LFwibGF0XCI6MTkuMDF9LFwid2VhdGhlclwiOlt7XCJpZFwiOjcyMSxcIm1haW5cIjpcIkhhemVcIixcImRlc2NyaXB0aW9uXCI6XCJoYXplXCIsXCJpY29uXCI6XCI1MG5cIn1dLFwiYmFzZVwiOlwic3RhdGlvbnNcIixcIm1haW5cIjp7XCJ0ZW1wXCI6Mjk3LjE1LFwiZmVlbHNfbGlrZVwiOjI5Ny40LFwidGVtcF9taW5cIjoyOTcuMTUsXCJ0ZW1wX21heFwiOjI5Ny4xNSxcInByZXNzdXJlXCI6MTAxMyxcImh1bWlkaXR5XCI6Njl9LFwidmlzaWJpbGl0eVwiOjM1MDAsXCJ3aW5kXCI6e1wic3BlZWRcIjozLjYsXCJkZWdcIjozMDB9LFwiY2xvdWRzXCI6e1wiYWxsXCI6MjB9LFwiZHRcIjoxNTgwMTQxNTg5LFwic3lzXCI6e1widHlwZVwiOjEsXCJpZFwiOjkwNTIsXCJjb3VudHJ5XCI6XCJJTlwiLFwic3VucmlzZVwiOjE1ODAwODk0NDEsXCJzdW5zZXRcIjoxNTgwMTI5ODg0fSxcInRpbWV6b25lXCI6MTk4MDAsXCJpZFwiOjEyNzUzMzksXCJuYW1lXCI6XCJNdW1iYWlcIixcImNvZFwiOjIwMH0nKTtcbiAgICAgICAgICAvLyB0aGlzLnNldFdlYXRoZXJEYXRhKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzZXRXZWF0aGVyRGF0YShkYXRhKXtcbiAgICAgICAgICB0aGlzLldlYXRoZXJEYXRhID0gZGF0YTtcbiAgICAgICAgICBsZXQgc3Vuc2V0VGltZSA9IG5ldyBEYXRlKHRoaXMuV2VhdGhlckRhdGEuc3lzLnN1bnNldCAqIDEwMDApO1xuICAgICAgICAgIHRoaXMuV2VhdGhlckRhdGEuc3Vuc2V0X3RpbWUgPSBzdW5zZXRUaW1lLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgdGhpcy5XZWF0aGVyRGF0YS5pc0RheSA9IChjdXJyZW50RGF0ZS5nZXRUaW1lKCkgPCBzdW5zZXRUaW1lLmdldFRpbWUoKSk7XG4gICAgICAgICAgdGhpcy5XZWF0aGVyRGF0YS50ZW1wX2NlbGNpdXMgPSAodGhpcy5XZWF0aGVyRGF0YS5tYWluLnRlbXAgLSAyNzMuMTUpLnRvRml4ZWQoMCk7XG4gICAgICAgICAgdGhpcy5XZWF0aGVyRGF0YS50ZW1wX21pbiA9ICh0aGlzLldlYXRoZXJEYXRhLm1haW4udGVtcF9taW4gLSAyNzMuMTUpLnRvRml4ZWQoMCk7XG4gICAgICAgICAgdGhpcy5XZWF0aGVyRGF0YS50ZW1wX21heCA9ICh0aGlzLldlYXRoZXJEYXRhLm1haW4udGVtcF9tYXggLSAyNzMuMTUpLnRvRml4ZWQoMCk7XG4gICAgICAgICAgdGhpcy5XZWF0aGVyRGF0YS50ZW1wX2ZlZWxzX2xpa2UgPSAodGhpcy5XZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2UgLSAyNzMuMTUpLnRvRml4ZWQoMCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuV2VhdGhlckRhdGEudGVtcF9jZWxjaXVzICsgXCLCsCBcXG5cIiArIHRoaXMuV2VhdGhlckRhdGEudGVtcF9taW4gKyBcIsKwIC8gXCIgKyB0aGlzLldlYXRoZXJEYXRhLnRlbXBfbWF4ICsgXCLCsCBcXG5cIlxuICAgICAgICAgICsgXCJGZWVscyBMaWtlOiBcIisgdGhpcy5XZWF0aGVyRGF0YS50ZW1wX2ZlZWxzX2xpa2UgKyBcIsKwIFxcblwiICsgdGhpcy5XZWF0aGVyRGF0YS5uYW1lICsgXCJcXG5cIiArIFwiSHVtaWRpdHk6IFwiKyB0aGlzLldlYXRoZXJEYXRhLmh1bWlkaXR5O1xuICAgICAgICB9XG4gICAgICBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=