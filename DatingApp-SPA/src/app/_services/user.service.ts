import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

// tslint:disable-next-line: typedef
getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl + 'users');
}

getUser(id: number): Observable<User> {
  return this.http.get<User>(this.baseUrl + 'users/' + id);
}

// tslint:disable-next-line: typedef
updateUser(id: number, user: User){
  return this.http.put(this.baseUrl + 'users/' + id, user);
}

// tslint:disable-next-line: typedef
setMainPhoto(userId: number, id: number){
  return this.http.post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setMain', {});
}

// tslint:disable-next-line: typedef
deletePhoto(userId: number, id: number){
  return this.http.delete(this.baseUrl + 'users/' + userId + '/photos/' + id);
}
}
