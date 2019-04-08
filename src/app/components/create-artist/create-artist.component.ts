import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/artist';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.css']
})
export class CreateArtistComponent implements OnInit {

  artist: Artist;

  constructor() {
    this.artist= new Artist();
   }

  ngOnInit() {
  }

}
