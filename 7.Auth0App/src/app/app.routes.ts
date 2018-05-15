import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { routesUser } from './components/user/user.routes';

import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [  
  { path: 'home', component: HomeComponent },
  // Auth Guard con CanActivate inmplementado para poder ser utilizado por el router
  // con esto sabe o no si puede navegar a la pagina
  { path: 'protected', component: ProtectedComponent, canActivate: [ AuthGuardService ] },
  { 
    path: 'user/:id',
    component: UserComponent, 
    children: routesUser
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const routedComponents = RouterModule.forRoot(routes);