import { TestBed } from '@angular/core/testing';

import { TenentdetailsService } from './tenentdetails.service';

describe('TenentdetailsService', () => {
  let service: TenentdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenentdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
