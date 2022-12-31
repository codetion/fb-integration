import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FacebookService } from 'ngx-facebook';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private facebookService: FacebookService,
    private router: Router,
  ) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise(async (resolve, rejects) => {
      try {
        const auth = await this.facebookService.getLoginStatus()
        if (auth?.authResponse?.accessToken) {
          resolve(true)
        } else {
          this.router.navigateByUrl('login')
          rejects()
        }
      }
      catch (e) {
        rejects()
      }
    });
  }

}
