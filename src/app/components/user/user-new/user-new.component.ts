import { Component, OnInit } from '@angular/core';
import {userModel} from "../../../models/user.model";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  user: userModel = new userModel("","","","", "");
  checked: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(firstName: string, lastName: string, userEmail: string, username: string, password: string) {

  // this.userService.createNewUser(new userModel(firstName, lastName, username, userEmail, password));
  this.router.navigate(['..'], {relativeTo: this.route});
  }

}
