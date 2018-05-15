import { Component, OnInit } from '@angular/core';

export enum alertas {
  SUCCESS, 
  INFO, 
  WARNING,
  DANGER
}

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  alertas: typeof alertas = alertas;
  estadoAlerta: alertas = alertas.DANGER;

  constructor() { }

  ngOnInit() {
  }

  cambiarEstado(alert : alertas){
    this.estadoAlerta = alert;
  }

}
