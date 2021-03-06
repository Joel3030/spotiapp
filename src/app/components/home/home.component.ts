import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'

})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) {

    this.loading = true;
    this.spotifyService.getNewReleases().subscribe(data => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    });


  }

  ngOnInit() {
  }

}
