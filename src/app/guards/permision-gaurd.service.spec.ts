import { TestBed } from '@angular/core/testing';

import { PermisionGaurdService } from './permision-gaurd.service';

describe('PermisionGaurdService', () => {
  let service: PermisionGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermisionGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
