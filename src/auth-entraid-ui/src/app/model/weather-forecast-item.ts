export class WeatherForecastItem {
  date: string;
  temperatureC: number;
  summary: string;
  temperatureF: number;

  constructor(date: string, temperatureC: number, summary: string, temperatureF: number) {
    this.date = date;
    this.temperatureC = temperatureC;
    this.summary = summary;
    this.temperatureF = temperatureF;
  }
}
