import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {userModel} from "../../../models/user.model";
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userId: string | null = null;
  user: userModel | any;

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
        this.user = this.userService.getUserById().subscribe(user => this.user = user.results[0])

      }
    });
  }

  onSubmit(firstName: string, lastName: string, email: string, username: string) {
    this.userService.updateUser(firstName, lastName, email, username).subscribe();
    this.router.navigate(['..'], {relativeTo: this.route});
  }
}
