import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
@Injectable()
export class DBase {

  public static SETTINGS_KEY: string = '_settings_';
  public static DATA_KEY: string = '_data_';

  constructor(public storage: Storage) { }

  load(key: string) {
    return this.storage.get(key).then((value) => {
      if (value) {
        return value;
      }
    });
  }

  dropAll(): Promise<boolean> {
    let settings: any;
    return new Promise((resolve, reject) => {
      this.storage.get(DBase.SETTINGS_KEY)
        .then((value) => {
          settings = value;
          this.removeAll().then( (ret) => {
            this.set(DBase.SETTINGS_KEY,value);
            resolve(true);
          }).catch( (err) => {
            reject(err);
          });
        }).catch((err) => {
          reject(err);
        })
    });
  }

  private removeAll() {
    return new Promise((resolve, reject) => {
      this.storage.clear()
        .then(keys => {
          resolve(true);
        }).catch((err) => {
          reject(err);
        });
    });
  }


  /**
  *   @name mergeDiff
  *  @author scalvo
  *  toma las propiedades que se encuentran en del nuevo objeto,
  *  si estos no se encuentran en el que fue guardado, se le agregan.
  */
  mergeDiff(key: string, value: any) {
    return this.get(key).then((data) => {
      for (let k in value) {
        if (!(k in data)) {
          data[k] = value[k];
        }
      }
      return this.set(key, data).then(result => {
        return result;
      });
    });
  }

  /**
  *  @name merge
  *  @author scalvo
  *  toma las propiedades que se encuentran en del nuevo objeto,
  *  y copia sus valores a sus pares en el objeto guardado en base.
  */
  merge(key: string, value: any) {
    return this.get(key).then((data) => {
      for (let k in value) {
        data[k] = value[k];
      }
      return this.set(key, data).then(result => {
        return result;
      });
    });
  }

  set(key: string, value: any) {
    return this.storage.set(key, value);
  }

  get(key: string) {
    return this.storage.get(key)
      .then(data => {
        return data;
      });
  }

  has(key: string) {
    return this.storage.keys().then(
      (keys) => {
        let retorno: boolean = false;
        for (let k of keys) {
          if (k == key) {
            retorno = true;
          }
        }
        return retorno;
      }
    );
  }

  remove(key: string) {
    return this.storage.remove(key);
  }

}
