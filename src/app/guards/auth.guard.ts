import { CanActivateFn, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn : 'root' })
export class AuthGaurd implements CanActivate {

  constructor(
    private auth : AuthService
  ) {
    
    
  }

  canActivate( route : ActivatedRouteSnapshot, router: RouterStateSnapshot ) : boolean | Promise<boolean> | Observable<boolean> {
    return this.auth.isAuthenticated$;
  }
}