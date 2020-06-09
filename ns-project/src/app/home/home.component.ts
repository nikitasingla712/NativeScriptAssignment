import { Component, OnInit } from "@angular/core";
import { HttpClient,HttpParams } from "@angular/common/http";
import {map} from 'rxjs/operators';
import {SearchBar} from "tns-core-modules/ui/search-bar";
@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
})
export class HomeComponent  {
       

        WeatherData:any;
        constructor() { }
      
        
        onSubmit(args)
        {
          this.getWeatherData(args);
          console.log(this.WeatherData);
          
        }
      
       
        getWeatherData(args){
         var e= args.object.text;
          fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&appid=ff1bc4683fc7325e9c57e586c20cc03e")
          .then(response=>response.json())
          .then(data=>{this.setWeatherData(data);}
          ,error =>{console.error(error);})
        }
        
        setWeatherData(data){
          this.WeatherData = data;
          let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
          this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
          let currentDate = new Date();
          this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
          this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
          this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
          this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
          this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
        }
      
}
