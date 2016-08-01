import { Component, OnInit } from 'angular2/core';
import { PostService } from './post.service';
import { SpinnerComponent } from '../shared/spinner.component';

@Component({
  templateUrl: 'app/posts/posts.template.html',
  styles: [`
   .posts li  { cursor: default; } 
   .posts li:hover { background:  #ecf0f1; }

   .list-­‐group-­‐item.active, 
    .list-­‐group-­‐item.active:hover,  
    .list-­‐group-­‐item.active:focus { 
      background-color: #ecf0f1;
      border-color: #ecf0f1;  
      color: #2c3e50;
    }
  `],
  directives: [SpinnerComponent],
  providers: [PostService]
})
export class PostsComponent implements OnInit {
 
  constructor(private _postService:PostService) {}

  posts:any[];
  isLoading = true;
  currentPost;  
  
  setCurrentlySelected(selectedPost) {
    this.currentPost = selectedPost;
    this._postService.getComments(selectedPost.id).subscribe(comments => {
      this.currentPost.comments = comments; 
    });
  }

  ngOnInit() {
    this._postService.getPosts().subscribe(posts => {
      this.posts = posts;
    }, null, () => this.isLoading = false);
  }
}

