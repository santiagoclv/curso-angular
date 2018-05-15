import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { PathNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { HeroeComponent } from './components/heroe/heroe.component';
// LA pagina por defecto es la home
// pero si ingreso una url cualca, me lleva a pageNotFound
const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroes/:value', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: '**', pathMatch: 'full', component: PathNotFoundComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});