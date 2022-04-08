import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {tap} from "rxjs";
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
      )
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem("token")

    return !this.jwtHelper.isTokenExpired(String(token));
  }

}

