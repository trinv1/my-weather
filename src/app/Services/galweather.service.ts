import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GalweatherService {

  constructor(private httpClient:HttpClient) { }

  GetWeatherData():Observable<any>{// api to display weather services
     return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=1456395d41c0f29439ad0468c9f335c5')
  }
}
