import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  // private _loginUrl = "http://localhost:1212/signupauth";
 
  searchAccount(user:any)
  {
    
    
      return this.http.get("http://localhost:1212/accounts/searchaccount/"+user);


      
     
    
  } 
  
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }

  constructor(private http: HttpClient) { }

}
