import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  
  constructor(public _authService: Boolean = true) { }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this._authService)
      return true;
    return false;
  }
}
