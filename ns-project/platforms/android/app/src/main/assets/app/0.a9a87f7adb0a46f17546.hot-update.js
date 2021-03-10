webpackHotUpdate(0,{

/***/ "./app/home/home.component.xml":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n    <Label class=\"action-bar-title\" text=\"Weather Application\"></Label>\n</ActionBar>\n    <SearchBar name=\"searchBar\" hint=\"Enter City here...\" [text]=\"\"\n(submit)=\"onSubmit($event)\" color=\"yellow\" backgroundColor=\"skyblue\" textFieldHintColor=\"whitesmoke\" textFieldBackgroundColor=\"orangered\">\n\n<GridLayout class=\"page\">\n    <ListView [items]=\"WeatherData\" class=\"list-group\">\n        <ng-template let-Weather=\"item\">\n            <GridLayout class=\"list-group-item\" rows=\"auto, auto\" columns=\"50, *\">\n               <Label: [text]= \"{{Weather.temp_celcius}}°\" row=\"0\" col=\"0\">\n                <Label: [text]= \"{{Weather.temp_min}}° / {{WeatherData.temp_max}}°\" row=\"0\" col=\"0\">\n                <Label: [text]= \"Feels Like: {{Weather.temp_feels_like}}°\" row=\"0\" col=\"0\">\n                <Label: [text]=\"{{Weather.name}}\" row=\"0\" col=\"0\">\n                <Label: [text]=\"Humidity: {{Weather.main.humidity}}%\" row=\"0\" col=\"0\">\n            </GridLayout>\n        </ng-template>\n    </ListView>\n</GridLayout>\n</SearchBar>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC54bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxbkJBQXFuQixzQkFBc0IsOERBQThELGtCQUFrQixNQUFNLHNCQUFzQiwwRUFBMEUseUJBQXlCLDZEQUE2RCxjQUFjLHNFQUFzRSx1QkFBdUIsMEgiLCJmaWxlIjoiMC5hOWE4N2Y3YWRiMGE0NmYxNzU0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcbiAgICA8TGFiZWwgY2xhc3M9XFxcImFjdGlvbi1iYXItdGl0bGVcXFwiIHRleHQ9XFxcIldlYXRoZXIgQXBwbGljYXRpb25cXFwiPjwvTGFiZWw+XFxuPC9BY3Rpb25CYXI+XFxuICAgIDxTZWFyY2hCYXIgbmFtZT1cXFwic2VhcmNoQmFyXFxcIiBoaW50PVxcXCJFbnRlciBDaXR5IGhlcmUuLi5cXFwiIFt0ZXh0XT1cXFwiXFxcIlxcbihzdWJtaXQpPVxcXCJvblN1Ym1pdCgkZXZlbnQpXFxcIiBjb2xvcj1cXFwieWVsbG93XFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcInNreWJsdWVcXFwiIHRleHRGaWVsZEhpbnRDb2xvcj1cXFwid2hpdGVzbW9rZVxcXCIgdGV4dEZpZWxkQmFja2dyb3VuZENvbG9yPVxcXCJvcmFuZ2VyZWRcXFwiPlxcblxcbjxHcmlkTGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPExpc3RWaWV3IFtpdGVtc109XFxcIldlYXRoZXJEYXRhXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LVdlYXRoZXI9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIHJvd3M9XFxcImF1dG8sIGF1dG9cXFwiIGNvbHVtbnM9XFxcIjUwLCAqXFxcIj5cXG4gICAgICAgICAgICAgICA8TGFiZWw6IFt0ZXh0XT0gXFxcInt7V2VhdGhlci50ZW1wX2NlbGNpdXN9fcKwXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbDogW3RleHRdPSBcXFwie3tXZWF0aGVyLnRlbXBfbWlufX3CsCAvIHt7V2VhdGhlckRhdGEudGVtcF9tYXh9fcKwXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbDogW3RleHRdPSBcXFwiRmVlbHMgTGlrZToge3tXZWF0aGVyLnRlbXBfZmVlbHNfbGlrZX19wrBcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsOiBbdGV4dF09XFxcInt7V2VhdGhlci5uYW1lfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsOiBbdGV4dF09XFxcIkh1bWlkaXR5OiB7e1dlYXRoZXIubWFpbi5odW1pZGl0eX19JVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgIDwvTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlxcbjwvU2VhcmNoQmFyPlwiIl0sInNvdXJjZVJvb3QiOiIifQ==