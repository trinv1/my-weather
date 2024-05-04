import { TestBed } from '@angular/core/testing';

import { DubweatherService } from './dubweather.service';

describe('DubweatherService', () => {
  let service: DubweatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DubweatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
