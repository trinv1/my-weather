import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BelweatherService {

  constructor(private httpClient:HttpClient) { }

  GetWeatherData():Observable<any>{//method to get weather data from openweathermap api
     return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Belfast&appid=1456395d41c0f29439ad0468c9f335c5')//calling api for belfast
  }
}
