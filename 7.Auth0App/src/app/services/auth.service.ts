import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Injectable()
export class AuthService {

  userProfile: any;

  constructor(public router: Router) {}

  public login(): void {

  }

  public handleAuthentication(): void {

  }

  private setSession(authResult): void {

  }

  public logout(): void {

  }

  public isAuthenticated(): boolean {
    return true;
  }


  public getProfile(cb): void {

  }

}