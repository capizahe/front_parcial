import { Component, OnInit, Input } from '@angular/core';
import { Artist } from 'src/app/artist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  @Input() mySelectedArtist: Artist;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onArtistClicked(){
    this.router.navigate(['/artistid',this.mySelectedArtist.id]);
  }

}
