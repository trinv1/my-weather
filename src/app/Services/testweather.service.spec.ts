import { TestBed } from '@angular/core/testing';

import { TestweatherService } from './testweather.service';

describe('TestweatherService', () => {
  let service: TestweatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestweatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
