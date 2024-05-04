import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonRadio, IonRadioGroup, IonButton} from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-belsettings',
  templateUrl: './belsettings.page.html',
  styleUrls: ['./belsettings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonRadio, IonRadioGroup, IonButton]
})

export class BelsettingsPage implements OnInit {
  chosenUnit:string="";


  constructor(private storage:Storage, private router:Router) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    await this.storage.create();
    this.chosenUnit = await this.storage.get('unit')
  }

  async saveChoice(){
    await this.storage.set('unit', this.chosenUnit)
    .then(
      ()=>{
        this.router.navigate(['/belfast'])
      }
    )
    .catch(
      (error)=>{
        console.log(error);
      }
    );
  }

  


}
