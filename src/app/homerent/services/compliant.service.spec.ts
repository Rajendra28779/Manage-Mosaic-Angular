import { TestBed } from '@angular/core/testing';

import { CompliantService } from './compliant.service';

describe('CompliantService', () => {
  let service: CompliantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompliantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
