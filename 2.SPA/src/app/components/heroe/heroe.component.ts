import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { HeroesService, HeroeInfo } from "../../services/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  
  heroe: HeroeInfo;

  constructor(private _activatedRoute : ActivatedRoute,
              private _heroeService : HeroesService,
              private _router: Router
              ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      /**
       * 
       * Esta es una manera más segura de obtener atributos de una clase
       * de la cual no se conoce cuales son. Es una manera que no lanza error (?)
       * 
       */
      console.log(params['id']);
      /**
       * is Not a Number
       */
      if(params['id'] && !isNaN(params['id']) ){
        this.heroe = this._heroeService.getHeroe(params['id']);
        // it could be "undefined"
        console.log(this.heroe);
      } else {
        console.log("No existe tal heroe ñe");
      }
    });
  }

  doClickBack(){
    this._router.navigate(['/heroes']);
  }
}
