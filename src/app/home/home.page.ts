import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonButton, 
  IonList, IonItem, IonSelect, IonText, IonSelectOption} from '@ionic/angular/standalone';
import { Router, RouterLinkWithHref } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Geolocation } from '@capacitor/geolocation';
import { Storage } from '@ionic/storage-angular';
import { FormsModule } from '@angular/forms';
import { GalweatherService} from '../Services/galweather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonButton, FormsModule, CommonModule, 
    RouterLinkWithHref, IonList, IonItem, IonSelect, IonText, IonSelectOption],
})
export class HomePage implements OnInit{
  constructor(private weatherService:GalweatherService, private storage: Storage, private router: Router) {}

  weather: any = [];//component properties
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
  galLat: string = "";
  galLong: string = "";

  async ionViewWillEnter(){//getting users choice from storage
    await this.storage.create();
    this.unit = await this.storage.get('unit');
    this.getWeatherData(); //fetching weather data

  }

  async getGPS() {//method to get gps coords
    this.coordinates = await Geolocation.getCurrentPosition();
    this.lat = this.coordinates.coords.latitude;
    this.long = this.coordinates.coords.longitude; }

    ngOnInit(): void {
      this.getWeatherData(); //fetching weather data when components initialised
    }
  

    getWeatherData() {//method to fetch weather data
    this.weatherService.GetWeatherData().subscribe({
      next: (data) => {
        this.weather = data.weather;//assigning fetched weather data to component properties
        this.name = data.name; 
        this.country = data.sys.country;
        this.temp = this.convertTemperature(data.main.temp, this.unit);        
        this.feels_like = this.convertTemperature(data.main.feels_like, this.unit);  
        this.description = data.weather[0].description
        this.humidity = data.main.humidity;
        this.visibility = data.visibility
        this.pressure = data.main.pressure;
        this.speed = data.wind.speed;
        this.galLong = data.coord.lon;
        this.galLat = data.coord.lat;


      },
   
    });
    }

  convertTemperature(kelvin: number, unit: string): number {//logic to convert units
    if (unit == 'Celsius') {
      return kelvin - 273.15;  //convert Kelvin to Celsius
    }  
    else if (unit == 'Fahrenheit') {
      return (kelvin - 273.15) * 9/5 + 32;  //convert Kelvin to Fahrenheit
    }

    else 
    return (kelvin)
  }

  navigateTo(event: any): void {//method to navigate to different locations
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


 

