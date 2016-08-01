import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  private _postUrl:string = 'http://jsonplaceholder.typicode.com/posts'; 

  constructor(private _http:Http) { }

  getPosts() {
    return this._http.get(this._postUrl)
      .map(data => data.json());
  }

  getComments(postId) {
    return this._http.get(this._postUrl+'/'+postId+'/comments')
      .map(data => data.json());
  }
}
