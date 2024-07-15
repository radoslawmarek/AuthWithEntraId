import {Component, OnInit} from "@angular/core";
import {AsyncPipe, NgForOf} from "@angular/common";
import {WeatherForecastService} from "./weather-forecast.service";
import {BehaviorSubject} from "rxjs";
import {WeatherForecastItem} from "../model/weather-forecast-item";

@Component(
  {
    selector: 'app-weather-forecast',
    standalone: true,
    templateUrl: './weather-forecast.component.html',
    imports: [
      AsyncPipe,
      NgForOf
    ],
    styleUrl: './weather-forecast.component.scss'
  }
)
export class WeatherForecastComponent implements OnInit {
  weatherForecasts: BehaviorSubject<WeatherForecastItem[]> = new BehaviorSubject<WeatherForecastItem[]>([]);

  constructor(private weatherForecastService: WeatherForecastService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.weatherForecastService.getWeatherForecast().subscribe((result) => {
      this.weatherForecasts.next(result);
    });
  }
}
