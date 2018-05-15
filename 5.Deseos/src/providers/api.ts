import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Api {

  // FIXME seria genial que este service utilice uno de settings
  private token: string;
  public static url: string = 'http://urlfalsa.com/rest';
  public static login_data = {
    email: 'oooooo',
    password: 'mmmmm',
    rememberMe: false
  }
  public static email = 'mmmmmm%40mmmmm.mmmm';
  public static senderID = "2362654654";

  constructor(private http: Http) {
  }

  /**
   * 
   * @param obj object to send 
   * @param path relative path
   * @param token 
   */
  public send(obj: any, path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.login().then((token) => {
        let body = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', token);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(Api.url + path, body, options)
          .map(res => res.json())
          .subscribe(data => {
            resolve(data);
          }, error => {
            reject(this.handleError(error));
          });
      }).catch(this.handleError);
    });
  }

  /**
   * 
   * @param path relative path
   * @param token 
   */
  public get(path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.login().then((token) => {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', token);
        let options = new RequestOptions({ headers: headers });
        return this.http.get(Api.url + path, options)
          .map(res => res.json())
          .subscribe(data => {
            resolve(data);
          }, error => {
            reject(this.handleError(error));
          });
      }).catch(this.handleError);
    });
  }

  private login(): Promise<string> {
    if (this.token) {
      return new Promise(resolve => { resolve(this.token); });
    } else {
      return new Promise((resolve, reject) => {
        let body = JSON.stringify(Api.login_data);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.post(Api.url + '/login', body, options)
          .map(res => res.json())
          .subscribe(data => {
            this.token = data.id_token;
            resolve(this.token);
          }, error => {
            reject(this.handleError(error));
          });
      });
    }
  }

  handleError(error: any): Promise<any> {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    console.log(errMsg);
    if (!error.status) {
      return Promise.reject(error);
    }
    return Promise.reject(error.status);
  }

  getURLimg(name): any {
    let nameDef = 'assets/img/default.png';
    if (name === null) {
      return nameDef;
    }
    return Api.url + "/images/" + Api.email + "/" + name;
  }

}
