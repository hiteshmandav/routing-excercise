import { MockServiceService } from './../mock-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutherizationGaurdService implements CanActivate {

  constructor(private mockService: MockServiceService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
  {
    console.log('Autherization gaurd checking...')
    return this.mockService.getLoggedInStatus().pipe(map(value => {
      if (value) {
        console.log('Autherization passed...')
        return value
      } else {
        console.log('Autherization failed...')
        return this.router.createUrlTree([''])
      }
    }
    ));
  }
}
