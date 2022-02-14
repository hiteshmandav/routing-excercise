import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockServiceService {

  private isLoggedIn: boolean;
  private isAutherizedToAdd: boolean;
  constructor() { }

  getLoggedInStatus() {
    return of(this.isLoggedIn);
  }

  setLoggedinStatus(value) {
    this.isLoggedIn = value;
  }

  getsAutherizedToAddStatus() {
    return of(this.isAutherizedToAdd);
  }

  setsAutherizedToAddStatus(value) {
    this.isAutherizedToAdd = value;
  }
}
