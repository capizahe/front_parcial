import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/artist';
import { ArtistService } from 'src/app/service/artist.service';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.css']
})
export class CreateArtistComponent implements OnInit {

  artist: Artist;
  selectedOption: number;

  constructor(private artistService: ArtistService) {
    this.artist= new Artist();
    this.selectedOption=1;
   }

  ngOnInit() {
  }
  selectChangeHandler(event: any) {
    this.selectedOption = parseInt(event.target.value);
    this.artist.category=this.selectedOption;
  }
  addArtist(){
    console.log(this.artist.category);
     this.artistService.addNewArtist(this.artist);
  }
}
