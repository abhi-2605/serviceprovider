import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  // private _loginUrl = "http://localhost:1212/signupauth";
 loginUser(user:any)
  {
    return this.http.post("http://localhost:1212/signupauth",{"passauth":user})
    .subscribe(data =>{console.log(data)})
  }

  constructor(private http: HttpClient) { }
}
