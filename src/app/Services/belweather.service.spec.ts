import { TestBed } from '@angular/core/testing';

import { BelweatherService } from './belweather.service';

describe('BelweatherService', () => {
  let service: BelweatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BelweatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
