import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html'
})
export class ClassComponent implements OnInit {

  propiedades: Object = {
    danger: true
  };

  alerta: string = "alert-danger";

  loading: boolean = false; 

  constructor() { }

  ngOnInit() {
  }

  run(){
    this.loading = true;

    setTimeout( () => this.loading = false, 3000);
  }

}
