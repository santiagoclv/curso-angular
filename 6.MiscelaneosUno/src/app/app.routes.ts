import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';

import { routesUser } from './components/user/user.routes';

const routes: Routes = [  
  { path: 'home', component: HomeComponent },
  { 
    path: 'user/:id',
    component: UserComponent, 
    children: routesUser
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const routedComponents = RouterModule.forRoot(routes);