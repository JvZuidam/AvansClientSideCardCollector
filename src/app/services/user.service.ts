import { Injectable } from '@angular/core';
import {userModel} from "../models/user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<any> {
    console.log('getUsers aangeroepen');
    return this.http.get<any>(environment.apiString + "/user", this.httpOptions).pipe(map(response => response.results));
  }

  getUserById() {
    console.log("getUserById aangeroepen");
    return this.http.get<any>(environment.apiString + "/user/" + localStorage.getItem("userid"), this.httpOptions).pipe(tap(result => console.log(result)))
  }

  deleteUserById(id: number) {
    console.log("deleteUser aangeroepen");
    return this.http.delete<any>(environment.apiString + "/user/" + localStorage.getItem("userid"), this.httpOptions).pipe(tap(result => console.log(result)))
  }

  createNewUser(firstName: string, lastName: string, username: string, email: string, password: string) {
    console.log("createNewUser aangeroepen");
    return this.http.post<any>(environment.apiString + "/user/new", {firstName: firstName, lastName: lastName, email: email, username: username, password: password}).pipe(tap(result => console.log(result)))
  }

  updateUser(firstName: string, lastName: string, email: string, username: string) {
    console.log("userUpdate aangeroepen");
    return this.http.put<any>(environment.apiString + "/user/" + localStorage.getItem("userid"), {firstName: firstName, lastName: lastName, email: email, username: username}, this.httpOptions)

  }
}
