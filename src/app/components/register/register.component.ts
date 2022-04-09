import { Component, OnInit } from '@angular/core';
import {userModel} from "../../models/user.model";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: userModel = new userModel("","","","","")

  constructor(
    private route: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {

  }

  onSubmit(firstName: string, lastName: string, username: string, email: string, password: string){
    this.userService.createNewUser(firstName, lastName, username, email, password).subscribe()
    this.route.navigate(["login"])
  }

}
