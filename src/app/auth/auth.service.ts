import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {delay, tap} from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService
  ) { }

  login(email:string, password:string) {
    return this.http.post<any>(environment.apiString + "/auth/login", {email: email, password: password})
      .pipe(
        tap(result =>
          localStorage.setItem("token", result.token)
        )
      ).pipe(
        tap(result =>
          localStorage.setItem("userid", result.userId)
        )
      ).pipe(delay(5000))
  }

  public isAuthenticated(): boolean {
    // Get the token
    const token = localStorage.getItem("token")
    // If the token is expired
    if (this.jwtHelper.isTokenExpired(String(token))) {
      localStorage.removeItem("token");
      localStorage.removeItem("userid");
      return false
    } else {
      return true
    }
    // return !this.jwtHelper.isTokenExpired(String(token));
  }

}

