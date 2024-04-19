import { TestBed } from '@angular/core/testing';

import { HomerentserviceService } from './homerentservice.service';

describe('HomerentserviceService', () => {
  let service: HomerentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomerentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
