import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  readonly authURL = "http://localhost:5000/api/auth";
  readonly usersURL = "http://localhost:5000/api/users";

  readonly confirmEmailUrl = "http://localhost:4200/confirm-email/";
  readonly changePasswordUrl =  "http://localhost:4200/change-password/";

  helper = new JwtHelperService()
  decodedToken: any;

  Login(model: any){
    return this.http.post(`${this.authURL}/login`, model).pipe(
      map((response: any) => {
        const user = response;
        if(user.result.succeeded){
          localStorage.setItem('token', user.token);
          this.decodedToken = this.helper.decodeToken(user.token);
        }
      })
    )
  }

  Register(model: any){
    let headers = new HttpHeaders({
      'confirmEmailUrl': this.confirmEmailUrl
    });

    let options = { headers: headers };
    return this.http.post(`${this.usersURL}/create`, model, options);
  }

  ResetPassword(model: any){
    let headers = new HttpHeaders({
      'changePasswordUrl': this.changePasswordUrl
    });

    let options = { headers: headers };
    return this.http.post(`${this.authURL}/resetpassword`, model, options);
  }

  ConfirmEmail(model: any){
    return this.http.post(`${this.authURL}/confirmemail`, model);
  }

  ChangePassword(model: any) {
    return this.http.post(`${this.authURL}/changepassword`, model);
  }

  LoggedIn(): Boolean{
    const token = localStorage.getItem('token');
    return !this.helper.isTokenExpired(token || '');
  }
}
