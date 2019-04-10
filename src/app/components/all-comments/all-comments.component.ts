import { Component, OnInit ,Input} from '@angular/core';
import { Comment } from 'src/app/comment';
import { ArtistService } from 'src/app/service/artist.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  @Input() id_artista:number;
  comments: Array<Comment>;

  constructor(private artistService: ArtistService) {

    

   }

  ngOnInit() {

    
  }

}
