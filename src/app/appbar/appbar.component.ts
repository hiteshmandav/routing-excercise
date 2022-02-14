import { MockServiceService } from './../mock-service.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent {

  public isLoggesdIn: boolean;
  public isAutherizedToAdd: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
  private mockService: MockServiceService) { }

  ngOnInit() {
    this.mockService.getLoggedInStatus().subscribe(value => { this.isLoggesdIn = value })
    this.mockService.getsAutherizedToAddStatus().subscribe(value => { this.isAutherizedToAdd = value })
  }

  toggleLoggin() {
    this.mockService.setLoggedinStatus(!this.isLoggesdIn);
    this.mockService.getLoggedInStatus().subscribe(value => { this.isLoggesdIn = value })
  }
  toggleAutherization() {
    this.mockService.setsAutherizedToAddStatus(!this.isAutherizedToAdd);
    this.mockService.getsAutherizedToAddStatus().subscribe(value => { this.isAutherizedToAdd = value })
  }
}
