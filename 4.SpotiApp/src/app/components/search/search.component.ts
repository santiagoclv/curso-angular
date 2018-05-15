import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  artistas;

  termino: string = "";

  constructor(private _spotifyService: SpotifyService) {


  }

  buscar() {
    this._spotifyService.getArtistas(this.termino).subscribe((res) => {
      res.map( (data) => { return data.artists.items} );
    });
  }

  ngOnInit() {

  }

}
