import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {  
  private _url = 'http://jsonplaceholder.typicode.com/users';
  constructor(private _http:Http) { }

  addUser(newUser) {
    return this._http.post(this._url, JSON.stringify(newUser))
      .map(data => data.json());
  }

  deleteUser(userId) {
    return this._http.delete(this.getUserUrl(userId))
      .map(data => data.json());
  }

  updateUser(user) {
    return this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
      .map(data => data.json());
  }
  
  getUser(userId) {
    return this._http
      .get(this.getUserUrl(userId))
      .map(data => data.json());
  }

  getUsers() { 
    return this._http.get(this._url)
      .map(data => data.json());
  }

  private getUserUrl(userId) {
   return this._url +'/' + userId; 
  }

}
