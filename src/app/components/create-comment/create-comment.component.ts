import { Component, OnInit ,Input} from '@angular/core';
import { Comment } from 'src/app/comment';
import { Artist } from 'src/app/artist';
import { ArtistService } from 'src/app/service/artist.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  @Input()id_artista: number;
  comment : Comment;
  newComment: string;
  


  constructor(private artistService: ArtistService) {
    this.comment= new Comment();


   }

  ngOnInit() {
    console.log(this.id_artista);
    this.comment.id_artist = this.id_artista;
    this.comment.usuario=2;
  }
  addComment(){
    this.comment.comment=this.newComment;

    this.artistService.addComment(this.comment);

    
 
   }

}
