import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

export interface Coordinates {
    latitude : number;
    longitude : number;
}


@Injectable()
export class Location {

constructor(private geolocation: Geolocation) {

}

getLocation(): Promise<Coordinates>{
  return this.geolocation.getCurrentPosition().then((resp) => {
    let coo : Coordinates;
    coo.latitude = resp.coords.latitude;
    coo.longitude = resp.coords.longitude;
    return coo;
  }).catch((error) => {
  console.log('Error getting location', error);
  });
}

watchLocation(){
  let watch = this.geolocation.watchPosition();
  watch.subscribe((data) => {
      //time y location
      //hacer algo?
  });
}


}
