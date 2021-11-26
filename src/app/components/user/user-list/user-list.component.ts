import { Component, OnInit } from '@angular/core';
import {userModel} from "../../../models/user.model";
import { UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: userModel[] = [];
  static users: userModel[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  deleteRow(id: number, username: string){
    if(confirm("Are you sure to delete user: " + username)) {
      for(let i = 0; i < this.users.length; ++i){
        if (this.users[i].id === id) {
          this.users.splice(i,1);
        }
      }
    }
  }
}
