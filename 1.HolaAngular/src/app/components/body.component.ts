    import { Component } from '@angular/core';
    
    @Component({
      moduleId: module.id,
      selector: 'app-body',
      templateUrl: 'body.component.html'
    })
    export class BodyComponent {
      mostrar: boolean = false;
      nombre: string = 'Santiago Calvo';
      mensaje: string = "La vida es como una feta de muzzarella.";

      productos: string[] = ["alcachofas", "Anchoas", "Peperoni", "Dulce de Leche"]
    }