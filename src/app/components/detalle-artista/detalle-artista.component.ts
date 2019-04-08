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

  private id : number;
  artista: Artist;
  comments: Array<Comment>;
  newUser:Usuario;
  comment: Comment;
  newComment: string;

  constructor(private route: ActivatedRoute) {

    this.comments = new Array();


  
    this.newUser = {
  
    name:'camilo',
    username: 'capizahe',
    password: '123456',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLglbId-3-01TK3Xw69rbVeREIVVueidF5Qe_69ZaC37Qf571s"
  };  

  this.comment={
    id:1,
    id_artist:1,
    comment:"holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    usuario: this.newUser
  }
  

  this.artista= {
      id:1,
      name:'camilo',
      description: 'nuevo cantante',
      category: 'reggae',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLglbId-3-01TK3Xw69rbVeREIVVueidF5Qe_69ZaC37Qf571s"
    };
    this.comments.push(this.comment);

  

   }
   addComment(){

    this.comment={
      id:1,
      id_artist:1,
      comment:this.newComment,
      usuario: this.newUser
    }
    
    this.comments.push(this.comment);
    this.comment = new Comment();
   }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
    console.log(this.id);


  }

}
