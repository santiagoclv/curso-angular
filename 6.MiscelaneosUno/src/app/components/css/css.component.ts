import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      Estilo css solo para los elementos del componente: Works!
      <br>
          (este parrafo es parte de otro componente, css por componente.)
    </p>
  `,
  styles: [`
    p {
      color: red;
      font-size: 30px;
    }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
