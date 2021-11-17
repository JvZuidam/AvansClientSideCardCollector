import { Injectable } from '@angular/core';
import {userModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly users: userModel[] = [
    {
      id: 0,
      firstname: 'Jim',
      lastname: 'van Zuidam',
      username: 'SwiftGale',
      email: 'jimvanzuidam@hotmail.nl'
    },
    {
      id: 1,
      firstname: 'Henk',
      lastname: 'Grol',
      username: 'GekkeHenkie',
      email: 'Abc@email.nl'
    },
    {
      id: 2,
      firstname: 'Japie',
      lastname: 'Jo',
      username: 'JoJoJapie',
      email: 'Test@company.com'
    },
    {
      id: 3,
      firstname: 'Arie',
      lastname: 'Beterband',
      username: 'Arie123',
      email: 'Bitterbal@email.com'
    },
    {
      id: 4,
      firstname: 'Lisa',
      lastname: 'Den hogen',
      username: 'Lisa321',
      email: 'Avans@student.nl'
    },
  ]

  getUsers(): userModel[] {
    console.log('getUsers aangeroepen');
    return this.users;
  }

  constructor() { }

  getUserById(id: number): userModel {
    console.log("getUserById aangeroepen");
    return this.users.filter((user) => user.id === id)[0];
  }
}
