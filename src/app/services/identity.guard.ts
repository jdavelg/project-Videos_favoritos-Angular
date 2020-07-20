import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';



@Injectable({
  providedIn: 'root'
})
export class IdentityGuard implements CanActivate {
 
 constructor(
   private _router:Router,
   private _userService:UserService
 ){

 }
 
  canActivate():any {

    let identity= this._userService.getIdentity();
    if(identity){
      return true;
    }else{
      this._router.navigate(['/login'])
      return false;
    }
   
  }
  
}
