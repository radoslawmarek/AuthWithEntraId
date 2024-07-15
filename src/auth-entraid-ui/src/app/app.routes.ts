import { Routes } from '@angular/router';
import { WeatherForecastComponent } from "./weather-forecast/weather-forecast.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

export const routes: Routes = [
  { path: 'weather-forecast', component: WeatherForecastComponent },
  { path: 'user-profile', component: UserProfileComponent }
];
