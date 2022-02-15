import { TestBed } from '@angular/core/testing';

import { FormsGuardService } from './forms-guard.service';

describe('FormsGuardService', () => {
  let service: FormsGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
