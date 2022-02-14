import { TestBed } from '@angular/core/testing';

import { AutherizationGaurdService } from './autherization-gaurd.service';

describe('AutherizationGaurdService', () => {
  let service: AutherizationGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutherizationGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
