import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './service/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: ApiService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url: string = state.url;

      return this.checkLogin(url);
  }
  checkLogin(url: string): any {
    console.log("Url: " + url)
    let val = localStorage.getItem('isUserLoggedIn');
    console.log(localStorage.getItem('isUserLoggedIn'))
    if(val != null && val == "true"){
       if(url == "/login")
         this.router.navigate(['/product'])
       else 
          return true;
    } else {
       return this.router.navigate(['/login'])
    }
 }
  
}
