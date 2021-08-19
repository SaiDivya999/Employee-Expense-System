import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

declare var toastr:any;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

username:string;
isUserLogged:boolean;
LOGIN_PATH = 'http://localhost:8085/';
constructor(private http: HttpClient) { }
signin(UserName,Password):Observable<object>{
  return this.http.get(this.LOGIN_PATH+'/addUser/'+UserName+'/'+Password).pipe(map(
    res => {
      if (res) {
        return res;
      } else {
        return {};
      }
    },
    this.username=UserName
  ));
}
setUserLoggedIn() {
  this.isUserLogged = true;
}

setUserLoggedIOut() {
  this.isUserLogged = false;
}

getUserLogged() {
  return this.isUserLogged;
}
getUserLoggedOut(){
  
}
}
