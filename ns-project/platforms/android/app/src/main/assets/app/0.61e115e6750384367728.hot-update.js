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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQVFsRDtJQUlRO0lBQWdCLENBQUM7SUFHakIsZ0NBQVEsR0FBUixVQUFTLElBQUk7UUFFWCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFHRCxzQ0FBYyxHQUFkLFVBQWUsSUFBSTtRQUFuQixpQkFXQztRQVZBLDJFQUEyRTtRQUMzRSxpRUFBaUU7UUFDakUsb0RBQW9EO1FBQ3BELElBQUksQ0FBQyxHQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxvREFBb0QsR0FBQyxDQUFDLEdBQUMseUNBQXlDLENBQUM7YUFDdEcsSUFBSSxDQUFDLGtCQUFRLElBQUUsZUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUMvQixJQUFJLENBQUMsY0FBSSxJQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxFQUN2QyxlQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDakMscWVBQXFlO1FBQ3JlLDZCQUE2QjtJQUMvQixDQUFDO0lBRUQsc0NBQWMsR0FBZCxVQUFlLElBQUk7UUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQy9ELElBQUksV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFGLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxNQUFNO2NBQ3JILGNBQWMsR0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLFlBQVksR0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDNUksQ0FBQztJQXZDSSxhQUFhO1FBSnpCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQiwrREFBb0M7U0FDdkMsQ0FBQzs7T0FDVyxhQUFhLENBeUN6QjtJQUFELG9CQUFDO0NBQUE7QUF6Q3lCIiwiZmlsZSI6IjAuNjFlMTE1ZTY3NTAzODQzNjc3MjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsSHR0cFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7U2VhcmNoQmFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgIHtcbiAgICAgICBcblxuICAgICAgICBXZWF0aGVyRGF0YTphbnk7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkgeyB9XG4gICAgICBcbiAgICAgICAgXG4gICAgICAgIG9uU3VibWl0KGFyZ3MpXG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLmdldFdlYXRoZXJEYXRhKGFyZ3MpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuV2VhdGhlckRhdGEpO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICBcbiAgICAgICAgZ2V0V2VhdGhlckRhdGEoYXJncyl7XG4gICAgICAgICAvLyB2YXIgZT0oPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtaW5wdXRcIikpLnZhbHVlO1xuICAgICAgICAgLy8gdmFyIGhvc3Q9XCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPVwiO1xuICAgICAgICAgLy8gdmFyIGlkPVwiJmFwcGlkPWZmMWJjNDY4M2ZjNzMyNWU5YzU3ZTU4NmMyMGNjMDNlXCI7XG4gICAgICAgICB2YXIgZT0gYXJncy5vYmplY3QudGV4dDtcbiAgICAgICAgICBmZXRjaChcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9XCIrZStcIiZhcHBpZD1mZjFiYzQ2ODNmYzczMjVlOWM1N2U1ODZjMjBjYzAzZVwiKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlPT5yZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oZGF0YT0+e3RoaXMuc2V0V2VhdGhlckRhdGEoZGF0YSk7fVxuICAgICAgICAgICxlcnJvciA9Pntjb25zb2xlLmVycm9yKGVycm9yKTt9KVxuICAgICAgICAgIC8vIGxldCBkYXRhID0gSlNPTi5wYXJzZSgne1wiY29vcmRcIjp7XCJsb25cIjo3Mi44NSxcImxhdFwiOjE5LjAxfSxcIndlYXRoZXJcIjpbe1wiaWRcIjo3MjEsXCJtYWluXCI6XCJIYXplXCIsXCJkZXNjcmlwdGlvblwiOlwiaGF6ZVwiLFwiaWNvblwiOlwiNTBuXCJ9XSxcImJhc2VcIjpcInN0YXRpb25zXCIsXCJtYWluXCI6e1widGVtcFwiOjI5Ny4xNSxcImZlZWxzX2xpa2VcIjoyOTcuNCxcInRlbXBfbWluXCI6Mjk3LjE1LFwidGVtcF9tYXhcIjoyOTcuMTUsXCJwcmVzc3VyZVwiOjEwMTMsXCJodW1pZGl0eVwiOjY5fSxcInZpc2liaWxpdHlcIjozNTAwLFwid2luZFwiOntcInNwZWVkXCI6My42LFwiZGVnXCI6MzAwfSxcImNsb3Vkc1wiOntcImFsbFwiOjIwfSxcImR0XCI6MTU4MDE0MTU4OSxcInN5c1wiOntcInR5cGVcIjoxLFwiaWRcIjo5MDUyLFwiY291bnRyeVwiOlwiSU5cIixcInN1bnJpc2VcIjoxNTgwMDg5NDQxLFwic3Vuc2V0XCI6MTU4MDEyOTg4NH0sXCJ0aW1lem9uZVwiOjE5ODAwLFwiaWRcIjoxMjc1MzM5LFwibmFtZVwiOlwiTXVtYmFpXCIsXCJjb2RcIjoyMDB9Jyk7XG4gICAgICAgICAgLy8gdGhpcy5zZXRXZWF0aGVyRGF0YShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc2V0V2VhdGhlckRhdGEoZGF0YSl7XG4gICAgICAgICAgdGhpcy5XZWF0aGVyRGF0YSA9IGRhdGE7XG4gICAgICAgICAgbGV0IHN1bnNldFRpbWUgPSBuZXcgRGF0ZSh0aGlzLldlYXRoZXJEYXRhLnN5cy5zdW5zZXQgKiAxMDAwKTtcbiAgICAgICAgICB0aGlzLldlYXRoZXJEYXRhLnN1bnNldF90aW1lID0gc3Vuc2V0VGltZS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIHRoaXMuV2VhdGhlckRhdGEuaXNEYXkgPSAoY3VycmVudERhdGUuZ2V0VGltZSgpIDwgc3Vuc2V0VGltZS5nZXRUaW1lKCkpO1xuICAgICAgICAgIHRoaXMuV2VhdGhlckRhdGEudGVtcF9jZWxjaXVzID0gKHRoaXMuV2VhdGhlckRhdGEubWFpbi50ZW1wIC0gMjczLjE1KS50b0ZpeGVkKDApO1xuICAgICAgICAgIHRoaXMuV2VhdGhlckRhdGEudGVtcF9taW4gPSAodGhpcy5XZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluIC0gMjczLjE1KS50b0ZpeGVkKDApO1xuICAgICAgICAgIHRoaXMuV2VhdGhlckRhdGEudGVtcF9tYXggPSAodGhpcy5XZWF0aGVyRGF0YS5tYWluLnRlbXBfbWF4IC0gMjczLjE1KS50b0ZpeGVkKDApO1xuICAgICAgICAgIHRoaXMuV2VhdGhlckRhdGEudGVtcF9mZWVsc19saWtlID0gKHRoaXMuV2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlIC0gMjczLjE1KS50b0ZpeGVkKDApO1xuICAgICAgICAgIHJldHVybiB0aGlzLldlYXRoZXJEYXRhLnRlbXBfY2VsY2l1cyArIFwiwrAgXFxuXCIgKyB0aGlzLldlYXRoZXJEYXRhLnRlbXBfbWluICsgXCLCsCAvIFwiICsgdGhpcy5XZWF0aGVyRGF0YS50ZW1wX21heCArIFwiwrAgXFxuXCJcbiAgICAgICAgICArIFwiRmVlbHMgTGlrZTogXCIrIHRoaXMuV2VhdGhlckRhdGEudGVtcF9mZWVsc19saWtlICsgXCLCsCBcXG5cIiArIHRoaXMuV2VhdGhlckRhdGEubmFtZSArIFwiXFxuXCIgKyBcIkh1bWlkaXR5OiBcIisgdGhpcy5XZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5O1xuICAgICAgICB9XG4gICAgICBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=