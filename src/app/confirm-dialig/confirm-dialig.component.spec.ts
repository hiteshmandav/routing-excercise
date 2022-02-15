import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialigComponent } from './confirm-dialig.component';

describe('ConfirmDialigComponent', () => {
  let component: ConfirmDialigComponent;
  let fixture: ComponentFixture<ConfirmDialigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDialigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
