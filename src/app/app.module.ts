import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from "@ionic/storage";
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddSerieModal } from './../pages/add-serie/add-serie';
import { SerieDetailPage } from './../pages/serie-detail/serie-detail';

import { SeriesDataProvider } from '../providers/series-data/series-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddSerieModal,
    SerieDetailPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddSerieModal,
    SerieDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SeriesDataProvider
  ]
})
export class AppModule {}
