import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { WeatherForecastItem } from "../model/weather-forecast-item";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class WeatherForecastService {

  private API_BASE = environment.appApiConfig.uri;

  constructor(private http: HttpClient) {
  }

  public getWeatherForecast(): Observable<WeatherForecastItem[]> {
    const urlPath = `${this.API_BASE}/api/weatherforecast`
    return this.http.get<WeatherForecastItem[]>(urlPath);
  }
}
