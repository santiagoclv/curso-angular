import { Component, OnInit } from '@angular/core';
import { HeroesService, HeroeInfo } from "../../services/heroes.service";

import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: HeroeInfo[];
  param: string;

  constructor(private _heroesService: HeroesService,
              private _activatedRoute : ActivatedRoute,
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
      this.param = params['value'];

      /**
       * is Not a Number
       */
      if(this.param){
        this.heroes = this._heroesService.findHeroes(this.param);
        // it could be "undefined"
        console.log(this.heroes);
      } else {
        this.heroes = this._heroesService.getHeroes();
        console.log("No existe tal heroe ñe");
      }

    }, err => {
      this.heroes = this._heroesService.getHeroes();
    });
  }
    

  doClickHeroe( idx: number){
    this._router.navigate(['/heroe', idx]);
  }

}
