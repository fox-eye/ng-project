import { Component, OnInit } from 'angular2/core';
import { PostService } from './post.service';

@Component({
  templateUrl: 'app/posts/posts.template.html',
  providers: [PostService]
})
export class PostsComponent implements OnInit {
 
  constructor(private _postService:PostService) {}

  posts:any[];

  ngOnInit() {
    this._postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}

