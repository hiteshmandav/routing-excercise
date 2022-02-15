import { MockServiceService } from './../mock-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutherizationGaurdService implements CanActivate, CanLoad {

  constructor(private mockService: MockServiceService, private router: Router) { }
  canLoad(route: Route, segments: UrlSegment[]):
    boolean | Observable<boolean> | Promise<boolean>
  {
    console.log('CanLoad gaurd checking...')
    return this.mockService.getLoggedInStatus().pipe(map(value => {
        console.log(`CanLoad ${value}`)
        return value
    }))
  }
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
