import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeComponent } from "./components/home/home.component";

import { UserComponent } from "./components/user/user.component";
import { UserNewComponent } from "./components/user/user-new.component";
import { UserEditComponent } from "./components/user/user-edit.component";
import { UserViewComponent } from "./components/user/user-view.component";

import { NavBarComponent } from "./components/shared/navbar/navbar.component";

import { routedComponents } from "./app.routes";
import { ProtectedComponent } from './components/protected/protected.component';

import { AuthService } from "./services/auth.service";
import { AuthGuardService } from "./services/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UserNewComponent,
    UserEditComponent,
    UserViewComponent,
    NavBarComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    routedComponents
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
