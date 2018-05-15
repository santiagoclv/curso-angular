import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  artist: any;
  traks: any;

  trackUri = "https://open.spotify.com/embed?uri=";

  constructor(private _activatedRoute : ActivatedRoute,
              private _spotifyService : SpotifyService,
              private _router: Router) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      console.log(params['id']);
      if(params['id']){
        this.artist = this._spotifyService.getArtista(params['id'])
          .subscribe( res => {
             this.artist = res.map( (data) => { return data } );
         });
        // it could be "undefined" ?
        console.log(this.artist);
      } else {
        console.log("No existe tal artista ñe");
      }
    });

    // FIXME get traks
  }

  doClickBack(){
    this._router.navigate(['/home']); //????
  }

}
