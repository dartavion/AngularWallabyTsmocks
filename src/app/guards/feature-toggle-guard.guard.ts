import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SwapiService } from '../services/swapi.service';

@Injectable()
export class FeatureToggleGuardGuard implements CanActivate {
  constructor(private swapiService: SwapiService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.swapiService.hasToggle) {
        return true;
      } else {
        window.alert('You don\'t have permission to view this page');
        this.router.navigate(['coming-soon']);
      }
  }
}
