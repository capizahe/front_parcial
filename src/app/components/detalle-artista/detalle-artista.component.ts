import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/artist';
import { Comment } from 'src/app/comment';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/usuario';
import { ArtistService } from 'src/app/service/artist.service';


@Component({
  selector: 'app-detalle-artista',
  templateUrl: './detalle-artista.component.html',
  styleUrls: ['./detalle-artista.component.css']
})
export class DetalleArtistaComponent implements OnInit {

  id : number;
  artista: Artist;
  comments: Array<Comment>;
  newUser:Usuario;
  comment: Comment;

  constructor(private route: ActivatedRoute, private artistService:ArtistService) {


     this.comments = new Array();
     this.id = parseInt(this.route.snapshot.paramMap.get("id"));

     this.artistService.getArtistById(this.id).subscribe(
       artist=> {
         this.artista=artist;
       }
     );
     this.artistService.getAllComments(this.id).subscribe(
      all => {
        this.comments=all;
        console.log(this.comments);
      }
    ); 
    
   }

  ngOnInit() {
    


  }

}
