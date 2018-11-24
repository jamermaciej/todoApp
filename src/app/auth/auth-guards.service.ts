import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '../../../node_modules/@angular/router/src/interfaces';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if( this.authService.user ) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
