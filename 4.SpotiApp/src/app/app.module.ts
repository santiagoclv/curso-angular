import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { APP_ROUTING } from "./app.routes";

import { NavBarComponent } from "./components/shared/navbar/navbar.component";
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { SlideComponent } from './components/shared/slide/slide.component';
import { SpotifyService } from "./services/spotify.service";
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ArtistComponent } from './components/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SearchComponent,
    SlideComponent,
    SinfotoPipe,
    DomseguroPipe,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
