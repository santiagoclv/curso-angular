import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-styles',
  template: `
    <p >
      <span [ngStyle]="{ 'font-size' : tamUno +'px' }">Texto con ngStyle</span>
      <button class="btn btn-primary" (click)="tamUno = tamUno + 1">
        <i class="fa fa-1x fa-plus"> </i>
      </button>
       <button class="btn btn-primary" (click)="tamUno = tamUno - 1">
        <i class="fa fa-1x fa-minus"> </i>
      </button>
      <br>
      <span [style.fontSize.px]="tamDos">Texto con style.fontSize.px</span>
      <button class="btn btn-primary" (click)="tamDos = tamDos + 1">
        <i class="fa fa-1x fa-plus"> </i>
      </button>
      <button class="btn btn-primary" (click)="tamDos = tamDos - 1">
        <i class="fa fa-1x fa-minus"> </i>
      </button>
      <br>
      <span [style.color]="colorC">Texto con cambia fondo</span>
      <button class="btn btn-danger" (click)="colorC = '#FF0000'">
      </button>
       <button class="btn btn-primary" (click)="colorC = '#0000FF'">
      </button>
    </p>
  `,
  styles: []
})
export class NgStylesComponent implements OnInit {

  tamUno: number = 10;
  tamDos: number = 10;

  colorC: string = "#0000FF";

  constructor() { }

  ngOnInit() {
  }

}
