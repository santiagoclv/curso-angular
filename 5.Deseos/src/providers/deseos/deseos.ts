import { Injectable } from '@angular/core';

/*
  Generated class for the DeseosProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DeseosProvider {


  public listas : { items : string[],
             nombre: string}[];

  constructor() {
    console.log('Hello DeseosProvider Provider');

    let auxlistas = [];

    let list1 = { items : [ "TRES", "DOS", "TRES" ],
                   nombre: "UNO"};
    let list2 = { items : [ "UNO", "DOS", "TRES" ],
                   nombre: "DOS"};
    let list3 = { items : [ "DOS", "DOS", "TRES" ],
                   nombre: "TRES"};
    
    auxlistas.push(list1);
    auxlistas.push(list2);
    auxlistas.push(list3);
    this.listas = auxlistas;

    this.save("1", list1);
    this.save("2", list2);
    this.save("3", list3);

    this.getAll();
  }

  save(key:string, value:any){
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key:string){
    localStorage.removeItem(key);
  }

  get(key:string){
    return JSON.parse(localStorage.getItem(key));
  }

  getAll(){
    for (let aux in localStorage){
      console.log(aux);
      console.log(localStorage.getItem(aux));
      console.log(JSON.parse(localStorage.getItem(aux)));
    }
  }

}
