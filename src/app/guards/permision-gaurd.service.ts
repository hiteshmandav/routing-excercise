import { MockServiceService } from './../mock-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PermisionGaurdService implements CanActivateChild{

  constructor(private mockService: MockServiceService, private router: Router) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
  {
    console.log('Permision gaurd checked...')
    return this.mockService.getsAutherizedToAddStatus().pipe(map(value => {
      if (value) {
        console.log('Permision passed...')
        return value
      } else {
        console.log('Permision failed...')
        return this.router.createUrlTree(['admin/not-autherized'])
      }
    }
    ));
  }
}
