import { Component, OnInit } from '@angular/core';
import {userModel} from "../../../models/user.model";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userId: string | null = null;
  user: userModel | any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      //Get the id of the user from the url
      this.userId = params.get('id');
      //get user by id and dont forget to cast the params string to a number
      this.user = this.userService.getUserById().subscribe(user => this.user = user.results[0])
    });
  }

}
