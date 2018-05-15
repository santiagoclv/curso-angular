import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  defecto = {
    nombre: "Alfredo",
    apellido: "Moriarty"
  }

  constructor() {

  }

  ngOnInit() {

  }

  guardar(formulario : NgForm){
    console.log("Formulario por template");
    console.log(formulario);
    console.log(this.defecto);
    console.log(formulario.value);
  }

}
