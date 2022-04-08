import { Injectable } from '@angular/core';
import {userModel} from "../models/user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  readonly users: userModel[] = [
    {
      id: 0,
      firstname: 'Jim',
      lastname: 'van Zuidam',
      username: 'SwiftGale',
      email: 'jimvanzuidam@hotmail.nl',
      password: '',
      creationDate: new Date("2021-11-12"),
      collections: [],
      trades: [],
      decks: []
    },
    {
      id: 1,
      firstname: 'Henk',
      lastname: 'Grol',
      username: 'GekkeHenkie',
      email: 'Abc@email.nl',
      password: '',
      creationDate: new Date("2021-11-12"),
      collections: [],
      trades: [],
      decks: []
    },
    {
      id: 2,
      firstname: 'Japie',
      lastname: 'Jo',
      username: 'JoJoJapie',
      email: 'Test@company.com',
      password: '',
      creationDate: new Date("2021-11-12"),
      collections: [],
      trades: [],
      decks: []
    },
    {
      id: 3,
      firstname: 'Arie',
      lastname: 'Beterband',
      username: 'Arie123',
      email: 'Bitterbal@email.com',
      password: '',
      creationDate: new Date("2021-11-12"),
      collections: [],
      trades: [],
      decks: []
    },
    {
      id: 4,
      firstname: 'Lisa',
      lastname: 'Den hogen',
      username: 'Lisa321',
      email: 'Avans@student.nl',
      password: '',
      creationDate: new Date("2021-11-12"),
      collections: [],
      trades: [],
      decks: []
    },
  ]



  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    console.log('getUsers aangeroepen');
    return this.http.get<any>(environment.apiString + "/user", this.httpOptions).pipe(tap(result => console.log(result)))
  }

  getUserById() {
    console.log("getUserById aangeroepen");
    return this.http.get<any>(environment.apiString + "/user/" + localStorage.getItem("userid"), this.httpOptions).pipe(tap(result => console.log(result)))
  }

  deleteUserById(id: number) {
    console.log("deleteUser aangeroepen");
    return this.http.delete<any>(environment.apiString + "/user/" + localStorage.getItem("userid"), this.httpOptions).pipe(tap(result => console.log(result)))
  }

  createNewUser(user: userModel) {
    console.log("createNewUser aangeroepen");
    return this.http.post<any>(environment.apiString + "/new", {})
  }

  updateUser(firstName: string, lastName: string, email: string, username: string) {
    console.log("userUpdate aangeroepen");
    return this.http.put<any>(environment.apiString + "/user/" + localStorage.getItem("userid"), {firstName: firstName, lastName: lastName, email: email, username: username}, this.httpOptions)

  }
}
