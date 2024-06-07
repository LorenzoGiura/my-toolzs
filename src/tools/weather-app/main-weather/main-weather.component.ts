import { HttpClient, HttpClientModule, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { response } from 'express';
import { error } from 'node:console';
import { catchError } from 'rxjs';
interface WeatherInfoType {
  name: string;
  weatherDescription: string;
  iconName: string;
  clouds: number;
  temperature: number;
  humidity: number;
  pressure: number;
  windSpeed: number;

}
@Component({
  selector: 'app-main-weather',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './main-weather.component.html',
  styleUrl: './main-weather.component.css'
})
export class MainWeatherComponent {  
  constructor(
    private http: HttpClient
  ) {}

  private openWeatherKey = '169ee374327398cd69e184376db6ca93';

  city?: string;
  errorCity = false;
  weatherInfo !: WeatherInfoType;

  onGetWeather() {
    this.getWeatherInfo();
  }

  onChangeCity() {
    this.errorCity = false;
  }

  cityNotFound() {
    console.log('City not found!');
  }

  private getWeatherInfo() {
    if(this.city) {
      const params = new HttpParams().set('q', this.city!).set('appid', this.openWeatherKey);
      this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?', {params})
      .subscribe({
        next: (response) => {
          this.weatherInfo = {
            name: response.name,
            weatherDescription: response.weather[0].description,
            iconName: response.weather[0].icon,
            clouds: response.clouds.all,
            temperature: parseFloat((parseFloat(response.main.temp) - 273.15).toFixed(2)),
            humidity: response.main.humidity,
            pressure: response.main.pressure,
            windSpeed: response.wind.speed
          }
        },
        error: (error: HttpErrorResponse) => {
          this.errorCity = true;
        }
      });
    }
  }
}
