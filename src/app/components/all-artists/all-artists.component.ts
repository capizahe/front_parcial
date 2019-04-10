import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/artist';
import { ArtistService } from 'src/app/service/artist.service';

@Component({
  selector: 'app-all-artists',
  templateUrl: './all-artists.component.html',
  styleUrls: ['./all-artists.component.css']
})
export class AllArtistsComponent implements OnInit {

  artists : Array<Artist>;
  newArtist: Artist;

  constructor(private artistService: ArtistService) { 
  
  }

  ngOnInit() {
    /*
    this.artistService.setDefaultData().subscribe(
      all => {
        console.log(all);
      }
    );
    */
    this.artistService.getAllArtists().subscribe(
      all => {
        this.artists=all;
      }
    );
  
}
}