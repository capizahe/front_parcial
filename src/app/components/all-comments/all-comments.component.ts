import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/comment';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: Array<Comment>;

  constructor() {

    

   }

  ngOnInit() {
  }

}
