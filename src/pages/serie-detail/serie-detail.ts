import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-serie-detail',
  templateUrl: 'serie-detail.html',
})
export class SerieDetailPage {

  serieImage: string; 
  serieName: string;
  serieScore: number;
  serieDescription: string; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {}

  ionViewDidLoad() {
   this.serieImage = this.navParams.get('serie').image;
   this.serieName = this.navParams.get('serie').name;
   this.serieScore = this.navParams.get('serie').score;
   this.serieDescription = this.navParams.get('serie').description;
  }

}
