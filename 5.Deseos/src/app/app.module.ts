import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { Storage, IonicStorageModule } from '@ionic/storage';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';

import { FinishedPage, PendientsPage, TabsPage } from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DeseosProvider } from '../providers/providers';
import { Api } from '../providers/api';
import { Location } from '../providers/location';
import { DBase } from '../providers/dbase';
import { PlaceHolderPipe } from '../pipes/place-holder/place-holder';
import { PendientesPipe } from '../pipes/pendientes/pendientes';


let DBaseFactory = (storage: Storage ) => {
  return new DBase(storage);
};

export let DBaseProvider =
  { provide: DBase,
    useFactory: DBaseFactory,
    deps: [Storage]
  };


  let ApiFactory = (http: Http) => {
  return new Api(http);
};

export let ApiProvider =
  { provide: Api,
    useFactory: ApiFactory,
    deps: [Http]
  };


  let LocationFactory = (geolocation: Geolocation) => {
  return new Location(geolocation);
};

export let LocationProvider =
  { provide: Location,
    useFactory: LocationFactory,
    deps: [Geolocation]
  };


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FinishedPage,
    PendientsPage,
    PlaceHolderPipe,
    PlaceHolderPipe,
    PendientesPipe
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    FinishedPage,
    PendientsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    ApiProvider,
    LocationProvider,
    DBaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DeseosProvider
  ]
})
export class AppModule {}
