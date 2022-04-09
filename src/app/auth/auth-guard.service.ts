import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  canActivate(): boolean {
    // If there is a token
    if (localStorage.getItem("token")) {
      // If the token is valid
      if (this.authService.isAuthenticated()) {
        return true
      }
      // If the token is not valid
      else {
        this.router.navigate(['login'])
      }
    }
    // If there is no token
    else {
      this.router.navigate(['login'])
    }
    return false


    // if (!localStorage.getItem(String("token" == null))) {
    //   console.log(true);
    //   this.router.navigate(['login'])
    // } else if(!localStorage.getItem(String("token" != null)))  {
    //   console.log(false);
    //   if (!this.authService.isAuthenticated()) {
    //     this.router.navigate(['login']);
    //     return false;
    //   } else {
    //     return true;
    //   }
    // }
    // return true;
  }


}
