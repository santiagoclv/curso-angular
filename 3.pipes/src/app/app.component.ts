import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  promesaPropiedad: any;

  constructor() {
    this.valorPromesa();
  }


  name = "Santiago";
  nombreCompleto = "santIaGo cElEvE icArRdi";
  arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  numero = 12564456.1251651;
  numero2 = 56.1;
  fecha = new Date();
  heroe = {
    nombre: "Aquaman",
    bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
    img: "assets/img/aquaman.png",
    aparicion: "1941-11-01",
    casa: "DC",
    direccion: {
      calle: "primera",
      numero: [1, 2, 3, 6, 8,],
      esquina: "palmer"
    }
  };

  getData = new Promise(
    (resolve, reject) => {
      // En 3.5 seg se dispara la funcion resolve con el mensaje.
      setTimeout(() => resolve("llego la data 2!"), 4500);
    }
  );
  value = "uteVQQpHS7c";
  youtube = "https://www.youtube.com/embed/";

  valorPromesa() {

    let promesa = new Promise((resolve, reject) => {

      console.log("Llamado");
      setTimeout(() => resolve("llego la data 1!"), 3500);
    });

    this.promesaPropiedad = promesa;

  }

}
