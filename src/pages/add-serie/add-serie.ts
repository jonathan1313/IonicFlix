import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-serie',
  templateUrl: 'add-serie.html',
})
export class AddSerieModal {

  name: string;
  description: string;
  image: string;
  score: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {}

  closeModal(): void {
    this.viewCtrl.dismiss();
  }

  saveSerie(): void {

    let newSerie = {
      name: this.name,
      description: this.description,
      image: this.image,
      score: this.score
    }

    this.viewCtrl.dismiss(newSerie);

  }

}
