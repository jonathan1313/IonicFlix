import { SerieDetailPage } from './../serie-detail/serie-detail';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { AddSerieModal } from './../add-serie/add-serie';
import { SeriesDataProvider } from './../../providers/series-data/series-data';

import { Serie } from '../../models/serie.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public series: Array<Serie> = [];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public seriesData: SeriesDataProvider
  ) {}

  ionViewDidLoad() {

    this.seriesData.getSeries().then((list) => {
      if(list){
        this.series = JSON.parse(list);
      }
    });

  }

  addSerie(): void {

    let addSerie = this.modalCtrl.create(AddSerieModal);

    addSerie.onDidDismiss((serie: Serie) => {

      if(serie) {
        this.series.push(serie);
        this.seriesData.saveSeries(this.series);
      }

    });

    addSerie.present();    

  }

  removeSerie(serie): void {

    let index = this.series.indexOf(serie);

    if(index > -1) {
      this.series.splice(index, 1);
      this.seriesData.saveSeries(this.series);
    }

  }

  serieDetail(serie): void {
    this.navCtrl.push(SerieDetailPage, {
      serie: serie
    });
  }

  

}
