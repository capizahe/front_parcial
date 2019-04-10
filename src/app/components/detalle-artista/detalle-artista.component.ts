import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/artist';
import { Comment } from 'src/app/comment';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/usuario';


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

  constructor(private route: ActivatedRoute) {
this.id=0;
    this.comments = new Array();


   }
   
  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
    console.log(this.id);


  }

}
