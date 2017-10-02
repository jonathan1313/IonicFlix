import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class SeriesDataProvider {

  constructor(public storage: Storage) {}

  getSeries(): any {
    return this.storage.get('ionic_series');
  }

  saveSeries(series): void {

    let seriesList = JSON.stringify(series);
    this.storage.set('ionic_series', seriesList);

  }

}
