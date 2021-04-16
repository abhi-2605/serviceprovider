import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import {AuthService} from './loginauth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthgGuard implements CanActivate {
  constructor(private _auth:AuthService,private _router:Router)
  {

  }
  canActivate():boolean{
    if (this._auth.loggedIn())
    {
      console.log('true')
      // this._router.navigate(['/service'])
      return true

    }
    else{
      this._router.navigate(['/login'])
      return false

    }
  }
}
