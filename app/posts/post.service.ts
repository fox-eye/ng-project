import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  
  constructor(private _http:Http) { }

  getPosts() {
    return this._http.get('http://jsonplaceholder.typicode.com/posts')
      .map(data => data.json());
  }
}
