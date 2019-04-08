import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/artist';

@Component({
  selector: 'app-all-artists',
  templateUrl: './all-artists.component.html',
  styleUrls: ['./all-artists.component.css']
})
export class AllArtistsComponent implements OnInit {

  artists : Array<Artist>;
  newArtist: Artist;

  constructor() { 
    this.newArtist = {
      id:1,
      name:'camilo',
      description: 'nuevo cantante',
      category: 'reggae',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLglbId-3-01TK3Xw69rbVeREIVVueidF5Qe_69ZaC37Qf571s"
    };
    this.artists = new Array();
    this.artists.push(this.newArtist);




  }

  ngOnInit() {
  }

}
