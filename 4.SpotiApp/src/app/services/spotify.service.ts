import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { Observable, Observer } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {

  private urlBusqueda: string = "https://api.spotify.com/v1/search";
  private urlArtista: string = "https://api.spotify.com/v1/artists";

  private urlLogin: string = "https://accounts.spotify.com/api/token";

  constructor(private http: Http) {

  }

  getArtista(id: string){
      let url = `${this.urlArtista}/${id}`;
      return this.get(url);
  }

  getArtistas(termino: string) {
      let url = `${this.urlBusqueda}?q=${termino}&type=artist`;
      return this.get(url);
  }

  private get(url: string){
    return this.getToken().map( (token) => {
      let headers = new Headers();
      headers.append('authorization', `${token.token_type} ${token.access_token}`);
      headers.append('Accept', 'application/json');
      let options = new RequestOptions({ headers: headers });
      return this.http.get(url, options).map( res => { return res.json() } );
    });
  }

  getToken() {
    // if (this.token) {
    //   return Observable.create((observer: Observer<any>) => {
    //     /* do things with observer */
    //     console.log(this.token);
    //     observer.next(this.token); //data - Must be a JSON object
    //     observer.complete();
    //   });
    // }

     let keys = {
       'client_id': "xxxxxxxx",

       'client_secret': "xxxxxxxxx",

       'grant_type': "client_credentials"
     }


    //let body = JSON.stringify(keys);

    let body = `client_id=${keys.client_id}&client_secret=${keys.client_secret}&grant_type=${keys.grant_type}`;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    //headers.append('Access-Control-Allow-Origin', '*');
    //headers.append('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    //headers.append('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.urlLogin, body, options)
      .map(res => { return new Token(res.json());});


  }

}


class Token {
  access_token: string;
  token_type: string
  expires_in: number

  constructor(resoult: any) {
    this.access_token = resoult.access_token;
    this.token_type = resoult.token_type;
    this.expires_in = resoult.expires_in;
  }
}
