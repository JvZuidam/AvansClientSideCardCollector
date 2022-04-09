import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {userModel} from "../../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: userModel = new userModel("","","","","")
  constructor(
  private authService: AuthService,
  private route: ActivatedRoute,
  private router: Router
  ) { }

  ngOnInit(): void {
    //TODO: Remove this later after debugging
    // console.log(this.authService.isAuthenticated());
    // console.log(localStorage.getItem("token"));
    // console.log(localStorage.getItem("userid"));
  }


  onSubmit(email: string, password: string) {
    this.authService.login(email, password).subscribe()
    this.LoggedInRedicrect()
  }

  redirect() {
    this.router.navigate(['/register'])
  }

  LoggedInRedicrect(){
    setTimeout(() => {
        this.router.navigate(['/dashboard'])
      }
      , 2000);
  }
}
