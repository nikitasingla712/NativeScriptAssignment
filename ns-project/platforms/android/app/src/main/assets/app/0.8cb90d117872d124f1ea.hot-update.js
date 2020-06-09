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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQVFsRDtJQUlRO0lBQWdCLENBQUM7SUFHakIsZ0NBQVEsR0FBUixVQUFTLElBQUk7UUFFWCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRWhDLENBQUM7SUFHRCxzQ0FBYyxHQUFkLFVBQWUsSUFBSTtRQUFuQixpQkFNQztRQUxBLElBQUksQ0FBQyxHQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxvREFBb0QsR0FBQyxDQUFDLEdBQUMseUNBQXlDLENBQUM7YUFDdEcsSUFBSSxDQUFDLGtCQUFRLElBQUUsZUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUMvQixJQUFJLENBQUMsY0FBSSxJQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxFQUN2QyxlQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHNDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMvRCxJQUFJLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBakNJLGFBQWE7UUFKekIsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLCtEQUFvQztTQUN2QyxDQUFDOztPQUNXLGFBQWEsQ0FtQ3pCO0lBQUQsb0JBQUM7Q0FBQTtBQW5DeUIiLCJmaWxlIjoiMC44Y2I5MGQxMTc4NzJkMTI0ZjFlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCxIdHRwUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTZWFyY2hCYXJ9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCAge1xuICAgICAgIFxuXG4gICAgICAgIFdlYXRoZXJEYXRhOmFueTtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICAgIFxuICAgICAgICBcbiAgICAgICAgb25TdWJtaXQoYXJncylcbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuZ2V0V2VhdGhlckRhdGEoYXJncyk7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5XZWF0aGVyRGF0YSk7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgIFxuICAgICAgICBnZXRXZWF0aGVyRGF0YShhcmdzKXtcbiAgICAgICAgIHZhciBlPSBhcmdzLm9iamVjdC50ZXh0O1xuICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1cIitlK1wiJmFwcGlkPWZmMWJjNDY4M2ZjNzMyNWU5YzU3ZTU4NmMyMGNjMDNlXCIpXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PnJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAudGhlbihkYXRhPT57dGhpcy5zZXRXZWF0aGVyRGF0YShkYXRhKTt9XG4gICAgICAgICAgLGVycm9yID0+e2NvbnNvbGUuZXJyb3IoZXJyb3IpO30pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHNldFdlYXRoZXJEYXRhKGRhdGEpe1xuICAgICAgICAgIHRoaXMuV2VhdGhlckRhdGEgPSBkYXRhO1xuICAgICAgICAgIGxldCBzdW5zZXRUaW1lID0gbmV3IERhdGUodGhpcy5XZWF0aGVyRGF0YS5zeXMuc3Vuc2V0ICogMTAwMCk7XG4gICAgICAgICAgdGhpcy5XZWF0aGVyRGF0YS5zdW5zZXRfdGltZSA9IHN1bnNldFRpbWUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICB0aGlzLldlYXRoZXJEYXRhLmlzRGF5ID0gKGN1cnJlbnREYXRlLmdldFRpbWUoKSA8IHN1bnNldFRpbWUuZ2V0VGltZSgpKTtcbiAgICAgICAgICB0aGlzLldlYXRoZXJEYXRhLnRlbXBfY2VsY2l1cyA9ICh0aGlzLldlYXRoZXJEYXRhLm1haW4udGVtcCAtIDI3My4xNSkudG9GaXhlZCgwKTtcbiAgICAgICAgICB0aGlzLldlYXRoZXJEYXRhLnRlbXBfbWluID0gKHRoaXMuV2VhdGhlckRhdGEubWFpbi50ZW1wX21pbiAtIDI3My4xNSkudG9GaXhlZCgwKTtcbiAgICAgICAgICB0aGlzLldlYXRoZXJEYXRhLnRlbXBfbWF4ID0gKHRoaXMuV2VhdGhlckRhdGEubWFpbi50ZW1wX21heCAtIDI3My4xNSkudG9GaXhlZCgwKTtcbiAgICAgICAgICB0aGlzLldlYXRoZXJEYXRhLnRlbXBfZmVlbHNfbGlrZSA9ICh0aGlzLldlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZSAtIDI3My4xNSkudG9GaXhlZCgwKTtcbiAgICAgICAgfVxuICAgICAgXG59XG4iXSwic291cmNlUm9vdCI6IiJ9