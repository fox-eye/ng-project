import { Component, OnInit } from 'angular2/core';
import { PostService } from './post.service';
import { SpinnerComponent } from '../shared/spinner.component';

@Component({
  templateUrl: 'app/posts/posts.template.html',
  directives: [SpinnerComponent],
  providers: [PostService]
})
export class PostsComponent implements OnInit {
 
  constructor(private _postService:PostService) {}

  posts:any[];
  isLoading = true;
  
  ngOnInit() {
    this._postService.getPosts().subscribe(posts => {
      this.posts = posts;
    }, null, () => this.isLoading = false);
  }
}

