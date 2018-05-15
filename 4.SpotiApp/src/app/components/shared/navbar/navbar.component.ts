import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-nav-bar',
    templateUrl: 'navbar.component.html'
})

export class NavBarComponent implements OnInit {
    constructor(private _router: Router) { }

    ngOnInit() { }
}