import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../../../services/auth.service";

@Component({
    selector: 'app-nav-bar',
    templateUrl: 'navbar.component.html'
})
export class NavBarComponent implements OnInit {
    constructor(private _router: Router,
                public _authService: AuthService) { 

                    this._authService.handleAuthentication();
                }

    ngOnInit() { }

    login(){
        this._authService.login();
    }

    logout(){
        this._authService.logout();
    }

    search(value : string){
        this._router.navigate(['user', value]);
    }
}