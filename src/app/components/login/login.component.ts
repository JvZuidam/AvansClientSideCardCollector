import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
  private authService: AuthService,
  private route: ActivatedRoute,
  private router: Router
  ) { }

  ngOnInit(): void {
    //TODO: Remove this later after debugging
    console.log(this.authService.isAuthenticated());
    console.log(localStorage.getItem("token"));
  }

  onSubmit() {
    this.authService.login("jimvanZuidam@hotmail.nl", "admin123").subscribe()
    this.router.navigate(['/dashboard'])


  }
}
