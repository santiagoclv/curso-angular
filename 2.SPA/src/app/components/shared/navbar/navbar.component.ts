import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { HeroesService } from "../../../services/heroes.service";

@Component({
    selector: 'app-nav-bar',
    templateUrl: 'navbar.component.html'
})

export class NavBarComponent implements OnInit {
    constructor(private _heroeService: HeroesService,
                private _router: Router) { }

    ngOnInit() { }

    buscarHeroe(value : string){
        this._router.navigate(['/heroes', value]);
    }
}