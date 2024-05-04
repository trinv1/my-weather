import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonButton, 
  IonList, IonItem, IonSelect, IonText, IonSelectOption} from '@ionic/angular/standalone';
import { Router, RouterLinkWithHref } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Geolocation } from '@capacitor/geolocation';
import { Storage } from '@ionic/storage-angular';
import { FormsModule } from '@angular/forms';
import { BelweatherService } from '../Services/belweather.service';

@Component({
  selector: 'app-belfast',
  templateUrl: 'belfast.page.html',
  styleUrls: ['belfast.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonButton, FormsModule, CommonModule, 
    RouterLinkWithHref, IonList, IonItem, IonSelect, IonText, IonSelectOption],
})
export class BelfastPage implements OnInit{
  constructor(private weatherService:BelweatherService, private storage: Storage, private router: Router) {}

  weather: any = [];
  name:any = "";
  country:any = "";
  temp!:number;
  feels_like!:number;
  main: any = "";
  description: any = "";
  humidity!:number;
  visibility!:number;
  pressure!:number;
  speed!:number;
  coordinates: any = "";
  lat: string = "";
  long: string = "";
  unit: string = "Kelvin"; //default to kelvin

  async getGPS() {
    this.coordinates = await Geolocation.getCurrentPosition();
    this.lat = this.coordinates.coords.latitude;
    this.long = this.coordinates.coords.longitude; }

    async ionViewWillEnter(){//getting storage (users choice)
      await this.storage.create();
      this.unit = await this.storage.get('unit');
    }

  ngOnInit(): void {
    this.weatherService.GetWeatherData().subscribe({
      next: (data) => {
        this.weather = data.weather;
        this.name = data.name; 
        this.country = data.sys.country;
        this.temp = this.convertTemperature(data.main.temp, this.unit);        
        this.feels_like = this.convertTemperature(data.main.feels_like, this.unit);  
        this.description = data.weather[0].description
        this.humidity = data.main.humidity;
        this.visibility - data.weather[0].visibility
        this.pressure = data.main.pressure;
        this.speed = data.wind.speed;

      },
   
    });
  }

  convertTemperature(kelvin: number, unit: string): number {//logic to convert units
    if (unit === 'Celcius') {
      return kelvin - 273.15;  //convert Kelvin to Celsius
    }  
    else if (unit === 'Fahrenheit') {
      return (kelvin - 273.15) * 9/5 + 32;  //convert Kelvin to Fahrenheit
    }

    else 
    return (kelvin)
  }

  navigateTo(event: any): void {
    const value = event.detail.value;  //getting the selected value
    
    if(value == 'Dublin')
      {
        this.router.navigate(['/dublin']);
      }
      else if(value == 'Galway')
        {
          this.router.navigate(['/home']);
        }
       else if(value == 'Belfast')
          {
            this.router.navigate(['/belfast']);
          }
    }
  }


 
