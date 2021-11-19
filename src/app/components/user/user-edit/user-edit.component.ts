import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {userModel} from "../../../models/user.model";
import {ignoreElements} from "rxjs";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userId: string | null = null;
  user: userModel | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      //Getting the id from the url
      this.userId = params.get('id')

      if (this.userId) {
        //This user exists
        this.user = this.userService.getUserById(Number(this.userId));
      } else {
        //This user does not exist
        // this.user = new userModel();
      }
    })
  }

  save() {
    console.log("Save called");
    this.router.navigate(['..'], {relativeTo: this.route});
  }
}
