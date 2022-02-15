import { FormSaveData } from './form-save-data';
import { ConfirmDialigComponent } from './../confirm-dialig/confirm-dialig.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AddProductComponent } from '../admin/add-product/add-product.component';

@Injectable({
  providedIn: 'root'
})
export class FormsGuardService implements CanDeactivate<FormSaveData>{

  constructor(private dialog: MatDialog) { }
  canDeactivate(
    component: FormSaveData,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
  {
    console.log('Form Guard checking...')
    if (component.isFormDataSaved()) {
      let confirmDialog = this.dialog.open(ConfirmDialigComponent);
      return confirmDialog.afterClosed();
    }
    return of(true)
  }
}
